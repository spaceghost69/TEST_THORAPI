import { useState } from "react";

import AcceptCookies from "../components/AcceptCookies";

import { Col, Container, Image, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/peragon-inc.png";

function Footer() {
  const [hideCookieDialog, setHideCookieDialog] = useState(true);
  const [cookie, setCookie] = useCookies(["accept-cookie-policy"]);

  let acceptedCookie = (cookie["accept-cookie-policy"] === "accepted");

  return (
    <footer className="footerFade">
      {!acceptedCookie && (
        <AcceptCookies
          show={true}
          onHide={() => {
            setHideCookieDialog(!hideCookieDialog);
          }}
        />
      )}
      <div
        style={{
          marginTop: "10em",
          margin: "2em",
          marginBottom: "1em",
          padding: "2em",
          borderRadius: "2%",
          backgroundColor: "rgba(0,0,0,0.35)",
        }}
      >
        <Col md={12} className="text-center">
          <Container>
            <Row>
              <Col md={4}>
                <a href="/">
                  <Image src={logo} width="50%" />
                </a>
              </Col>

              <Col md={4} className="social-links text-center">
                <h4>FOLLOW US</h4>
                <br /><br />
                <a href="https://www.facebook.com/profile.php?id=61567076038650">
                  <FaFacebookF />
                </a>

                <a href="https://www.instagram.com/valkyrlabs">
                  <FaInstagram />
                </a>

                <a href="mailto:info@valkyrlabs.com">
                  <FaEnvelope />
                </a>
                <br /><br />
              </Col>

              <Col md={4}>
                <h4>LEGAL</h4>

                <a href="/v1/docs/Legal/tos">TOS</a>
                {" "}<a href="/v1/docs/Legal/privacy">Privacy</a>
                {" "}<a href="/v1/docs/Legal/eula">EULA</a>
                {" "}<a href="/v1/docs/Legal/gdpr">GDPR</a>
                {" "}<a href="/v1/docs/Legal/dpa">DPA</a>
                <br />
                <span className="tiny">
                  Percival the Dragon Slayer™ is a made up trademark of the imaginary Peragon Games INC.
                  <br />
                  Content is ©{new Date().getFullYear()} Valkyr Labs Inc, all rights reserved.
                </span>
              </Col>
            </Row>
            <b>
              <br />
              <br />
              <br />
              Peragon Games Inc -- a fake company!
              <br />
              <span className="tiny">
                <a href="https://valkyrlabs.com">Powered by ValkyrAI™ -- a REAL AI-powered CodeGen Platform</a>
              </span>
              <br />
            </b>
          </Container>
        </Col>
      </div>
    </footer>
  );
}
export default Footer;
