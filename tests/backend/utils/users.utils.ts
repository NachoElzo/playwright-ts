import apiUsers from "../requests/users.requests.js";
import { expect, APIResponse } from "@playwright/test";
import { Page } from "@playwright/test";

export async function createUser(
  username: string,
  email: string,
  password: string
) {
  const payload: object = {
    user: {
      username: username,
      email: email,
      password: password,
    },
  };

  const request: APIResponse = await apiUsers.postUser(payload);
  expect(request).toBeOK();

  const response = await request.json();
  const userId = response.user.id;
  const token = response.user.token;
  return { userId, token };
}

export async function deleteAccount(userId: string, token: string) {
  const auth = `Bearer ${token}`;
  const request: APIResponse = await apiUsers.deleteUser(userId, auth);
  // delete endpoint do not exists in the test web app
  // expect(request).toBeOK();
}

/**
 * Set local storage for login a user
 * @param page - The Playwright page object.
 * @param localStorageKey - The key under which the token is stored.
 * @param token - The JWT token for authentication.
 */

export async function logNewUser(
  page: Page,
  localStorageKey: string,
  token: string
) {
  await page.addInitScript({
    content: `
      window.localStorage.setItem("${localStorageKey}", "${token}");
    `,
  });
}
export default { createUser, logNewUser };
