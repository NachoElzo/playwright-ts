import { test } from "@playwright/test";
import { logUser } from "../../backend/utils/users-setup.ts";

test.describe("Given: a valid user that logs into the app", () => {
  test.describe("When: the user uses valid credentials", () => {
    test("Then: The user will be logged in successfully", async ({}) => {
      const response = await logUser(0); // Usamos el índice del usuario en el array
      // Aquí puedes agregar más validaciones dependiendo de la estructura del `response`
      console.log("the token is:", response);
    });
  });
});
