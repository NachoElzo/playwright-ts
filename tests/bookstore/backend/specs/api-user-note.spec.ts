import { test } from "@playwright/test";
import createUser from "../services/create-user";
import users from "../../../../global/data/users";
import { saveUserData } from "../../../../global/utils/files-manager.ts";
import logUser from "../services/log-user";
import removeUser from "../services/remove-user";
import createNote from "../services/create-note";
import getAllNotes from "../services/show-notes";
import noteData from "../../../../global/data/notes-data"; // Asegúrate de que noteData sea una función exportada
import removeNote from "../services/remove-note";

test.describe("Scenario new users that will create a note and delete the account @api", () => {
  const userName = users.user1.name;
  const userEmail = users.user1.email;
  const userPassword = users.user1.password;
  let userId: string;
  let token: string;
  let noteId: string;

  test.beforeAll("Create a new user", async () => {
    // Create a new user with the given username, email, and password
    const createdUser = await createUser(userName, userEmail, userPassword);
    // Save the userId to use in other test steps
    userId = createdUser.userId;
  });

  test.afterAll("Deletes a user", async () => {
    const deleteNoteMessage = await removeNote(token, noteId);
    console.warn(deleteNoteMessage);

    const deleteUserMessage = await removeUser(token);
    console.warn(deleteUserMessage);
  });

  test("Giving a logged user via API", async () => {
    // Login the user and get the token
    const login = await logUser(userEmail, userPassword);
    token = login.token; // Extract userToken from the response

    // Get random note data
    const { randomCategory, title, description } = await noteData(
      userName,
      userEmail
    );

    // Create a note for the user
    const getNoteId = await createNote(
      token,
      title,
      description,
      randomCategory
    );
    noteId = getNoteId.noteId;

    // Save the user and note data
    saveUserData({
      userName,
      userEmail,
      userPassword,
      userId,
      noteId,
      title,
      description,
      randomCategory,
    });

    // Then the user will be able to list all the notes created
    await test.step("Then the user will be able to list all the notes created", async () => {
      await getAllNotes(token, noteId);
    });
  });
});
