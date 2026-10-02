# GrowthYari — Frontend

Marketing site redesign for GrowthYari, a professional growth accelerator (live
coaching, practical learning, proof-of-work portfolios).

Frontend only. No backend, database, auth, payments, or CMS.

## Design system

The site uses a **night meadow** dark theme — a near-black green base, emerald as
the interactive layer, lime as the rare highlight, a warm amber counterpoint,
and white cards floating on top. Every colour is a named token in
`app/globals.css`, so the whole palette re-themes from that one block.

**The base is `#101a16`, not `#000`.** Pure black kills the depth cues that
borders and blooms rely on, makes the emerald glow smear, and reads as
unfinished. This keeps a green cast so the accent colour belongs to the
background. Every "at rest" surface (`canvas`, `surface`, `surface-3`, `panel`)
resolves to it, so the page is genuinely uniform. The only lighter step,
`#17251f`, exists purely for hover and active feedback.

**There are two text scales and they must not be mixed.** `ink` / `ink-2` /
`body` / `muted` are for the dark base. `card-ink` / `card-ink-2` /
`card-body` / `card-muted` are for white cards. This is not stylistic —
`ink` is `#eef5f1` here, so using it inside a white card makes text vanish.

**White cards float on the dark base at 17.8:1.** That is the largest contrast
jump in the theme and it is deliberate: white is what keeps the hero crisp
rather than murky. `HeroShowcase` is currently the only white surface. If you
add one, it needs the `card-*` text scale, and it must not become a large fill
behind long-form text — a white block in a dark page reads as a hole.

| Role | Token | Value |
| --- | --- | --- |
| Page background | `canvas` | `#101a16` |
| Card / raised surface | `surface` | `#101a16` |
| Deeper card surface | `surface-3` | `#101a16` |
| Tinted band | `panel` | `#101a16` |
| Hover, active | `surface-2` | `#17251f` |
| Deepest band | `panel-2` | `#17251f` |
| Headings, strong body | `ink` | `#eef5f1` |
| Sub-headings | `ink-2` | `#c9dad2` |
| Paragraph copy | `body` | `#adc2b9` |
| Captions, meta, labels | `muted` | `#93aaa1` |
| Floating card | `card` | `#ffffff` |
| Recessed area on a card | `card-soft` | `#f2f9f4` |
| Border on a card | `card-line` | green-grey at 14% |
| Text on a card | `card-ink` … `card-muted` | `#14291f` … `#4d635a` |
| Primary emerald | `neon` | `#2fb188` |
| Secondary emerald | `neon-soft` | `#4ac39c` |
| Text-safe emerald | `neon-text` | `#5fd3ac` |
| Rare highlight | `lime` | `#b6e05a` |
| Text-safe lime | `lime-text` | `#c9e87e` |
| Warm counterpoint | `amber` | `#f0c46b` |
| Text-safe amber | `amber-text` | `#f3d093` |
| Hairlines | `line` / `line-strong` | green-grey at 14% / 26% |

**Twenty-eight contrast pairs, all clear of AA.** Seven dark text roles against
both green steps (worst: `muted` on hover, 6.44:1) and seven card text roles
against both card surfaces (worst: `card-neon-text` on `card-soft`, 5.72:1).

Rules that the palette follows:

- All text steps are at or above **4.5:1** on every surface they are used on.
- **Fill text colour is decided by contrast, not taste.** Emerald `#2fb188` is
  bright enough to carry the *dark* canvas text at 6.57:1, where white would
  reach only 2.5:1 and fail. Lime `#b6e05a` takes the same dark text. Both
  filled button variants therefore use `text-canvas`, not `text-white`. If you
  ever darken `--color-neon` back toward `#177c5d`, that has to flip to white.
- `neon`, `lime` and `amber` are fills, borders and indicators — never long-run
  text. `*-text` exists for that.
