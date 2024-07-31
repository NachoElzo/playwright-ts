import apiUsers from "../requests/users.js";
import { expect, APIResponse } from "@playwright/test";
import { CreateUserPayload } from "../requests/users.js";

export async function userCreation(
  email: string,
  password: string,
  username: string
) {
  const body: CreateUserPayload = {
    user: {
      email,
      password,
      username,
    },
  };

  const request: APIResponse = await apiUsers.postUser(body);
  expect(request).toBeOK();

  const response = await request.json();
  const userId = response.user.id;
  const token = response.user.token;
  return { userId, token };
}

export async function deleteAccount(userId: string, token: string) {
  const auth = `Bearer ${token}`;
  const request: APIResponse = await apiUsers.deleteUser(userId, auth);
}

export async function logUser(page, localStorageKey: string, token: string) {
  await page.addInitScript((token) => {
    window.localStorage.setItem(localStorageKey, token);
  }, token);
}

export default { userCreation, deleteAccount, logUser };
