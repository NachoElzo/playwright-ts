import fs from "fs";
import path from "path";

//File that create a new file and save the data obtained during a test execution

// Interface that define and adjust the type of data that will be stored in the file
interface UserData {
  [key: string]: string | number | boolean;
}

// Function for saving data to a file, data will be used as parameter to add multiple data
function saveUserData(data: UserData) {
  const filePath = path.resolve(__dirname, "../data/test-data-file.json");

  // Validates  that the directory exists
  if (!fs.existsSync(path.dirname(filePath))) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
  }

  // Initialize the existingData as an empty array if the file does not exist
  let existingData: UserData[] = [];

  // If the directory exist will parse the data as JSON
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf8");
    try {
      existingData = JSON.parse(fileContent);
      if (!Array.isArray(existingData)) {
        existingData = []; // validates that is an array
      }
    } catch (error) {
      // Reset to an empty array in case of a parse error
      existingData = [];
      console.error("Error parsing yhe file content:", error); // Log the error
    }
  }

  // Add the new data to the existing data
  existingData.push(data);

  // Save the data to the file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf8");
}

// Function to delete the file added in global-setup file
function deleteFile() {
  const filePath = path.resolve(__dirname, "../data/test-data-file.json");

  // Check if the file exists and delete it
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }
}

export { saveUserData, deleteFile };
