import { Fade } from "react-awesome-reveal";
import { Col, Container, Form, Row } from "react-bootstrap"; // For smooth fading transitions
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import CoolButton from "../components/CoolButton";
function ContactUs() {
  return (
    <Container className="App my-5">
      <Fade direction="up">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h1>Contact Us</h1>
            <p>
              Got a question? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </Col>
        </Row>
      </Fade>

      <Fade direction="up">
        <Row className="justify-content-center my-4">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your Message"
                />
              </Form.Group>

              <CoolButton >
                Submit
              </CoolButton>
            </Form>
          </Col>
        </Row>
      </Fade>

      <Fade >
        <Row className="justify-content-center mt-5">
          <Col md={8} className="text-center">
            <h2>Follow Us</h2>
            <Container className="social-links">
              <a href="https://facebook.com" className="me-3">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="me-3">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="me-3">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="me-3">
                <FaLinkedinIn />
              </a>
              <a href="mailto:info@example.com">
                <FaEnvelope />
              </a>
            </Container>
          </Col>
        </Row>
      </Fade>
    </Container>
  );
}

export default ContactUs;
