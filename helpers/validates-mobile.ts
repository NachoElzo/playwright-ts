import { test } from "@playwright/test";

//Function that validates if the project execution is mobile, adding aditional steps if is needed
export function isMobile() {
  const projectName = test.info().project.name;
  console.log(`Project name: `, projectName);

  // Check if the project name corresponds to a mobile environment
  return projectName === "MobileChrome" || projectName === "MobileSafari";
}
