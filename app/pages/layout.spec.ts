import { expect, test } from "@playwright/test";

const departments = {
  trondheim: "Trondheim",
  bergen: "Bergen",
  aas: "Ås",
};

test("mulig å velge alle avdelinger", async ({ page }) => {
  await page.goto("http://localhost:5173/dashboard");

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
