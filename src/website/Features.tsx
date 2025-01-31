import { Fade } from "react-awesome-reveal";
import {
  Accordion,
  Badge,
  Card,
  Col,
  Container, Row
} from "react-bootstrap"; // Import Fade for fade animations
import CoolButton from "../components/CoolButton";
function Features() {
  return (
    <Container fluid className="App p-3">
      <Fade >
        <Container
          className="jumbotron"
          style={{ backgroundColor: "#333", color: "white" }}
        >
          <h1>Unleash Your Potential</h1>
          <p>
            Join a vibrant platform designed to amplify your software
            career—whether you're teaching, recording, or createming live.
          </p>
          <CoolButton>
            Discover More
          </CoolButton>
        </Container>
      </Fade>

      <Row className="my-4">
        <Col md={4}>
          <Fade >
            <>
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?software-teacher"
              />
              <Card.Body>
                <Card.Title>
                  Earn by Teaching <Badge bg="secondary">Trending</Badge>
                </Card.Title>
                <Card.Text>
                  Monetize your skills by offering lessons on our platform.
                  Reach students globally and grow your teaching business.
                </Card.Text>
                <CoolButton >Start Teaching</CoolButton>
              </Card.Body>
            </Card>
            </>
          </Fade>
        </Col>
        <Col md={4}>
          <Fade direction="up">
            <Card className="bg-dark text-white">
              <Card.Img
                variant="top"
                src="https://source.unsplash.com/600x400/?recording-studio"
              />
              <Card.Body>
                <Card.Title>Record with Top Tech</Card.Title>
                <Card.Text>
                  Access state-of-the-art recording tools to produce
                  high-quality software. Collaborate with bands and artists
                  remotely or in-studio.
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
                <Card.Title>create Sessions</Card.Title>
                <Card.Text>
                  Connect and create in real-time with softwareians across the globe.
                  Create software spontaneously with friends or new artists.
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

      <Fade >
        <CoolButton>
          Schedule Your First Session Today
        </CoolButton>
      </Fade>
    </Container>
  );
}

export default Features;