- **Accent fills invert on white cards.** `text-neon` on a white card is only
  2.5:1, below the 3:1 floor for a meaningful glyph, so anything inside a card
  uses `card-neon-text`.
- Hairlines are light green-grey, so borders sit in the same light as the rest
  of the theme. With one page colour they are also the only thing separating a
  card from the page, so they carry that alone.
- Shadows are **black**, not green-grey. A green-grey shadow on near-black is
  invisible — depth has to come from real darkness plus the emerald glow.
- Grid and scanline textures are drawn **lighter** than the surface. A dark line
  on a dark page disappears entirely.
- Because every page surface is the same colour, borders and shadows are load
  bearing. Anything that used to read as a card by being a slightly different
  shade needs an explicit border: `border border-line`, or
  `border border-card-line` if it is white.

### Visual layer

Defined alongside the tokens in `app/globals.css` and used to carry the "techy"
read, so pages lean on graphics rather than more paragraphs. Grids and
scanlines are drawn *lighter* than the surface — a dark line on a dark page
disappears entirely.

| Class | Effect |
| --- | --- |
| `.tech-grid` / `.tech-grid-fine` | Measurement-grid backgrounds, 64px and 22px |
| `.tech-mask` | Fades a grid out toward the edges |
| `.glow-orb` | Soft colour wash, paired with `.animate-drift` |
| `.scanlines` | Very low-contrast CRT texture |
| `.neon-card` + `.neon-card-hover` | Card surface that tints and lifts on hover |
| `.neon-edge` | Gradient hairline border via a masked pseudo-element |
| `.glow-text` / `.glow-text-lime` / `.glow-text-strong` | Soft coloured shadow behind short headings |
| `.caret` | Blinking block cursor, used by the terminal |
| `.animate-pulse-dot` / `.animate-drift` / `.animate-marquee` / `.animate-sweep` | Ambient motion |
| `.animate-arc-in` | Staggered fade-in, used by the skill dial |

### Depth layer

Depth is built with CSS box-shadows and `perspective` rather than WebGL, so it
costs nothing to load and needs no JavaScript. Motion is disabled under
`prefers-reduced-motion`.

| Class | Effect |
| --- | --- |
| `.depth-1` / `.depth-2` | Raised tile: pale-mint top highlight plus a soft cast shadow |
| `.depth-float` | Tilted toward the viewer via `perspective(1200px) rotateX(4deg)` |
| `.depth-stack` | Two offset plates behind the element, for a stacked-panel look |
| `.depth-floor` | Perspective floor that lays the child out as a receding ramp |

All motion collapses to ~0ms under `prefers-reduced-motion`, and every decorative
layer is `aria-hidden` so it is never announced.

## Visuals

Every diagram on the site is inline SVG or CSS. There are no raster images
outside `public/brand/`, which keeps the payload small and means the artwork
re-themes with the tokens instead of needing to be re-exported.

All of these live in `components/ui/visuals/`:

| Component | What it draws | Used on |
| --- | --- | --- |
| `LoopDiagram` | The five-step GrowthYari loop as a rotating ring of arrows | `LoopSection` |
| `FrictionLoop` | The same ring, broken, labelled "no feedback" | `ProblemSection` |
| `ArtifactShowcase` | Four illustrated portfolio artefacts — a call recording with a waveform, a rewritten CV, an outreach log, a case study | `ProofSection` |
| `PersonaGlyph` | An abstract geometric composition per thinker card | `PersonasSection` |
| `FeedbackRing` | Closed ring vs. ring with a gap | `ComparisonSection` |
| `JourneyRail` | A four-step horizontal rail | `ContactPage`, `ProgramsPage`, `PaymentPage` |
`FrictionLoop` and `LoopDiagram` are deliberately the same circle shape, one
broken and one closed, and they sit in adjacent sections. That is the whole
argument of the page in two drawings.

