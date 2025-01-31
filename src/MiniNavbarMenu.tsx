import { useState } from "react";
import {
  FaRegLightbulb,
  FaRegObjectGroup,
  FaRobot
} from "react-icons/fa";

import { Alert, CloseButton, Image, Nav, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import logo from "./assets/images/peragon-inc.png";

import LoginModal from "./components/Login/LoginModal";
const quotes = [
  {
    "id": 1,
    "author": "Albert Einstein",
    "description": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."
  },
  {
    "id": 2,
    "author": "Steve Jobs",
    "description": "Innovation distinguishes between a leader and a follower."
  },
  {
    "id": 3,
    "author": "Arthur C. Clarke",
    "description": "Any sufficiently advanced technology is indistinguishable from magic."
  },
  {
    "id": 4,
    "author": "Alan Turing",
    "description": "We can only see a short distance ahead, but we can see plenty there that needs to be done."
  },
  {
    "id": 5,
    "author": "Grace Hopper",
    "description": "The most dangerous phrase in the language is, 'We've always done it this way.'"
  },
  {
    "id": 6,
    "author": "Bill Gates",
    "description": "We always overestimate the change that will occur in the next two years and underestimate the change that will occur in the next ten."
  },
  {
    "id": 7,
    "author": "Elon Musk",
    "description": "I think it is possible for ordinary people to choose to be extraordinary."
  },
  {
    "id": 8,
    "author": "Sheryl Sandberg",
    "description": "Done is better than perfect."
  },
  {
    "id": 9,
    "author": "Mark Zuckerberg",
    "description": "The biggest risk is not taking any risk."
  },
  {
    "id": 10,
    "author": "Jeff Bezos",
    "description": "What's dangerous is not to evolve."
  },
  {
    "id": 11,
    "author": "Sundar Pichai",
    "description": "A person who is happy is not because everything is right in his life. He is happy because his attitude towards everything in his life is right."
  },
  {
    "id": 12,
    "author": "Larry Page",
    "description": "You don't need to have a 100-person company to develop that idea."
  },
  {
    "id": 13,
    "author": "Sergey Brin",
    "description": "Obviously everyone wants to be successful, but I want to be looked back on as being very innovative, very trusted, and ethical and ultimately making a big difference in the world."
  },
  {
    "id": 14,
    "author": "Marissa Mayer",
    "description": "I always did something I was a little not ready to do. I think that's how you grow."
  },
  {
    "id": 15,
    "author": "Tim Berners-Lee",
    "description": "We need diversity of thought in the world to face the new challenges."
  },
  {
    "id": 16,
    "author": "Vint Cerf",
    "description": "Science fiction does not remain fiction for long. And certainly not on the Internet."
  },
  {
    "id": 17,
    "author": "Stephen Hawking",
    "description": "Intelligence is the ability to adapt to change."
  },
  {
    "id": 18,
    "author": "Ada Lovelace",
    "description": "That brain of mine is something more than merely mortal; as time will show."
  },
  {
    "id": 19,
    "author": "Nikola Tesla",
    "description": "The present is theirs; the future, for which I really worked, is mine."
  },
  {
    "id": 20,
    "author": "Thomas Edison",
    "description": "I have not failed. I've just found 10,000 ways that won't work."
  }
]
  ;

function MiniNavbarMenu() {
  const [expanded, setExpanded] = useState(false);
  const [openHeader, setopenHeader] = useState(true);

  const qnum = (Math.round(Math.random() * 100) % quotes.length);
  return (
    <div>

      {false && ( // check for authenticated
        <LoginModal />
      )}


<Link to="https://amzn.to/4fBTLMB" >LINK TO AMAZON</Link>

      {openHeader && (
        <Navbar
          expanded={expanded}
          className="navbarMenu"
          collapseOnSelect={true}
          expand="md"
          bg="transparent"
        >

          <Navbar.Brand
            style={{ margin: "0px", marginTop: ".15em", padding: "0px" }}
          >
            {!expanded && (
              <Navbar.Toggle
                style={{
                  backgroundColor: "black",
                  marginRight: "5px",
                  marginTop: "4px",
                  padding: "5px",
                }}
                onClick={() => setExpanded(!expanded)}
                aria-controls="responsive-navbar-nav"
              />
            )}
            <Link to="/" onClick={() => setExpanded(false)}>
              <Image src={logo} width="35%" style={{ margin: "0px", marginLeft: "2em" }} />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">


              {false && (
                <Nav>
                  <Nav.Link>
                    <Link to="six-d-dashboard" onClick={() => setExpanded(false)}>
                      <div className="menuTextTop">
                        <FaRegLightbulb size={32} style={{ marginRight: ".25em" }} />
                        <b>HeimdaLLM</b>
                        <br />
                        <span className="menuTextContentSM">
                          API guidance and information from the API Agent HeimdaLLM -- all within a Business Methodology Framework
                        </span>
                      </div>
                    </Link>
                  </Nav.Link>


                  <Nav.Link>
                    <Link to="workflow-dashboard" onClick={() => setExpanded(false)}>
                      <div className="">
                        <FaRobot size={32} style={{ marginRight: ".25em" }} />
                        <b>Percival the Dragon Slayer</b>
                        <br />
                        <span className="menuTextContentSM">
                          Percival the Dragon Slayer Workflow Agents
                        </span>
                      </div>
                    </Link>
                  </Nav.Link>


                  <Nav.Link>
                    <Link to="dashboard" onClick={() => setExpanded(false)}>
                      <div className="menuTextTop">
                        <FaRegObjectGroup size={32} style={{ marginRight: ".25em" }} />
                        <b>ThorAPI</b>
                        <br />
                        <span className="menuTextContentSM">
                          Manage ThorAPI API Specs and Designs
                        </span>
                      </div>
                    </Link>
                  </Nav.Link>
                </Nav>
              )}

            </Nav>

            <Alert variant="success" style={{ maxWidth: "50%", "padding": "1em", "maxHeight": "80px", "margin": "1em" }}>
              <blockquote style={{ "paddingLeft": "1.5em" }}>
                {quotes[qnum].description}
                <br />--{quotes[qnum].author}
              </blockquote>
            </Alert>
          </Navbar.Collapse>
          {openHeader && (
            <CloseButton onClick={() => setopenHeader(!openHeader)} />
          )}
        </Navbar >
      )}
      <div onClick={() => setopenHeader(!openHeader)} style={{ cursor: "pointer" }}>
        {!openHeader && (
          <p>show header</p>
        )}

      </div>

    </div>
  );
}


export default MiniNavbarMenu;
