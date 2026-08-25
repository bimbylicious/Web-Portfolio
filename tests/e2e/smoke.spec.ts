import { expect, test } from '@playwright/test';

test('home page loads and links to projects', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Primary' })).toBeVisible();
});

test('home page hero headline and primary CTA render', async ({ page }) => {
  await page.goto('/');
  await expect(
    page.getByRole('heading', { level: 1, name: /interfaces for infrastructure/i }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'See the work' })).toBeVisible();
});

test('home page renders correctly with reduced motion forced', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');

  await expect(
    page.getByRole('heading', { level: 1, name: /interfaces for infrastructure/i }),
  ).toBeVisible();

  const workCard = page.locator('article').first();
  await expect(workCard).toBeVisible();
  await expect(workCard).toHaveCSS('opacity', '1');

  const toolsHeading = page.getByRole('heading', { level: 2, name: /what i reach for, and why/i });
  await toolsHeading.scrollIntoViewIfNeeded();
  await expect(toolsHeading).toBeVisible();
  await expect(page.getByText(/types are the spec/i)).toBeVisible();
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
