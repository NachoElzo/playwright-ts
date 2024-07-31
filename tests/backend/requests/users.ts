import { APIResponse, request } from "@playwright/test";
import { CONDUIT_URL } from "../../../envconfig.ts";

// To create this syntax definition for functions type /** + enter before the function
export interface CreateUserPayload {
  user: {
    email: string;
    password: string;
    username: string;
  };
}
async function postUser(body: CreateUserPayload): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: CONDUIT_URL,
  });
  return await context.post(`./api/users`, {
    data: body,
  });
}
export interface LogUserPayload {
  user: {
    email: string;
    password: string;
  };
}
async function deleteUser(userId: string, token: string) {
  const context = await request.newContext({
    baseURL: "https://conduit-api.bondaracademy.com",
  });
  return await context.delete(`./account/user/${userId}`, {
    headers: { Authorization: token },
  });
}

export default { postUser, deleteUser };
