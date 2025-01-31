
import React, { useState } from 'react';

import { Col, Container, Nav, NavDropdown, Row, Tab, Tabs } from "react-bootstrap";
import CoolButton from "../../../../components/CoolButton";
import TimeSeriesChart from "../../../../components/Charts/TimeSeriesChart";
import SplitPaneView from "../../../../components/SplitPane/SplitPaneView";
import FloatingToolbar from "../../../../components/FloatingToolbar";


import  AclEntryChart  from '../chart/AclEntryChart';
import  AclEntryForm  from '../form/AclEntryForm';
import  AclEntryTable from '../table/AclEntryTable';


import  AddressChart  from '../chart/AddressChart';
import  AddressForm  from '../form/AddressForm';
import  AddressTable from '../table/AddressTable';


import  ApplicationChart  from '../chart/ApplicationChart';
import  ApplicationForm  from '../form/ApplicationForm';
import  ApplicationTable from '../table/ApplicationTable';


import  AttackChart  from '../chart/AttackChart';
import  AttackForm  from '../form/AttackForm';
import  AttackTable from '../table/AttackTable';


import  ChatMessageChart  from '../chart/ChatMessageChart';
import  ChatMessageForm  from '../form/ChatMessageForm';
import  ChatMessageTable from '../table/ChatMessageTable';


import  ChatResponseChart  from '../chart/ChatResponseChart';
import  ChatResponseForm  from '../form/ChatResponseForm';
import  ChatResponseTable from '../table/ChatResponseTable';


import  ContentDataChart  from '../chart/ContentDataChart';
import  ContentDataForm  from '../form/ContentDataForm';
import  ContentDataTable from '../table/ContentDataTable';


import  ContentMediaLinkChart  from '../chart/ContentMediaLinkChart';
import  ContentMediaLinkForm  from '../form/ContentMediaLinkForm';
import  ContentMediaLinkTable from '../table/ContentMediaLinkTable';


import  CustomerChart  from '../chart/CustomerChart';
import  CustomerForm  from '../form/CustomerForm';
import  CustomerTable from '../table/CustomerTable';


import  EventLogChart  from '../chart/EventLogChart';
import  EventLogForm  from '../form/EventLogForm';
import  EventLogTable from '../table/EventLogTable';


import  ExecModuleChart  from '../chart/ExecModuleChart';
import  ExecModuleForm  from '../form/ExecModuleForm';
import  ExecModuleTable from '../table/ExecModuleTable';


import  GameChart  from '../chart/GameChart';
import  GameForm  from '../form/GameForm';
import  GameTable from '../table/GameTable';


import  IntegrationAccountChart  from '../chart/IntegrationAccountChart';
import  IntegrationAccountForm  from '../form/IntegrationAccountForm';
import  IntegrationAccountTable from '../table/IntegrationAccountTable';


import  LevelChart  from '../chart/LevelChart';
import  LevelForm  from '../form/LevelForm';
import  LevelTable from '../table/LevelTable';


import  LlmDetailsChart  from '../chart/LlmDetailsChart';
import  LlmDetailsForm  from '../form/LlmDetailsForm';
import  LlmDetailsTable from '../table/LlmDetailsTable';


import  LoginChart  from '../chart/LoginChart';
import  LoginForm  from '../form/LoginForm';
import  LoginTable from '../table/LoginTable';


import  LogoutChart  from '../chart/LogoutChart';
import  LogoutForm  from '../form/LogoutForm';
import  LogoutTable from '../table/LogoutTable';


import  OpportunityChart  from '../chart/OpportunityChart';
import  OpportunityForm  from '../form/OpportunityForm';
import  OpportunityTable from '../table/OpportunityTable';


import  OrganizationChart  from '../chart/OrganizationChart';
import  OrganizationForm  from '../form/OrganizationForm';
import  OrganizationTable from '../table/OrganizationTable';


import  PrincipalChart  from '../chart/PrincipalChart';
import  PrincipalForm  from '../form/PrincipalForm';
import  PrincipalTable from '../table/PrincipalTable';


import  RatingChart  from '../chart/RatingChart';
import  RatingForm  from '../form/RatingForm';
import  RatingTable from '../table/RatingTable';


import  RoleChart  from '../chart/RoleChart';
import  RoleForm  from '../form/RoleForm';
import  RoleTable from '../table/RoleTable';


