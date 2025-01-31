import { useState } from "react";

import AcceptCookies from "../components/AcceptCookies";

import { CloseButton, Col, Image, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../assets/images/peragon-inc.png";

function MiniFooter() {
  const [hideCookieDialog, setHideCookieDialog] = useState(true);
  const [cookie, setCookie] = useCookies(["accept-cookie-policy"]);
  const [openFooter, setOpenFooter] = useState(false);

  let acceptedCookie = (cookie["accept-cookie-policy"] === "accepted");

  return (
    <div style={{ "position": "fixed", "bottom": "0px", "width": "100%" }}>
      {!acceptedCookie && (
        <AcceptCookies
          show={true}
          onHide={() => {
            setHideCookieDialog(!hideCookieDialog);
          }}
        />
      )}


      <div onClick={() => setOpenFooter(!openFooter)} style={{cursor:"pointer"}}>
        {!openFooter && (
          <p>show footer</p>
        )}
        {openFooter && (
          <CloseButton />
        )}
      </div>

      {openFooter && (

        <footer >
          <Row>
            <Col md={4}>
              <a href="/">
                <Image src={logo} width="20%" />
              </a>
            </Col>

            <Col md={4} className="social-links text-center">
              <h6>FOLLOW US</h6>

              <a href="https://www.facebook.com/profile.php?id=61567076038650">
                <FaFacebookF />
              </a>

              <a href="https://www.instagram.com/peragonlabs">
                <FaInstagram />
              </a>

              <a href="mailto:info@peragonlabs.com">
                <FaEnvelope />
              </a>
              <br /><br />
            </Col>

            <Col md={4}>
              <h6>LEGAL</h6>

              <a href="/v1/docs/Legal/tos">TOS</a>
              {" "}<a href="/v1/docs/Legal/privacy">Privacy</a>
              {" "}<a href="/v1/docs/Legal/eula">EULA</a>
              {" "}<a href="/v1/docs/Legal/gdpr">GDPR</a>
              {" "}<a href="/v1/docs/Legal/dpa">DPA</a>
              <br />
              <span className="tiny">
                ThorAPI™, Percival the Dragon Slayer™, and HeimdaLLM™ are trademarks of Peragon Games INC.
                <br />
                Content is ©{new Date().getFullYear()} Peragon Games INC, all rights reserved.
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <b>

                Peragon Games INC
                <span className="tiny">
                  {" "}| Proudly built in San Francisco, California USA
                </span>

              </b>
            </Col>
          </Row>
        </footer>
      )}
    </div>

  );
}
export default MiniFooter;
