import { APIResponse, request } from "@playwright/test";
import urls from "../../../../global/data/urls";

/**
 * Deletes a user account using the provided authentication token in the header.
 * @param token - The authentication token required to authorize the deletion request.
 * @returns APIResponse - The response from the API indicating the success or failure of the user delation.
 */
async function deleteUsers(token: string): Promise<APIResponse> {
  // Create a new context with the base URL for the API
  const context = await request.newContext({ baseURL: urls.api.bookstore });

  // Send a DELETE request to delete the user account, passing the token in the headers
  return await context.delete(`./users/delete-account`, {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });
}

export default deleteUsers;
