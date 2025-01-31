import { Card } from "react-bootstrap";
import audio1 from "../../../../assets/audio/podcasts/Peragon CodeGen Podcast Oct 2024.m4a";
import { ContentData } from "../../thor/model";

const content: ContentData = {

};

export const AudioPlayer = (content) => {
  return (
    <Card bg="secondary" text="white" className="carouselCard text-center py-5">
      <Card.Title>
        <h1 className="lightOnDarkText">{content.title}</h1>
        {content.lastModifiedDate.toDateString()}
      </Card.Title>

      <Card.Subtitle>Author {content.authorName}</Card.Subtitle>
      <Card.Header>
        Released {content.releaseDate.toDateString()}
      </Card.Header>

      <Card.Body>
        <audio src={audio1} controls />
      </Card.Body>

      <Card.Footer>
        <h5>view more...</h5>
      </Card.Footer>
    </Card>
  );
};