These six are hand-drawn diagrams that carry the page's argument, so they stay.
The mockup components that used to sit alongside them — `ServiceScene`,
`TrajectoryGlyph` and `WorkshopGlyph` — were removed when real illustrations
arrived, along with the `FormatSection` that hosted them.

## The hero

The hero is the one screen that has to stop a scroll, so it is the only place
with real interaction. It is a server component (`Hero.tsx`) that composes two
client components:

| Component | Interaction |
| --- | --- |
| `HeroShowcase` | Tilts toward the cursor (max 5°), a wash tracks the pointer across the card face, the three stage cards fan apart on hover, and the loop stage advances on a 3.2s timer |
| `RotatingWord` | Cycles the headline's object — career / clients / confidence / proof — on a 2.6s timer |

Four details are load-bearing rather than decorative:

- **The tilt is written to CSS custom properties, not state.** `--px` and `--py`
  are set imperatively in `pointermove` so the wash re-centres without a React
  re-render on every mouse move. Only the two rotation degrees go through state.
- **`.hero-panel` needs `isolation: isolate`.** The bloom under the panel sits at
  `z-index: -1`; without a stacking context it escapes upward, paints behind the
  section background, and silently disappears.
- **`RotatingWord` gives screen readers all four phrases at once** and marks the
  visible one `aria-hidden`. Otherwise a reader hears a phrase that is not on
  screen yet. The wrapper is a fixed-height clipped box so the headline cannot
  jump when the phrase length changes.
- **The marquee duplicates its list and `aria-hidden`s the copy**, because the
  track is shifted `-50%` to loop. Without that, a screen reader hears everything
  twice. Hovering pauses it via `animation-play-state`.

Everything stops under `prefers-reduced-motion`: the word freezes on the first
phrase, the wash and pulse stop, and the tilt and fan are disabled in JS, not
just in CSS.

Facts shown in the hero come from `data/site.ts` (`cohort`, `trustStrip`) rather
than being retyped, so a number can only be stated in one place. The old
`Terminal` block was part of the previous hero and is no longer rendered
anywhere — the file is still in `components/ui/` as an unused option.

### The white card

`HeroShowcase` is the site's only white surface, and it uses the `card-*` text
scale throughout. This is the easiest place in the codebase to break contrast,
because the obvious-looking class names (`text-ink`, `text-neon`) are all wrong
inside it. Two specific traps:

- `text-ink` is `#eef5f1` on this theme and disappears on white.
- `text-neon` reaches only 2.5:1 on white — fine as a fill, unreadable as a
  glyph. The tick marks and the stage rail use `card-neon-text` instead.

## Navbar and page transitions

The navbar carries four animations, and each one is deliberate about *when* it
runs rather than just how it looks:

- **Entrance.** The bar drops in and its items follow on a stagger keyed off a
  `--i` custom property that `Navbar` sets per element. Retuning the sequence is
  one number, not one edit per link.
- **Scroll.** Crossing 24px swaps the bar to a translucent, blurred, bordered
  state and shrinks it. Both transitions share the soft easing curve.
- **Links.** Each item lifts a pixel on hover and the underline grows from its
  centre with an emerald glow — the bar responds to the pointer instead of only
  reporting state.
- **Menu toggle.** The two icons cross-fade and rotate apart rather than
  swapping in place, so the toggle reads as movement rather than a flicker.

The mobile sheet stays mounted and animates `grid-template-rows` between `0fr`
and `1fr`, which is what lets it grow smoothly. `inert` and `aria-hidden` are
set when closed so the hidden links leave the tab order and the accessibility
tree — without that, a keyboard user tabs into an invisible menu.

**The entrance animation has a failure mode, and it is guarded.** The bar renders
at `opacity: 0` and translated off-screen until a 40ms effect flips `mounted`.
So on a page that renders before JS runs, the navbar is invisible — and it holds
every route on the site. A `<noscript>` block in `app/layout.tsx` forces the
hidden state off. If you raise the 40ms delay, re-check that path.

