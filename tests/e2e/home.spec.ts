import { expect, test } from "@playwright/test";

test("Navigates to home page and checks if title is visible", async ({ page }) => {
    await page.goto("/");
    // Make sure that the 'Molecular Dynamics' title is on screen
    await expect(page.getByText("Molecular Dynamics")).toBeVisible();
});