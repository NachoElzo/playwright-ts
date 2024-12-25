import { expect, APIResponse } from "@playwright/test";
import postNote from "../requests/post-note"; // Ensure the import path is correct.

/**
 * Creates a new note using the provided data.
 * @param token - The authentication token.
 * @param title - The title of the note.
 * @param description - The description of the note.
 * @param category - The category of the note.
 * @returns bookId - The ID of the created note.
 */
async function createNote(
  token: string,
  title: string,
  description: string,
  category: string
): Promise<{
  noteId: string;
}> {
  // Call postNote function to send a POST request with the note data
  const request: APIResponse = await postNote(
    token,
    title,
    description,
    category
  );

  // Ensure the response is OK (status code 200-299)
  await expect(request).toBeOK();

  // Parse the response to extract the note ID
  const response = await request.json();
  const noteId = response.data.id;

  // Return the book ID
  return { noteId };
}

export default createNote;
