import apiUsers from "../requests/users.requests.js";
import { expect, APIResponse } from "@playwright/test";
import { Page } from "@playwright/test";
import { users } from "../data/users.data.js";

/**
 * Create a new user account.
 * @param username - The username for the new user.
 * @param email - The email address for the new user.
 * @param password - The password for the new user.
 * @returns An object containing the user's ID and token.
 */

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

  const request: APIResponse = await apiUsers.postUsers(payload);
  expect(request).toBeOK();

  const response = await request.json();
  const userId = response.user.id;
  const token = response.user.token;
  return { userId, token };
}

/**
 * delete user account
 * @param useriD - the id of a valid user
 * @param token - The JWT token for authentication.
 */

export async function deleteUser(userId: string, token: string) {
  const auth = `Bearer ${token}`;
  const request: APIResponse = await apiUsers.deleteUsers(userId, auth);
}

/**
 * Set local storage with token for login a user
 * @param page - The Playwright page object.
 * @param localStorageKey - The key under which the token is stored.
 * @param token - The JWT token for authentication.
 */

export async function logUser(page: Page, token: string) {
  const tokenKey = "jwtToken";
  await page.addInitScript({
    content: `
      window.localStorage.setItem("${tokenKey}", "${token}");
    `,
  });
}

/**
 * Logs in a valid user by selecting users data from an external file.
 * @param userKey - The key to select a user from the external file
 * @returns An object containing the user's ID and token.
 */

export async function getUserCredential(userKey: string) {
  const userIndex = users.find((key) => userKey in key);

  if (!userIndex) {
    throw new Error(`User with key ${userKey} not found`);
  }

  const user = userIndex[userKey];
  const { userName, email, password } = user;

  const payload = {
    user: {
      username: userName,
      email: email,
      password: password,
    },
  };

  const request: APIResponse = await apiUsers.postUsersCredentials(payload);
  expect(request).toBeOK();

  const response = await request.json();
  const userId = await response.user.id;
  const token = await response.user.token;
  return { userId, token };
}

export default { createUser, logUser, deleteUser, getUserCredential };
