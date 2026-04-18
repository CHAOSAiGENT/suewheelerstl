/**
 * Sue Wheeler Admin — Training Walkthrough Screenshot Capture
 *
 * Auth strategy:
 *   1. Admin SDK generates a magic link → follow with Node.js fetch (no redirect)
 *      to extract fresh access_token + refresh_token from Location header hash
 *   2. Build the @supabase/ssr session cookie using its exact chunking logic
 *   3. Inject into Playwright context before any navigation
 *   4. Navigate to /admin — middleware sees a valid session
 */

import pkg from '/opt/homebrew/lib/node_modules/playwright/index.js';
const { chromium } = pkg;
import { createClient } from '@supabase/supabase-js';
import { createChunks } from '/Users/peterledgrowth/CHAOS/CLIENT_SITES/suewheelerstl/node_modules/@supabase/ssr/dist/module/utils/chunker.js';
import { writeFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = join(__dirname, 'screenshots');
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const BASE_URL      = 'http://localhost:3001';
const SUPABASE_URL  = 'https://khioedholasaxemmtooz.supabase.co';
const SERVICE_KEY   = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtoaW9lZGhvbGFzYXhlbW10b296Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NjA0MDE3MSwiZXhwIjoyMDkxNjE2MTcxfQ.lG2MFuOmzqrU4HyAYWt8e-ccAhRuT_1knNsWttRZaEo';
const ADMIN_EMAIL   = 'peter+swstl@reveocity.co';
const PROJECT_REF   = 'khioedholasaxemmtooz';
const CHROMIUM_PATH = `${process.env.HOME}/Library/Caches/ms-playwright/chromium-1217/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing`;

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

// ── Auth helper ──────────────────────────────────────────────────────────────
async function buildSessionCookies() {
  console.log('Generating magic link...');
  const { data: linkData, error: linkErr } = await supabase.auth.admin.generateLink({
    type: 'magiclink',
    email: ADMIN_EMAIL,
  });
  if (linkErr) throw new Error(`generateLink: ${linkErr.message}`);

  const actionLink = linkData.properties.action_link;
  console.log('Following verify URL to capture tokens...');

  // Follow the Supabase verify URL with Node.js fetch (manual redirect)
  const response = await fetch(actionLink, { redirect: 'manual' });
  const location = response.headers.get('location');
  if (!location) throw new Error('No Location header from Supabase verify');

  const hashStr = location.includes('#') ? location.split('#')[1] : location.split('?')[1];
  const params = new URLSearchParams(hashStr);
  const accessToken  = params.get('access_token');
  const refreshToken = params.get('refresh_token');
  const expiresAt    = parseInt(params.get('expires_at') ?? '0');
  const expiresIn    = parseInt(params.get('expires_in') ?? '3600');

  if (!accessToken) throw new Error(`No access_token in redirect: ${location.slice(0, 200)}`);
  console.log('Tokens captured ✓');

  // Get user object for full session
  const { data: { users } } = await supabase.auth.admin.listUsers();
  const user = users.find(u => u.email === ADMIN_EMAIL);

  const session = JSON.stringify({
    access_token:  accessToken,
    token_type:    'bearer',
    expires_in:    expiresIn,
    expires_at:    expiresAt,
    refresh_token: refreshToken,
    user,
  });

  // Use @supabase/ssr's exact chunking logic
  const cookieKey = `sb-${PROJECT_REF}-auth-token`;
  const chunks = createChunks(cookieKey, session);

  return chunks.map(({ name, value }) => ({
    name,
    value,
    domain:   'localhost',
    path:     '/',
    httpOnly: false,
    secure:   false,
    sameSite: 'Lax',
  }));
}

// ── Screenshot helper ────────────────────────────────────────────────────────
let idx = 1;
async function shot(page, name, label) {
  const file = join(SCREENSHOTS_DIR, `${String(idx).padStart(2, '0')}-${name}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log(`  ✓ ${idx}. ${label}`);
  idx++;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function run() {
  const sessionCookies = await buildSessionCookies();

  const browser = await chromium.launch({
    executablePath: CHROMIUM_PATH,
    headless: true,
  });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });

  // Inject session BEFORE any navigation
  await context.addCookies(sessionCookies);
  console.log(`Session cookies injected (${sessionCookies.length} cookie(s)) ✓`);

  const page = await context.newPage();

  // ── Verify auth ────────────────────────────────────────────────────────────
  await page.goto(`${BASE_URL}/admin`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await page.waitForTimeout(2000);
  const currentUrl = page.url();
  if (currentUrl.includes('/login')) {
    console.error('Auth failed — still on login page');
    await page.screenshot({ path: join(SCREENSHOTS_DIR, 'auth-debug.png') });
    await browser.close();
    process.exit(1);
  }
  console.log('Auth verified ✓ —', currentUrl);

  // ── Screenshots ────────────────────────────────────────────────────────────
  console.log('\nCapturing screens...');

  // ── Authenticated admin screens first (before any login page visit) ────────

  // 1. Kanban board (session is still fresh — login page visit would clear it)
  // Listen for console errors to debug hydration issues
  // Suppress noisy RSC prefetch abort logs
  page.on('requestfailed', () => {});

  await page.goto(`${BASE_URL}/admin`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  // Wait for React hydration: keep polling until the New Lead button appears
  await page.waitForFunction(
    () => [...document.querySelectorAll('button')].some(b => b.innerText.toLowerCase().includes('new lead')),
    { timeout: 20000 }
  ).catch(() => {});
  await page.waitForTimeout(500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await shot(page, 'kanban-full', 'Kanban dashboard — full view');

  // 3. New Lead modal — click via JS (hydration is confirmed above)
  const clicked = await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find(b => b.innerText.toLowerCase().includes('new lead'));
    if (btn) { btn.click(); return true; }
    return false;
  });
  if (clicked) {
    await page.waitForTimeout(1000);
    await shot(page, 'new-lead-modal', 'New Lead modal — create a lead manually');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(600);
  } else {
    console.log('  (New Lead button not found — skipping)');
  }

  // Scroll down slightly to show cards better
  await page.evaluate(() => window.scrollTo(0, 150));
  await page.waitForTimeout(300);
  await shot(page, 'kanban-cards', 'Kanban — lead cards');

  // 4. Lead detail page — navigate directly using known lead ID from DB
  const DEMO_LEAD_ID = 'bd81954d-4027-4795-ae0e-4830a64fbe97';
  const hasLead = true;

  if (hasLead) {
    await page.goto(`${BASE_URL}/admin/${DEMO_LEAD_ID}`, { waitUntil: 'domcontentloaded' }).catch(() => {});
    await page.waitForTimeout(2500);

    await page.evaluate(() => window.scrollTo(0, 0));
    await shot(page, 'lead-contact', 'Lead detail — contact info & status');

    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);
    await shot(page, 'lead-project', 'Lead detail — project info & photos');

    await page.evaluate(() => window.scrollTo(0, 1000));
    await page.waitForTimeout(300);
    await shot(page, 'lead-crew', 'Lead detail — crew assignment & milestones');

    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(300);
    await shot(page, 'lead-notes', 'Lead detail — private notes panel');

    await page.evaluate(() => window.scrollTo(0, 2100));
    await page.waitForTimeout(300);
    await shot(page, 'lead-messages', 'Lead detail — client message thread');

    // Bid builder
    const bidBtn = page.locator('a:has-text("Build Estimate"), a:has-text("Bid Builder"), a:has-text("estimate")').first();
    if (await bidBtn.isVisible({ timeout: 1500 }).catch(() => false)) {
      const bidHref = await bidBtn.getAttribute('href');
      await page.goto(`${BASE_URL}${bidHref}`, { waitUntil: 'domcontentloaded' }).catch(() => {});
      await page.waitForTimeout(1500);
      await page.evaluate(() => window.scrollTo(0, 0));
      await shot(page, 'bid-builder', 'Bid builder — estimate editor');
      await page.goto(`${BASE_URL}/admin/${DEMO_LEAD_ID}`, { waitUntil: 'domcontentloaded' }).catch(() => {});
      await page.waitForTimeout(600);
    }
  } else {
    console.log('  (No leads in DB — skipping lead detail screens)');
  }

  // 5. Settings
  await page.goto(`${BASE_URL}/admin/settings`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, 0));
  await shot(page, 'settings', 'Settings — crew roster & archive');

  // 6. Public contact form
  await page.goto(`${BASE_URL}/contact`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await page.waitForTimeout(1500);
  await shot(page, 'contact-form', 'Public contact form — what clients see');

  // 7. Login page screenshots — use a FRESH context so we never touch the auth session
  const loginCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const loginPage = await loginCtx.newPage();
  await loginPage.goto(`${BASE_URL}/admin/login`, { waitUntil: 'domcontentloaded' }).catch(() => {});
  await loginPage.waitForTimeout(1000);
  await shot(loginPage, 'login-empty', 'Login page — empty form');
  await loginPage.fill('input[type="email"]', 'sue@suewheelerstl.com');
  await shot(loginPage, 'login-filled', 'Login page — email entered');
  await loginCtx.close();

  await browser.close();
  console.log(`\n✓ ${idx - 1} screenshots saved to training-video/screenshots/`);

  // Write Remotion manifest
  writeFileSync(join(__dirname, 'screens.json'), JSON.stringify({
    capturedAt: new Date().toISOString(),
    totalScreens: idx - 1,
    fps: 30,
    secondsPerSlide: 5,
    screens: [
      { file: '01-kanban-full.png',    title: 'The Dashboard',        section: 'Dashboard',        description: 'Every lead lives on this Kanban board. Columns represent workflow stages from New Request through Complete.' },
      { file: '02-new-lead-modal.png', title: 'Add a New Lead',       section: 'Dashboard',        description: 'Click "+ New Lead" to add a client who called or walked in. Fill in name, phone, email, services, and notes.' },
      { file: '03-kanban-cards.png',   title: 'Lead Cards',           section: 'Dashboard',        description: 'Each card shows the client name, services, and your latest private note. Drag cards between columns to update status.' },
      { file: '04-lead-contact.png',   title: 'Lead — Contact Info',  section: 'Lead Management',  description: 'Click "View" on any card for the full record. Contact details, status selector, and the client portal link.' },
      { file: '05-lead-project.png',   title: 'Lead — Project',       section: 'Lead Management',  description: 'Project description, requested services, timeline, and any photos the client uploaded.' },
      { file: '06-lead-crew.png',      title: 'Lead — Crew & Dates',  section: 'Lead Management',  description: 'Assign crew members, set the start date, and mark completion milestones.' },
      { file: '07-lead-notes.png',     title: 'Private Notes',        section: 'Lead Management',  description: 'Add timestamped internal notes — call attempts, special instructions, reminders. The latest note shows on the Kanban card.' },
      { file: '08-lead-messages.png',  title: 'Client Messages',      section: 'Lead Management',  description: 'Send messages to the client. They receive an email and reply from their personal portal link.' },
      { file: '09-bid-builder.png',    title: 'Bid Builder',          section: 'Estimates',        description: 'Build an estimate from saved copy blocks. Drag blocks into the document, set the total, attach a PDF, and send.' },
      { file: '10-settings.png',       title: 'Settings',             section: 'Settings',         description: 'Manage crew members and archive completed or cancelled requests to keep the board clean.' },
      { file: '11-contact-form.png',   title: 'Client Contact Form',  section: 'How Leads Come In',description: 'This is suewheelerstl.com/contact — what clients fill out. Submitting creates a Kanban card and emails you immediately.' },
      { file: '12-login-empty.png',    title: 'Admin Sign-In',        section: 'Getting Started',  description: 'Go to suewheelerstl.com/admin. Enter your email and click "Send Magic Link." No password — ever.' },
      { file: '13-login-filled.png',   title: 'Enter Your Email',     section: 'Getting Started',  description: 'Use sue@suewheelerstl.com. A one-click sign-in link lands in your inbox in seconds.' },
    ],
  }, null, 2));
  console.log('✓ screens.json written');
}

run().catch(err => {
  console.error('\nFATAL:', err.message);
  process.exit(1);
});
