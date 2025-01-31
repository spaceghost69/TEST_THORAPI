/*
 * MarkdownCard to display markdown content
 * in a nicely wrapped "Content" Card
 *
 *  (title and footer with author icon)
 */
import React, { useState } from "react";

import { Button, Card } from "react-bootstrap";
import Markdown from 'react-markdown';
import { ContentData } from "../../thor/model";
import "./index.css";

const MarkdownCard: React.FC<ContentData> = (content) => {
  const [showfullArticle, setShowFullArticle] = useState<boolean>(false);

  return (


    <Card >
      <Card.Title  className="contentCardTitle">
      <h2>{content.title}</h2>
      </Card.Title>
      <Card.Subtitle className="contentCardTitle">
        <p>
          by {content.authorName}
        </p>
      </Card.Subtitle>
      <Card.Header className="contentCardTitle">
        <h5>{content.subtitle}</h5>
      </Card.Header>
      <Card.Body className="contentCard">

        {showfullArticle && (
          <Markdown>
            {content.contentData}
          </Markdown>
        )}

        {!showfullArticle && (
          <Markdown>
            {content.contentData.substring(0, 500)}
          </Markdown>
        )}

      </Card.Body>
      <Card.Footer style={{ paddingLeft: "5em" }}>
        {(content.contentData.length > 2) && (
          <Button onClick={() => { setShowFullArticle(!showFullArticle) }} variant="link">read more...</Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default MarkdownCard;
