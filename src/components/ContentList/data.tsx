/*
 * 
 * in a nicely wrapped "Content" Card
 *
 *  (title and footer with author icon)
 */
import {
  ContentData, // ThorAPI generated Model object
  ContentDataContentTypeEnum, // ThorAPI generated Model object enum value
} from "../../thor/model/ContentData";
import ContentDataForm from "../../thor/redux/components/form/ContentDataForm";

import {
  useGetContentDatasQuery // Get content data function -- fetches from ThorAPI REST api
} from "../../thor/redux/services/ContentDataService";

/*
* AudioPlayer and MarkdownCard are
* Custom hand-built components which take 
* ThorAPI generated Model Object parameters
*/
// AudioPlayer to play audio media content
import { AudioPlayer } from "../AudioPlayer";
// MarkdownCard to display markdown content
import MarkdownCard from "../MarkdownCard";

/**
 * A HOC (High Order Component) which displays a list of ContentData Objects
 * @param props
 * @returns 
 */
const ContentDataList = (props: ContentData[]) => {

  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetContentDatasQuery();

  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = ContentDataApi.endpoints.getContentDataByName.useQuery('cats')

  // render UI based on data and loading state
  if (error) {
    console.log("ERROR:" + JSON.stringify(error));
    return "ERROR:" + JSON.stringify(error);
  }
  if (isLoading) {
    return <b>Loading...</b>;
  }
  if (!data) {
    return <b>NO RESULTS</b>;
  }

  return (
    <div>
      <ContentDataForm />
      {data.length == 0 && (
        <h1>NO RESULTS</h1>
      )}
      {data.map((cx: ContentData) => (
        <div key={cx.id}>
          {cx.contentType === ContentDataContentTypeEnum.Audio && (
            <AudioPlayer {...cx} />
          )}
          {cx.contentType !== ContentDataContentTypeEnum.Markdown && (
            <MarkdownCard
              title={cx.title}
              contentData={cx.contentData}
              authorName={cx.authorName}
              releaseDate={cx.releaseDate}
              lastModifiedDate={cx.lastModifiedDate}
            />
          )}

        </div>
      ))}
    </div>
  );
};

export default ContentDataList;
