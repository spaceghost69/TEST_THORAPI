import { Fade } from "react-awesome-reveal";
import { Alert, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import dragongood from "../assets/images/dragon-good.png";
import percival from "../assets/images/percival.png";
import { AudioPlayer } from "../components/AudioPlayer";
import CoolButton from "../components/CoolButton";
function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="valhalla">
        <Fade direction="down" triggerOnce={true}>
          <h1 className="display-3" style={{ fontWeight: "bold" }}>
            Peragon Games Presents...
          </h1>
          <br />
          <Alert style={{ fontSize: "1.2em" }}>Game of the Year 2044!</Alert>
          <h2 className="mt-3">"Percival the Dragon Slayer"</h2>
          <p className="lead mt-4" style={{ fontSize: "1.5em" }}>
            Embark on the adventure of a lifetime in a realm torn apart by fire, valor, and destiny. The clash between Percival the brave and Peragon the mighty will leave you breathless!
          </p>

          <CoolButton variant="warning" size="lg">
            Play Now!
          </CoolButton>
        </Fade>
      </div>


      {/* About the Game Section */}
      <section className="py-5" >
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mb-4" >
                The Legend of Percival
              </h2>
              <p>
                Born under the celestial alignment of the Twin Suns, Percival was destined for greatness. Trained by the ancient order of dragon slayers, he has mastered the art of combat, forging his path to greatness. But his journey is fraught with peril, for Peragon, the king of dragons, has vowed to annihilate humanity.
              </p>
              <p>
                With every strike of his blade, Percival fights not just for survival but for the soul of a world on the brink of destruction. From storming castle ruins to navigating treacherous caves, his journey is one of unyielding courage and relentless determination.
              </p>
            </Col>
            <Col md={6}>

              <img
                src={dragongood}
                alt="Handoff the Good Dragon"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </section>



      {/* Introduction Section */}
      <Fade direction="down">
        <Container
          style={{
            fontWeight: "bold",
            padding: "2em",
            backgroundColor: "#222222",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h1 className="display-3">
            Meet Percival the Dragon Slayer
          </h1>
          <h2>...and his nemesis, Peragon the Unforgiving Flame</h2>
          <p className="lead mt-4">
            <img
              src={percival}
              alt="Percival and Peragon"
              className="img-fluid rounded"
            />
            Enter the realm of Hadrith, a world where the skies are scorched by dragons and the ground trembles with the march of armies. Percival, the knight of prophecy, wields the legendary Blade of Light to defend the innocent from the tyranny of Peragon, the most fearsome dragon ever known. Will you rise to the challenge and carve your name into legend?
          </p>
          <Link to="/play">
            <CoolButton variant="warning">Join the Quest</CoolButton>
          </Link>
        </Container>
      </Fade>

      {/* Audio Content Section */}
      <section id="LLM" className="py-5" style={{ background: "#333", color: "white" }}>
        <Container>
          <Row>
            <Col md={6}>
              <h2 className="mb-4">
                Uncover the World of <span style={{ color: "#ff8c00" }}>Peragon</span>
              </h2>
              <p>
                Dive deeper into the lore with exclusive audio content. Explore the fiery rise of Peragon, the dragon king, and the valorous exploits of Percival. Listen to the tales and immerse yourself in the rich tapestry of this epic saga.
              </p>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12}>
                  <Fade direction="down">
                    <AudioPlayer
                      authorName="Jim and Sarah (AI Hosts)"
                      title="Peragon Podcast: Benefits of CodeGen"
                      subtitle="The virtual hosts discuss the benefits and savings associated with using ThorAPI CodeGen."
                      contentUrl="https://valkyrlabs.com/assets/audio/podcasts/Peragon-CodeGen-Podcast-Oct-2024.wav"
                    />
                  </Fade>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col md={12}>
                  <Fade direction="down">
                    <AudioPlayer
                      authorName="Jim and Sarah (AI Hosts)"
                      title="Peragon Podcast: Security with SecureField"
                      subtitle="The virtual hosts discuss how SecureField is the ultimate way to protect data at rest."
                      contentUrl="https://valkyrlabs.com/assets/audio/podcasts/Peragon-SecureField-Podcast-Oct-2024.wav"
                    />
                  </Fade>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-5 text-center" style={{ backgroundColor: "#ff8c00", color: "white" }}>
        <h2>Join the Fight</h2>
        <p>
          The fate of Hadrith hangs in the balance. Will you rise to the occasion and become the hero this world needs? The adventure awaits—download and play today!
        </p>
        <CoolButton variant="dark" size="lg">
          Download Now
        </CoolButton>
      </section>
    </>
  );
}

export default LandingPage;