
import React, { useState } from 'react';

import { Card, Col, Badge, Container, Nav, NavDropdown, Row, Tab, Tabs } from "react-bootstrap";
import CoolButton from "../../../../components/CoolButton";
import TimeSeriesChart from "../../../../components/Charts/TimeSeriesChart";
import SplitPaneView from "../../../../components/SplitPane/SplitPaneView";
import FloatingToolbar from "../../../../components/FloatingToolbar";



import  AclEntryGrid from '../grid/AclEntryGrid';



import  AddressGrid from '../grid/AddressGrid';



import  ApplicationGrid from '../grid/ApplicationGrid';



import  AttackGrid from '../grid/AttackGrid';



import  ChatMessageGrid from '../grid/ChatMessageGrid';



import  ChatResponseGrid from '../grid/ChatResponseGrid';



import  ContentDataGrid from '../grid/ContentDataGrid';



import  ContentMediaLinkGrid from '../grid/ContentMediaLinkGrid';



import  CustomerGrid from '../grid/CustomerGrid';



import  EventLogGrid from '../grid/EventLogGrid';



import  ExecModuleGrid from '../grid/ExecModuleGrid';



import  GameGrid from '../grid/GameGrid';



import  IntegrationAccountGrid from '../grid/IntegrationAccountGrid';



import  LevelGrid from '../grid/LevelGrid';



import  LlmDetailsGrid from '../grid/LlmDetailsGrid';



import  LoginGrid from '../grid/LoginGrid';



import  LogoutGrid from '../grid/LogoutGrid';



import  OpportunityGrid from '../grid/OpportunityGrid';



import  OrganizationGrid from '../grid/OrganizationGrid';



import  PrincipalGrid from '../grid/PrincipalGrid';



import  RatingGrid from '../grid/RatingGrid';



import  RoleGrid from '../grid/RoleGrid';



import  SalesActivityGrid from '../grid/SalesActivityGrid';



import  SalesPipelineGrid from '../grid/SalesPipelineGrid';



import  SecureKeyGrid from '../grid/SecureKeyGrid';



import  TaskGrid from '../grid/TaskGrid';



import  WeaponGrid from '../grid/WeaponGrid';



import  WorkflowGrid from '../grid/WorkflowGrid';



import  WorkflowStateGrid from '../grid/WorkflowStateGrid';




interface ModelCardsProps {
    addTab: (key: string, component: JSX.Element) => void;
}

