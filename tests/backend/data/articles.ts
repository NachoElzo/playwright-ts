import random from "../../../helpers/random.ts";

export const articles = {
  article1: {
    title: `new article --> ${random.randomString()}`,
    description: "Article 1 Description",
    body: "Article 1 Body",
    tagList: ["tag1", "tag2"],
  },
  article2: {
    title: `new article --> ${random.randomString()}`,
    description: "Article 2 Description",
    body: "Article 2 Body",
    tagList: ["tag3", "tag4"],
  },
};
