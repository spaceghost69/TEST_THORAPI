/*
 * Signup Form
 */

import { Fade } from "react-awesome-reveal";
import { Badge, Card, Col, Container, Row } from "react-bootstrap";
import { Principal } from "../../thor/model";
import CTASection from "../CTASection";
import Form from "./form";
import "./index.css";

const initialPrincipal: Principal = {
  userName: "",
  password: "",
  email: "",
  createdDate: new Date(),
  lastModifiedDate: new Date(),
};

const Signup = (props) => {
  return (


    <Container
      style={{ marginBottom: "3em", marginTop: "2em", padding: 0 }}
      
    >
      <Row>
        <Col md={5}>
          <h1>Peragon User Account</h1>
          <h4>Signup is <Badge bg="info">FREE</Badge> and we will never SPAM you or sell your data.</h4>
        </Col>
        <Col md={7}>

          <Fade direction="down">

            <Card style={{ padding: "1em" }}>
              <Card.Header>
                <h5>
                  Claim your <Badge bg="info">FREE</Badge> Peragon Games user account.
                </h5>
              </Card.Header>
              <Card.Body>
                <Form />
              </Card.Body>
            </Card>
          </Fade>

          <CTASection />


        </Col>
      </Row>


    </Container >

  );
};

export default Signup;
