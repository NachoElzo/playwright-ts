import { APIResponse, request } from "@playwright/test";
import urls from "../../../../global/data/urls";

/**
 * Deletes a note using the provided noteId and authentication token.
 * @param token - The authentication token used to authorize the creation of the note.
 * @param title - The title of the note to be created.
 * @param description - The description of the note to be created.
 * @param category - The category under which the note will be classified.
 * @returns APIResponse - The response from the API indicating the success or failure of the note creation request.
 */
async function deleteNote(token: string, noteId: string): Promise<APIResponse> {
  // Create a new context with the base URL for the API
  const context = await request.newContext({ baseURL: urls.api.bookstore });
  return await context.delete(`./notes/${noteId}`, {
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  });
}

export default deleteNote;
