/*
 * MarkdownCard to display markdown content
 * in a nicely wrapped "Content" Card
 *
 *  (title and footer with author icon)
 */
import { Button, ButtonGroup, Carousel, Spinner } from "react-bootstrap";
import { ContentData, ContentDataContentTypeEnum } from "../../thor/model/ContentData";
import { useGetContentDatasQuery } from "../../thor/redux/services/ContentDataService";
import { AudioPlayer } from "../AudioPlayer";
import MarkdownCard from "../MarkdownCard";
import "./index.css";

interface ContentListProps {
  callback: () => void;
}

const ContentList: React.FC<ContentListProps> = ({ callback }) => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetContentDatasQuery();

  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // render UI based on data and loading state
  if (error) {
    console.log("ERROR:" + JSON.stringify(error));
    return <h4>... stay in the loop ... check back soon ...</h4>;

    // return "ERROR:" + JSON.stringify(error);
  }
  if (isLoading) {
    return (
      <>
        <Spinner />
        Loading...
      </>
    );
  }
  if (!data) {
    return "NO RESULTS";
  }


  return (
    <Carousel className="contentCarousel">
      {data.length == 0 && (
        <h1>Stay in the loop for news... check back soon!</h1>
      )}
      {data.map((cx: ContentData, idx) => {
        const releaseDate = new Date(cx.releaseDate);
        return new Date().getTime() > releaseDate.getTime() && (
          <Carousel.Item key={idx}>
            <div className="contentCarouselItem">
              {cx.contentType === ContentDataContentTypeEnum.AUDIO && (
                <AudioPlayer {...cx} />
              )}
              {cx.contentType !== ContentDataContentTypeEnum.AUDIO && (
                <>
                  <MarkdownCard
                    title={cx.title}
                    contentData={cx.contentData}
                    subtitle={cx.subtitle}
                    contentUrl={cx.contentUrl}
                    authorName={cx.authorName}
                    releaseDate={cx.releaseDate}
                    lastModifiedDate={cx.lastModifiedDate}
                  />
                  {callback != null && (
                    <ButtonGroup style={{ marginLeft: "10em" }}>
                      <Button className="tinyButton" onClick={callback} size="sm">edit</Button>
                      <Button className="tinyButton" onClick={callback} size="sm">new</Button>
                    </ButtonGroup>
                  )}
                </>
              )}
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default ContentList;
