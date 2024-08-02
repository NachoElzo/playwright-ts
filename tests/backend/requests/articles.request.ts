//https://conduit-api.bondaracademy.com/api/articles/

import { APIResponse, request } from "@playwright/test";
import { CONDUIT_URL } from "../../../envconfig.ts";

async function postArticles(
  payload: object,
  auth: string
): Promise<APIResponse> {
  const context = await request.newContext({ baseURL: CONDUIT_URL });
  return await context.post(`./api/articles`, {
    data: payload,
    headers: { Authorization: auth },
  });
}

export default { postArticles };
