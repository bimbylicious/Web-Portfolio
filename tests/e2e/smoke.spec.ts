import { expect, test } from '@playwright/test';

test('home page loads and links to projects', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
});

test('project detail page renders', async ({ page }) => {
  await page.goto('/projects/cloud-resiliency-dashboard');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Cloud Resiliency Management Dashboard' }),
  ).toBeVisible();
});

test('contact form submits successfully', async ({ page }) => {
  await page.route('**/api/contact', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ ok: true }),
    });
  });

  await page.goto('/contact');
  await page.getByLabel('Name').fill('Test User');
  await page.getByLabel('Email').fill('test@example.com');
  await page.getByLabel('Message').fill('Hello, this is a test message.');
  await page.getByRole('button', { name: 'Send message' }).click();

  await expect(page.getByRole('status')).toHaveText(/thanks/i);
});
