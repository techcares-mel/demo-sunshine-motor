# CLAUDE.md — Sunshine Motor Repairs & Tyres

## Business Details
- **Name**: Sunshine Motor Repairs & Tyres
- **Type**: Auto mechanic and tyre shop
- **Address**: 97 Cromer Ave, Sunshine North VIC 3020
- **Mobile**: 0433 523 675
- **Landline**: (03) 9366 0066
- **Email**: info@sunshinemotors.com.au
- **Website**: https://sunshinemotors.com.au/
- **Trading Hours**:
  - Mon–Fri: 8:30 AM – 5:00 PM
  - Sat: 8:30 AM – 2:00 PM
  - Sun: Closed
- **Social**: Facebook only — https://www.facebook.com/sunshinemotorrepairs/

## Language
- ALL site text in English only. Brand name and product/service names as widely-recognised proper nouns.

## Design System
- **Theme**: Dark
- **Template**: Template A (Auto / Trades / Industrial)
- **Accent color**: `#ac3434` (from `colors.json`, extracted from logo)
- **Accent hover**: `#c54545`
- **Accent glow**: `rgba(172, 52, 52, 0.25)`
- **Background**: `#0a0a0a` (near-black)
- **Surface**: `#1a1a1a`
- **Card**: `#242424`
- **Text**: `#ffffff`
- **Muted text**: `#9e9e9e`
- **Heading font**: Oswald (400/500/700)
- **Body font**: Roboto (400/500/700)
- **Inspiration**: Dark industrial automotive — vivid red accent over near-black, bold condensed uppercase headings, full-bleed dark hero with workshop photo and overlay.

## Assets
- **Logo**: `images/logo.jpg` — referenced from both nav (height 56px) and footer (height 64px).
- **Hero background**: `images/hero.jpg` (dedicated 1920×1079 hero shot) with `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55))` overlay.
- **About section image**: `images/image4.jpg` (also reused in gallery — wheel alignment).
- **Gallery** (5 images, in display order):
  1. `images/image1.jpg` — Workshop (spans 2×2 hero tile)
  2. `images/images.jpg` — Tyre Service (substitutes for the missing `image2.jpg`)
  3. `images/image3.jpg` — Mechanical Repairs
  4. `images/image4.jpg` — Wheel Alignment
  5. `images/image5.jpg` — Our Team

> **Note**: The expected `image2.jpg` is not on disk; `images.jpg` was supplied instead and is used in slot 2 of the gallery.

## Page Sections
1. **Nav** (fixed top) — logo, 5 links (Home/Services/About/Gallery/Contact), hamburger on mobile.
2. **Hero** (`#home`, 100vh) — full-bleed `hero.jpg` background, h1 with accent `<em>` on "MOTOR", tagline, two CTAs (Book a Service · Call 0433 523 675), 4-item trust strip.
3. **Why Choose Us** (`#why`) — 4-card grid: Expert Technicians, Fair Pricing, All Makes & Models, Fast Turnaround.
4. **Services** (`#services`) — 12 cards: Log Book Servicing, General Car Service, Roadworthy Certificates, Mechanical Repairs, Auto Electrical Repairs, Air Conditioning Service, Tyres Supply & Fitting, Wheel Alignment & Balancing, Wheels & Rims, Diagnostics & Fault Finding, Fleet Servicing, Brake Repairs.
5. **Stats** (`#stats`) — 4 animated counters: 12 Services Offered · 6 Days a Week · 100% Honest Pricing · 1 Stop Workshop. No invented star ratings or review counts (research.json had neither).
6. **Gallery** (`#gallery`) — 5 images in a CSS grid, first item spans 2×2, captions slide up on hover.
7. **About** (`#about`) — 2-column with description + 5-item feature list (left) and image with "Sunshine North, VIC" accent badge (right).
8. **Testimonials** (`#testimonials`) — 3 cards with 5-star rows; quotes verbatim from research.json.
9. **Contact** (`#contact`) — left column has 5 contact rows (address, mobile, landline, email, hours) + Google Maps iframe; right column has the contact form.
10. **Footer** — 4-column grid (logo/social, Quick Links, Services, Contact Info) + copyright bar.

## Required Features (all present)
- **DEMO watermark** — fixed right side, rotated 90deg, pulsing red glow animation.
- **Scroll progress bar** — fixed top, 3px tall, accent red.
- **Back-to-top button** — fixed bottom-right 48px circle, appears at scrollY > 300.
- **Nav blur on scroll** — `rgba(10,10,10,0.95)` + `backdrop-filter: blur(12px)` at scrollY > 50.
- **Mobile hamburger overlay** — full-screen, closes on link click / ESC / close button.
- **Reveal-on-scroll** — IntersectionObserver, threshold 0.15, with `d1`/`d2`/`d3`/`d4` stagger.
- **Stats count-up** — `requestAnimationFrame`, 1500ms, easeOutQuad, preserves `%` suffix.
- **Active nav link tracking** — IntersectionObserver on `section[id]`.
- **Contact form** — `e.preventDefault()` → fade out → thank-you message.
- **Google Maps embed** — iframe with real address (`97 Cromer Ave Sunshine North VIC 3020`).
- **Font Awesome** — loaded via CDN (because at least one social link is present).

## Rules
- Mobile-first responsive: breakpoints 480 / 768 / 1024 / 1280 px.
- Pure HTML5 / CSS3 / vanilla JS — no frameworks, no build step.
- No Lorem Ipsum, no invented numbers, no fake testimonials — all copy is from `research.json`.
- No `#` placeholder hrefs on social icons — only Facebook is rendered because only Facebook exists in `social_links`.

## Redeployment
After making changes, commit and redeploy from inside this folder:

```bash
git add -A
git commit -m "describe your changes"
git push
vercel --prod --yes
```

The Vercel project is already linked (`.vercel/project.json`) after the first deploy — no token or scope flags needed.