`app/template.tsx` handles the page transition. It has to be a `template`, not a
`layout`, because only a template remounts per route — a layout would run once
and never fire again. The animation is 420ms of opacity and a 10px rise, with no
horizontal slide, which would fight the direction the visitor just navigated
from. It runs on navigation only, not on first load, so it never stacks with the
hero's own entrance.

All motion collapses under `prefers-reduced-motion`, and the global rule zeroes
`animation-delay` as well as duration. That second part matters: the navbar
staggers on `--i`, so without it a reduced-motion visitor would see content
missing until each delay elapsed.

## Illustrations

`public/gallery/` holds the program illustrations. The nine source PNGs were
each 1408×768 and totalled **12.2MB**; they are re-encoded to WebP at quality
80 in `public/gallery/gallery-01.webp` … `-09.webp`, which comes to **616KB** —
a 95% saving with no visible loss at display size.

Captions, alt text, page assignment and placement all live in
`data/illustrations.ts`. That file is the only thing to edit to move an image
between pages.

| Image | Page | Placement | Size |
| --- | --- | --- | --- |
| `gallery-01` Career growth | `/` | **background** | right 38% of hero, 16% opacity |
| `gallery-08` Mentorship | `/` | tile | 4:3, half column |
| `gallery-02` Career progression | `/programs` | tile | 4:3, half column |
| `gallery-04` Assessment review | `/programs` | tile | 4:3, half column |
| `gallery-07` Progress tracking | `/programs/[slug]` | tile | 4:3, half column |
| `gallery-03` Live online workshop | `/workshops` | tile | 4:3, half column |
| `gallery-06` Community | `/workshops` | tile | 4:3, half column |
| `gallery-05` Case study review | `/about` | tile | 4:3, half column |
| `gallery-09` Business growth | `/about` | tile | 4:3, half column |

**One image size everywhere, one or two per page.** An earlier pass had a
full-column "wide" variant beside a half-column one; the size difference read as
inconsistent rather than hierarchical, so `FeatureImage` now has a single
`aspect-[4/3]` tile and `IllustrationBand` renders everything in one two-up
grid. It also hard-caps at two images per page via `.slice(0, 2)`.

**Exactly one image is a background, and it is on one page.** `placement:
"background"` appears once in the array, and `BackgroundImageLayer` is rendered
once, inside `Hero`, covering only the right 38% of the hero at 16% opacity
under two gradient scrims. If you raise that opacity, re-check the heading
against the scrim.

`IllustrationBand` renders whatever a page has been assigned: the `feature`
image fills the content column, `pair` images sit two-up beneath it. A page
with nothing assigned renders no band at all rather than an empty section.

`/contact` and `/payment` deliberately have no illustrations. They are
transactional pages, and a decorative illustration next to an enquiry form or
a locked payment flow is noise.

**The file-to-subject mapping is an assumption.** The source filenames are
random hashes and carry no subject information, so the images are matched to
their descriptions by the order they were supplied. If any image is in the
wrong slot, reorder that array — nothing else needs to change.

The ninth image had no matching description, so it is captioned "Business
growth" with alt text that says the subject is unconfirmed. Replace it or drop
it once you know what it is.

**Keep the captions honest.** Three of the described subjects — a student
dashboard, a WhatsApp community, and assessment score meters — describe
surfaces GrowthYari does not currently ship, and growthyari.com publishes no
student results. The section therefore captions the images as themes and
carries a visible note that they are not screenshots of shipped features. Do
not reword those captions into feature claims.

## Image assets

Everything below `public/brand/` is generated from the one source JPEG.

