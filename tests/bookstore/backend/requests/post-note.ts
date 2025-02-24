import { APIResponse, request } from "@playwright/test";
import urls from "../../../../global/data/urls";

/**
 * Creates a new note using the provided details and authentication token.
 * @param token - The authentication token used to authorize the creation of the note.
 * @param title - The title of the note to be created.
 * @param description - The description of the note to be created.
 * @param category - The category under which the note will be classified.
 * @returns APIResponse - The response from the API indicating the success or failure of the note creation request.
 */
async function postNote(
  token: string,
  title: string,
  description: string,
  category: string
): Promise<APIResponse> {
  // Create a new context with the base URL for the API
  const context = await request.newContext({ baseURL: urls.api.bookstore });

  // Send a POST request to create a new note, passing the note data in the body
  return await context.post(`./notes`, {
    data: {
      title: title,
      description: description,
      category: category,
    },
    headers: {
      "x-auth-token": token,
      "Content-Type": "application/json",
    },
  });
}

export default postNote;
