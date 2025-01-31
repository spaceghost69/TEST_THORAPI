import React from "react";
import renderer from "react-test-renderer";
import MarkdownCard from "../src/components/MarkdownCard";
import { ContentData, ContentDataCategoryEnum, ContentDataContentTypeEnum } from "../src/thor/model";

const content:ContentData = {
    "authorName": "Jimjam McYoyo",
    "title": "Amazing Things Happened",
    "subtitle": "Many detailed things about what all the things that hapened.",
    "contentUrl": "The url to the location of the full content",
    "contentData": "The full content",
    "contentType": ContentDataContentTypeEnum.Markdown,
    "thumbnailImage": "https://peragonlabs.com/assets/peragon_games_INC_LOGO-BKV9JIdt.png",
    "largeImage": "https://peragonlabs.com/assets/peragon_games_INC_LOGO-BKV9JIdt.png",
    "category": ContentDataCategoryEnum.BLOG,
    "status": ContentDataCategoryEnum.EDITINGg,
    "releaseDate": new Date(),
    "userId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    "id": "52599392-7fdf-4711-977b-a25bc4c19457",
    "ownerId": "a848450c-7762-493f-b04d-0adeda51d37d",
    "createdDate": new Date(),
    "lastAccessedById": "040d2efb-5e45-4c08-ad9b-9301221dab28",
    "lastAccessedDate": new Date(),
    "lastModifiedById": "d468e730-37b2-4ec7-b143-ef8a0628c074",
    "lastModifiedDate": new Date(),
  }

describe("Snapshot testing of MarkdownCard", () => {
  it("MarkdownCard snapshot", () => {
    const MarkdownCardS = renderer
      .create(<MarkdownCard 
        authorName={content.authorName}

        category={content.category}

         />)
      .toJSON();
    expect(MarkdownCardS).toMatchSnapshot();
  });
});
