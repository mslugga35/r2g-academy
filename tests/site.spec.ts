import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3002';

test.describe('R2G Academy Website', () => {

  test('homepage loads correctly', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check title
    await expect(page).toHaveTitle(/R2G Academy/);

    // Check logo is visible
    await expect(page.locator('img[alt="R2G Academy"]').first()).toBeVisible();

    // Check hero text
    await expect(page.locator('text=FROM CONCRETE').first()).toBeVisible();
    await expect(page.locator('text=CHAMPIONS').first()).toBeVisible();
  });

  test('navigation links work', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check nav text links exist (exclude buttons)
    await expect(page.locator('nav a:has-text("Programs")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Schedule")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Gallery")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Contact")')).toBeVisible();

    // Click Programs link and verify scroll
    await page.click('nav a:has-text("Programs")');
    await expect(page.locator('#services')).toBeInViewport();
  });

  test('programs section displays correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    // Check program cards (use first() for duplicates)
    await expect(page.locator('text=Training with Tony Vega').first()).toBeVisible();
    await expect(page.locator('text=Skill Development').first()).toBeVisible();
    await expect(page.locator('text=After School Program').first()).toBeVisible();
    await expect(page.locator('text=Fitness Assessment').first()).toBeVisible();

    // Check prices
    await expect(page.locator('text=$125').first()).toBeVisible();
    await expect(page.locator('text=$70').first()).toBeVisible();
    await expect(page.locator('text=$100').first()).toBeVisible();
    await expect(page.locator('text=$75').first()).toBeVisible();
  });

  test('Tony booking link works', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    const tonyLink = page.locator('a[href*="training-with-tony-vega"]').first();
    await expect(tonyLink).toBeVisible({ timeout: 10000 });

    // Verify it's an external link with correct attributes
    await expect(tonyLink).toHaveAttribute('target', '_blank');
    await expect(tonyLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Jemile Jotform link works', async ({ page }) => {
    await page.goto(BASE_URL);

    const jemileLink = page.locator('a[href*="jotform.com"]').first();
    await expect(jemileLink).toBeVisible();
    await expect(jemileLink).toHaveAttribute('target', '_blank');
  });

  test('After School enrollment form opens', async ({ page }) => {
    await page.goto(BASE_URL);

    // Find and click the Enroll Now button for After School
    const enrollButton = page.locator('button:has-text("Enroll Now")');
    await enrollButton.click();

    // Check form modal appears
    await expect(page.locator('text=After School Program Enrollment')).toBeVisible();

    // Check form fields
    await expect(page.locator('input[name="child_name"]')).toBeVisible();
    await expect(page.locator('input[name="age"]')).toBeVisible();
    await expect(page.locator('input[name="parent_name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();

    // Close modal
    await page.locator('button:has-text("Cancel")').click();
    await expect(page.locator('text=After School Program Enrollment')).not.toBeVisible();
  });

  test('Fitness Assessment form opens', async ({ page }) => {
    await page.goto(BASE_URL);

    // Find and click the Book Now button for Fitness
    const bookButton = page.locator('button:has-text("Book Now")');
    await bookButton.click();

    // Check form modal appears
    await expect(page.locator('text=Fitness Assessment Booking')).toBeVisible();

    // Check day selector exists
    await expect(page.locator('select[name="preferred_day"]')).toBeVisible();
  });

  test('video section displays Vimeo embed', async ({ page }) => {
    await page.goto(BASE_URL);

    // Check for Vimeo iframe
    const vimeoFrame = page.locator('iframe[src*="vimeo.com"]');
    await expect(vimeoFrame).toBeVisible();
  });

  test('gallery section shows championship photos', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#gallery').scrollIntoViewIfNeeded();

    await expect(page.locator('text=PHOTO GALLERY').first()).toBeVisible();
    await expect(page.locator('text=Cal Ripken World Series').first()).toBeVisible();
  });

  test('contact section displays correct info', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // Check contact details (use first() for duplicates in header/footer)
    await expect(page.locator('text=(352) 298-6699').first()).toBeVisible();
    await expect(page.locator('text=info@r2gacademy.com').first()).toBeVisible();
    await expect(page.locator('text=1750 S. Ronald Reagan Blvd').first()).toBeVisible();
    await expect(page.locator('text=Altamonte Springs, FL 32701').first()).toBeVisible();

    // Check updated hours
    await expect(page.locator('text=Monday - Friday: 2 PM - 10 PM').first()).toBeVisible();
  });

  test('schedule section shows both trainers', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#schedule').scrollIntoViewIfNeeded();

    await expect(page.locator('text=Tony Vega').first()).toBeVisible();
    await expect(page.locator('text=Jemile Weeks').first()).toBeVisible();
  });

  test('mobile navigation shows call button', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);

    // Check mobile call button is visible
    await expect(page.locator('a[href="tel:3522986699"]:has-text("Call")')).toBeVisible();
  });

  test('form submission works', async ({ page }) => {
    await page.goto(BASE_URL);

    // Open After School form
    await page.locator('button:has-text("Enroll Now")').click();

    // Fill out form
    await page.fill('input[name="child_name"]', 'Test Child');
    await page.fill('input[name="age"]', '12');
    await page.fill('input[name="parent_name"]', 'Test Parent');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="phone"]', '555-123-4567');

    // Submit form
    await page.click('button:has-text("Submit")');

    // Wait for success message
    await expect(page.locator('text=Thank You!')).toBeVisible({ timeout: 10000 });
  });
});
