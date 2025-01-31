import Picker, { EmojiClickData } from 'emoji-picker-react';
import React, { useEffect, useRef, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Accordion, Alert, Badge, Button, ButtonGroup, Card, CloseButton, Col, Form, Modal, Row, Spinner } from 'react-bootstrap';
import { FaExpand } from 'react-icons/fa';
import Markdown from 'react-markdown';
import { ChatMessage, ChatMessageRoleEnum, ChatMessageSourceTypeEnum, LlmDetails } from '../../thor/model';
import { useGetLlmDetailssQuery } from '../../thor/redux/services/LlmDetailsService';
import { useGetStrategicPrioritysQuery } from '../../thor/redux/services/StrategicPriorityService';
import { BASE_PATH } from '../../thor/src';
import CoolButton from '../CoolButton';
import ObjectTreeView from '../ObjectTreeView';
import "./index.css";

interface SageChatProps {
  callback: () => void;
}

const SageChat: React.FC<SageChatProps> = ({ callback }) => {

  const DEFAULT_LLM_UUID = 'a2508db9-c518-4e19-b6ec-bdde230e347f'; // llama1b 'd56a44d1-5dc1-4fac-8d53-41a1cba63616'; // '0ad31446-3d16-45e6-9c10-a5442880f81c'; 

  const { data: strategicData, error: strategicError, isLoading: strategicLoading } = useGetStrategicPrioritysQuery();
  const { data: llmdetailsData, error: llmdetailsError, isLoading: llmdetailsLoading } = useGetLlmDetailssQuery();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showApiActionDialog, setShowApiActionDialog] = useState<boolean>(false);
  const [ragLoaded, setRagLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [selectedLlmId, setSelectedLlmId] = useState<string | null>(DEFAULT_LLM_UUID);
  const [commands, setCommands] = useState<string[]>(['']);

  const chatHistoryRef = useRef<HTMLDivElement>(null);
  let ragData = 'You are HeimdaLLM -- you act as the leading expert of API design and systems architecture. You are an expert in Java Spring, OpenAPI OAS3, Swagger, and Typescript React Redux. You are the resident expert in Percival the Dragon Slayer the AI powered Workflow engine and ThorAPI the Secure Code Generator. IF and WHEN you are going to reply with an actionable suggestion or generate data, you must handle the escape very carefully. You will enclose any JSON object (and ONLY the actual JSON string data itself) between:---COMMAND---{<json>}---END-COMMAND--- format without spaces. This way the JSON can be parsed methodically and we all win!';

  /**
  
  RESULT OF RAG FROM CHATGPT
  
  ---COMMAND---
  {
    "strategicPriorityId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "name": "Setup Percival the Dragon Slayer Account",
    "tasks": [
      {
        "taskId": "1",
        "name": "Create User Dashboard",
        "description": "Generate a new user dashboard that consolidates key metrics and workflows to improve code execution speed.",
        "payload": {
          "dashboardId": "new_dashboard",
          "layout": "grid",
          "components": ["metricsWidget", "workflowStarter", "userActivity"]
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "workflow_engine_yo",
    "name": "Workflow Engine YO!",
    "tasks": [
      {
        "taskId": "2",
        "name": "Integrate Custom LLM",
        "description": "Set up a GitHub integration to enable LLM workflows within Percival the Dragon Slayer.",
        "payload": {
          "integrationType": "GitHub",
          "permissions": ["read", "write", "admin"],
          "actions": [
            {
              "type": "triggerWorkflow",
              "workflowName": "LLM_Chat_Initiation"
            }
          ]
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "develop_new_product",
    "name": "Email Campaign Execution",
    "tasks": [
      {
        "taskId": "3",
        "name": "Create and Execute Email Campaign",
        "description": "Leverage the content and campaign tables to design a personalized marketing email.",
        "payload": {
          "campaignId": "new_customer_onboarding",
          "emailTemplate": {
            "subject": "Welcome to Percival the Dragon Slayer!",
            "body": "<p>Dear {{firstName}},<br/> We're excited to introduce you to the power of Percival the Dragon Slayer. Let us help you accelerate your success!</p>"
          },
          "targetList": "customers_prospects_db",
          "schedule": "2024-12-22T10:00:00Z"
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "competitor_analysis",
    "name": "Create Competitor Database",
    "tasks": [
      {
        "taskId": "4",
        "name": "Competitor Database Setup",
        "description": "Design and populate a database schema to track competitors and their key attributes.",
        "payload": {
          "schema": {
            "tableName": "competitors",
            "fields": ["id", "name", "industry", "strengths", "weaknesses", "recentActivity"]
          },
          "dataSources": ["webScraper", "manualEntry"]
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "automate_accounts",
    "name": "Automate Account Setup",
    "tasks": [
      {
        "taskId": "5",
        "name": "First Account Automation",
        "description": "Configure Percival the Dragon Slayer to automate the setup of a client account, including ACL security and workflows.",
        "payload": {
          "accountId": "demo_account",
          "features": ["workflowEngine", "dataEncryption", "roleBasedAccessControl"],
          "templates": ["default_account_template"]
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "financial_review",
    "name": "Perform Financial Review",
    "tasks": [
      {
        "taskId": "6",
        "name": "Generate Financial Analysis Report",
        "description": "Set up an automated workflow to pull financial data and create a report.",
        "payload": {
          "dataSources": ["financialDB", "externalAPI"],
          "analysisType": "quarterly",
          "outputFormat": "PDF"
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "fundraising_activities",
    "name": "Seed Round Fundraising",
    "tasks": [
      {
        "taskId": "7",
        "name": "Create Fundraising Deck",
        "description": "Generate a custom presentation using marketing data and templates.",
        "payload": {
          "templateId": "seed_round_presentation",
          "inputData": {
            "milestones": ["MVP launch", "10 paying customers"],
            "fundingNeeds": "$500k"
          }
        }
      }
    ]
  }
  ---END-COMMAND---
  
  ---COMMAND---
  {
    "strategicPriorityId": "marketing_rollout",
    "name": "Marketing and Initial Rollout",
    "tasks": [
      {
        "taskId": "8",
        "name": "Execute Initial Rollout",
        "description": "Schedule and manage activities for the initial marketing rollout to secure 100 signups.",
        "payload": {
          "campaigns": ["socialMediaBlitz", "webinarSeries"],
          "metrics": ["signupCount", "conversionRate"]
        }
      }
    ]
  }
  ---END-COMMAND---
  
  */

  let selectedLlm = llmdetailsData?.find((llm: LlmDetails) => llm.id === selectedLlmId);

  const getRAGData = () => {
    let rgd = ragData + ' BEGIN TRAINING DATA:';
    if (!ragLoaded && !isLoading && strategicData && selectedLlm) {
      setIsLoading(true);

      if (selectedLlm?.initialPrompt != null) {
        rgd += selectedLlm.initialPrompt;
      }
      rgd += " OUR STRATEGIC GOALS:";
      strategicData.forEach((strategicPriority) => {
        rgd += ' strategic priority:' + strategicPriority.description;
        strategicPriority.goals.forEach((goal) => {
          rgd += ' strategic goal:' + goal.description;
          rgd += ' expected outcome:' + goal.expectedOutcome;
        })
      });

      if (!ragLoaded) {
        const assistantIntroMessage: ChatMessage = {
          content: "Hello! My name is HeimdaLLM. My version is " + JSON.stringify(selectedLlm.version) + " which they say is " + selectedLlm.notes + "... Please give me a moment while I review your Strategic Priorities...",
          role: ChatMessageRoleEnum.ASSISTANT,
          sourceType: ChatMessageSourceTypeEnum.API
        };
        setMessages((prev) => [...prev, assistantIntroMessage]);
        setRagLoaded(true);
      }
    }

    return rgd;
  };


  const sendMessage = async (inpx: string) => {

    if (!input.trim() && inpx == null) return;
    if (!selectedLlm) {
      setError("Please select an LLM before sending a message.");
      return;
    }


    const userMessage: ChatMessage = {
      content: input,
      role: ChatMessageRoleEnum.USER,
      sourceType: ChatMessageSourceTypeEnum.API
    };

    if (input.length > 0) { // hide system messages
      setMessages([...messages, userMessage]);
    }

    setIsLoading(true);
    setInput('');

    try {
      const sendMessage: ChatMessage = {
        content: getRAGData() + userMessage.content,
        role: ChatMessageRoleEnum.USER,
        json: '{"json":"value"}',
        sessionId: "ABC",
        sourceType: ChatMessageSourceTypeEnum.API,
        sourceOwner: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
      };

      // we send the selected UUID only to Percival the Dragon Slayer server which then knows how to relay the request...
      const response = await fetch(BASE_PATH + `/llm-service/${selectedLlm.id}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sendMessage),
      });

      if (!response.ok) {
        throw new Error(`Failed to get response from LLM service: ${response.statusText}`);
      }

      const data = await response.json();

      let content = JSON.parse(data.content)?.response || 'Error parsing response';
      content = parseCommands(content);

      const assistantMessage: ChatMessage = {
        content,
        role: ChatMessageRoleEnum.ASSISTANT,
        sourceType: ChatMessageSourceTypeEnum.API,
        sessionId: userMessage.sessionId,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      setError(err.message || 'An unknown error occurred');
    } finally {
      setIsLoading(false);
      if (chatHistoryRef.current) {
        chatHistoryRef.current.scrollTo({ top: chatHistoryRef.current.scrollHeight, behavior: 'smooth' });
      }
    }
  };

  const setLlmAndInitRag = (llmId: string) => {
    setError(null);
    setSelectedLlmId(llmId);
    selectedLlm = llmdetailsData?.find((llm: LlmDetails) => llm.id === selectedLlmId);
    sendMessage("Analyze Strategy: ");
    setRagLoaded(true);
  }

  interface CustomMessage {
    content: string;
    role: ChatMessageRoleEnum;
    json: string;
    sessionId: string;
    sourceType: ChatMessageSourceTypeEnum;
    sourceOwner: string;
  }


  const parseCommands = (content) => {
    if (content.indexOf('---COMMAND---') > -1) {
      let commandString = content;

      let splitr = commandString.split('---COMMAND---');
      splitr.forEach((command) => {
        // sanitize
        command = command.replace('---COMMAND---', '');
        command = command.replace('---END-COMMAND---', '');
        let pos = command.indexOf("{");
        let pos2 = command.lastIndexOf('}');
        command = command.substring(pos, pos2 + 1);
        if (command !== "") {
          setCommands([...commands, command]);
        }
        // alert('FOR EACH sanitized:' + command + '->' + JSON.stringify(commands));
      });

      setShowApiActionDialog(true);
      content = content.substring(content.lastIndexOf('---END-COMMAND---') + 17);
      content += "... I have generated entries for your review... Please check on them in the review dialog.";
    }
    console.log('non-command output:' + content)
    return content;
  };
  useEffect(() => {
    if (!ragLoaded && !isLoading && strategicData && selectedLlm) {
      setLlmAndInitRag(DEFAULT_LLM_UUID);
    }
  });

  const handleEmojiClick = (emojiObject: any) => {
    setInput((prevInput) => prevInput + emojiObject.emoji);
    setShowEmojiPicker(false);
  };


  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTo({ top: chatHistoryRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  function handleReaction(emojiData: EmojiClickData, event: MouseEvent): void {
    setInput((prevInput) => prevInput + emojiData.emoji);
    setShowEmojiPicker(false);
  }

  return (
    <div>

      {showApiActionDialog && (
        <ConfirmApiActionDialog actions={commands} setShowApiActionDialog={setShowApiActionDialog} showApiActionDialog={showApiActionDialog} />
      )}

      <ButtonGroup>
        {callback && (
          <Button variant={"info"} onClick={() => callback()} ><FaExpand /></Button>
        )}


        <Form.Group controlId="selectLlm">
          <Form.Label>Select LLM</Form.Label>
          {llmdetailsLoading && <Spinner animation="border" />}
          {llmdetailsError && <p className="text-danger">Error loading LLM details</p>}
          {llmdetailsData && (
            <Form.Select
              value={selectedLlmId || ''}
              onChange={(e) => {
                setLlmAndInitRag(e.target.value || null);
              }
              }
            >
              <option value="">-- Select an LLM --</option>
              {llmdetailsData.map((llm: LlmDetails) => (
                <option key={llm.id} value={llm.id}>
                  {llm.name || llm.id}
                </option>
              ))}
            </Form.Select>
          )}
        </Form.Group>
      </ButtonGroup>

      <Accordion defaultActiveKey="0" >
        <Accordion.Item eventKey="0">
          <Accordion.Header>Chat History</Accordion.Header>
          <Accordion.Body className="chatWindow" style={{ padding: "0px", margin: "0px", overflowY: 'scroll' }} ref={chatHistoryRef}>
            {messages.map((msg, index) => (
              <Card key={`message-${index}`} className="mb-2">
                <Card.Body>
                  {msg.role === ChatMessageRoleEnum.USER && (
                    <div style={{
                      backgroundColor: '#0d6efd',
                      padding: '1em',
                      borderRadius: '10px'
                    }}>
                      <Badge bg={'primary'} style={{ float: "left", marginRight: "1em", marginBottom: "1em" }}>
                        <h1>🦁</h1> {msg.role}
                      </Badge>
                      <p>{msg.content}</p>
                    </div>
                  )}
                  {msg.role === ChatMessageRoleEnum.ASSISTANT && (
                    <div style={{
                      backgroundColor: '#0d6efd',
                      padding: '1em',
                      borderRadius: '10px'
                    }}>

                      <Badge bg={'success'} style={{ float: "left", marginRight: "1em", marginBottom: "1em" }}>
                        {isLoading && (
                          <div style={{ "float": "left", "textAlign": "center" }}>
                            <Fade direction="down">
                              <Spinner size={'sm'} animation="grow" variant="warning" />
                              <Spinner size={'sm'} animation="grow" variant="info" />
                              <Spinner size={'sm'} animation="grow" variant="danger" />
                            </Fade>
                          </div>
                        )}
                        <h1>🤖</h1> HeimdaLLM
                      </Badge>

                      {error && <Badge bg={"danger"}><CloseButton onClick={() => setError(null)} /> {error}</Badge>}
                      <Markdown>
                        {msg.content}
                      </Markdown>
                    </div>
                  )}
                </Card.Body>
              </Card>
            ))}
            {isLoading && (
              <div style={{ "float": "none", "textAlign": "center" }}>
                <Fade direction="down">
                  <Row>
                    <Col>
                      <h1><Spinner variant="info" /></h1>
                    </Col>

                  </Row>



                </Fade>
              </div>
            )}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion >

      {strategicError && <h3 className="text-danger">{JSON.stringify(strategicError)}</h3>}

      <Form.Group controlId="userInput">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={!selectedLlm} // Disable if no LLM selected
        />
      </Form.Group>

      <div>
        <Row className="mt-2">
          <Col md={12}>
            {showEmojiPicker && (
              <Picker
                onEmojiClick={handleEmojiClick}
                reactionsDefaultOpen={true}
                onReactionClick={handleReaction}
              />
            )}
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={3}>
            <CoolButton variant="light" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              😀
            </CoolButton>
          </Col>

          <Col md={9}>
            <CoolButton variant="primary" onClick={() => sendMessage(null)} disabled={!selectedLlm}>
              Send <i className="bi bi-send-fill"></i>
            </CoolButton>
          </Col>
        </Row>
      </div>
    </div >
  );
};

interface ConfirmApiActionDialogProps {
  actions: string[];
  setShowApiActionDialog: (show: boolean) => void;
  showApiActionDialog: boolean;
}

const ConfirmApiActionDialog: React.FC<ConfirmApiActionDialogProps> = ({ actions, setShowApiActionDialog, showApiActionDialog }) => {
  return (
    <Modal data-bs-theme="dark" show={showApiActionDialog}>
      <Modal.Title>
        Confirm API Actions <CloseButton onClick={() => { setShowApiActionDialog(false) }} />
      </Modal.Title>
      <Modal.Body>
        <p>Confirm the API action:</p>
        {actions && actions.map((action) => (
          <React.Fragment key={action}>
            <ButtonGroup>
              <Alert variant="info">
                <ObjectTreeView data={action} />
              </Alert>
              <Button>Yes</Button>
              <Button>No</Button>
            </ButtonGroup>
          </React.Fragment>
        ))}
        <Button onClick={() => { setShowApiActionDialog(false) }}>Accept All</Button>
        <Button onClick={() => { setShowApiActionDialog(false) }}>Cancel</Button>
      </Modal.Body>
    </Modal>
  )
}

export default SageChat;
