import { useState } from "react";
import { Accordion, Alert, Badge, Col, Container, Form, Row, Stack } from "react-bootstrap";
import { StrategicPriorityPriorityLevelEnum } from "../../thor/model";
import GoalDependencyForm from "../../thor/redux/components/form/GoalDependencyForm";
import GoalForm from "../../thor/redux/components/form/GoalForm";
import StrategicPriorityForm from "../../thor/redux/components/form/StrategicPriorityForm";
import GoalDependencyTable from "../../thor/redux/components/table/GoalDependencyTable";
import GoalTable from "../../thor/redux/components/table/GoalTable";
import StrategicPriorityTable from "../../thor/redux/components/table/StrategicPriorityTable";
import { useGetStrategicPrioritysQuery } from "../../thor/redux/services/StrategicPriorityService";
import FloatingControlPanel from "../OpenAPIViz/FloatingControlPanel";
import SplitPaneView2 from "../SplitPane/SplitPaneView2";
import "./index.css";

const StrategicPrioritiesList = () => {
    const { data, error, isLoading } = useGetStrategicPrioritysQuery();

    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState("name");
    const [reverseSort, setReverseSort] = useState(false);

    if (error) {
        return "ERROR:" + JSON.stringify(error);
    }
    if (isLoading) {
        return "Loading...";
    }
    if (!data) {
        return "NO USERS";
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (field) => {
        setSortField(field);
    };

    const handleReverseSort = () => {
        setReverseSort(!reverseSort);
    };

    const filterAndSortData = () => {
        let filteredData = data.filter((priority) =>
            priority.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            priority.goals.some((goal) => goal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                goal.goalDependencies.some((dep) => dep.dependencyName.toLowerCase().includes(searchTerm.toLowerCase()))
            )
        );

        filteredData.sort((a, b) => {
            const aValue = a[sortField]?.toString().toLowerCase() || "";
            const bValue = b[sortField]?.toString().toLowerCase() || "";
            return reverseSort ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        });

        return filteredData;
    };

    const getBadge = (priorityLevel) => {
        if (priorityLevel == null) {
            return <Badge bg={'info'}>NONE</Badge>;
        }
        let bgx = "secondary";
        switch (priorityLevel) {
            case StrategicPriorityPriorityLevelEnum.HIGH:
                bgx = "danger";
                break;
            case StrategicPriorityPriorityLevelEnum.MEDIUM:
                bgx = "warning";
                break;
            case StrategicPriorityPriorityLevelEnum.LOW:
                bgx = "success";
                break;
            case StrategicPriorityPriorityLevelEnum.CRITICAL:
                bgx = "warning";
                break;
        }
        return <Badge bg={bgx}>{priorityLevel}</Badge>;
    };

    const filteredData = filterAndSortData();

    return (
        <>
            <FloatingControlPanel
                description={"Search and Sort Strategies"}
            >
                <Container className="toolbar-container" style={{ marginBottom: "20px" }}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="searchTerm">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search by name, goal, or dependency..."
                                        value={searchTerm}
                                        onChange={handleSearch}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Group controlId="sortField">
                                    <Form.Label>Sort By</Form.Label>
                                    <Form.Select value={sortField} onChange={(e) => handleSortChange(e.target.value)}>
                                        <option value="name">Name</option>
                                        <option value="priorityLevel">Priority Level</option>
                                        <option value="startDate">Start Date</option>
                                        <option value="targetDate">Target Date</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={3}>
                                <Form.Check
                                    type="checkbox"
                                    label="Reverse Sort"
                                    checked={reverseSort}
                                    onChange={handleReverseSort}
                                    style={{ marginTop: "30px" }}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </FloatingControlPanel>


            <SplitPaneView2
            // splits = {1,4}
            >
                <Container className="card-list">
                    <Stack className="six-disciplines-container">
                        {filteredData.map((priority, i) => (
                            <Accordion key={i} style={{ height: '100%', width: '100%', marginTop: '1.5em' }} className="displayStackCard displayCard" >
                                <Accordion.Header>
                                    <Row>
                                        <Col md={2}>
                                            {getBadge(priority.priorityLevel)}
                                        </Col>
                                        <Col md={10}>
                                            <h4>{priority.name}</h4>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <p>{new Date(priority.startDate).toUTCString()}</p>to <p>{new Date(priority.targetDate).toUTCString()}</p>
                                        </Col>
                                    </Row>
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Row>
                                        <Col>
                                            <br />
                                            {new Date(priority.startDate).getTime() < new Date().getTime() && (
                                                <Alert variant="warning">START DATE PASSED:<br />{new Date(priority.startDate).toUTCString()}</Alert>
                                            )}
                                            {new Date(priority.startDate).getTime() > new Date().getTime() && (
                                                <Alert variant="info">START BY DATE:<br />{new Date(priority.startDate).toUTCString()}</Alert>
                                            )}
                                            {new Date(priority.targetDate).getTime() < new Date().getTime() && (
                                                <Alert variant="warning">COMPLETE DATE PASSED:<br />{new Date(priority.targetDate).toUTCString()}</Alert>
                                            )}
                                            {new Date(priority.targetDate).getTime() > new Date().getTime() && (
                                                <Alert variant="info">COMPLETE BY DATE:<br />{new Date(priority.targetDate).toUTCString()}</Alert>
                                            )}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col >
                                            <h6>{priority.description}</h6>
                                        </Col>
                                        <Col style={{ textAlign: 'left' }}>
                                            <Accordion>
                                                {priority.goals.map((goal, i) => (
                                                    <Accordion.Item eventKey={goal.id.toString()} key={i}>
                                                        <Accordion.Header>{goal.name}</Accordion.Header>
                                                        <Accordion.Body>
                                                            <Alert variant="warning">
                                                                <h5>{goal.name} [{goal.timeline}]: {goal.expectedOutcome}</h5>
                                                                {goal.goalDependencies.map((dependency, x) => (
                                                                    <Alert key={x}>{dependency.dependencyName}</Alert>
                                                                ))}
                                                            </Alert>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                ))}
                                            </Accordion>
                                        </Col>
                                    </Row>
                                </Accordion.Body>
                            </Accordion>
                        ))}
                    </Stack>
                </Container>

                <Container className="cardContainer">
                    <h1>Edit Your Strategic Plan</h1>
                    <Accordion>
                        <Accordion.Item eventKey="22">
                            <Accordion.Header>Edit Strategies</Accordion.Header>
                            <Accordion.Body>
                                <div style={{ margin: "2em" }}>
                                    <h2>Nail the Strategy!</h2>
                                    <p>Fail to Plan, Plan to Fail.</p>
                                    <StrategicPriorityTable />
                                    <StrategicPriorityForm />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="331">
                            <Accordion.Header>Edit Goals</Accordion.Header>
                            <Accordion.Body>
                                <div style={{ margin: "2em" }}>
                                    <h2>Edit Goals</h2>
                                    <p>Goals that result in success</p>
                                    <SplitPaneView2>
                                        <GoalTable />
                                        <GoalForm />
                                    </SplitPaneView2>
                                </div>
                                <div style={{ margin: "2em" }}>
                                    <h3>Track Goals Milestones and Dependencies</h3>
                                    <p>Tracking these details will allow your team to succeed on your Mission</p>
                                    <SplitPaneView2>
                                        <GoalDependencyTable />
                                        <GoalDependencyForm />
                                    </SplitPaneView2>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </SplitPaneView2>
        </>
    );
};

export default StrategicPrioritiesList;
