import { deleteFile } from "./helpers/files-manager.ts";

/**
 * Global setup function to prepare the environment before running tests.
 * Deletes the user-data file from the previous execution, if it exists.
 */
async function globalSetup() {
  console.log("Deleting 'user-data.file.json' from the previous execution");
  deleteFile();
}

export default globalSetup;
