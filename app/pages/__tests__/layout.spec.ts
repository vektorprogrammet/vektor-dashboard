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

  test.describe("tooltips funker", () => {
    test.beforeEach(async ({ page }) => {
      await page.getByRole("button", { name: "Toggle Sidebar" }).click();
    });
    test("for user menu", async ({ page }) => {
      await page
        .getByRole("button", { name: "CN shadcn m@example.com" })
        .focus();
      await page.getByText("User menuUser menu").focus();
      await expect(page.getByText("User menuUser menu")).toBeVisible();
    });
    test("for primary navigation", async ({ page }) => {
      await page.getByRole("button", { name: "Opptak" }).focus();
      await expect(page.getByText("OpptakOpptak")).toBeVisible();
      await page.getByRole("button", { name: "Statistikk" }).focus();
      await expect(page.getByText("StatistikkStatistikk")).toBeVisible();
      await page.getByRole("button", { name: "Informasjon" }).focus();
      await expect(page.getByText("InformasjonInformasjon")).toBeVisible();
      await page.getByRole("button", { name: "Data" }).focus();
      await expect(page.getByText("DataData")).toBeVisible();
      await page.getByRole("button", { name: "Annet" }).focus();
      await expect(page.getByText("AnnetAnnet")).toBeVisible();
    });
    test("for secondary navigation", async ({ page }) => {
      await page.getByRole("link", { name: "Support" }).focus();
      await expect(page.getByText("SupportSupport")).toBeVisible();
      await page.getByRole("link", { name: "Feedback" }).focus();
      await expect(page.getByText("FeedbackFeedback")).toBeVisible();
    });
    test("for sidebar footer", async ({ page }) => {
      await page.getByRole("button", { name: "Avdeling" }).focus();
      await expect(page.getByText("AvdelingerAvdelinger")).toBeVisible();
    });
  });
});
