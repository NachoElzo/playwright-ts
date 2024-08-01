import apiArticles from "../requests/articles.js"; // Adjust the import path as needed
import { APIResponse } from "@playwright/test";
import { CreateUserPayload } from "../requests/articles.js"; // Ensure this matches the correct path
import { articles } from "../data/articles.js"; // Adjust the path to where your articles file is located

export async function createArticle(
  articleKey: "article1" | "article2" | "article3" | "article4",
  token: string
): Promise<string> {
  //gets the firts article from the article array as reference
  //select as parameter the articleKey
  const article = articles[0][articleKey];

  const payload: CreateUserPayload = {
    article: {
      title: article.title,
      description: article.description,
      body: article.body,
      tagList: article.tagList,
    },
  };

  // Make the API request and await the result
  const response: APIResponse = await apiArticles.postArticle(payload, token);

  // Check if the response is OK
  if (!response.ok()) {
    throw new Error(`API request failed with status ${response.status()}`);
  }

  const responseData = await response.json();
  return responseData.article.slug;
}
