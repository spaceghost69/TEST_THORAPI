import { useEffect, useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Image, Row, } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import logo from "../assets/images/peragon-inc.png";

function ComingSoon() {
  const canvasRef = useRef(null);

  // Example OpenAPI Spec (simplified)
  const openApiSpec = {
    "openapi": "3.0.1",
    
    "paths": {
      "/hello": {},
      "/{dataset}/{version}/fields": {},
      "/{dataset}/{version}/records": {},
      "/goodbye": {},
      "/{dataset}/{version}/objects": {},
      "/{dataset}/{version}/properties": {}
    }
  };
  useEffect(() => {
    // THREE.js Setup
    const scene = new THREE.Scene();

    scene.background = new THREE.Color("#222");
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / 400,
      0.1,
      100
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, 400);
    canvasRef.current.appendChild(renderer.domElement);

    // OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Generate Graph Nodes and Edges from OpenAPI Spec
    const nodes = [];
    const edges = [];

    const createNode = (name, x, y, z) => {
      const geometry = new THREE.SphereGeometry(.75, 36, 36);
      const material = new THREE.MeshBasicMaterial({ color: 0xff9900 });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(x, y, z);
      sphere.userData = { name };
      scene.add(sphere);
      nodes.push(sphere);

      // Add label
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      context.font = "Bold 24px Arial";
      context.fillStyle = "white";
      
      context.fillText(name, 0, 14);
      const texture = new THREE.CanvasTexture(canvas);
      const labelMaterial = new THREE.SpriteMaterial({ map: texture });
      const sprite = new THREE.Sprite(labelMaterial);
      sprite.position.set(x, y + 1, z);
      scene.add(sprite);
    };

    const createEdge = (from, to) => {
      const material = new THREE.LineBasicMaterial({ color: 0xaaaaaa });
      const geometry = new THREE.BufferGeometry().setFromPoints([
        from.position,
        to.position,
      ]);
      const line = new THREE.Line(geometry, material);
      scene.add(line);
      edges.push(line);
    };

    // Position nodes in a circle
    const pathKeys = Object.keys(openApiSpec.paths);
    const radius = 5;
    pathKeys.forEach((path, index) => {
      const angle = (index / pathKeys.length) * Math.PI * 2;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      createNode(path, x, 0, z);
    });

    // Connect nodes (for demonstration, connect each node to the next)
    for (let i = 0; i < nodes.length; i++) {
      const fromNode = nodes[i];
      const toNode = nodes[(i + 1) % nodes.length];
      createEdge(fromNode, toNode);
    }

    camera.position.z = 15;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodes);
      if (intersects.length > 0) {
        alert(`You clicked on ${intersects[0].object.userData.name}`);
      }
    };

    renderer.domElement.addEventListener("click", onMouseClick);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      renderer.domElement.removeEventListener("click", onMouseClick);
      try{
        canvasRef.current.removeChild(renderer.domElement);
      }catch(e){;}

    };
  }, []);

  return (
    <>
      <Row className="align-items-center text-center big-hero-section">
        <Col>
          <Fade direction="down">
            <>
            <Link to="/">
            <Image src={logo} width="25%" style={{ minWidth: "120px" }} />
          </Link>
              <h1>COMING SOON</h1>
              <Fade direction="left"><p>The future of software Q1 2025</p></Fade>
          
          <div
            ref={canvasRef}
            style={{  width: "80%", height: "250px", margin: "0 auto" }}
          ></div>
          <p className="text-white mt-4">
            Explore API endpoints and relationships in realtime
          </p>
        
        <h2 className="text-white mb-4">
            Build APIs Like Never Before
          </h2>
            </>
          </Fade>
        </Col>
      </Row>

      {/* Interactive Three.js Canvas */}
      <section
        id="visualization"
        className="py-5 text-center"
        style={{ backgroundColor: "#1b1b1b" }}
      >
        
      </section>
    </>
  );
}

export default ComingSoon;
