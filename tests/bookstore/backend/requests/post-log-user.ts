import { APIResponse, request } from "@playwright/test";
import urls from "../../../../global/data/urls";

/**
 * Login an user using the provided email and password.
 * @param userEmail - The email address of the user attempting to log in.
 * @param userPassword - The password of the user attempting to log in.
 * @returns APIResponse - The response from the API containing the result of the login attempt.
 */
async function postLogUsers(
  userEmail: string,
  userPassword: string
): Promise<APIResponse> {
  // Create a new context with the base URL for the API
  const context = await request.newContext({ baseURL: urls.api.bookstore });

  // Send a POST request to log in the user, passing the login credentials in the body
  return await context.post(`./users/login`, {
    data: {
      email: userEmail,
      password: userPassword,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default postLogUsers;
