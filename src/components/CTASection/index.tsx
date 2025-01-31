/*
 * ProductInfoCards
 */

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaDollarSign, FaUser } from "react-icons/fa";
import CoolButton from "../CoolButton";
// import "./index.css";


const CTASection = () => {

    let valkyraiPage = window.location.pathname.indexOf('sign-up') > 0;

    return (

        <section
            id="cta"
            className="py-5 text-white text-center"
            style={{ backgroundColor: "#0a0a0a", marginTop: "3em", marginBottom: "3em" }}>
            <Container>
                <h2 style={{ fontWeight: "bold" }}>
                    Are You Ready to Lead the Future?
                </h2>
                <p className="lead">
                    The risks are clear. The tools are here. It’s time to take control
                    of your future with Peragon Games INC
                </p>

                <br /><br />
                <Row>
                    {!valkyraiPage && (
                        <Col>
                            <Link to="/sign-up">
                                <CoolButton variant="info"><FaUser /> SignUp</CoolButton>
                            </Link>
                        </Col>
                    )}
                    <Col>
                        <Link to="/pricing">
                            <CoolButton variant="success">
                                <FaDollarSign /> Pricing
                            </CoolButton>
                        </Link>
                    </Col>
                </Row>

                <br />

                <Link
                    style={{ float: 'right' }}
                    to="https://valkyrlabs.com/v1/docs/Legal/tos/">
                    Legal Stuff
                </Link>
                <br />
            </Container>
        </section >
    );
};

export default CTASection;
