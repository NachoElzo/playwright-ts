// Define an object that stores the URLs for UI and API environments

const practice = {
  UI: "https://practice.expandtesting.com/", // URL for the UI environment
  API: "https://practice.expandtesting.com/notes/api/", // Update this to the correct API URL
};

// Set default to "UI" if the ENVIRONMENT variable is not set
export const environment: string =
  process.env.ENVIRONMENT?.toUpperCase() || "UI"; // If ENVIRONMENT is not set, default to "UI"

// This will be either the UI or API URL depending on the value of 'environment'
export const practiceUrl: string = practice[environment];
