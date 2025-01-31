// OpenAPIViz.tsx

import axios from 'axios';
import { OpenAPIV3 } from 'openapi-types';
import React, { useEffect, useRef, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Col, Form, Row } from 'react-bootstrap';
import { FaBullseye, FaChevronDown, FaRegFolderOpen } from 'react-icons/fa';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import yaml from 'yaml';
import { BASE_PATH } from '../../thor/src/runtime.js';
import FloatingControlPanel from './FloatingControlPanel';
import './index.css';
import testspec from './testspec.yaml';

import { useGetOasOpenAPISpecsQuery } from '../../thor/redux/services/OasOpenAPISpecService';


// Simulate RTK Query hooks
// Replace these with your actual RTK Query hooks and endpoints
const testData = () => {
  // Simulate data loading
  return {
    data: [
      { name: 'Percival the Dragon Slayer Spec', url: 'http://localhost:8080/v1/api-docs' },
      { name: 'Swagger PetStore', url: 'https://petstore3.swagger.io/api/v3/openapi.json' }
    ],
    isLoading: false,
    isError: false
  };
};



interface OpenAPIVizProps {
  spec?: any; // The spec can be object or string
}

interface GraphNode {
  id: string;
  type: 'schema' | 'endpoint';
  properties?: { [key: string]: OpenAPIV3.SchemaObject | OpenAPIV3.ReferenceObject };
  encryptedFields?: string[];
  exposed?: boolean;
  level?: number;
  method?: string;
  path?: string;
  parentSchema?: string;
  usage?: number;
  errors?: number;
  position?: THREE.Vector3;
  initialPosition?: THREE.Vector3;
  velocity?: THREE.Vector3;
  mesh?: THREE.Object3D;
}

interface GraphLink {
  source: GraphNode;
  target: GraphNode;
  type: string;
  line?: THREE.Line;
}

type VisualizationStyle = 'spherical' | 'linear' | 'block' | 'helix' | 'spiral' | 'grid2D' | 'cylinder' | 'cone' | 'forceDirected' | 'randomCube' | 'layered';
type AnimationStyle = 'none' | 'rotate' | 'pulse' | 'sineWave' | 'bobble' | 'twist' | 'jitter' | 'bounce' | 'breathing';
type Metric = 'none' | 'usage' | 'errors';
type SortBy = 'errors' | 'usage' | 'alphabetical' | 'method' | 'path';

