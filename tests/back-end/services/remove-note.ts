import { expect, APIResponse } from "@playwright/test";
import deleteNote from "../requests/delete-note";

/**
 * Deletes an existing user using the provided token in the header.
 * @param token - The authentication token used to authorize the deletion of the user.
 * @returns message - A message confirming the deletion of the user.
 */
async function removeNote(
  token: string,
  noteId: string
): Promise<{ message: string }> {
  const request: APIResponse = await deleteNote(token, noteId);
  await expect(request).toBeOK();
  const response = await request.json();
  const message = response.message;

  // Return the confirmation message
  return { message };
}

export default removeNote;
