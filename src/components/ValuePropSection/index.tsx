/*
 * ProductInfoCards
 */

import { Card, Col, Container, Row } from "react-bootstrap";

// import "./index.css";


const ValuePropSection = (pageName: any) => {

    let valkyraiPage = pageName == 'valkyrai';

    if (!valkyraiPage) {
        valkyraiPage = window.location.pathname.indexOf('valkyrai') > 0;
    }

    let heimdallPage = pageName == 'heimdallPage';
    if (!heimdallPage) {
        heimdallPage = window.location.pathname.indexOf('heimdall') > 0;
    }
    let thorapiPage = pageName == 'thorapiPage';
    if (!thorapiPage) {
        thorapiPage = window.location.pathname.indexOf('thorapi') > 0;
    }

    let colDivisor = 6;
    if (
        !valkyraiPage && !heimdallPage && !thorapiPage) {
        colDivisor = 4;
    }

    return (
        <section
            id="risk"
            className="text-white py-5"
            style={{ backgroundColor: "#0f0f0f" }}
        >
            <Container>
                <Row className="text-center">
                    <Col>
                        <h2 className="mb-5">What are the Costs of Falling Behind?</h2>
                        <p className="lead">
                            In the age of AI and automation, legacy systems are a liability.
                            Can your business afford the risks of insecure code, manual
                            workflows, or costly downtime? By not using our tools, you’re
                            choosing inefficiency, vulnerability, and stagnation.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    <Col md={4}>
                        <Card className="bg-dark text-white shadow-lg">
                            <Card.Body>
                                <Card.Title as="h4" style={{ color: "#ff8c00" }}>
                                    Outdated Code is a Weak Link
                                </Card.Title>
                                <Card.Text>
                                    Leaving your APIs outdated is an open door to security
                                    breaches. With ThorAPI™, you can generate secure code at the
                                    speed of innovation.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark text-white shadow-lg">
                            <Card.Body>
                                <Card.Title as="h4" style={{ color: "#ff8c00" }}>
                                    Manual Workflows Waste Time
                                </Card.Title>
                                <Card.Text>
                                    Relying on manual processes is a costly bottleneck. Automate
                                    and optimize workflows with Percival the Dragon Slayer™, and turn downtime into
                                    efficiency.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="bg-dark text-white shadow-lg">
                            <Card.Body>
                                <Card.Title as="h4" style={{ color: "#ff8c00" }}>
                                    Your Competitors Aren’t Waiting
                                </Card.Title>
                                <Card.Text>
                                    While you’re catching up, your competitors are moving
                                    forward with AI-powered solutions. Use HeimdaLLM™ to stay
                                    ahead, adapt faster, and build smarter.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ValuePropSection;
