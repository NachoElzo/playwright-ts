import { APIResponse, request } from "@playwright/test";
import urls from "../../../../global/data/urls";

/**
 * Registers a new user by sending the provided details to the API.
 * @param userName - The name of the user to be registered.
 * @param userEmail - The email address of the user to be registered.
 * @param userPassword - The password for the new user account.
 * @returns APIResponse - The response from the API indicating the result of the registration request.
 */
async function postUsers(
  userName: string,
  userEmail: string,
  userPassword: string
): Promise<APIResponse> {
  // Create a new context with the base URL for the API
  const context = await request.newContext({ baseURL: urls.api.bookstore });

  // Send a POST request to register a new user, passing the user data in the body
  return await context.post(`./users/register`, {
    data: {
      name: userName,
      email: userEmail,
      password: userPassword,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default postUsers;
