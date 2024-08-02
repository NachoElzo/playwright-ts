import { APIResponse, request } from "@playwright/test";
import { CONDUIT_URL } from "../../../envconfig.ts";

async function postUsers(payload: object): Promise<APIResponse> {
  const context = await request.newContext({ baseURL: CONDUIT_URL });
  return await context.post(`./api/users`, {
    data: payload,
  });
}

async function deleteUsers(
  userId: string,
  token: string
): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: "https://conduit-api.bondaracademy.com",
  });
  return await context.delete(`./account/user/${userId}`, {
    headers: { Authorization: token },
  });
}

async function postUsersCredentials(payload: object): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: CONDUIT_URL,
  });
  return await context.post("./api/users/login", {
    data: payload,
  });
}

export default { postUsers, deleteUsers, postUsersCredentials };