import  SalesActivityChart  from '../chart/SalesActivityChart';
import  SalesActivityForm  from '../form/SalesActivityForm';
import  SalesActivityTable from '../table/SalesActivityTable';


import  SalesPipelineChart  from '../chart/SalesPipelineChart';
import  SalesPipelineForm  from '../form/SalesPipelineForm';
import  SalesPipelineTable from '../table/SalesPipelineTable';


import  SecureKeyChart  from '../chart/SecureKeyChart';
import  SecureKeyForm  from '../form/SecureKeyForm';
import  SecureKeyTable from '../table/SecureKeyTable';


import  TaskChart  from '../chart/TaskChart';
import  TaskForm  from '../form/TaskForm';
import  TaskTable from '../table/TaskTable';


import  WeaponChart  from '../chart/WeaponChart';
import  WeaponForm  from '../form/WeaponForm';
import  WeaponTable from '../table/WeaponTable';


import  WorkflowChart  from '../chart/WorkflowChart';
import  WorkflowForm  from '../form/WorkflowForm';
import  WorkflowTable from '../table/WorkflowTable';


import  WorkflowStateChart  from '../chart/WorkflowStateChart';
import  WorkflowStateForm  from '../form/WorkflowStateForm';
import  WorkflowStateTable from '../table/WorkflowStateTable';



