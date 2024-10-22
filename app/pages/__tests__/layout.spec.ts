import { expect, test } from "@playwright/test";

const departments = {
  trondheim: "Trondheim",
  bergen: "Bergen",
  aas: "Ås",
};

test.describe("Dashboard sidebar", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/dashboard");
  });

  test.describe("user menu", () => {
    const user = {
      name: "shadcn",
    };
    test("skal eksistere", async ({ page }) => {
      await page.getByRole("button", { name: user.name });
    });

    test("skal ha en lenke til profil", async ({ page }) => {
      await page.getByRole("button", { name: user.name }).click();
      await page.getByRole("menuitem", { name: "Profil" }).click();
    });

    test("skal ha en logg ut lenke", async ({ page }) => {
      await page.getByRole("button", { name: user.name }).click();

      await page.getByRole("menuitem", { name: "Logg ut" }).click();
    });

    test("skal ha en lenke for utlegg", async ({ page }) => {
      await page.getByRole("button", { name: user.name }).click();
      await page.getByRole("menuitem", { name: "Utlegg" }).click();
    });
  });

  test.describe("department selection", () => {
    test("all departments should be selectable", async ({ page }) => {
      await page.getByRole("button", { name: departments.trondheim }).click();
      await page.getByRole("menuitem", { name: departments.bergen }).click();
      await expect(page.locator("body")).toContainText(departments.bergen);

      await page.getByRole("button", { name: departments.bergen }).click();
      await page.getByRole("menuitem", { name: departments.aas }).click();
      await expect(page.locator("body")).toContainText(departments.aas);

      await page.getByRole("button", { name: departments.aas }).click();
      await page.getByRole("menuitem", { name: departments.trondheim }).click();
      await expect(page.locator("body")).toContainText(departments.trondheim);
    });
  });
});
