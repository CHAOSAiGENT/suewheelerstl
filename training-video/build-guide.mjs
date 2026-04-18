/**
 * Sue Wheeler Admin — Training Guide HTML Generator
 * Produces a self-contained sue-wheeler-admin-guide.html with embedded screenshots.
 * Open in browser → File > Print → Save as PDF.
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = join(__dirname, 'screenshots');

function img64(filename) {
  const data = readFileSync(join(SCREENSHOTS_DIR, filename));
  return `data:image/png;base64,${data.toString('base64')}`;
}

// ── Content ─────────────────────────────────────────────────────────────────
// Sections in logical reading order with full step-by-step instructions.
const sections = [
  {
    section: 'Getting Started',
    title: 'Signing In',
    screens: ['12-login-empty.png', '13-login-filled.png'],
    steps: [
      'Open your browser and go to <strong>suewheelerstl.com/admin</strong>.',
      'You will see the Admin Portal login page.',
      'Type your email address: <strong>sue@suewheelerstl.com</strong>',
      'Click <strong>Send Magic Link</strong>.',
      'Check your inbox — a sign-in email arrives within seconds.',
      'Click the link in the email. You are immediately logged in — <em>no password needed, ever.</em>',
      'The link expires after a short time, so click it promptly. If it has expired, just repeat the process.',
    ],
    tips: [
      'You can bookmark suewheelerstl.com/admin for quick access.',
      'The magic link only works once — if you accidentally close the email, request a new one.',
    ],
  },
  {
    section: 'Dashboard',
    title: 'The Kanban Board',
    screens: ['01-kanban-full.png'],
    steps: [
      'After signing in, you land on the <strong>Pipeline</strong> — your Kanban board.',
      'The board has columns representing each stage of a job: <strong>New Request → Contacted → To Bid → Bid Sent → Scheduled → In Progress → Complete</strong>.',
      'Each column shows the leads currently at that stage.',
      'Scroll horizontally to see all columns if your screen is narrow.',
      'The count at the top of each column shows how many leads are there.',
    ],
    tips: [
      'The board updates in real-time — refresh if you have been away a while.',
      'Completed and archived jobs are hidden from this view to keep it clean.',
    ],
  },
  {
    section: 'Dashboard',
    title: 'Lead Cards & Drag to Update Status',
    screens: ['03-kanban-cards.png'],
    steps: [
      'Each card on the board shows: client name, requested services, and your most recent private note.',
      'To <strong>update a lead&#39;s status</strong>: click and hold the card, then drag it to the correct column.',
      'Release the card to drop it. The status saves automatically.',
      'To <strong>view the full lead record</strong>: click the <strong>View →</strong> button on any card.',
    ],
    tips: [
      'The latest private note on a card helps you remember where things stand at a glance.',
      'You can drag cards freely — there\'s no wrong order within a column.',
    ],
  },
  {
    section: 'Dashboard',
    title: 'Adding a New Lead Manually',
    screens: ['02-new-lead-modal.png'],
    steps: [
      'When a client calls, texts, or walks in, click the <strong>+ New Lead</strong> button (top right of the board).',
      'A form appears. Fill in the client\'s details:',
      '<ul><li><strong>Name</strong> — first and last</li><li><strong>Phone</strong> — how to reach them</li><li><strong>Email</strong> — for the client portal and messages</li><li><strong>Services requested</strong> — what they need</li><li><strong>Notes</strong> — anything important from the call</li></ul>',
      'Click <strong>Create Lead</strong>. The card appears immediately in the <em>New Request</em> column.',
    ],
    tips: [
      'You do not need to fill every field — a name and phone number is enough to get started.',
      'Leads submitted through the website contact form appear automatically and also land in New Request.',
    ],
  },
  {
    section: 'Lead Management',
    title: 'Lead Detail — Contact Info & Status',
    screens: ['04-lead-contact.png'],
    steps: [
      'Click <strong>View →</strong> on any Kanban card to open the full lead record.',
      'At the top you\'ll see the client\'s <strong>name, phone, email</strong>, and when they submitted.',
      'The <strong>Status</strong> dropdown lets you change the stage directly from this page (same as dragging on the board).',
      'The <strong>Client Portal Link</strong> is a private, unique URL you can share with the client so they can check on their project.',
      'Use the <strong>← Back</strong> button or your browser\'s back arrow to return to the board.',
    ],
    tips: [
      'Changes to status here sync instantly to the Kanban board.',
    ],
  },
  {
    section: 'Lead Management',
    title: 'Lead Detail — Project Info & Photos',
    screens: ['05-lead-project.png'],
    steps: [
      'Scroll down on the lead detail page to see the <strong>project section</strong>.',
      'This shows what the client described: project description, services requested, and their preferred timeline.',
      'If the client uploaded photos through the contact form, they appear here.',
      'Click any photo to view it full-size.',
    ],
    tips: [
      'Photos help you scope the job before the first call — review them before reaching out.',
    ],
  },
  {
    section: 'Lead Management',
    title: 'Lead Detail — Crew & Dates',
    screens: ['06-lead-crew.png'],
    steps: [
      'Continue scrolling to reach the <strong>Crew & Scheduling</strong> section.',
      'Use the <strong>Assign Crew</strong> dropdown to select who is working this job. You can assign multiple crew members.',
      'Set the <strong>Start Date</strong> once the job is confirmed.',
      'Check off <strong>milestones</strong> as the project progresses (e.g., prep complete, finish coats done).',
      'All changes save automatically.',
    ],
    tips: [
      'Crew members are managed in Settings — add or remove them there.',
    ],
  },
  {
    section: 'Lead Management',
    title: 'Private Notes',
    screens: ['07-lead-notes.png'],
    steps: [
      'The <strong>Notes</strong> panel is for your internal records only — clients never see these.',
      'Type your note in the text box and click <strong>Add Note</strong>.',
      'Every note is automatically timestamped with the date and time.',
      'Notes are listed newest-first. The most recent note also appears on the Kanban card.',
      'Use notes for: call attempts, voicemails left, pricing discussions, special instructions, anything you want to remember.',
    ],
    tips: [
      'Make a habit of adding a note after every client interaction — it\'s your paper trail.',
      'There\'s no limit on notes — add as many as you need.',
    ],
  },
  {
    section: 'Lead Management',
    title: 'Client Messages',
    screens: ['08-lead-messages.png'],
    steps: [
      'The <strong>Messages</strong> panel lets you send a message directly to the client.',
      'Type your message and click <strong>Send</strong>.',
      'The client receives it by email and can reply through their private portal link.',
      'Their reply appears here, in the thread, so all communication is in one place.',
      'Use messages for: sending estimates, confirming dates, following up after a job.',
    ],
    tips: [
      'Messages go out from your business email — they look professional and come from you.',
      'The client portal link never expires, so clients can always check back.',
    ],
  },
  {
    section: 'Estimates',
    title: 'Bid Builder',
    screens: ['09-bid-builder.png'],
    steps: [
      'From the lead detail page, click <strong>Build Estimate</strong> to open the Bid Builder.',
      'The left panel contains your saved <strong>copy blocks</strong> — reusable sections of text you\'ve written (descriptions, terms, scope items).',
      'Drag blocks from the left panel into the <strong>estimate document</strong> on the right.',
      'Rearrange blocks by dragging them up or down.',
      'Set the <strong>total price</strong> in the price field.',
      'When ready, click <strong>Send Estimate</strong>. The client receives a formatted estimate with a link to accept it.',
    ],
    tips: [
      'Build your copy blocks once, reuse them on every job — saves time on every estimate.',
      'You can also attach a PDF (e.g., a signed quote) if needed.',
    ],
  },
  {
    section: 'Settings',
    title: 'Managing Crew & Archiving',
    screens: ['10-settings.png'],
    steps: [
      'Click <strong>Settings</strong> in the top navigation to open the settings page.',
      '<strong>Crew Members:</strong> Add a new crew member by typing their name and clicking Add. Remove them with the × button. Only active crew members appear in the assignment dropdown on lead pages.',
      '<strong>Archive:</strong> When a job is complete or cancelled, open the lead and click <strong>Archive</strong>. It disappears from the Kanban board but is never deleted — you can retrieve it if needed.',
      'Archive regularly to keep the board focused on active work.',
    ],
    tips: [
      'Archiving a lead does not delete any data — notes, messages, and photos are all preserved.',
    ],
  },
  {
    section: 'How Leads Come In',
    title: 'The Client Contact Form',
    screens: ['11-contact-form.png'],
    steps: [
      'This is what clients see when they visit <strong>suewheelerstl.com/contact</strong>.',
      'They fill in their name, phone, email, what services they need, photos, and a description.',
      'When they submit, two things happen automatically:',
      '<ul><li>A new lead card appears in the <em>New Request</em> column on your Kanban board.</li><li>You receive an email notification immediately.</li></ul>',
      'You don\'t need to do anything — just check your board (or email) and follow up.',
    ],
    tips: [
      'The faster you follow up on new requests, the better your close rate.',
      'All client-uploaded photos are attached to the lead and visible on the lead detail page.',
    ],
  },
];

// ── HTML template ────────────────────────────────────────────────────────────
function renderStep(step, i) {
  return `<li>${step}</li>`;
}

function renderSection(s, index) {
  const isFirst = index === 0;
  const screenImgs = s.screens
    .map(f => `<img src="${img64(f)}" alt="${s.title}" class="screenshot" />`)
    .join('\n');

  return `
  <div class="page ${isFirst ? 'first-page' : ''}">
    <div class="section-badge">${s.section}</div>
    <h2>${s.title}</h2>
    <div class="screenshot-wrap">
      ${screenImgs}
    </div>
    <div class="instructions">
      <ol>
        ${s.steps.map(renderStep).join('\n        ')}
      </ol>
      ${s.tips && s.tips.length ? `
      <div class="tips">
        <span class="tips-label">Tips</span>
        <ul>
          ${s.tips.map(t => `<li>${t}</li>`).join('\n          ')}
        </ul>
      </div>` : ''}
    </div>
  </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Sue Wheeler — Admin Portal Guide</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --brand-blue: #11B2E8;
    --brand-dark: #2A2421;
    --brand-warm: #EBE6DE;
    --brand-mid: #6B5E55;
    --brand-accent: #A65D37;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    background: #f4f1ec;
    color: var(--brand-dark);
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ── Cover ── */
  .cover {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: var(--brand-dark);
    color: #fff;
    text-align: center;
    padding: 60px 40px;
    break-after: page;
  }
  .cover-logo {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 13px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--brand-blue);
    margin-bottom: 40px;
  }
  .cover h1 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 52px;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 20px;
  }
  .cover h1 em { font-style: italic; color: var(--brand-blue); }
  .cover p {
    font-size: 18px;
    color: rgba(255,255,255,0.65);
    max-width: 480px;
    line-height: 1.6;
    margin-bottom: 60px;
  }
  .cover-meta {
    font-size: 12px;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.08em;
  }

  /* ── TOC ── */
  .toc {
    padding: 60px 72px;
    background: var(--brand-warm);
    break-after: page;
    min-height: 100vh;
  }
  .toc h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 36px;
    color: var(--brand-dark);
  }
  .toc-group { margin-bottom: 28px; }
  .toc-section-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--brand-mid);
    margin-bottom: 8px;
  }
  .toc-item {
    display: flex;
    align-items: baseline;
    gap: 8px;
    font-size: 16px;
    padding: 4px 0;
    color: var(--brand-dark);
  }
  .toc-dot {
    width: 5px; height: 5px;
    background: var(--brand-blue);
    border-radius: 50%;
    flex-shrink: 0;
    margin-bottom: 2px;
  }

  /* ── Content pages ── */
  .page {
    padding: 52px 72px 60px;
    background: #fff;
    break-after: page;
    min-height: 100vh;
  }
  .page.first-page { /* no special override needed */ }

  .section-badge {
    display: inline-block;
    background: var(--brand-blue);
    color: #fff;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 2px;
    margin-bottom: 10px;
  }

  h2 {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 34px;
    font-weight: 400;
    color: var(--brand-dark);
    margin-bottom: 24px;
    line-height: 1.15;
  }

  .screenshot-wrap {
    display: flex;
    gap: 16px;
    margin-bottom: 32px;
  }
  .screenshot {
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(42,36,33,0.12);
    box-shadow: 0 2px 16px rgba(0,0,0,0.08);
    display: block;
  }

  .instructions ol {
    padding-left: 20px;
    margin-bottom: 24px;
  }
  .instructions li {
    font-size: 15px;
    line-height: 1.65;
    color: var(--brand-dark);
    margin-bottom: 10px;
  }
  .instructions li ul {
    margin-top: 8px;
    padding-left: 20px;
  }
  .instructions li ul li {
    margin-bottom: 4px;
    font-size: 14px;
    color: var(--brand-mid);
  }

  .tips {
    background: #f0f8fd;
    border-left: 3px solid var(--brand-blue);
    padding: 14px 18px;
    border-radius: 0 4px 4px 0;
  }
  .tips-label {
    display: block;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--brand-blue);
    margin-bottom: 8px;
  }
  .tips ul {
    padding-left: 18px;
  }
  .tips li {
    font-size: 13.5px;
    color: var(--brand-mid);
    line-height: 1.55;
    margin-bottom: 6px;
  }

  strong { font-weight: 600; }
  em { font-style: italic; }

  /* ── Print ── */
  @media print {
    body { background: #fff; }
    .cover { min-height: 100vh; }
    .page { break-after: page; }
  }

  @page {
    size: A4;
    margin: 0;
  }
</style>
</head>
<body>

<!-- Cover -->
<div class="cover">
  <div class="cover-logo">Sue Wheeler Wood Refinishing</div>
  <h1>Admin Portal<br><em>Training Guide</em></h1>
  <p>Everything you need to manage leads, send estimates, and keep your pipeline moving — step by step.</p>
  <div class="cover-meta">suewheelerstl.com/admin &nbsp;·&nbsp; For internal use</div>
</div>

<!-- Table of Contents -->
<div class="toc">
  <h2>What&#39;s inside</h2>
  ${['Getting Started', 'Dashboard', 'Lead Management', 'Estimates', 'Settings', 'How Leads Come In']
    .map(sec => {
      const items = sections.filter(s => s.section === sec);
      if (!items.length) return '';
      return `<div class="toc-group">
    <div class="toc-section-label">${sec}</div>
    ${items.map(s => `<div class="toc-item"><div class="toc-dot"></div>${s.title}</div>`).join('\n    ')}
  </div>`;
    }).join('\n  ')}
</div>

<!-- Content pages -->
${sections.map(renderSection).join('\n')}

</body>
</html>`;

const outPath = join(__dirname, 'sue-wheeler-admin-guide.html');
writeFileSync(outPath, html);
console.log(`✓ Guide written to ${outPath}`);
console.log(`  Open in browser → File > Print → Save as PDF`);
console.log(`  File size: ${(html.length / 1024 / 1024).toFixed(1)} MB`);
