import { test } from "@playwright/test";
import path from "path";
import createUser from "../services/create-user";
import logUser from "../services/log-user";
import createNote from "../services/create-note";
import getAllNotes from "../services/show-notes";
import removeNote from "../services/remove-note";
import removeUser from "../services/remove-user";
import noteData from "../../../../global/data/notes-data";
import users from "../../../../global/data/users";
import { saveUserData } from "../../../../global/utils/files-manager.ts";

let fileName: string, userId: string, token: string, noteId: string;

test.describe("New Users can create and delete notes @api", () => {
  const {
    name: userName,
    email: userEmail,
    password: userPassword,
  } = users.user1;

  test.beforeAll(async () => {
    // Extract the file name without the full path and store it in a variable
    fileName = path.basename(test.info().file);
    userId = (await createUser(userName, userEmail, userPassword)).userId;
  });

  test.afterAll(async () => {
    console.warn(await removeNote(token, noteId));
    console.warn(await removeUser(token));
  });

  test("Users can create, retrieve, and delete notes", async () => {
    token = (await logUser(userEmail, userPassword)).token;
    const { randomCategory, title, description } = await noteData(
      userName,
      userEmail
    );

    noteId = (await createNote(token, title, description, randomCategory))
      .noteId;

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

    await getAllNotes(token, noteId);
  });
});

export { fileName };
