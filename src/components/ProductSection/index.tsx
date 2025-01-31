/*
 * ProductInfoCards
 */

import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import CoolButton from "../CoolButton";
// import "./index.css";


const ProductSection = (pageName: any) => {

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
        <section id="products" className="py-5" style={{ backgroundColor: "#1b1b1b" }}>
            <Container>
                <h2 className="text-center text-white mb-3">Peragon Games: Pioneering AI CodeGen Solutions</h2>
                <Row>
                    {!valkyraiPage && (
                        <Col md={colDivisor}>
                            <Card className="bg-dark text-white shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3" style={{ color: "#ff8c00" }}>
                                        Percival the Dragon Slayer™
                                    </Card.Title>
                                    <Card.Text>
                                        Enterprise-grade automation and AI-powered efficiency. Percival the Dragon Slayer transforms your workflows, minimizes downtime, and maximizes productivity.
                                    </Card.Text>
                                    <Link to="/valkyrai">
                                        <CoolButton variant={"danger"}>Try Percival the Dragon Slayer™ Now</CoolButton>
                                    </Link>

                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                    )}
                    {!thorapiPage && (
                        <Col md={colDivisor}>
                            <Card className="bg-dark text-white shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3" style={{ color: "#ff8c00" }}>
                                        ThorAPI™
                                    </Card.Title>
                                    <Card.Text>
                                        A revolutionary platform for secure, scalable, and performant API generation. Stay ahead of the curve with ThorAPI, built for modern development.
                                    </Card.Text>
                                    <Link to="/thorapi">
                                        <CoolButton variant={"danger"}>
                                            Explore ThorAPI™
                                        </CoolButton>
                                    </Link>

                                </Card.Body>
                            </Card>
                            <br/>
                        </Col>
                    )}
                    {!heimdallPage && (
                        <Col md={colDivisor}>
                            <Card className="bg-dark text-white shadow-lg">
                                <Card.Body>
                                    <Card.Title as="h3" style={{ color: "#ff8c00" }}>
                                        HeimdaLLM™
                                    </Card.Title>
                                    <Card.Text>
                                        As APIs grow in complexity, Heimdall ensures they remain secure, scalable, and cutting-edge. It’s your AI-driven ally in the fast-evolving world of software development.
                                    </Card.Text>

                                    <Link to="/heimdall">
                                        <CoolButton variant={"danger"}>
                                            Explore HeimdaLLM™
                                        </CoolButton>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </section >
    );
};

export default ProductSection;