| File | Size | Purpose |
| --- | --- | --- |
| `growthyari-logo-source.jpg` | 46KB | Downscaled master, 1600×1600 |
| `growthyari-logo-dark.png` | 51KB | Default mark, for light backgrounds |
| `growthyari-logo-{light,emerald,lime,neon}.png` | ~50KB each | Alternative fills |
| `growthyari-mark-64.png` / `-256.png` | 3.6 / 17KB | Manifest and PWA icons |
| `app/icon.png` | 39KB | 512×512 app icon, also the maskable manifest icon |
| `app/apple-icon.png` | 12KB | 180×180 iOS home screen |
| `app/favicon.ico` | 39KB | Six sizes, 16→256 |

The source JPEG was 411KB. `growthyari-logo-source.jpg` is a 1600×1600
re-encode at quality 88, which is still large enough to re-key from, at 46KB.

**App icons must be RGBA PNG.** Next.js decodes `app/icon.png`,
`app/apple-icon.png` and `app/favicon.ico` during the build and fails with
`The PNG is not in RGBA format!` if they are saved as RGB. The ICO has the same
requirement, since its largest embedded entry is a PNG.

Share cards are generated, not stored:

| Route | Output |
| --- | --- |
| `/opengraph-image` | Site-wide card |
| `/programs/[slug]/opengraph-image` | Per-program card, prerendered for each track |

**Why there are no photographs.** growthyari.com publishes no student outcomes,
names or photos, so there is nothing honest to put in an image slot. Faking it
with stock portraits or AI faces would invent the exact social proof this site
is not allowed to claim. Every visual above is abstract, or a mockup of a
format rather than a person's result, and the two places where that matters
say so on the page.

`ServiceScene`'s bars and meters are shapes, not measurements — the skill
review card says so on its face. The one visual driven by data is
`WorkshopCard`'s seat meter, and it renders nothing until `seats` and
`seatsTaken` are real numbers in `data/workshops.ts`. They are `null` in the
demo records, so no meter appears. Do not fill those in to make the card look
better.

## Logo

The source mark is `public/brand/growthyari-logo.jpg` — a 4001×4001 JPEG whose
artwork is a flat `#2C4736` fill on a white background, with a large white
border. Transparent variants have been produced from it by recovering the
coverage as `a = (255 - min(R,G,B)) / (255 - 44)` and resampling to 512×529:

| File | Fill | Use |
| --- | --- | --- |
| `growthyari-logo-light.png` | `#eafbf3` | Default — the site background is near-black |
| `growthyari-logo-dark.png` | `#1c3a2e` | For white cards only |
| `growthyari-logo-emerald.png` | `#177c5d` | Matches the light-theme `neon` |
| `growthyari-logo-lime.png` | `#4a7017` | Matches the light-theme `lime-text` |

`components/ui/Logo.tsx` takes a `variant` of `"light"` (default), `"dark"`,
`"emerald"` or `"lime"`. The default flipped to `light` when the theme went
dark; the near-black `dark` variant is now the one reserved for white cards,
since it would be invisible against the `#101a16` base. The two remaining
variants still hold the *old* light-theme values, so they are no longer
matched to any token — recolour them if you need them. The original JPEG is
retained as the source of truth and is no longer rendered.

## Pages


| Route | Purpose |
| --- | --- |
| `/` | Homepage: problem, framework, audiences, process, outcomes, pricing, workshops, FAQ |
| `/programs` | Program comparison, shared highlights, pricing, FAQ |
| `/programs/group-cohort` | Group Cohort detail: curriculum, pricing, FAQ |
| `/programs/1-1-accelerator` | 1:1 Accelerator detail: curriculum, pricing, FAQ |
| `/workshops` | Upcoming workshop schedule |
| `/about` | About, framework, audiences, process, values |
| `/contact` | Contact channels and enquiry form |
| `/payment` | Payment shell. **Not live** — states this plainly, collects nothing |

## Requirements

- Node.js 20 or newer — check with `node -v`
- npm (ships with Node)

## Deploy to Vercel

