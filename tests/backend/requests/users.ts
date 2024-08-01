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
async function deleteUser(userId: string, token: string): Promise<APIResponse> {
  const context = await request.newContext({
    baseURL: CONDUIT_URL,
  });
  return await context.delete(`./api/user/${userId}`, {
    headers: { Authorization: token },
  });
}

interface LoginResponse {
  user: {
    token: string;
  };
}

async function login(body: {
  user: { email: string; password: string };
}): Promise<LoginResponse> {
  const context = await request.newContext({
    baseURL: CONDUIT_URL,
  });
  const response: APIResponse = await context.post("./api/users/login", {
    data: body,
  });

  // Assuming response.json() returns the actual body content
  const responseBody = (await response.json()) as LoginResponse;
  return responseBody;
}

export default { postUser, deleteUser, login };
