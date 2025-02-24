import { expect, APIResponse } from "@playwright/test";
import deleteUsers from "../requests/delete-user";

/**
 * Deletes an existing user using the provided token in the header.
 * @param token - The authentication token used to authorize the deletion of the user.
 * @returns message - A message confirming the deletion of the user.
 */
async function removeUser(token: string): Promise<{ message: string }> {
  // Call deleteUsers function to send a DELETE request with the token in the header
  const request: APIResponse = await deleteUsers(token);

  // Ensure the response is OK (status code 200-299)
  await expect(request).toBeOK();

  // Parse the response to extract the message
  const response = await request.json();
  const message = response.message;

  // Return the confirmation message
  return { message };
}

export default removeUser;
