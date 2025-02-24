import { expect, APIResponse } from "@playwright/test";
import postLogUsers from "../requests/post-log-user";

/**
 * Logs an existing user using the provided email and password.
 * @param userEmail - The email address of the user trying to log in.
 * @param userPassword - The password of the user trying to log in.
 * @returns token - The authentication token for the logged-in user.
 */
async function logUser(
  userEmail: string,
  userPassword: string
): Promise<{ token: string }> {
  // Call postLogUsers function to send a POST request with the login credentials
  const request: APIResponse = await postLogUsers(userEmail, userPassword);

  // Ensure the response is OK (status code 200-299)
  await expect(request).toBeOK();

  // Parse the response to extract the authentication token
  const response = await request.json();
  const token = response.data.token;

  // Return the authentication token
  return { token };
}

export default logUser;