const OpenAPIViz: React.FC<OpenAPIVizProps> = ({ spec }) => {

  // Specs from RTK Query simulation
  const { data: availableSpecs, isLoading: specsLoading } = useGetOasOpenAPISpecsQuery();
  const [selectedSpecName, setSelectedSpecName] = useState<string>('Local Spec');




  const [openApiSpec, setOpenApiSpec] = useState<OpenAPIV3.Document | null>(null);
  const [apiOverlay, setApiOverlay] = useState<boolean>(true);
  const [highlightEncrypted, setHighlightEncrypted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [controlPanelOpen, setControlPanelOpen] = useState<boolean>(true);
  const [apiUrl, setApiUrl] = useState<string>(BASE_PATH + '/api-docs');
  const [visualizationStyle, setVisualizationStyle] = useState<VisualizationStyle>('spherical');
  const [animationStyle, setAnimationStyle] = useState<AnimationStyle>('none');
  const [nodeSizeMetric, setNodeSizeMetric] = useState<Metric>('none');
  const [nodeAnimationMetric, setNodeAnimationMetric] = useState<Metric>('none');
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [maxErrors, setMaxErrors] = useState<number>(1);

  // New states for sorting and searching
  const [sortBy, setSortBy] = useState<SortBy>('alphabetical');
  const [reverseSort, setReverseSort] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');


  const surfaceAreaRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number>();
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const nodesRef = useRef<GraphNode[]>([]);
  const startTimeRef = useRef<number>(Date.now());

  // Mini-scene for selected node
  const miniSceneRef = useRef<THREE.Scene | null>(null);
  const miniCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const miniRendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const miniAnimationIdRef = useRef<number>();
  const miniContainerRef = useRef<HTMLDivElement>(null);

  // Tooltip for hover
  const tooltipRef = useRef<HTMLDivElement>(null);
  let hoverNode: GraphNode | null = null;

  useEffect(() => {
    if (spec) {
      parseAndSetSpec(spec);
    } else {
      // load the default testspec
      const specContent = testspec.toString();
      const parsedSpec = parseSpec(specContent, 'yaml');
      setOpenApiSpec(parsedSpec);
    }
  }, [spec]);

  useEffect(() => {
    if (openApiSpec) {
      createVisualization(openApiSpec);
    }

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (miniAnimationIdRef.current) {
        cancelAnimationFrame(miniAnimationIdRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openApiSpec, apiOverlay, highlightEncrypted, visualizationStyle, animationStyle, nodeSizeMetric, nodeAnimationMetric, sortBy, reverseSort, searchTerm]);

  useEffect(() => {
    const onWindowResize = () => {
      if (!surfaceAreaRef.current || !cameraRef.current || !rendererRef.current) return;
      const width = surfaceAreaRef.current.clientWidth;
      const height = surfaceAreaRef.current.clientHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };
    window.addEventListener('resize', onWindowResize);
    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  const parseAndSetSpec = (input: any, extensionHint?: string) => {
    let parsedSpec: OpenAPIV3.Document | null = null;
    if (typeof input === 'object') {
      parsedSpec = input as OpenAPIV3.Document;
    } else if (typeof input === 'string') {
      parsedSpec = parseSpec(input, extensionHint);
    }
    setOpenApiSpec(parsedSpec);
  };

  const parseSpec = (content: string, extensionHint?: string): OpenAPIV3.Document | null => {
    const isYaml = extensionHint && (extensionHint.endsWith('.yaml') || extensionHint.endsWith('.yml'));
    if (isYaml) {
      try {
        return yaml.parse(content) as OpenAPIV3.Document;
      } catch (e) {
        try {
          return JSON.parse(content) as OpenAPIV3.Document;
        } catch (jsonErr) {
          console.error('Failed to parse spec', jsonErr);
          alert('Failed to parse specification.');
          return null;
        }
      }
    } else {
      try {
        return JSON.parse(content) as OpenAPIV3.Document;
      } catch (e) {
        try {
          return yaml.parse(content) as OpenAPIV3.Document;
        } catch (yamlErr) {
          console.error('Failed to parse spec', yamlErr);
          alert('Failed to parse specification.');
          return null;
        }
      }
    }
  };

  const createVisualization = (spec: OpenAPIV3.Document) => {
    if (surfaceAreaRef.current) {
      while (surfaceAreaRef.current.firstChild) {
        surfaceAreaRef.current.removeChild(surfaceAreaRef.current.firstChild);
      }
    }
    const { nodes, links, maxErr } = parseOpenApiSpec(spec);
    setMaxErrors(maxErr);

    // Apply sorting and searching
    let filteredNodes = nodes.filter(n => n.id.toLowerCase().includes(searchTerm.toLowerCase()));

    filteredNodes.sort((a, b) => {
      switch (sortBy) {
        case 'errors': return (a.errors || 0) - (b.errors || 0);
        case 'usage': return (a.usage || 0) - (b.usage || 0);
        case 'alphabetical': return a.id.localeCompare(b.id);
        case 'method':
          const mA = a.method || '';
          const mB = b.method || '';
          return mA.localeCompare(mB);
        case 'path':
          const pA = a.path || '';
          const pB = b.path || '';
          return pA.localeCompare(pB);
      }
    });
    if (reverseSort) filteredNodes.reverse();

    // We only visualize filtered nodes
    // If a node is filtered out, also remove its links
    const filteredNodeSet = new Set(filteredNodes);
    const filteredLinks = links.filter(l => filteredNodeSet.has(l.source) && filteredNodeSet.has(l.target));

    nodesRef.current = filteredNodes;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0a0a0a');
    sceneRef.current = scene;

    const width = surfaceAreaRef.current?.clientWidth || window.innerWidth;
    const height = surfaceAreaRef.current?.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(50, width / height, .1, 500);
    camera.position.set(0, 0, 200);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    surfaceAreaRef.current?.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    layoutNodes(filteredNodes, visualizationStyle);

    filteredNodes.forEach((node) => {
      node.initialPosition = node.position?.clone();
    });

    filteredNodes.forEach((node) => {
      const baseSize = node.type === 'schema' ? 3 : 2;
      const metricValue = getNodeMetricValue(node, nodeSizeMetric);
      const sizeMultiplier = metricValue > 0 ? (1 + metricValue / 50) : 1;
      const nodeColor = getErrorColor(node.errors || 0, maxErrors);

      const geometry = new THREE.SphereGeometry(baseSize * sizeMultiplier, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: node.exposed ? 0xff8c00 : nodeColor,
        opacity: highlightEncrypted && node.encryptedFields && node.encryptedFields.length > 0 ? 0.5 : 1,
        transparent: highlightEncrypted && node.encryptedFields && node.encryptedFields.length > 0,
      });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.copy(node.position!);
      mesh.userData = { node };
      scene.add(mesh);
      node.mesh = mesh;

      const label = createTextSprite(node.id);
      label.position.copy(mesh.position);
      label.position.y += (baseSize * sizeMultiplier) + 3;
      scene.add(label);
    });

    filteredLinks.forEach((link) => {
      const material = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
      const geometry = new THREE.BufferGeometry().setFromPoints([
        link.source.position!,
        link.target.position!,
      ]);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      link.line = line;
    });

    startTimeRef.current = Date.now();

    const animate = () => {
      controls.update();
      applyAnimation(filteredNodes, scene);
      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(animate);
    };
    animate();

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / renderer.domElement.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      const intersect = intersects.find((i) => i.object.userData.node);
      if (intersect && intersect.object.userData.node) {
        hoverNode = intersect.object.userData.node;
        showTooltip(event.clientX, event.clientY, hoverNode);
      } else {
        hoverNode = null;
        hideTooltip();
      }
    };

    const onClick = (event: MouseEvent) => {
      event.preventDefault();
      if (hoverNode) {
        handleNodeClick(hoverNode);
      }
    };

    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('click', onClick);
  };

  const parseOpenApiSpec = (spec: OpenAPIV3.Document) => {
    const components = spec.components || {};
    const schemas = components.schemas || {};
    const paths = spec.paths || {};

    const nodes: GraphNode[] = [];
    const links: GraphLink[] = [];
    const nodeMap: { [key: string]: GraphNode } = {};
    let maxErrors = 1;

    Object.keys(schemas).forEach((schemaName) => {
      const schema = schemas[schemaName] as OpenAPIV3.SchemaObject;
      const node: GraphNode = {
        id: schemaName,
        type: 'schema',
        properties: schema.properties || {},
        encryptedFields: [],
        exposed: false,
        level: 1,
        usage: 0,
        errors: 0
      };

      if (node.properties) {
        Object.keys(node.properties).forEach((propName) => {
          const prop = node.properties![propName] as OpenAPIV3.SchemaObject;
          if (prop && prop.format === 'encrypted') {
            node.encryptedFields!.push(propName);
          }
        });
      }

      nodeMap[schemaName] = node;
      nodes.push(node);
    });

    nodes.forEach((node) => {
      if (node.properties) {
        Object.entries(node.properties).forEach(([_, prop]) => {
          if (prop && '$ref' in prop) {
            const ref = (prop as OpenAPIV3.ReferenceObject).$ref;
            const refName = ref.replace('#/components/schemas/', '');
            if (nodeMap[refName]) {
              links.push({
                source: node,
                target: nodeMap[refName],
                type: 'ref',
              });
            }
          }
        });
      }
    });

    if (apiOverlay) {
      Object.keys(paths).forEach((path) => {
        const pathItem = paths[path] as OpenAPIV3.PathItemObject;
        Object.keys(pathItem).forEach((method) => {
          if (method === 'parameters' || method === '$ref') return;
          const operation = pathItem[method as keyof OpenAPIV3.PathItemObject] as OpenAPIV3.OperationObject;
          const responses = operation.responses || {};
          const requestBody = operation.requestBody as OpenAPIV3.RequestBodyObject;
          const contentSchemas: string[] = [];

          Object.values(responses).forEach((response) => {
            const responseObj = response as OpenAPIV3.ResponseObject;
            const content = responseObj.content || {};
            Object.values(content).forEach((mediaType) => {
              if (mediaType.schema && '$ref' in mediaType.schema) {
                const ref = (mediaType.schema as OpenAPIV3.ReferenceObject).$ref;
                const refName = ref.replace('#/components/schemas/', '');
                contentSchemas.push(refName);
              }
            });
          });

          if (requestBody && requestBody.content) {
            Object.values(requestBody.content).forEach((mediaType) => {
              if (mediaType.schema && '$ref' in mediaType.schema) {
                const ref = (mediaType.schema as OpenAPIV3.ReferenceObject).$ref;
                const refName = ref.replace('#/components/schemas/', '');
                contentSchemas.push(refName);
              }
            });
          }

          contentSchemas.forEach((schemaName) => {
            if (nodeMap[schemaName]) {
              nodeMap[schemaName].exposed = true;
              nodeMap[schemaName].level = 0;
              const endpointNode: GraphNode = {
                id: `${method.toUpperCase()} ${path}`,
                type: 'endpoint',
                method: method.toUpperCase(),
                path,
                parentSchema: schemaName,
                usage: Math.floor(Math.random() * 100),
                errors: Math.floor(Math.random() * 10),
                level: -1,
              };
              maxErrors = Math.max(maxErrors, endpointNode.errors || 0);
              nodes.push(endpointNode);
              links.push({
                source: endpointNode,
                target: nodeMap[schemaName],
                type: 'exposes',
              });
            }
          });
        });
      });
    }

    return { nodes, links, maxErr: maxErrors };
  };

  const layoutNodes = (nodes: GraphNode[], style: VisualizationStyle) => {
    // Same layout functions as before...
    switch (style) {
      case 'spherical': layoutSpherical(nodes); break;
      case 'linear': layoutLinear(nodes); break;
      case 'block': layoutBlock(nodes); break;
      case 'helix': layoutHelix(nodes); break;
      case 'spiral': layoutSpiral(nodes); break;
      case 'grid2D': layoutGrid2D(nodes); break;
      case 'cylinder': layoutCylinder(nodes); break;
      case 'cone': layoutCone(nodes); break;
      case 'forceDirected': layoutForceDirected(nodes); break;
      case 'randomCube': layoutRandomCube(nodes); break;
      case 'layered': layoutLayered(nodes); break;
    }
  };

  const layoutSpherical = (nodes: GraphNode[]) => {
    const radius = 80;
    nodes.forEach((node) => {
      const phi = Math.acos(-1 + 2 * Math.random());
      const theta = Math.sqrt(Math.PI * 2) * Math.random();
      node.position = new THREE.Vector3(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      );
    });
  };

  const layoutLinear = (nodes: GraphNode[]) => {
    const spacing = 10;
    nodes.forEach((node, index) => {
      node.position = new THREE.Vector3(index * spacing - (nodes.length * spacing) / 2, 0, 0);
    });
  };

  const layoutBlock = (nodes: GraphNode[]) => {
    const perRow = Math.ceil(Math.cbrt(nodes.length));
    const spacing = 10;
    nodes.forEach((node, i) => {
      const x = i % perRow;
      const y = Math.floor((i / perRow) % perRow);
      const z = Math.floor(i / (perRow * perRow));
      node.position = new THREE.Vector3(
        (x - perRow / 2) * spacing,
        (y - perRow / 2) * spacing,
        (z - perRow / 2) * spacing
      );
    });
  };

  const layoutHelix = (nodes: GraphNode[]) => {
    const spacing = 5;
    const turns = 3;
    nodes.forEach((node, i) => {
      const angle = (i / nodes.length) * turns * Math.PI * 2;
      const radius = 40;
      node.position = new THREE.Vector3(
        radius * Math.cos(angle),
        (i - nodes.length / 2) * spacing,
        radius * Math.sin(angle)
      );
    });
  };

  const layoutSpiral = (nodes: GraphNode[]) => {
    const spacing = 5;
    const spiralFactor = 0.5;
    nodes.forEach((node, i) => {
      const angle = i * 0.2;
      const radius = i * spiralFactor;
      node.position = new THREE.Vector3(
        radius * Math.cos(angle),
        radius * Math.sin(angle),
        0
      );
    });
  };

  const layoutGrid2D = (nodes: GraphNode[]) => {
    const perRow = Math.ceil(Math.sqrt(nodes.length));
    const spacing = 10;
    nodes.forEach((node, i) => {
      const x = i % perRow;
      const y = Math.floor(i / perRow);
      node.position = new THREE.Vector3(
        (x - perRow / 2) * spacing,
        (y - perRow / 2) * spacing,
        0
      );
    });
  };

  const layoutCylinder = (nodes: GraphNode[]) => {
    const radius = 60;
    const height = 100;
    nodes.forEach((node, i) => {
      const angle = (i / nodes.length) * Math.PI * 2;
      const y = (i - nodes.length / 2) * (height / nodes.length);
      node.position = new THREE.Vector3(
        radius * Math.cos(angle),
        y,
        radius * Math.sin(angle)
      );
    });
  };

  const layoutCone = (nodes: GraphNode[]) => {
    const height = 100;
    const baseRadius = 60;
    nodes.forEach((node, i) => {
      const fraction = i / (nodes.length - 1);
      const radius = (1 - fraction) * baseRadius;
      const angle = fraction * Math.PI * 4;
      const y = fraction * height - height / 2;
      node.position = new THREE.Vector3(
        radius * Math.cos(angle),
        y,
        radius * Math.sin(angle)
      );
    });
  };

  const layoutForceDirected = (nodes: GraphNode[]) => {
    const range = 100;
    nodes.forEach((node) => {
      node.position = new THREE.Vector3(
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range
      );
    });
  };

  const layoutRandomCube = (nodes: GraphNode[]) => {
    const range = 80;
    nodes.forEach((node) => {
      node.position = new THREE.Vector3(
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range,
        (Math.random() - 0.5) * range
      );
    });
  };

  const layoutLayered = (nodes: GraphNode[]) => {
    const layers = new Map<number, GraphNode[]>();
    nodes.forEach(n => {
      const lvl = n.level || 0;
      if (!layers.has(lvl)) layers.set(lvl, []);
      layers.get(lvl)!.push(n);
    });

    let currentY = 0;
    const spacing = 20;
    Array.from(layers.keys()).sort().forEach((lvl) => {
      const layerNodes = layers.get(lvl)!;
      const perRow = Math.ceil(Math.sqrt(layerNodes.length));
      layerNodes.forEach((node, i) => {
        const x = i % perRow;
        const z = Math.floor(i / perRow);
        node.position = new THREE.Vector3(
          (x - perRow / 2) * spacing,
          currentY,
          (z - perRow / 2) * spacing
        );
      });
      currentY -= spacing * 3;
    });
  };

  const createTextSprite = (text: string) => {
    const canvas = document.createElement('canvas');
    const size = 256;
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext('2d');
    if (context) {
      context.font = '24px Orbitron, sans-serif';
      context.fillStyle = '#ffffff';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, size / 2, size / 2);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    const material = new THREE.SpriteMaterial({ map: texture, depthWrite: false });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(10, 5, 1);
    return sprite;
  };

  const handleNodeClick = (node: GraphNode) => {
    setSelectedNode(node);
    createMiniNodeScene(node);
  };

  const handleLoadApi = async () => {
    if (!apiUrl) return;
    setLoading(true);
    try {
      const response = await axios.get<string>(apiUrl);
      const extensionHint = apiUrl.toLowerCase();
      parseAndSetSpec(response.data, extensionHint);
    } catch (error) {
      alert('Failed to load API spec. Please check the URL ' + apiUrl);
    }
    setLoading(false);
  };

  const recenterView = () => {
    if (cameraRef.current && controlsRef.current) {
      cameraRef.current.position.set(0, 0, 200);
      cameraRef.current.lookAt(0, 0, 0);
      controlsRef.current.target.set(0, 0, 0);
      controlsRef.current.update();
    }
  };

  const applyAnimation = (nodes: GraphNode[], scene: THREE.Scene) => {
    const time = (Date.now() - startTimeRef.current) * 0.001;
    const amplitudeMetric = (node: GraphNode) => {
      const val = getNodeMetricValue(node, nodeAnimationMetric);
      return 1 + val / 50;
    };

    switch (animationStyle) {
      case 'none': break;
      case 'rotate':
        scene.rotation.y += 0.01;
        break;
      case 'pulse':
        nodes.forEach((node) => {
          if (node.mesh && node.initialPosition) {
            const amp = amplitudeMetric(node);
            const scaleFactor = 1 + 0.2 * Math.sin(time * 2) * amp;
            node.mesh.position.set(
              node.initialPosition.x * scaleFactor,
              node.initialPosition.y * scaleFactor,
              node.initialPosition.z * scaleFactor
            );
          }
        });
        break;
      case 'sineWave':
        nodes.forEach((node) => {
          if (node.mesh && node.initialPosition) {
            const amp = amplitudeMetric(node);
            const offset = Math.sin(node.initialPosition.x * 0.1 + time * 2) * 5 * amp;
            node.mesh.position.set(
              node.initialPosition.x,
              node.initialPosition.y + offset,
              node.initialPosition.z
            );
          }
        });
        break;
      case 'bobble':
        nodes.forEach((node, i) => {
          if (node.mesh && node.initialPosition) {
            const amp = amplitudeMetric(node);
            const scale = 1 + (0.1 * Math.sin(time * 3 + i) * amp);
            node.mesh.scale.set(scale, scale, scale);
          }
        });
        break;
      case 'twist':
        scene.rotation.y += 0.005;
        nodes.forEach((node) => {
          if (node.mesh && node.initialPosition) {
            node.mesh.rotation.y += 0.02 * amplitudeMetric(node);
          }
        });
        break;
      case 'jitter':
        nodes.forEach((node) => {
          if (node.mesh && node.initialPosition) {
            const amp = amplitudeMetric(node);
            const jitterX = (Math.random() - 0.5) * 0.5 * amp;
            const jitterY = (Math.random() - 0.5) * 0.5 * amp;
            const jitterZ = (Math.random() - 0.5) * 0.5 * amp;
            node.mesh.position.set(
              node.initialPosition.x + jitterX,
              node.initialPosition.y + jitterY,
              node.initialPosition.z + jitterZ
            );
          }
        });
        break;
      case 'bounce':
        nodes.forEach((node) => {
          if (node.mesh && node.initialPosition) {
            const amp = amplitudeMetric(node);
            const bounce = Math.abs(Math.sin(time * 3)) * 10 * amp;
            node.mesh.position.set(
              node.initialPosition.x,
              node.initialPosition.y + bounce,
              node.initialPosition.z
            );
          }
        });
        break;
      case 'breathing':
        nodes.forEach((node) => {
          if (node.mesh && node.initialPosition) {
            const amp = amplitudeMetric(node);
            const breath = 1 + 0.5 * Math.sin(time * 2) * amp;
            node.mesh.scale.set(breath, breath, breath);
          }
        });
        break;
    }
  };

  const getNodeMetricValue = (node: GraphNode, metric: Metric): number => {
    if (metric === 'usage' && node.usage != null) return node.usage;
    if (metric === 'errors' && node.errors != null) return node.errors;
    return 0;
  };

  const getErrorColor = (errors: number, maxErr: number) => {
    const t = Math.min(errors / maxErr, 1);
    const colors = [
      { pos: 0, color: new THREE.Color('#00008B') },
      { pos: 0.25, color: new THREE.Color('#800080') },
      { pos: 0.5, color: new THREE.Color('#FF8C00') },
      { pos: 0.75, color: new THREE.Color('#FFFF00') },
      { pos: 1, color: new THREE.Color('#FF0000') }
    ];
    for (let i = 0; i < colors.length - 1; i++) {
      if (t >= colors[i].pos && t <= colors[i + 1].pos) {
        const span = colors[i + 1].pos - colors[i].pos;
        const ratio = (t - colors[i].pos) / span;
        return colors[i].color.clone().lerp(colors[i + 1].color, ratio).getHex();
      }
    }
    return colors[colors.length - 1].color.getHex();
  };

  const createMiniNodeScene = (node: GraphNode) => {
    if (!miniContainerRef.current) return;

    if (!miniSceneRef.current) {
      miniSceneRef.current = new THREE.Scene();
      // transparent background
      const miniCamera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
      miniCamera.position.z = 20;
      miniCameraRef.current = miniCamera;

      miniRendererRef.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      miniRendererRef.current.setClearColor(0x000000, 0); // fully transparent
      miniRendererRef.current.setSize(200, 200);
      miniContainerRef.current.innerHTML = '';
      miniContainerRef.current.appendChild(miniRendererRef.current.domElement);
    }

    const miniScene = miniSceneRef.current!;
    while (miniScene.children.length > 0) {
      miniScene.remove(miniScene.children[0]);
    }

    const light = new THREE.AmbientLight(0xffffff, 1);
    miniScene.add(light);

    const metricValue = getNodeMetricValue(node, nodeSizeMetric);
    const sizeMultiplier = metricValue > 0 ? (1 + metricValue / 50) : 1;
    const baseSize = node.type === 'schema' ? 3 : 2;
    const nodeColor = getErrorColor(node.errors || 0, maxErrors);
    const geometry = new THREE.SphereGeometry(baseSize * sizeMultiplier, 16, 16);
    const material = new THREE.MeshPhongMaterial({ color: nodeColor });
    const miniMesh = new THREE.Mesh(geometry, material);
    miniScene.add(miniMesh);

    const propNames = [
      `Type: ${node.type}`,
      `Usage: ${node.usage}`,
      `Errors: ${node.errors}`,
      ...(node.path ? [`Path: ${node.path}`] : []),
      ...(node.method ? [`Method: ${node.method}`] : [])
    ];

    propNames.forEach((prop, i) => {
      const sprite = createTextSprite(prop);
      const angle = (i / propNames.length) * Math.PI * 2;
      const radius = (baseSize * sizeMultiplier) + 5;
      sprite.position.set(radius * Math.cos(angle), radius * Math.sin(angle), 0);
      miniScene.add(sprite);
    });

    const animateMini = () => {
      miniMesh.rotation.y += 0.01;
      miniRendererRef.current!.render(miniScene, miniCameraRef.current!);
      miniAnimationIdRef.current = requestAnimationFrame(animateMini);
    };
    animateMini();
  };

  const showTooltip = (x: number, y: number, node: GraphNode) => {
    if (!tooltipRef.current) return;
    tooltipRef.current.style.display = 'block';
    tooltipRef.current.style.left = x + 'px';
    tooltipRef.current.style.top = y + 'px';
    tooltipRef.current.innerHTML = `
      <div style="font-family:'Orbitron',sans-serif; color:#0ff; font-size:14px;">
        <strong>ID:</strong> ${node.id}<br/>
        <strong>Type:</strong> ${node.type}<br/>
        <strong>Errors:</strong> ${node.errors}<br/>
        <strong>Usage:</strong> ${node.usage}
      </div>
    `;
  };

  const hideTooltip = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.display = 'none';
    }
  };

  const handleSpecSelection = (name: string) => {
    setSelectedSpecName(name);
    const selected = availableSpecs?.find(s => s.sourceDetails === name);
    if (selected && selected.sourcePath) {
      setApiUrl(selected.sourcePath);
    }
    /*if (selected && selected.servers[0].url) { // TODO make this work off servers
      setApiUrl(selected.servers[0].url);
    }*/
  };

  return (
    <div className="openapi-viz-container" style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <FloatingControlPanel
        description='ThorAPI Visualizer'
        className={controlPanelOpen ? 'toolbar-open' : 'toolbar-closed'}
        style={{
          pointerEvents: 'none',
          background: 'rgba(0,0,0,0.5)',

        }}
      >
        <div className="control-panel" style={{ marginBottom: '10px', pointerEvents: 'auto' }}>
          <FaChevronDown className="close-button" size={24} onClick={() => setControlPanelOpen(!controlPanelOpen)} />
          {controlPanelOpen && (
            <Form style={{ fontFamily: 'Orbitron,sans-serif', color: '#0ff' }}>
              <Row className="mb-3">
                <Col md={4}>
                  <Form.Group controlId="specSelection">
                    <Form.Label>Choose Spec:</Form.Label>
                    {specsLoading ? (
                      <div>Loading specs...</div>
                    ) : (
                      <Form.Select
                        value={selectedSpecName}
                        onChange={(e) => handleSpecSelection(e.target.value)}
                      >
                        {availableSpecs?.map(spec => (
                          <option key={ spec.sourceDetails} value={spec.sourceDetails}>{spec.sourceDetails}</option>
                        ))}
                      </Form.Select>
                    )}
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group controlId="apiUrl">
                    <Form.Label>OpenAPI Spec URL:</Form.Label>
                    <Form.Control
                      type="text"
                      value={apiUrl}
                      onChange={(e) => setApiUrl(e.target.value)}
                      placeholder="http://localhost:8080/v1/api-docs"
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <ButtonToolbar aria-label="Toolbar with button groups">
                    <ButtonGroup className="me-2" aria-label="First group">
                      <Button onClick={handleLoadApi} disabled={loading} variant="dark" size="sm">
                        <FaRegFolderOpen size={36} color="#ff9900" />
                        <h5>{loading ? 'Loading...' : 'Load API'}</h5>
                      </Button>
                      <Button onClick={recenterView} variant="dark" size="sm">
                        <FaBullseye size={36} color="#ff9900" />
                        <b>recenter</b>
                      </Button>
                    </ButtonGroup>
                  </ButtonToolbar>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col xs={6} md={4}>
                  <Form.Check
                    type="checkbox"
                    label="Overlay API Endpoints"
                    checked={apiOverlay}
                    onChange={(e) => setApiOverlay(e.target.checked)}
                  />
                </Col>
                <Col xs={6} md={4}>
                  <Form.Check
                    type="checkbox"
                    label="Highlight Encrypted Fields"
                    checked={highlightEncrypted}
                    onChange={(e) => setHighlightEncrypted(e.target.checked)}
                  />
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group controlId="searchTerm">
                    <Form.Label>Search Nodes:</Form.Label>
                    <Form.Control
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search by ID..."
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={6}>
                  <Form.Group controlId="visualizationStyle">
                    <Form.Label>Visualization Style:</Form.Label>
                    <Form.Select
                      value={visualizationStyle}
                      onChange={(e) => setVisualizationStyle(e.target.value as VisualizationStyle)}
                    >
                      <option value="spherical">Spherical Cloud</option>
                      <option value="linear">Linear</option>
                      <option value="block">Block/Grid 3D</option>
                      <option value="helix">Helix</option>
                      <option value="spiral">Spiral</option>
                      <option value="grid2D">2D Grid</option>
                      <option value="cylinder">Cylinder</option>
                      <option value="cone">Cone</option>
                      <option value="forceDirected">Force Directed (Random)</option>
                      <option value="randomCube">Random Cube</option>
                      <option value="layered">Layered</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group controlId="animationStyle">
                    <Form.Label>Animation Style:</Form.Label>
                    <Form.Select
                      value={animationStyle}
                      onChange={(e) => setAnimationStyle(e.target.value as AnimationStyle)}
                    >
                      <option value="none">None</option>
                      <option value="rotate">Rotate Scene</option>
                      <option value="pulse">Pulse Nodes</option>
                      <option value="sineWave">Sine Wave</option>
                      <option value="bobble">Bobble</option>
                      <option value="twist">Twist</option>
                      <option value="jitter">Jitter</option>
                      <option value="bounce">Bounce</option>
                      <option value="breathing">Breathing</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3 mt-3">
                <Col xs={12} md={4}>
                  <Form.Group controlId="nodeSizeMetric">
                    <Form.Label>Node Size Metric:</Form.Label>
                    <Form.Select
                      value={nodeSizeMetric}
                      onChange={(e) => setNodeSizeMetric(e.target.value as Metric)}
                    >
                      <option value="none">None</option>
                      <option value="usage">Usage</option>
                      <option value="errors">Errors</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group controlId="nodeAnimationMetric">
                    <Form.Label>Node Animation Metric:</Form.Label>
                    <Form.Select
                      value={nodeAnimationMetric}
                      onChange={(e) => setNodeAnimationMetric(e.target.value as Metric)}
                    >
                      <option value="none">None</option>
                      <option value="usage">Usage</option>
                      <option value="errors">Errors</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group controlId="sortBy">
                    <Form.Label>Sort By:</Form.Label>
                    <Form.Select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as SortBy)}
                    >
                      <option value="alphabetical">Alphabetical</option>
                      <option value="errors">Errors</option>
                      <option value="usage">Usage</option>
                      <option value="method">Method</option>
                      <option value="path">Path</option>
                    </Form.Select>
                    <Form.Check
                      type="checkbox"
                      label="Reverse"
                      checked={reverseSort}
                      onChange={(e) => setReverseSort(e.target.checked)}
                    />
                  </Form.Group>
                </Col>
              </Row>


            </Form>
          )}
        </div>
      </FloatingControlPanel>

      <div style={{ flex: 1, display: 'flex', position: 'relative', zIndex: 0, fontFamily: 'Orbitron,sans-serif', color: '#0ff' }}>
        <div className="surface-area-container" ref={surfaceAreaRef} style={{ width: '100%', height: '100%' }}>
          {!openApiSpec && (
            <div className="placeholder" style={{ fontFamily: 'Orbitron,sans-serif' }}>
              <p>Load an OpenAPI specification to visualize the API.</p>
            </div>
          )}
        </div>
        {selectedNode && (
          <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: 'rgba(0,0,0,0.6)',
            color: '#0ff',
            padding: '10px',
            border: '1px solid #0ff',
            borderRadius: '5px',
            maxWidth: '300px',
            fontFamily: 'Orbitron,sans-serif',
            fontSize: '14px'
          }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Node Details</h3>
            <p><strong>ID:</strong> {selectedNode.id}</p>
            <p><strong>Type:</strong> {selectedNode.type}</p>
            {selectedNode.path && <p><strong>Path:</strong> {selectedNode.path}</p>}
            {selectedNode.method && <p><strong>Method:</strong> {selectedNode.method}</p>}
            <p><strong>Usage:</strong> {selectedNode.usage}</p>
            <p><strong>Errors:</strong> {selectedNode.errors}</p>
            <div ref={miniContainerRef} style={{ width: '200px', height: '200px', margin: '10px auto' }}></div>
          </div>
        )}

        <div ref={tooltipRef} style={{
          display: 'none',
          position: 'absolute',
          background: 'rgba(0,0,0,0.7)',
          color: '#0ff',
          padding: '5px',
          borderRadius: '3px',
          pointerEvents: 'none',
          fontFamily: 'Orbitron,sans-serif'
        }}></div>
      </div>
    </div>
  );
};

export default OpenAPIViz;
