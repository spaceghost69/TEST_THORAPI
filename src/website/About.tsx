import { Fade } from "react-awesome-reveal";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import img2 from "../assets/images/dragon-good.png";
import img1 from "../assets/images/percival_vs_dragon_hero.png";
import CTASection from "../components/CTASection";
import ProductSection from "../components/ProductSection";
function About() {
  return (
    <Container fluid className="App p-3">
      <Row className="align-items-center text-center hero-section">
        <Col>
          <Fade direction="up"><>
            <h1>Peragon Games INC</h1>
            <p>The future of software is here.</p>
            </>
          </Fade>
        </Col>
      </Row>

      <Row id="story" className="my-5">
        <Col md={6} className="text-center">
          <Fade direction="down">
            <Image src={img1} alt="Innovative Design" fluid />
          </Fade>
        </Col>
        <Col md={6}>
          <Fade direction="left">
            <>
            <h2>Our Story</h2>
            <p>
              Inspired by the need for seamless, real-time collaboration among
              software developers across the globe, the founder of Peragon Games, John McMahon,
              utilized his vast experience over 3 decades of technology innovation 
              to create a platform where human inspiration meets the cutting-edge.
            </p>
            <p>
              John McMahon has been leading the world of Code Generation and developers
              tools for over 2 decades with an emphasis on Global Enterprises, and the
              security and encryption needs of the FinTech industry.

              
              <Link to="https://medium.com/bigdecimal/code-that-codes-pros-and-cons-of-code-generators-15b2e571281a">
                The Pros and Cons of Code Generators
              </Link>

            </p>
            </>
          </Fade>
        </Col>
      </Row>

      <Row className="align-items-center my-5">
        <Col md={6}>
          <Fade direction="right">
          <>
            <h2>Technology and Innovation</h2>
            <p>
              At the heart of Percival the Dragon Slayer lies a commitment to
              innovation—integrating sophisticated code generation with an
              intuitive user interface designed for softwareians of all levels.
            </p>
            </>
          </Fade>
        </Col>
        <Col md={6} className="text-center">
          <Fade direction="left">
            <Image src={img2} alt="Core Technology" fluid />
          </Fade>
        </Col>
      </Row>

    <CTASection />

      <Row className="my-5">
        <Col className="text-center">
          <Fade direction="up"><>
            <h2>The Future of Software Collaboration</h2>
            <p>
              Continuously pushing the boundaries, Percival the Dragon Slayer is set to redefine
              the software industry by enabling artists to not only collaborate but
              also connect and share their software with an ever-growing global
              audience.
            </p>
            </>
          </Fade>
        </Col>
      </Row>

      <ProductSection />
    </Container>
  );
}

export default About;
