/**
 * R2G Academy — End-to-End Tests
 *
 * Validates the public-facing site at localhost:3002 (Next.js dev server).
 * Tests are grouped into two sections:
 *
 *   1. Core Functionality  — page load, navigation, programs, booking links,
 *                            forms, video, gallery, contact, mobile
 *   2. Client Fix Verification — added Feb 2026 after commit 74287d9 applied
 *                            8 rounds of client feedback. Each test maps to a
 *                            specific fix so regressions are caught immediately.
 *
 * Run:  npx playwright test
 * Requires:  dev server on port 3002 (npm run dev -- -p 3002)
 */
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3002';

test.describe('R2G Academy Website', () => {

  // ─── Core: Page Load ───────────────────────────────────────────────

  test('homepage loads correctly', async ({ page }) => {
    await page.goto(BASE_URL);

    await expect(page).toHaveTitle(/R2G Academy/);
    await expect(page.locator('img[alt="R2G Academy"]').first()).toBeVisible();
    await expect(page.locator('text=FROM CONCRETE').first()).toBeVisible();
    await expect(page.locator('text=CHAMPIONS').first()).toBeVisible();
  });

  // ─── Core: Navigation ─────────────────────────────────────────────

  test('navigation links work', async ({ page }) => {
    await page.goto(BASE_URL);

    await expect(page.locator('nav a:has-text("Programs")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Results")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Gallery")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Contact")')).toBeVisible();

    // Verify anchor scroll works
    await page.locator('nav a:has-text("Programs")').click();
    await expect(page.locator('#services')).toBeInViewport();
  });

  // ─── Core: Programs & Pricing ─────────────────────────────────────

  test('programs section displays correctly', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    // All five program cards
    await expect(page.locator('text=Cage Rentals').first()).toBeVisible();
    await expect(page.locator('text=Group Open Field Workout').first()).toBeVisible();
    await expect(page.locator('text=Training with Tony Vega').first()).toBeVisible();
    await expect(page.locator('text=After School Program').first()).toBeVisible();
    await expect(page.locator('text=Fitness Assessment').first()).toBeVisible();

    // Prices (Cage $250 tested separately in client fix section)
    await expect(page.locator('text=$125').first()).toBeVisible(); // Tony
    await expect(page.locator('text=$70').first()).toBeVisible();  // Jemile
    await expect(page.locator('text=$100').first()).toBeVisible(); // After School
    await expect(page.locator('text=$75').first()).toBeVisible();  // Fitness
  });

  test('trainers visible in services section', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    await expect(page.locator('text=Tony Vega').first()).toBeVisible();
    await expect(page.locator('text=Jemile Weeks').first()).toBeVisible();
  });

  // ─── Core: Booking Links ──────────────────────────────────────────

  test('Tony booking link is a phone call', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    // Changed from Cal.com to tel: link in Feb 2026 client feedback
    const tonyLink = page.locator('a[href="tel:3522986699"]', {
      has: page.locator('text=Call to Book'),
    }).first();
    await expect(tonyLink).toBeVisible({ timeout: 10000 });
  });

  test('Jemile Jotform link works', async ({ page }) => {
    await page.goto(BASE_URL);

    const jemileLink = page.locator('a[href*="jotform.com"]').first();
    await expect(jemileLink).toBeVisible();
    await expect(jemileLink).toHaveAttribute('target', '_blank');
  });

  // ─── Core: Form Modals ────────────────────────────────────────────

  test('After School enrollment form opens', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('button:has-text("Enroll Now")').click();

    await expect(page.locator('text=After School Program Enrollment')).toBeVisible();
    await expect(page.locator('input[name="child_name"]')).toBeVisible();
    await expect(page.locator('input[name="age"]')).toBeVisible();
    await expect(page.locator('input[name="parent_name"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="phone"]')).toBeVisible();

    // Close and verify it's gone
    await page.locator('button:has-text("Cancel")').click();
    await expect(page.locator('text=After School Program Enrollment')).not.toBeVisible();
  });

  test('Fitness Assessment form opens', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('button:has-text("Book Now")').click();

    await expect(page.locator('text=Fitness Assessment Booking')).toBeVisible();
    await expect(page.locator('select[name="preferred_day"]')).toBeVisible();
  });

  test('form submission works', async ({ page }) => {
    await page.goto(BASE_URL);

    await page.locator('button:has-text("Enroll Now")').click();

    await page.locator('input[name="child_name"]').fill('Test Child');
    await page.locator('input[name="age"]').fill('12');
    await page.locator('input[name="parent_name"]').fill('Test Parent');
    await page.locator('input[name="email"]').fill('test@example.com');
    await page.locator('input[name="phone"]').fill('555-123-4567');

    await page.locator('button:has-text("Submit")').click();

    await expect(page.locator('text=Thank You!')).toBeVisible({ timeout: 10000 });
  });

  // ─── Core: Content Sections ───────────────────────────────────────

  test('video section displays YouTube embed', async ({ page }) => {
    await page.goto(BASE_URL);

    // YouTube iframe is below the fold — must scroll first
    const ytFrame = page.locator('iframe[src*="youtube.com"]');
    await ytFrame.scrollIntoViewIfNeeded();
    await expect(ytFrame).toBeVisible({ timeout: 15000 });
  });

  test('gallery section shows photos', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#gallery').scrollIntoViewIfNeeded();

    await expect(page.locator('text=PHOTO GALLERY').first()).toBeVisible();
    await expect(page.locator('text=Building Skills Together').first()).toBeVisible();
  });

  test('contact section displays correct info', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#contact').scrollIntoViewIfNeeded();

    // first() needed — phone/email appear in both header and contact section
    await expect(page.locator('text=(352) 298-6699').first()).toBeVisible();
    await expect(page.locator('text=info@r2gacademy.com').first()).toBeVisible();
    await expect(page.locator('text=1750 S. Ronald Reagan Blvd').first()).toBeVisible();
    await expect(page.locator('text=Altamonte Springs, FL 32701').first()).toBeVisible();
    await expect(page.locator('text=Monday - Friday: 2 PM - 10 PM').first()).toBeVisible();
  });

  // ─── Core: Mobile ─────────────────────────────────────────────────

  test('mobile navigation shows call button', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);

    // exact: true avoids matching "Call to Book" link in services section
    await expect(page.getByRole('link', { name: 'Call', exact: true })).toBeVisible();
  });

  // ─── Client Fix Verification (Feb 2026, commit 74287d9) ──────────
  //
  // Each test below maps to specific client feedback. If any fail,
  // a client-requested change has regressed.

  test('section order matches client requirements', async ({ page }) => {
    await page.goto(BASE_URL);

    // Client requested: Services → Results → About → Gallery → Contact
    const sections = page.locator('#services, #wins, #about, #gallery, #contact');
    const ids = await sections.evaluateAll(els => els.map(el => el.id));
    expect(ids).toEqual(['services', 'wins', 'about', 'gallery', 'contact']);
  });

  test('coach credentials are visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    // Client requested coach bios/credentials on program cards
    await expect(page.locator('text=ex-MLB Player').first()).toBeVisible();
    await expect(page.locator('text=Former Duke Coach').first()).toBeVisible();
  });

  test('cage rentals show Team and Single options', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('#services').scrollIntoViewIfNeeded();

    // Client requested cage rental split into two tiers
    await expect(page.locator('text=Team Rental').first()).toBeVisible();
    await expect(page.locator('text=Single Cage').first()).toBeVisible();
    await expect(page.locator('text=$250').first()).toBeVisible();
  });

  test('hero shows facility descriptor', async ({ page }) => {
    await page.goto(BASE_URL);

    // Client requested "Elite Athletic Training Facility" subtitle in hero
    await expect(page.locator('text=Elite Athletic Training Facility').first()).toBeVisible();
  });

  test('only one BOOK YOUR SESSION heading exists', async ({ page }) => {
    await page.goto(BASE_URL);

    // Client reported duplicate booking sections — verify only one remains
    const headings = page.locator('h2', { hasText: 'BOOK YOUR SESSION' });
    await expect(headings).toHaveCount(1);
  });

  test('Results nav link points to #wins', async ({ page }) => {
    await page.goto(BASE_URL);

    // "Schedule" nav removed, replaced with "Results" pointing to #wins
    const resultsLink = page.locator('nav a:has-text("Results")');
    await expect(resultsLink).toHaveAttribute('href', '#wins');

    await resultsLink.click();
    await expect(page.locator('#wins')).toBeInViewport();
  });
});
