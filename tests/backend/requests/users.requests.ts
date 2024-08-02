import { APIResponse, request } from "@playwright/test";
import { CONDUIT_URL } from "../../../envconfig.ts";

async function postUser(payload: object): Promise<APIResponse> {
  const context = await request.newContext({ baseURL: CONDUIT_URL });
  return await context.post(`./api/users`, {
    data: payload,
  });
}

async function deleteUser(userId: string, token: string): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: "https://conduit-api.bondaracademy.com",
  });
  return await context.delete(`./account/user/${userId}`, {
    headers: { Authorization: token },
  });
}

async function postLogValidUser(payload: object): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: CONDUIT_URL,
  });
  return await context.post("./api/users/login", {
    data: payload,
  });
}

export default { postUser, deleteUser, postLogValidUser };