const DataWorkbook = () => {

    const [activeTab, setActiveTab] = useState('');
  
    return (
        <Container fluid className="p-3">
                <Nav
                    variant="tabs" 
                    defaultActiveKey={activeTab}
                    id="fill-tab"
                    className="mb-3"
                    fill
                >
                    <Nav.Item>
                        <NavDropdown
                            id="spec"
                            title='Select Local API'
                        >
    

                            <NavDropdown.Item
                                title='AclEntry'
                                active={ activeTab == 'AclEntry' }
                                onClick={() => {
                                    setActiveTab("AclEntry");
                                }}
                                key={ 'AclEntry' }
                                    >
                                {/* DataChart Section */}                  
<h5>Acl Entry</h5>
AclEntry
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Address'
                                active={ activeTab == 'Address' }
                                onClick={() => {
                                    setActiveTab("Address");
                                }}
                                key={ 'Address' }
                                    >
                                {/* DataChart Section */}                  
<h5>Address</h5>
Address
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Application'
                                active={ activeTab == 'Application' }
                                onClick={() => {
                                    setActiveTab("Application");
                                }}
                                key={ 'Application' }
                                    >
                                {/* DataChart Section */}                  
<h5>Application</h5>
Application
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Attack'
                                active={ activeTab == 'Attack' }
                                onClick={() => {
                                    setActiveTab("Attack");
                                }}
                                key={ 'Attack' }
                                    >
                                {/* DataChart Section */}                  
<h5>Attack</h5>
Attack
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='ChatMessage'
                                active={ activeTab == 'ChatMessage' }
                                onClick={() => {
                                    setActiveTab("ChatMessage");
                                }}
                                key={ 'ChatMessage' }
                                    >
                                {/* DataChart Section */}                  
<h5>Chat Message</h5>
ChatMessage
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='ChatResponse'
                                active={ activeTab == 'ChatResponse' }
                                onClick={() => {
                                    setActiveTab("ChatResponse");
                                }}
                                key={ 'ChatResponse' }
                                    >
                                {/* DataChart Section */}                  
<h5>Chat Response</h5>
ChatResponse
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='ContentData'
                                active={ activeTab == 'ContentData' }
                                onClick={() => {
                                    setActiveTab("ContentData");
                                }}
                                key={ 'ContentData' }
                                    >
                                {/* DataChart Section */}                  
<h5>Content Data</h5>
ContentData
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='ContentMediaLink'
                                active={ activeTab == 'ContentMediaLink' }
                                onClick={() => {
                                    setActiveTab("ContentMediaLink");
                                }}
                                key={ 'ContentMediaLink' }
                                    >
                                {/* DataChart Section */}                  
<h5>Content Media Link</h5>
ContentMediaLink
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Customer'
                                active={ activeTab == 'Customer' }
                                onClick={() => {
                                    setActiveTab("Customer");
                                }}
                                key={ 'Customer' }
                                    >
                                {/* DataChart Section */}                  
<h5>Customer</h5>
Customer
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='EventLog'
                                active={ activeTab == 'EventLog' }
                                onClick={() => {
                                    setActiveTab("EventLog");
                                }}
                                key={ 'EventLog' }
                                    >
                                {/* DataChart Section */}                  
<h5>Event Log</h5>
EventLog
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='ExecModule'
                                active={ activeTab == 'ExecModule' }
                                onClick={() => {
                                    setActiveTab("ExecModule");
                                }}
                                key={ 'ExecModule' }
                                    >
                                {/* DataChart Section */}                  
<h5>Exec Module</h5>
ExecModule
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Game'
                                active={ activeTab == 'Game' }
                                onClick={() => {
                                    setActiveTab("Game");
                                }}
                                key={ 'Game' }
                                    >
                                {/* DataChart Section */}                  
<h5>Game</h5>
Game
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='IntegrationAccount'
                                active={ activeTab == 'IntegrationAccount' }
                                onClick={() => {
                                    setActiveTab("IntegrationAccount");
                                }}
                                key={ 'IntegrationAccount' }
                                    >
                                {/* DataChart Section */}                  
<h5>Integration Account</h5>
IntegrationAccount
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Level'
                                active={ activeTab == 'Level' }
                                onClick={() => {
                                    setActiveTab("Level");
                                }}
                                key={ 'Level' }
                                    >
                                {/* DataChart Section */}                  
<h5>Level</h5>
Level
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='LlmDetails'
                                active={ activeTab == 'LlmDetails' }
                                onClick={() => {
                                    setActiveTab("LlmDetails");
                                }}
                                key={ 'LlmDetails' }
                                    >
                                {/* DataChart Section */}                  
<h5>Llm Details</h5>
LlmDetails
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Login'
                                active={ activeTab == 'Login' }
                                onClick={() => {
                                    setActiveTab("Login");
                                }}
                                key={ 'Login' }
                                    >
                                {/* DataChart Section */}                  
<h5>Login</h5>
Login
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Logout'
                                active={ activeTab == 'Logout' }
                                onClick={() => {
                                    setActiveTab("Logout");
                                }}
                                key={ 'Logout' }
                                    >
                                {/* DataChart Section */}                  
<h5>Logout</h5>
Logout
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Opportunity'
                                active={ activeTab == 'Opportunity' }
                                onClick={() => {
                                    setActiveTab("Opportunity");
                                }}
                                key={ 'Opportunity' }
                                    >
                                {/* DataChart Section */}                  
<h5>Opportunity</h5>
Opportunity
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Organization'
                                active={ activeTab == 'Organization' }
                                onClick={() => {
                                    setActiveTab("Organization");
                                }}
                                key={ 'Organization' }
                                    >
                                {/* DataChart Section */}                  
<h5>Organization</h5>
Organization
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Principal'
                                active={ activeTab == 'Principal' }
                                onClick={() => {
                                    setActiveTab("Principal");
                                }}
                                key={ 'Principal' }
                                    >
                                {/* DataChart Section */}                  
<h5>Principal</h5>
Principal
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Rating'
                                active={ activeTab == 'Rating' }
                                onClick={() => {
                                    setActiveTab("Rating");
                                }}
                                key={ 'Rating' }
                                    >
                                {/* DataChart Section */}                  
<h5>Rating</h5>
Rating
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Role'
                                active={ activeTab == 'Role' }
                                onClick={() => {
                                    setActiveTab("Role");
                                }}
                                key={ 'Role' }
                                    >
                                {/* DataChart Section */}                  
<h5>Role</h5>
Role
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='SalesActivity'
                                active={ activeTab == 'SalesActivity' }
                                onClick={() => {
                                    setActiveTab("SalesActivity");
                                }}
                                key={ 'SalesActivity' }
                                    >
                                {/* DataChart Section */}                  
<h5>Sales Activity</h5>
SalesActivity
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='SalesPipeline'
                                active={ activeTab == 'SalesPipeline' }
                                onClick={() => {
                                    setActiveTab("SalesPipeline");
                                }}
                                key={ 'SalesPipeline' }
                                    >
                                {/* DataChart Section */}                  
<h5>Sales Pipeline</h5>
SalesPipeline
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='SecureKey'
                                active={ activeTab == 'SecureKey' }
                                onClick={() => {
                                    setActiveTab("SecureKey");
                                }}
                                key={ 'SecureKey' }
                                    >
                                {/* DataChart Section */}                  
<h5>Secure Key</h5>
SecureKey
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Task'
                                active={ activeTab == 'Task' }
                                onClick={() => {
                                    setActiveTab("Task");
                                }}
                                key={ 'Task' }
                                    >
                                {/* DataChart Section */}                  
<h5>Task</h5>
Task
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Weapon'
                                active={ activeTab == 'Weapon' }
                                onClick={() => {
                                    setActiveTab("Weapon");
                                }}
                                key={ 'Weapon' }
                                    >
                                {/* DataChart Section */}                  
<h5>Weapon</h5>
Weapon
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='Workflow'
                                active={ activeTab == 'Workflow' }
                                onClick={() => {
                                    setActiveTab("Workflow");
                                }}
                                key={ 'Workflow' }
                                    >
                                {/* DataChart Section */}                  
<h5>Workflow</h5>
Workflow
                            </NavDropdown.Item>


                            <NavDropdown.Item
                                title='WorkflowState'
                                active={ activeTab == 'WorkflowState' }
                                onClick={() => {
                                    setActiveTab("WorkflowState");
                                }}
                                key={ 'WorkflowState' }
                                    >
                                {/* DataChart Section */}                  
<h5>Workflow State</h5>
WorkflowState
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav.Item>
            </Nav>

            <Tabs>

            <Tab
             title={null}
             eventKey="AclEntry" 
             active={ activeTab == 'AclEntry' }
            >
                <h1>AclEntry</h1>
                <Tabs key={'AclEntry'}>
                    <Tab title='AclEntry Chart'
                            eventKey="AclEntryC"
                    >
                        <AclEntryChart /> 
                    </Tab>     
                    <Tab title='AclEntry Table'
                            eventKey="AclEntryT"
                    >
                        <AclEntryTable />
                    </Tab>
                    <Tab title='Edit AclEntry'
                            eventKey="AclEntryF"
                    >
                        <AclEntryForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Address" 
             active={ activeTab == 'Address' }
            >
                <h1>Address</h1>
                <Tabs key={'Address'}>
                    <Tab title='Address Chart'
                            eventKey="AddressC"
                    >
                        <AddressChart /> 
                    </Tab>     
                    <Tab title='Address Table'
                            eventKey="AddressT"
                    >
                        <AddressTable />
                    </Tab>
                    <Tab title='Edit Address'
                            eventKey="AddressF"
                    >
                        <AddressForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Application" 
             active={ activeTab == 'Application' }
            >
                <h1>Application</h1>
                <Tabs key={'Application'}>
                    <Tab title='Application Chart'
                            eventKey="ApplicationC"
                    >
                        <ApplicationChart /> 
                    </Tab>     
                    <Tab title='Application Table'
                            eventKey="ApplicationT"
                    >
                        <ApplicationTable />
                    </Tab>
                    <Tab title='Edit Application'
                            eventKey="ApplicationF"
                    >
                        <ApplicationForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Attack" 
             active={ activeTab == 'Attack' }
            >
                <h1>Attack</h1>
                <Tabs key={'Attack'}>
                    <Tab title='Attack Chart'
                            eventKey="AttackC"
                    >
                        <AttackChart /> 
                    </Tab>     
                    <Tab title='Attack Table'
                            eventKey="AttackT"
                    >
                        <AttackTable />
                    </Tab>
                    <Tab title='Edit Attack'
                            eventKey="AttackF"
                    >
                        <AttackForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="ChatMessage" 
             active={ activeTab == 'ChatMessage' }
            >
                <h1>ChatMessage</h1>
                <Tabs key={'ChatMessage'}>
                    <Tab title='ChatMessage Chart'
                            eventKey="ChatMessageC"
                    >
                        <ChatMessageChart /> 
                    </Tab>     
                    <Tab title='ChatMessage Table'
                            eventKey="ChatMessageT"
                    >
                        <ChatMessageTable />
                    </Tab>
                    <Tab title='Edit ChatMessage'
                            eventKey="ChatMessageF"
                    >
                        <ChatMessageForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="ChatResponse" 
             active={ activeTab == 'ChatResponse' }
            >
                <h1>ChatResponse</h1>
                <Tabs key={'ChatResponse'}>
                    <Tab title='ChatResponse Chart'
                            eventKey="ChatResponseC"
                    >
                        <ChatResponseChart /> 
                    </Tab>     
                    <Tab title='ChatResponse Table'
                            eventKey="ChatResponseT"
                    >
                        <ChatResponseTable />
                    </Tab>
                    <Tab title='Edit ChatResponse'
                            eventKey="ChatResponseF"
                    >
                        <ChatResponseForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="ContentData" 
             active={ activeTab == 'ContentData' }
            >
                <h1>ContentData</h1>
                <Tabs key={'ContentData'}>
                    <Tab title='ContentData Chart'
                            eventKey="ContentDataC"
                    >
                        <ContentDataChart /> 
                    </Tab>     
                    <Tab title='ContentData Table'
                            eventKey="ContentDataT"
                    >
                        <ContentDataTable />
                    </Tab>
                    <Tab title='Edit ContentData'
                            eventKey="ContentDataF"
                    >
                        <ContentDataForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="ContentMediaLink" 
             active={ activeTab == 'ContentMediaLink' }
            >
                <h1>ContentMediaLink</h1>
                <Tabs key={'ContentMediaLink'}>
                    <Tab title='ContentMediaLink Chart'
                            eventKey="ContentMediaLinkC"
                    >
                        <ContentMediaLinkChart /> 
                    </Tab>     
                    <Tab title='ContentMediaLink Table'
                            eventKey="ContentMediaLinkT"
                    >
                        <ContentMediaLinkTable />
                    </Tab>
                    <Tab title='Edit ContentMediaLink'
                            eventKey="ContentMediaLinkF"
                    >
                        <ContentMediaLinkForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Customer" 
             active={ activeTab == 'Customer' }
            >
                <h1>Customer</h1>
                <Tabs key={'Customer'}>
                    <Tab title='Customer Chart'
                            eventKey="CustomerC"
                    >
                        <CustomerChart /> 
                    </Tab>     
                    <Tab title='Customer Table'
                            eventKey="CustomerT"
                    >
                        <CustomerTable />
                    </Tab>
                    <Tab title='Edit Customer'
                            eventKey="CustomerF"
                    >
                        <CustomerForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="EventLog" 
             active={ activeTab == 'EventLog' }
            >
                <h1>EventLog</h1>
                <Tabs key={'EventLog'}>
                    <Tab title='EventLog Chart'
                            eventKey="EventLogC"
                    >
                        <EventLogChart /> 
                    </Tab>     
                    <Tab title='EventLog Table'
                            eventKey="EventLogT"
                    >
                        <EventLogTable />
                    </Tab>
                    <Tab title='Edit EventLog'
                            eventKey="EventLogF"
                    >
                        <EventLogForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="ExecModule" 
             active={ activeTab == 'ExecModule' }
            >
                <h1>ExecModule</h1>
                <Tabs key={'ExecModule'}>
                    <Tab title='ExecModule Chart'
                            eventKey="ExecModuleC"
                    >
                        <ExecModuleChart /> 
                    </Tab>     
                    <Tab title='ExecModule Table'
                            eventKey="ExecModuleT"
                    >
                        <ExecModuleTable />
                    </Tab>
                    <Tab title='Edit ExecModule'
                            eventKey="ExecModuleF"
                    >
                        <ExecModuleForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Game" 
             active={ activeTab == 'Game' }
            >
                <h1>Game</h1>
                <Tabs key={'Game'}>
                    <Tab title='Game Chart'
                            eventKey="GameC"
                    >
                        <GameChart /> 
                    </Tab>     
                    <Tab title='Game Table'
                            eventKey="GameT"
                    >
                        <GameTable />
                    </Tab>
                    <Tab title='Edit Game'
                            eventKey="GameF"
                    >
                        <GameForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="IntegrationAccount" 
             active={ activeTab == 'IntegrationAccount' }
            >
                <h1>IntegrationAccount</h1>
                <Tabs key={'IntegrationAccount'}>
                    <Tab title='IntegrationAccount Chart'
                            eventKey="IntegrationAccountC"
                    >
                        <IntegrationAccountChart /> 
                    </Tab>     
                    <Tab title='IntegrationAccount Table'
                            eventKey="IntegrationAccountT"
                    >
                        <IntegrationAccountTable />
                    </Tab>
                    <Tab title='Edit IntegrationAccount'
                            eventKey="IntegrationAccountF"
                    >
                        <IntegrationAccountForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Level" 
             active={ activeTab == 'Level' }
            >
                <h1>Level</h1>
                <Tabs key={'Level'}>
                    <Tab title='Level Chart'
                            eventKey="LevelC"
                    >
                        <LevelChart /> 
                    </Tab>     
                    <Tab title='Level Table'
                            eventKey="LevelT"
                    >
                        <LevelTable />
                    </Tab>
                    <Tab title='Edit Level'
                            eventKey="LevelF"
                    >
                        <LevelForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="LlmDetails" 
             active={ activeTab == 'LlmDetails' }
            >
                <h1>LlmDetails</h1>
                <Tabs key={'LlmDetails'}>
                    <Tab title='LlmDetails Chart'
                            eventKey="LlmDetailsC"
                    >
                        <LlmDetailsChart /> 
                    </Tab>     
                    <Tab title='LlmDetails Table'
                            eventKey="LlmDetailsT"
                    >
                        <LlmDetailsTable />
                    </Tab>
                    <Tab title='Edit LlmDetails'
                            eventKey="LlmDetailsF"
                    >
                        <LlmDetailsForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Login" 
             active={ activeTab == 'Login' }
            >
                <h1>Login</h1>
                <Tabs key={'Login'}>
                    <Tab title='Login Chart'
                            eventKey="LoginC"
                    >
                        <LoginChart /> 
                    </Tab>     
                    <Tab title='Login Table'
                            eventKey="LoginT"
                    >
                        <LoginTable />
                    </Tab>
                    <Tab title='Edit Login'
                            eventKey="LoginF"
                    >
                        <LoginForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Logout" 
             active={ activeTab == 'Logout' }
            >
                <h1>Logout</h1>
                <Tabs key={'Logout'}>
                    <Tab title='Logout Chart'
                            eventKey="LogoutC"
                    >
                        <LogoutChart /> 
                    </Tab>     
                    <Tab title='Logout Table'
                            eventKey="LogoutT"
                    >
                        <LogoutTable />
                    </Tab>
                    <Tab title='Edit Logout'
                            eventKey="LogoutF"
                    >
                        <LogoutForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Opportunity" 
             active={ activeTab == 'Opportunity' }
            >
                <h1>Opportunity</h1>
                <Tabs key={'Opportunity'}>
                    <Tab title='Opportunity Chart'
                            eventKey="OpportunityC"
                    >
                        <OpportunityChart /> 
                    </Tab>     
                    <Tab title='Opportunity Table'
                            eventKey="OpportunityT"
                    >
                        <OpportunityTable />
                    </Tab>
                    <Tab title='Edit Opportunity'
                            eventKey="OpportunityF"
                    >
                        <OpportunityForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Organization" 
             active={ activeTab == 'Organization' }
            >
                <h1>Organization</h1>
                <Tabs key={'Organization'}>
                    <Tab title='Organization Chart'
                            eventKey="OrganizationC"
                    >
                        <OrganizationChart /> 
                    </Tab>     
                    <Tab title='Organization Table'
                            eventKey="OrganizationT"
                    >
                        <OrganizationTable />
                    </Tab>
                    <Tab title='Edit Organization'
                            eventKey="OrganizationF"
                    >
                        <OrganizationForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Principal" 
             active={ activeTab == 'Principal' }
            >
                <h1>Principal</h1>
                <Tabs key={'Principal'}>
                    <Tab title='Principal Chart'
                            eventKey="PrincipalC"
                    >
                        <PrincipalChart /> 
                    </Tab>     
                    <Tab title='Principal Table'
                            eventKey="PrincipalT"
                    >
                        <PrincipalTable />
                    </Tab>
                    <Tab title='Edit Principal'
                            eventKey="PrincipalF"
                    >
                        <PrincipalForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Rating" 
             active={ activeTab == 'Rating' }
            >
                <h1>Rating</h1>
                <Tabs key={'Rating'}>
                    <Tab title='Rating Chart'
                            eventKey="RatingC"
                    >
                        <RatingChart /> 
                    </Tab>     
                    <Tab title='Rating Table'
                            eventKey="RatingT"
                    >
                        <RatingTable />
                    </Tab>
                    <Tab title='Edit Rating'
                            eventKey="RatingF"
                    >
                        <RatingForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Role" 
             active={ activeTab == 'Role' }
            >
                <h1>Role</h1>
                <Tabs key={'Role'}>
                    <Tab title='Role Chart'
                            eventKey="RoleC"
                    >
                        <RoleChart /> 
                    </Tab>     
                    <Tab title='Role Table'
                            eventKey="RoleT"
                    >
                        <RoleTable />
                    </Tab>
                    <Tab title='Edit Role'
                            eventKey="RoleF"
                    >
                        <RoleForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="SalesActivity" 
             active={ activeTab == 'SalesActivity' }
            >
                <h1>SalesActivity</h1>
                <Tabs key={'SalesActivity'}>
                    <Tab title='SalesActivity Chart'
                            eventKey="SalesActivityC"
                    >
                        <SalesActivityChart /> 
                    </Tab>     
                    <Tab title='SalesActivity Table'
                            eventKey="SalesActivityT"
                    >
                        <SalesActivityTable />
                    </Tab>
                    <Tab title='Edit SalesActivity'
                            eventKey="SalesActivityF"
                    >
                        <SalesActivityForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="SalesPipeline" 
             active={ activeTab == 'SalesPipeline' }
            >
                <h1>SalesPipeline</h1>
                <Tabs key={'SalesPipeline'}>
                    <Tab title='SalesPipeline Chart'
                            eventKey="SalesPipelineC"
                    >
                        <SalesPipelineChart /> 
                    </Tab>     
                    <Tab title='SalesPipeline Table'
                            eventKey="SalesPipelineT"
                    >
                        <SalesPipelineTable />
                    </Tab>
                    <Tab title='Edit SalesPipeline'
                            eventKey="SalesPipelineF"
                    >
                        <SalesPipelineForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="SecureKey" 
             active={ activeTab == 'SecureKey' }
            >
                <h1>SecureKey</h1>
                <Tabs key={'SecureKey'}>
                    <Tab title='SecureKey Chart'
                            eventKey="SecureKeyC"
                    >
                        <SecureKeyChart /> 
                    </Tab>     
                    <Tab title='SecureKey Table'
                            eventKey="SecureKeyT"
                    >
                        <SecureKeyTable />
                    </Tab>
                    <Tab title='Edit SecureKey'
                            eventKey="SecureKeyF"
                    >
                        <SecureKeyForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Task" 
             active={ activeTab == 'Task' }
            >
                <h1>Task</h1>
                <Tabs key={'Task'}>
                    <Tab title='Task Chart'
                            eventKey="TaskC"
                    >
                        <TaskChart /> 
                    </Tab>     
                    <Tab title='Task Table'
                            eventKey="TaskT"
                    >
                        <TaskTable />
                    </Tab>
                    <Tab title='Edit Task'
                            eventKey="TaskF"
                    >
                        <TaskForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Weapon" 
             active={ activeTab == 'Weapon' }
            >
                <h1>Weapon</h1>
                <Tabs key={'Weapon'}>
                    <Tab title='Weapon Chart'
                            eventKey="WeaponC"
                    >
                        <WeaponChart /> 
                    </Tab>     
                    <Tab title='Weapon Table'
                            eventKey="WeaponT"
                    >
                        <WeaponTable />
                    </Tab>
                    <Tab title='Edit Weapon'
                            eventKey="WeaponF"
                    >
                        <WeaponForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="Workflow" 
             active={ activeTab == 'Workflow' }
            >
                <h1>Workflow</h1>
                <Tabs key={'Workflow'}>
                    <Tab title='Workflow Chart'
                            eventKey="WorkflowC"
                    >
                        <WorkflowChart /> 
                    </Tab>     
                    <Tab title='Workflow Table'
                            eventKey="WorkflowT"
                    >
                        <WorkflowTable />
                    </Tab>
                    <Tab title='Edit Workflow'
                            eventKey="WorkflowF"
                    >
                        <WorkflowForm />
                    </Tab>
                </Tabs>
            </Tab>

            <Tab
             title={null}
             eventKey="WorkflowState" 
             active={ activeTab == 'WorkflowState' }
            >
                <h1>WorkflowState</h1>
                <Tabs key={'WorkflowState'}>
                    <Tab title='WorkflowState Chart'
                            eventKey="WorkflowStateC"
                    >
                        <WorkflowStateChart /> 
                    </Tab>     
                    <Tab title='WorkflowState Table'
                            eventKey="WorkflowStateT"
                    >
                        <WorkflowStateTable />
                    </Tab>
                    <Tab title='Edit WorkflowState'
                            eventKey="WorkflowStateF"
                    >
                        <WorkflowStateForm />
                    </Tab>
                </Tabs>
            </Tab>

            </Tabs>
        </Container>
    );
};

export default DataWorkbook;
