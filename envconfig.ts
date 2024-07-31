const CONDUIT_URLS = {
  UI: "https://conduit.bondaracademy.com/",
  API: "https://conduit-api.bondaracademy.com",
};

export const environment: string =
  process.env.ENVIRONMENT?.toUpperCase() || "UI";
export const CONDUIT_URL: string = CONDUIT_URLS[environment];
