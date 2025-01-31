import { useState } from "react";
import {
  FaInfoCircle,
  FaMailBulk,
  FaReadme,
  FaShieldAlt,
  FaUser
} from "react-icons/fa";

import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from "react-router-dom";
import logo from "./assets/images/peragon-inc.png";

function NavbarMenu() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>

      <Navbar
        expanded={expanded}
        className="navbarMenu"
        collapseOnSelect={true}
        expand="md"
        bg="transparent"
      >
        <Container style={{ float: "right" }}>
          <Navbar.Brand
            style={{ marginLeft: "1em", marginRight: "1em", marginTop: "0px", padding: "0px" }}
          >
            {!expanded && (
              <Navbar.Toggle
                style={{
                  backgroundColor: "black",
                  marginRight: "10px",
                  marginTop: "0px",
                  padding: "10px",
                }}
                onClick={() => setExpanded(!expanded)}
                aria-controls="responsive-navbar-nav"
              />
            )}

            <Link to="/" onClick={() => setExpanded(false)}>
              <Image src={logo} width="50%" style={{ marginTop: "1em", minWidth: "120px" }} />
            </Link>
          </Navbar.Brand>

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">


              <NavDropdown.Item >
                <Nav.Link>
                  <Link to="percival" onClick={() => setExpanded(false)} style={{ textDecoration: "none" }}>
                    <div className="">
                      <h5>
                        <FaShieldAlt size={38} style={{ textDecoration: "none", marginRight: ".25em" }} />
                        <span > Percival the Dragon Slayer™</span>
                        <br />
                      </h5>
                      <span >
                        API Powered Automation Platform.
                      </span>
                    </div>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>



              <NavDropdown.Item >
                <Nav.Link
                  onClick={() => {
                    window.open("https://valkyrlabs.com/docs");
                    setExpanded(false);
                  }}
                >
                  <div className="menuTextTop">
                    <h6><FaReadme size={38} style={{ marginRight: ".25em" }} />
                      <span className="menuTextContent">DOCS</span>

                      <span className="menuTextContentSM">
                        Peragon Docs
                      </span></h6>
                  </div>
                </Nav.Link>
              </NavDropdown.Item>


              <NavDropdown.Item >
                <Nav.Link>
                  <Link to="about" onClick={() => setExpanded(false)}>
                    <div className="menuTextTop">
                      <h6>
                        <FaInfoCircle size={38} style={{ marginRight: ".25em" }} />
                        <span className="menuTextContent">ABOUT</span>
                        <br />

                      </h6>
                      <span className="menuTextContentSM">
                        All about Percival the Dragon Slayer and our vision.
                      </span>
                    </div>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>



              <NavDropdown.Item >
                <Nav.Link>
                  <Link to="contact-us" onClick={() => setExpanded(false)}>
                    <div className="menuTextTop">
                      <h6>
                        <FaMailBulk size={38} style={{ marginRight: ".25em" }} />
                        <span className="menuTextContent">CONTACT</span>
                        <br />
                      </h6>
                      <span className="menuTextContentSM">
                        How to contact Peragon Games.
                      </span>
                    </div>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Nav.Link>
                  <Link to="sign-up" onClick={() => setExpanded(false)}>
                    <div className="menuTextTop">
                      <h6>
                        <FaUser size={38} style={{ marginRight: ".25em" }} />
                        <span className="menuTextContent">PROFILE</span>
                        <br />
                      </h6>
                      <span className="menuTextContentSM">
                        Manage your Peragon Account
                      </span>
                    </div>
                  </Link>
                </Nav.Link>
              </NavDropdown.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}


export default NavbarMenu;
