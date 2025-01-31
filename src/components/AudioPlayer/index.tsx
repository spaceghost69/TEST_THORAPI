import { Accordion, Col, Container, Row } from "react-bootstrap";
import { FaVolumeUp } from "react-icons/fa";
import { ContentData } from "../../thor/model";

export const AudioPlayer: React.FC<ContentData> = (content) => {

  const categoryLink = "/content/audio?category=" + content.category;
  return (

    <Container >
      <b className="lightOnDarkText"></b>
      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {content.title}
            <br />
            <span className="tiny">{content.authorName}</span>
          </Accordion.Header>
          <Accordion.Body>
            <div style={{float:"inline-end"}}>
              <audio src={content.contentUrl} controls />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>details</Accordion.Header>
          <Accordion.Body>
            <Row className="tiny">
              <Col md={2}>Created: </Col><Col>{new Date(content.createdDate).toUTCString()}</Col>
            </Row>
            <Row className="tiny">
              <Col md={2}>Released: </Col><Col>{new Date(content.releaseDate).toUTCString()}</Col>
            </Row>
            <Row className="tiny">
              <Col md={2}>Category: </Col><Col>{content.category}</Col>
            </Row>
            <Row className="tiny">
              <Col md={2}>Type: </Col><Col>{content.contentType}</Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>resources</Accordion.Header>
          <Accordion.Body>
            <a href={categoryLink}>
              <b>Click here to discover more {content.category} content <FaVolumeUp /></b>
            </a>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
};
