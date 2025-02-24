import { APIResponse, request } from "@playwright/test";
import urls from "../../../../global/data/urls";

/**
 * Get all notes created using the provided authentication token.
 * @param token - The authentication token used to authorize and get notes
 * @returns APIResponse - The response from the API indicating the success or failure for getting notes
 */
async function getNotes(token: string): Promise<APIResponse> {
  // Create a new context with the base URL for the API
  const context = await request.newContext({ baseURL: urls.api.bookstore });

  // Send a POST request to create a new note, passing the note data in the body
  return await context.get(`./notes`, {
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  });
}

export default getNotes;
