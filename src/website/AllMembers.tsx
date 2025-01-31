import { Fade } from "react-awesome-reveal";
import {
  Accordion,
  Badge,
  Card,
  Col,
  Container, Row
} from "react-bootstrap";

import CoolButton from "../components/CoolButton";
function AllMembers() {
  return (
    <Container fluid className="App p-3">
      <Fade direction="up">

      <Card
        className="text-white text-center"
        style={{ backgroundColor: "#0a0a0a", padding: "100px 0" }}
      >
        <Container fluid>
          <h1 className="display-3" style={{ fontWeight: "bold" }}>
            Unleash Your Creativity
          </h1>
          <p className="lead">
            Transform your development workflow with AI-driven solutions that
            accelerate delivery, enhance security, and scale effortlessly.
          </p>
        </Container>
      </Card>

        <Container
          className="jumbotron"
          style={{ backgroundColor: "#333", color: "white" }}
        >
          
          
        </Container>
      </Fade>

      <Row className="my-4">
        <Col md={4}>
          <Fade direction="up">
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?software-teacher"
              />
              <Card.Body>
                <Card.Title>
                <Badge bg="info">trending</Badge>
                <br/>
                  Supercharge Your Team
                </Card.Title>
                <Card.Text>
                  How much fun is it to create with your friends? A LOT of fun!
                </Card.Text>
                <CoolButton>Start createming</CoolButton>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade >
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?recording-studio"
              />
              <Card.Body>
              
                <Card.Title>
                  
                <Badge bg="secondary">new!</Badge>
                <br/>
                Develop on a Proven Stack</Card.Title>
                <Card.Text>
                  Millions of people and businesses depend upon the reliability, security, and scalability of the 
                  proven Java Spring Framework. From giant FinTech organizations to tiny startups, JVM-based stacks
                  are known for their scalability, reliability, and Enterprise-grade robustness.
                  <br/><br/>
                  There is essentially no problem in technology that cannot be solved with this stack.
                  <br/><br/>
                  Beyond Java, other languages can utilize the stack including Kotlin, and Python (via JPython) and even
                  Javascript and Typescript.
                  <br/><br/>
                  But ThorAPI and Percival the Dragon Slayer do not rely exclusively on JVM technology. The front end client code is 
                  generated in Node/React/Typescript -- the most popular and feature-rich front-end architecture available.
                  <br/><br/>
                  Generating an Enterprise-grade codebase is the priority of ThorAPI and you can rest assured that
                  your application stack is based on a solid bedrock of proven solutions.
                
                </Card.Text>
                <CoolButton >Explore Studios</CoolButton>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade direction="up">
            <>
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?create-session"
              />
              <Card.Body>
                <Card.Title>
                <Badge bg="primary">trending</Badge>
                <br/>
                  Create Robust Microservices</Card.Title>
                <Card.Text>
                  A modern microservices architecture is comprised of various backend and 3rd party services that
                  are orchestrated behind an Service Orchestration Layer and Application Gateway.
                  <br/><br/>
                  Microservice architecture has many benefits, and a few surprises along the way.
                  <br/><br/>
                  Join the discussion and decide if a Microservices Architecture is right for your project.


                </Card.Text>
                <CoolButton >Join a create</CoolButton>
              </Card.Body>
            </Card>
            </>
          </Fade>
        </Col>
      </Row>

      <Accordion defaultActiveKey="0" className="my-4">
        <Card bg="secondary" text="white">
          <Accordion.Header>Build Your Software Career</Accordion.Header>
          <Accordion.Collapse eventKey="0">
            <Fade direction="up">
              <Card.Body>
                Whether you're just starting or looking to expand your reach,
                get all the tools and insights you need to succeed in the software
                industry.
              </Card.Body>
            </Fade>
          </Accordion.Collapse>
        </Card>
        <Card bg="secondary" text="white">
          <Accordion.Header>Real-Time Collaboration</Accordion.Header>
          <Accordion.Collapse eventKey="1">
            <Fade direction="up">
              <Card.Body>
                Discover the thrill of live collaboration without leaving your
                home. Our platform's low-latency technology makes real-time
                software creation a breeze.
              </Card.Body>
            </Fade>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    </Container>
  );
}

export default AllMembers;