const ModelCards: React.FC<ModelCardsProps> = ({ addTab }) => {

    const [activeTab, setActiveTab] = useState('');
  
    return (
        <Container fluid className="p-3 card-list">
    
                <Card className="displayCard"
                    onClick={() => {
                        addTab("AclEntry", 
                            <AclEntryGrid />
                        );
                    }}
                    key={ 'AclEntry' }
                >
                    <Card.Header className="card-header">
                    <h3>Acl Entry</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            AclEntry
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Address", 
                            <AddressGrid />
                        );
                    }}
                    key={ 'Address' }
                >
                    <Card.Header className="card-header">
                    <h3>Address</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Address
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Application", 
                            <ApplicationGrid />
                        );
                    }}
                    key={ 'Application' }
                >
                    <Card.Header className="card-header">
                    <h3>Application</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Application
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Attack", 
                            <AttackGrid />
                        );
                    }}
                    key={ 'Attack' }
                >
                    <Card.Header className="card-header">
                    <h3>Attack</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Attack
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("ChatMessage", 
                            <ChatMessageGrid />
                        );
                    }}
                    key={ 'ChatMessage' }
                >
                    <Card.Header className="card-header">
                    <h3>Chat Message</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            ChatMessage
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("ChatResponse", 
                            <ChatResponseGrid />
                        );
                    }}
                    key={ 'ChatResponse' }
                >
                    <Card.Header className="card-header">
                    <h3>Chat Response</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            ChatResponse
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("ContentData", 
                            <ContentDataGrid />
                        );
                    }}
                    key={ 'ContentData' }
                >
                    <Card.Header className="card-header">
                    <h3>Content Data</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            ContentData
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("ContentMediaLink", 
                            <ContentMediaLinkGrid />
                        );
                    }}
                    key={ 'ContentMediaLink' }
                >
                    <Card.Header className="card-header">
                    <h3>Content Media Link</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            ContentMediaLink
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Customer", 
                            <CustomerGrid />
                        );
                    }}
                    key={ 'Customer' }
                >
                    <Card.Header className="card-header">
                    <h3>Customer</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Customer
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("EventLog", 
                            <EventLogGrid />
                        );
                    }}
                    key={ 'EventLog' }
                >
                    <Card.Header className="card-header">
                    <h3>Event Log</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            EventLog
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("ExecModule", 
                            <ExecModuleGrid />
                        );
                    }}
                    key={ 'ExecModule' }
                >
                    <Card.Header className="card-header">
                    <h3>Exec Module</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            ExecModule
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Game", 
                            <GameGrid />
                        );
                    }}
                    key={ 'Game' }
                >
                    <Card.Header className="card-header">
                    <h3>Game</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Game
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("IntegrationAccount", 
                            <IntegrationAccountGrid />
                        );
                    }}
                    key={ 'IntegrationAccount' }
                >
                    <Card.Header className="card-header">
                    <h3>Integration Account</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            IntegrationAccount
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Level", 
                            <LevelGrid />
                        );
                    }}
                    key={ 'Level' }
                >
                    <Card.Header className="card-header">
                    <h3>Level</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Level
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("LlmDetails", 
                            <LlmDetailsGrid />
                        );
                    }}
                    key={ 'LlmDetails' }
                >
                    <Card.Header className="card-header">
                    <h3>Llm Details</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            LlmDetails
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Login", 
                            <LoginGrid />
                        );
                    }}
                    key={ 'Login' }
                >
                    <Card.Header className="card-header">
                    <h3>Login</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Login
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Logout", 
                            <LogoutGrid />
                        );
                    }}
                    key={ 'Logout' }
                >
                    <Card.Header className="card-header">
                    <h3>Logout</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Logout
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Opportunity", 
                            <OpportunityGrid />
                        );
                    }}
                    key={ 'Opportunity' }
                >
                    <Card.Header className="card-header">
                    <h3>Opportunity</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Opportunity
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Organization", 
                            <OrganizationGrid />
                        );
                    }}
                    key={ 'Organization' }
                >
                    <Card.Header className="card-header">
                    <h3>Organization</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Organization
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Principal", 
                            <PrincipalGrid />
                        );
                    }}
                    key={ 'Principal' }
                >
                    <Card.Header className="card-header">
                    <h3>Principal</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Principal
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Rating", 
                            <RatingGrid />
                        );
                    }}
                    key={ 'Rating' }
                >
                    <Card.Header className="card-header">
                    <h3>Rating</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Rating
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Role", 
                            <RoleGrid />
                        );
                    }}
                    key={ 'Role' }
                >
                    <Card.Header className="card-header">
                    <h3>Role</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Role
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("SalesActivity", 
                            <SalesActivityGrid />
                        );
                    }}
                    key={ 'SalesActivity' }
                >
                    <Card.Header className="card-header">
                    <h3>Sales Activity</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            SalesActivity
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("SalesPipeline", 
                            <SalesPipelineGrid />
                        );
                    }}
                    key={ 'SalesPipeline' }
                >
                    <Card.Header className="card-header">
                    <h3>Sales Pipeline</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            SalesPipeline
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("SecureKey", 
                            <SecureKeyGrid />
                        );
                    }}
                    key={ 'SecureKey' }
                >
                    <Card.Header className="card-header">
                    <h3>Secure Key</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            SecureKey
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Task", 
                            <TaskGrid />
                        );
                    }}
                    key={ 'Task' }
                >
                    <Card.Header className="card-header">
                    <h3>Task</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Task
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Weapon", 
                            <WeaponGrid />
                        );
                    }}
                    key={ 'Weapon' }
                >
                    <Card.Header className="card-header">
                    <h3>Weapon</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Weapon
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("Workflow", 
                            <WorkflowGrid />
                        );
                    }}
                    key={ 'Workflow' }
                >
                    <Card.Header className="card-header">
                    <h3>Workflow</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            Workflow
                        </Badge>
                    </Card.Body>
                </Card>

                <Card className="displayCard"
                    onClick={() => {
                        addTab("WorkflowState", 
                            <WorkflowStateGrid />
                        );
                    }}
                    key={ 'WorkflowState' }
                >
                    <Card.Header className="card-header">
                    <h3>Workflow State</h3>
                    </Card.Header>
                    <Card.Body  className="card-body">
                                
                        <Badge bg="secondary">
                            WorkflowState
                        </Badge>
                    </Card.Body>
                </Card>

                        

        </Container>
    );
};

export default ModelCards;