1. Push the project to a GitHub or GitLab repo.
2. Import it at [vercel.com/new](https://vercel.com/new). The framework
   preset is detected automatically — no build settings to change.
3. Add the two environment variables under **Project → Settings → Environment
   Variables**, for all three environments. Do **not** commit a `.env.local`;
   it is git-ignored and will not reach Vercel.
   - `RESEND_API_KEY`
   - `CONTACT_FROM` — `GrowthYari <hello@growthyari.com>`
4. Deploy. `npm run build` runs on Vercel and the output is picked up
   automatically.
5. Point the domain at Vercel (Project → Settings → Domains → Add). Vercel shows
   the `A`/`CNAME` records to add where your DNS is hosted.
6. Verify the form end to end by submitting a real message from the live URL
   and confirming it arrives.

### DNS records for Resend

Add these where growthyari.com's DNS is hosted **before** the first send. Until
they propagate, `CONTACT_FROM` falls back to `onboarding@resend.dev` and the
From address shows as Resend.

Resend prints the exact values for your account under **Domains → Add Domain →
growthyari.com → DNS records**. They are typically:

| Type | Name | Purpose |
| --- | --- | --- |
| `TXT` | `resend._domainkey` | DKIM signature — leave `DKIM1` in Value |
| `MX` | `send` | Mail-from routing for the sending subdomain |
| `TXT` | `send` | `v=spf1 include:amazonses.com ~all` |

Add a second SPF record only if one already exists. Two `SPF` records fail
validation, so merge the include into the existing record instead.

MX propagation can take up to 24h; DKIM usually resolves within the hour. Until
both are green in Resend, do not rely on it for anything urgent.

## Run it

### 1. Open the project folder

```powershell
cd "C:\Users\dhruv\OneDrive\Documents\Default Project\growthyari-web"
```

### 2. Install dependencies (only needed once)

```powershell
npm.cmd install
```

> **Use `npm.cmd`, not `npm`.** On this machine PowerShell blocks `npm.ps1`
> ("running scripts is disabled"). `npm.cmd` is the same tool without the
> script-blocking wrapper. If you prefer, run the commands in **cmd** instead
> of PowerShell and plain `npm` will work.

### 3. Start the dev server

```powershell
npm.cmd run dev
```

### 4. Open the site

<http://localhost:3000>

Edits to any file update the page in the browser as you save.

### If port 3000 is busy

Another local app may already hold that port. Use a different one:

```powershell
npm.cmd run dev -- -p 3001
```

Then open <http://localhost:3001>.

To stop the server, press `Ctrl+C`.

## All commands

| Command | What it does |
| --- | --- |
| `npm.cmd run dev` | Dev server with hot reload |
| `npm.cmd run build` | Production build |
| `npm.cmd start` | Serve the production build (run `build` first) |
| `npm.cmd run lint` | ESLint |
| `npm.cmd run typecheck` | Generate route types, then type-check |

## Project structure

```
app/          routes, layout, metadata, sitemap, robots, OG image
components/   UI primitives, layout, cards, page sections
data/         typed content — single source of truth
lib/          SEO metadata helpers, utilities
public/       static assets (including the placeholder brand mark)
```

All page copy lives in `data/`, so text and pricing changes do not require
touching components. All colour lives in the `@theme` block of
`app/globals.css`.

## Editing content

| Change | File |
| --- | --- |
| Site name, domain, CTAs, cohort facts | `data/site.ts` |
| Programs, pricing, curriculum, FAQs | `data/programs.ts` |
| Workshop schedule | `data/workshops.ts` |
| About page copy | `data/about.ts` |
| Contact details and channels | `data/contact.ts` |

## Before you launch

These placeholders are deliberate and must be replaced with real details:

1. **Workshop dates** — `data/workshops.ts` holds demo entries. growthyari.com
   publishes no schedule, so the page says so. Replace with real dates.
2. **Thinker cards** — `data/personas.ts` holds **composite personas written for
   this site**, not real students. growthyari.com publishes no student
   outcomes, names, photos or results, so nothing there should be read as a claim
   about a real person. Replace with genuine, consented stories if any become
   available. The disclaimer under the grid must go with them.
3. **Contact details** — `akash@growthyari.com` was supplied by the site owner
   and is published, linked, and wired as the form's delivery inbox. Phone,
   WhatsApp, LinkedIn and office address are still unpublished, and the Contact
   page says so rather than showing a fake value.
4. **Prices** — these match the current live site (`₹19,999` Group Cohort and
   `₹1,17,999` 1:1 Accelerator, both + 18% GST). Re-verify before publishing;
   a next-batch date of 2 August is also carried over from the live site and
   will need updating.
5. **Domain** — `data/site.ts` points SEO metadata at `https://growthyari.com`.
   Change it if the site goes live elsewhere.
6. **Payment** — `/payment` is a shell. It has no gateway, no form, and no
   client-side state, and is marked `noindex`. To make it real, add the
   provider SDK, move the amount server-side, and delete the "coming soon"
   copy in `app/payment/page.tsx`. The `?program=` query is display-only — never
   trust it to price anything.

No testimonials, statistics, founder bios, or team members appear anywhere,
because none are published and none were invented.

## A note on the GTM blueprint

`GrowthYari_GTM_Blueprint.pdf` could not be applied. It is 15 full-page images
with no text layer, so nothing is machine-extractable from it. Page content here
still comes from the live growthyari.com bundle, extracted and verified. If the
blueprint's positioning or offers differ, paste the text and the content in
`data/` can be updated without touching components.


## Contact form delivery

The form posts to `app/api/contact/route.ts`, which sends via Resend to
`contactEmail` in `data/contact.ts`. That recipient is **hardcoded, not an env
var**, on purpose: the address the site publishes and the inbox it delivers to
are guaranteed to be the same. Making the recipient configurable would let the
two drift apart, which is a way to silently lose every enquiry.

Configure with two env vars — see `.env.example`:

| Var | Value |
| --- | --- |
| `RESEND_API_KEY` | From Resend → API Keys. Sending-only access is enough. |
| `CONTACT_FROM` | Verified sender, e.g. `GrowthYari <hello@growthyari.com>` |

With the domain verified in Resend, mail authenticates via SPF/DKIM. Without it,
`onboarding@resend.dev` works immediately but your recipients see a Resend From
address — fine for testing, not for a live site.

Four things in the route that are not decoration:

- **It returns 503, not 200, when credentials are missing.** A previous version
  played a *simulated* success, so a visitor was told their enquiry had arrived
  while it was silently discarded. The client only shows "Enquiry received"
  after the server confirms. If the send fails, the typed message stays in the
  form and the real address is offered as a fallback.
- **Missing keys return a generic body, not the reason.** Telling an anonymous
  caller that `RESEND_API_KEY` is unset is free reconnaissance; the real cause
  goes to the server log.
- **Validation runs server-side too.** The browser check is a UX affordance.
  Anything can POST directly, so the route is the boundary that counts.
- **Visitor input is HTML-escaped** before it goes into the email body. The
  name, email and message are interpolated into markup, so an unescaped
  `<script>` would otherwise be injected into the email.

Also: a hidden `website` honeypot field (bot-only, `tabIndex={-1}`), a 5000
character cap, and per-IP rate limiting at 5 per 10 minutes. The rate limit is
in-memory, so it resets on cold start — fine for one instance, not for a
distributed deployment. `X-RateLimit-Remaining` is returned so a client can
back off.

Verified by direct POST: missing keys → 503 with no secret in the body; invalid
email and short message → 400 with per-field errors; honeypot tripped → 200 and
silent discard; short phone → 400.

## Notes

- **Fonts** are self-hosted via `next/font` (Inter Tight, Inter, IBM Plex
  Mono), so there is no external font request.
- `typedRoutes` is on in `next.config.ts`, so mistyped `href` values fail the
  type check rather than 404ing at runtime.
