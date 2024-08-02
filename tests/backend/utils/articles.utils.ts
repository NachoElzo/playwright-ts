import { expect } from "@playwright/test";
import apiArticles from "../requests/articles.request.ts";
import { articles } from "../data/articles.ts";

async function createArticle(token: string, articleKey: string) {
  const article = articles[articleKey];
  if (!article) {
    throw new Error(`Article with key ${articleKey} not found`);
  }
  const { title, description, body, tagList } = article;

  const auth = `Token ${token}`;
  const payload: object = {
    article: {
      title: title,
      description: description,
      body: body,
      tagList: tagList, // Ensure 'tagList' key is correctly capitalized
    },
  };
  const request = await apiArticles.postArticles(payload, auth);
  expect(request).toBeOK();
  const response = await request.json();
  const articleId = response.article.slug;
  return articleId;
}

export default { createArticle };

// import { expect } from "@playwright/test";
// import apiArticles from "../requests/articles.request.ts";
// import { articles } from "../data/articles.ts";

// async function createArticle(token: string, articleKey: string) {
//   const articleIndex = articles.find((key) => articleKey in key);
//   if (!articleIndex) {
//     throw new Error(`User with key ${articleIndex} not found`);
//   }
//   const article = apiArticles[articleKey];
//   const { title, description, body, tagList } = article;

//   const auth = `Token ${token}`;
//   const payload: object = {
//     article: {
//       title: title,
//       description: description,
//       body: body,
//       taglist: tagList,
//     },
//   };
//   const request = await apiArticles.postArticles(payload, auth);
//   expect(request).toBeOK();
//   const response = await request.json();
//   const articleId = await response.slug;
//   return await articleId;
// }

// export default { createArticle };
