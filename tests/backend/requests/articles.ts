import { APIResponse, request } from "@playwright/test";
import { CONDUIT_URL } from "../../../envconfig.ts";

export interface CreateUserPayload {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}

async function postArticle(
  body: CreateUserPayload,
  token: string
): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: CONDUIT_URL,
    extraHTTPHeaders: {
      Authorization: `Token ${token}`,
    },
  });
  return await context.post(`./api/articles`, {
    data: body,
  });
}

export default { postArticle };
