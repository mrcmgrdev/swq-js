import { test, expect } from "@playwright/test";

test("user can create a tenant", async ({ page }) => {
  await page.goto("/tenants");

  await page.getByLabel("Tenant Name").fill("My Company");
  await page.getByRole("button", { name: "Senden" }).click();

  await expect(page.getByText("Tenant erstellt: My Company")).toBeVisible();
});
