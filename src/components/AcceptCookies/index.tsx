import React, { useEffect, useState } from "react";
import { Accordion, Col, Row, Toast, ToastContainer } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { FaHandshake, FaHandSpock } from "react-icons/fa";
import CoolButton from "../CoolButton";

interface AcceptCookiesProps {
  show: boolean;
  onHide: () => void;
}

const AcceptCookies: React.FC<AcceptCookiesProps> = () => {
  const [accepted, setAccepted] = useState(false);
  const [refused, setRefused] = useState(false);
  const [show, setShow] = useState(true);
  const [cookie, setCookie] = useCookies(["accept-cookie-policy"]);

  let acceptedCookie = (cookie["accept-cookie-policy"] === "accepted");

  useEffect(() => {
    if (acceptedCookie) {
      setAccepted(true);
    }
    if (show && acceptedCookie) {
      setTimeout(() => { setShow(false) }, 3000);
    }
    if (!show) {
      setShow(false);
    }
    if (cookie["accept-cookie-policy"] === "NOT_ACCEPTED") {
      setRefused(true);
    }
  }, [cookie, show]);

  return (
    <ToastContainer
      className="p-3"
      position="bottom-end"
      style={{ zIndex: 1 }}
    >
      <Toast onClose={() => setShow(false)} show={show} delay={3000} bg="dark">

        <Toast.Header>
          {!accepted && (
            <>
              {!refused && (
                <FaHandshake size={48} />
              )}
              {refused && !accepted && (
                <FaHandSpock size={48} />
              )}
              <strong className="me-auto"><div style={{ marginLeft: "1em", width: '100%', fontWeight: 'bold' }}>Please Read and Accept our TOS</div></strong>
            </>
          )}
        </Toast.Header>

        <Toast.Body>

          {accepted && (
            <h5>Welcome!</h5>
          )}


          {!accepted && refused && (

            <h3>You will need to accept the TOS to use our services</h3>

          )}


          {!accepted && (

            <Accordion flush>
              <Accordion.Item
                eventKey="privacy"
              >
                <Accordion.Header><b>Privacy Policy</b></Accordion.Header>
                <Accordion.Body>
                  We value your privacy and your data. We do not sell your data to third parties.
                  <br /><br />
                  For more details on how we use your data, please review our

                  <a
                    href="https://valkyrlabs.com/v1/docs/Legal/privacy/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <br />
                    <b>Privacy Policy</b>
                  </a>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                eventKey="cookies"
              >


                <Accordion.Header><b>Terms of Service</b></Accordion.Header>
                <Accordion.Body>
                  We and our partners use cookies for essential site functionality, analytics, and to improve your user experience.

                  <br />
                  By using this site, you agree to our{" "}
                  <br />
                  <a
                    href="https://valkyrlabs.com/v1/docs/Legal/tos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <b>Terms of Service</b>
                  </a>
                </Accordion.Body>
              </Accordion.Item>

            </Accordion>

          )}

          <br />

          <Row>
            <Col>
              {!accepted && (
                <CoolButton
                  variant={"info"}
                  onClick={() => {
                    setCookie("accept-cookie-policy", "accepted", { path: "/", maxAge: (1000 * 60 * 60 * 24 * 365 * 10) });
                    setAccepted(true);
                    setTimeout(() => setShow(false), 5000);
                  }}
                >
                  ACCEPT
                </CoolButton>
              )}
            </Col>
            <Col>
              {!accepted && (
                <CoolButton
                  variant={"warning"}
                  onClick={() => {
                    setCookie("accept-cookie-policy", "NOT_ACCEPTED", { path: "/" });
                    setAccepted(false);
                    setRefused(true);
                  }}
                >
                  DECLINE
                </CoolButton>
              )}
            </Col>
          </Row>




        </Toast.Body>
      </Toast>
    </ToastContainer >
  );
};

export default AcceptCookies;
