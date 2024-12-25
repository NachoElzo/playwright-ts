import { expect, APIResponse } from "@playwright/test";
import getNotes from "../requests/get-notes"; // Ensure the import path is correct.

/**
 * Retrieves all notes using a valid token and validates the presence of a specific note ID.
 * @param token - The authentication token.
 * @param noteId - The ID of the note to validate.
 * @returns message - Success message from the get notes request.
 */
async function getAllNotes(
  token: string,
  noteId: string
): Promise<{
  message: string;
}> {
  const request: APIResponse = await getNotes(token);
  await expect(request).toBeOK();

  const response = await request.json();
  const notes = response.data;
  // Validate that the `noteId` exists in the notes array
  const noteExists = notes.some((note: { id: string }) => note.id === noteId);
  expect(noteExists).toBeTruthy();

  // Return the success message
  const message = response.message;
  return { message };
}

export default getAllNotes;
