import { expect, APIResponse } from "@playwright/test";
import postUsers from "../requests/post-user";
/**
 * Creates a new user account using the provided username, email, and password.
 * @returns userId
 */
async function createUser(
  userName: string,
  userEmail: string,
  userPassword: string
): Promise<{
  userId: string;
}> {
  const request: APIResponse = await postUsers(
    userName,
    userEmail,
    userPassword
  );
  await expect(request).toBeOK();

  const response = await request.json();
  const userId = response.data.id;
  return { userId };
}

export default createUser;
