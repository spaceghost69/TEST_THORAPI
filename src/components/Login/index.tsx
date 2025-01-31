/*
 * Login Form
 */

import { Fade } from "react-awesome-reveal";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Principal } from "../../thor/model";
import CTASection from "../CTASection";
import Form from "./form";
import "./index.css";

const initialUser:  Principal = {
  username: "",
  password: "",
  email: "",
  createdDate: new Date(),
  lastModifiedDate: new Date(),
};

const Login = (props) => {
  return (


    <Container
      style={{ marginBottom: "3em", marginTop: "2em", padding: 0 }}
      
    >
      <Row>
        <Col md={5}>
          <h1>Peragon User Account</h1>
          <h4>Login Now</h4>
        </Col>
        <Col md={7}>

          <Fade direction="down">

            <Card style={{ padding: "1em" }}>
              <Card.Header>
                <h5>
                  Sign into your Peragon Games user account.
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

export default Login;
