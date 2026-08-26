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
  await expect(page.getByText(/frontend and api layer/i)).toBeVisible();
});

test('project detail page renders', async ({ page }) => {
  await page.goto('/projects/cloud-resiliency-dashboard');
  await expect(
    page.getByRole('heading', { level: 1, name: 'Cloud Resiliency Management Dashboard' }),
  ).toBeVisible();
});

test('about and contact are homepage anchors, not separate pages', async ({ page, request }) => {
  await page.goto('/');
  const nav = page.getByRole('navigation', { name: 'Primary' });
  await nav.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveURL(/\/#about$/);
  await expect(page.locator('#about')).toBeInViewport();

  await nav.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/\/#contact$/);

  for (const path of ['/about', '/contact', '/writing']) {
    const response = await request.get(path);
    expect(response.status()).toBe(404);
  }
});

test('clicking the contact email copies it to the clipboard', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('/#contact');
  await page.getByRole('button', { name: /raphaelmiguelsanchezz@gmail\.com/i }).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied).toBe('raphaelmiguelsanchezz@gmail.com');
});
