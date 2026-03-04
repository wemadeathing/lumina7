# Lumina7 Website — Product Requirements Document
**Version:** 1.0  
**Date:** March 2026  
**Owner:** Nasif Salaam  
**For:** Cursor / Claude Code implementation  
**Stack:** Astro (existing) — update in place, no rebuild required

---

## 1. Overview & Goal

Lumina7 is a full-service design studio based in Cape Town offering brand identity, print, signage, and web services to South African SMEs. The current website has generic agency copy, outdated services, and no WhatsApp CTA — the primary conversion channel for the SA market.

**Primary goal:** Convert SME business owners visiting the site (from WhatsApp outreach, referral, or Google) into WhatsApp enquiries or discovery call bookings.

**Primary conversion action:** Tap-to-WhatsApp (+27 81 462 3628)  
**Secondary conversion action:** Book a Discovery Call (Calendly link — TBD, placeholder for now)  
**Tertiary:** 3-field contact form (name, email, message)

**Target audience:**
- SA SME owners broadly (owner-operated businesses, R5k–R60k budget range)
- Restaurant / hospitality business owners
- Professional services firms (lawyers, accountants, consultants)

---

## 2. Technical Requirements

| Requirement | Spec |
|---|---|
| Framework | Astro (existing) |
| Styling | Existing CSS/Tailwind — extend, don't rebuild |
| Images | Convert all to WebP. Lazy-load below fold. |
| Performance target | LCP < 2.5s, CLS < 0.1, mobile load < 3s |
| Mobile-first | All layouts designed for 390px width first |
| WhatsApp button | Sticky floating button on mobile (always visible) |
| Font | Existing brand fonts — no changes |
| Colours | Existing brand palette — no changes |
| Analytics | Add basic event tracking on WhatsApp clicks and form submissions |

---

## 3. Site Structure

### Pages to update
| Page | Action |
|---|---|
| `/` (Homepage) | Full content and structure overhaul — see Section 4 |
| `/services` | Update service list and copy — see Section 5 |
| `/work` | Minor copy updates — see Section 6 |
| `/about` | Minor copy updates — see Section 7 |
| `/contact` | Simplify form, add WhatsApp CTA — see Section 8 |

### Pages to add
| Page | Action |
|---|---|
| `/services/brand-identity` | New service detail page — see Section 9 |
| `/services/websites` | New service detail page — see Section 9 |
| `/services/print` | New service detail page — see Section 9 |
| `/services/signage` | New service detail page — see Section 9 |

---

## 4. Homepage — Full Specification

### 4.1 Navigation
No changes required to nav structure. Ensure WhatsApp number is visible in the header on desktop.

Add to nav (desktop only, top right alongside Contact):
```
WhatsApp Us → wa.me/27814623628
```

---

### 4.2 Section 1 — Hero

**Purpose:** Immediate clarity. Tell the visitor what you do, who it's for, what to do next. Pass the 5-second test.

**Layout:** Full-width. Left-aligned text. Strong visual or work sample right side on desktop. Single column on mobile.

**Headline:**
```
We design brands and websites
for South African businesses.
```

**Subheadline:**
```
Branding, print, signage, and websites — 
delivered in weeks, not months.
```

**Primary CTA button:**
```
Label: WhatsApp Us
Link: https://wa.me/27814623628?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20design%20services
Style: Dark filled button (primary brand colour)
Icon: WhatsApp icon left of label
```

**Secondary CTA (text link below button):**
```
Label: Or book a free discovery call →
Link: [Calendly URL — placeholder: #book-call]
Style: Underlined text link, lighter weight
```

**Trust signal below CTAs:**
```
✓ Fixed quotes  ✓ Fast turnaround  ✓ B-BBEE Level 1
```

**Hero visual:**
Use best existing project image (recommend: Arabica Coffee). Single image. No carousel. No video autoplay. WebP format.

---

### 4.3 Section 2 — Client Logo Bar

**Purpose:** Immediate social proof. Borrowed credibility from recognisable names.

**Heading (small, muted):**
```
Trusted by South African businesses
```

**Logos:** Use existing 8 client logos. Single scrolling row on mobile, static grid on desktop. Greyscale, opacity 60%, full colour on hover.

**Add below logo row:**
```
[ and counting → View our work ]
Link: /work
```

---

### 4.4 Section 3 — Services

**Purpose:** Let the visitor immediately see if you do what they need.

**Section heading:**
```
How we help
```

**Section subheading:**
```
From first impression to final install — we handle every design touchpoint.
```

**Service cards — display as 2-col grid desktop, single col mobile. Each card has: icon, title, one-line description, "from" price, and a link.**

**Card 1 — Brand Identity**
```
Icon: [pen/identity icon]
Title: Brand Identity
Description: Logo, colour, typography and brand guidelines that make your business instantly recognisable.
Price: From R5,000
Link: /services/brand-identity
```

**Card 2 — Print & Marketing Materials**
```
Icon: [print icon]
Title: Print & Marketing Materials
Description: Flyers, brochures, business cards, menus, and presentations that reinforce your brand everywhere.
Price: From R800
Link: /services/print
```

**Card 3 — Signage & Installations**
```
Icon: [signage icon]
Title: Signage & Installations
Description: Shopfront signage, banners, vehicle branding, and large format — designed and produced.
Price: From R1,500
Link: /services/signage
```

**Card 4 — Website Design & Development**
```
Icon: [web icon]
Title: Website Design & Development
Description: Professional websites that look great, load fast, and work on any device.
Price: From R8,000
Link: /services/websites
```

**Card 5 — Social Media & Digital Assets**
```
Icon: [social icon]
Title: Social Media & Digital Assets
Description: Profile graphics, post templates, and digital ads that keep your brand consistent online.
Price: From R1,200
Link: /services/print
```

**Below cards, add a note:**
```
All projects include a fixed quote before we start. No surprises.
```

---

### 4.5 Section 4 — Selected Work

**Purpose:** Prove the quality. Let the work convert.

**Section heading:**
```
Recent work
```

**Section subheading:**
```
A sample of what we've built for South African businesses.
```

**Display:** 2-col grid desktop, single col mobile. Show 4 projects max on homepage. Use existing case study cards.

**Featured projects (in this order):**
1. Arabica Coffee Company (branding + web — hospitality segment)
2. Passiflora Gardens (branding + web — professional/lifestyle)
3. Find Me a Coffee (web development — digital product)
4. Ripple Productivity Tracker (product design — tech)

**Below grid:**
```
CTA: View all projects →
Link: /work
```

---

### 4.6 Section 5 — How It Works

**Purpose:** Remove process anxiety. Show it's simple and fast.

**Section heading:**
```
Simple process. Fast results.
```

**Section subheading:**
```
Most clients go from first conversation to final delivery in 2–4 weeks.
```

**3-step layout — horizontal on desktop, vertical on mobile:**

```
Step 1
Icon: Chat bubble
Title: We talk
Body: Tell us what you need. We'll ask the right questions and come back with a fixed quote within 24 hours.

Step 2
Icon: Pencil/design
Title: We design
Body: You approve the direction, we build it. Regular check-ins, structured feedback rounds, no guessing games.

Step 3
Icon: Rocket/launch
Title: You launch
Body: Final files, live site, print-ready artwork — whatever the project needs, handed over once final payment clears.
```

---

### 4.7 Section 6 — Testimonials

**Purpose:** Third-party validation. Trust is the biggest barrier for SA SMEs hiring a new supplier.

**Section heading:**
```
What our clients say
```

**Layout:** 3-column desktop, single col mobile. Cards with quote, client name, business name, and photo if available.

**Testimonial content:** Use real client testimonials. If not yet available, use placeholder structure:

```
Testimonial 1:
Quote: "Lumina7 delivered our full rebrand in under three weeks. The quality was exceptional and Nasif really understood what we were trying to achieve."
Name: [Client Name]
Business: [Business Name]
Photo: [client-photo.jpg]

Testimonial 2:
Quote: "We needed a website fast before a big corporate event. They delivered on time and it looked better than agencies charging three times as much."
Name: [Client Name]
Business: [Business Name]
Photo: [client-photo.jpg]

Testimonial 3:
Quote: "Professional, communicative and genuinely good at what they do. I've already referred two other businesses."
Name: [Client Name]
Business: [Business Name]
Photo: [client-photo.jpg]
```

**Below testimonials, add stat bar:**
```
[ 30+ Projects Completed ]  [ 2–4 Week Average Delivery ]  [ B-BBEE Level 1 ]
```

---

### 4.8 Section 7 — FAQ

**Purpose:** Answer the real objections before a prospect needs to ask. Pre-qualify and build trust simultaneously.

**Section heading:**
```
Common questions
```

**FAQ items — accordion component, closed by default:**

```
Q: How much does a website cost?
A: Our websites start from R8,000 for a professional 5-page brochure site. Custom or e-commerce sites are quoted based on scope. We always provide a fixed quote before starting — no surprises.

Q: How much does a logo or brand identity cost?
A: Logo and brand identity packages start from R5,000 and include logo files, colour palette, typography, and basic brand guidelines. Full brand identity systems with comprehensive guidelines start from R12,000.

Q: How long does a project take?
A: Most projects are completed within 2–4 working weeks from the day we receive your deposit and brief. Timeline depends on scope and how quickly you can review and approve work. We'll agree on a specific timeline before we start.

Q: Do I own my website and logo after the project?
A: Yes. All intellectual property transfers to you in full once final payment is received. You own everything — files, code, domain, and hosting credentials.

Q: Can you handle print production as well as design?
A: Yes. We design and manage print production for flyers, menus, signage, business cards, brochures, and large format. We work with trusted SA print suppliers and can manage the full process on your behalf.

Q: Do you work with small businesses and startups?
A: Yes — most of our clients are owner-run businesses and growing SMEs. We work with businesses at all stages, from brand new startups to established companies refreshing their identity.
```

---

### 4.9 Section 8 — Final CTA

**Purpose:** Last chance to convert. Reduce friction to zero.

**Section heading:**
```
Ready to get started?
```

**Body copy:**
```
Tell us what you need and we'll come back to you within a few hours — 
usually on WhatsApp. No long forms, no commitment required.
```

**Primary CTA button:**
```
Label: WhatsApp Us Now
Link: https://wa.me/27814623628?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20Lumina7
Style: Dark filled button, large, full-width on mobile
Icon: WhatsApp icon
```

**Secondary option below button:**
```
Prefer email? hello@lumina7.co.za
Or book a call: [Calendly link placeholder]
```

---

### 4.10 Floating WhatsApp Button (Global — Mobile Only)

**Implement as a sticky fixed element on all pages, mobile only (hide on desktop):**

```
Position: fixed, bottom-right
Size: 56x56px minimum tap target
Icon: WhatsApp logo (white on green)
Link: https://wa.me/27814623628
z-index: 9999
Show on: all pages
Hide on: desktop (>768px)
```

---

## 5. Services Page — /services

**Update the services overview page to match the new service list.**

**Page heading:**
```
Our Services
```

**Page subheading:**
```
Everything your business needs to look professional and grow — 
under one roof, with one point of contact.
```

**Service list** (replace current content):

Each service block includes: title, description (3–4 sentences), what's included (bullet list), starting price, and CTA.

---

**Service 1: Brand Identity**
```
Title: Brand Identity
Description: Your brand is the first thing potential customers judge you on. We build visual identities that make your business look credible, memorable, and worth choosing over the competition. From a single logo to a complete brand system — we create the visual language your business needs to stand out.

What's included:
- Logo design (primary + variations)
- Colour palette with HEX, RGB, and CMYK values
- Typography selection
- Brand guidelines document
- All final files (AI, EPS, SVG, PNG, PDF)

Starting from: R5,000
CTA: Get a quote → [WhatsApp link]
```

**Service 2: Print & Marketing Materials**
```
Title: Print & Marketing Materials
Description: Print isn't dead — it's how your brand shows up in the physical world. From business cards handed over at a meeting to menus that make food look irresistible, we design materials that do real work for your business.

What's included:
- Business cards
- Flyers and leaflets
- Brochures and company profiles
- Menus and price lists
- Presentations and pitch decks
- Print production management (optional)

Starting from: R800 per item
CTA: Get a quote → [WhatsApp link]
```

**Service 3: Signage & Installations**
```
Title: Signage & Installations
Description: Your physical space is part of your brand. Whether it's a shopfront sign, a trade show banner, or a full office installation, we design and produce signage that makes your location unmistakable.

What's included:
- Shopfront and building signage
- Banners and pull-up displays
- Vehicle wraps and branding
- Large format printing
- Wayfinding and interior graphics
- Production and installation management

Starting from: R1,500
CTA: Get a quote → [WhatsApp link]
```

**Service 4: Website Design & Development**
```
Title: Website Design & Development
Description: Your website is your most important salesperson — it works 24 hours a day and most potential clients will check it before they call you. We design and build professional websites that look great, load fast, and turn visitors into enquiries.

What's included:
- Custom design (mobile-first)
- Up to 8 pages (additional pages quoted)
- Contact form and WhatsApp integration
- Basic SEO setup
- Google Analytics
- Hosting guidance and handover
- 30 days of post-launch support

Starting from: R8,000
CTA: Get a quote → [WhatsApp link]
```

**Service 5: Social Media & Digital Assets**
```
Title: Social Media & Digital Assets
Description: Inconsistent social media visuals undermine the brand you've worked hard to build. We create templates, graphics, and assets that keep your digital presence looking sharp — whether you're posting daily or just occasionally.

What's included:
- Social media profile setup and optimisation
- Post templates (Canva or static files)
- Cover images and highlight covers
- Digital ad designs (Facebook, Instagram, Google)
- Email signature design

Starting from: R1,200
CTA: Get a quote → [WhatsApp link]
```

**Below all services, add:**
```
Not sure what you need?
WhatsApp us and describe your business. We'll tell you exactly what we'd recommend and what it would cost.
CTA: Start the conversation → [WhatsApp link]
```

---

## 6. Work Page — /work

**Minor updates only:**

Update page heading from current to:
```
Our Work
```

Update page subheading to:
```
Brand identity, websites, print, and signage — 
built for South African businesses.
```

No structural changes to portfolio grid. Keep all existing case studies.

---

## 7. About Page — /about

**Update the about page to reflect full-service studio positioning and partnership.**

**Page heading:**
```
About Lumina7
```

**Body copy (replace existing):**
```
Lumina7 is a Cape Town-based design studio helping South African businesses look their best — online and in the real world.

We handle brand identity, websites, print, signage, and installations. Our clients are owner-run businesses, growing SMEs, and ambitious founders who want professional results without agency timelines or agency pricing.

We're a lean, focused studio. That means faster turnarounds, direct communication, and real accountability — you'll always know who's working on your project and when to expect results.

Led by Nasif Salaam, a designer and strategist with 20 years of experience building brands and digital products for businesses across South Africa and internationally.
```

**Add credentials block:**
```
B-BBEE Level 1 Contributor
Registered: Nexevo Studios (Pty) Ltd t/a Lumina7 Studio
Reg: 2025/019491/07
Cape Town, South Africa
```

**Keep existing client logo section if present.**

**Add CTA at bottom of about page:**
```
Want to work together?
WhatsApp us — [link]
```

---

## 8. Contact Page — /contact

**Simplify the contact page. Remove friction.**

**Page heading:**
```
Let's talk
```

**Body copy:**
```
The fastest way to reach us is WhatsApp. Send us a message and 
we'll usually respond within a few hours.
```

**Primary CTA — WhatsApp button (large, prominent):**
```
Label: WhatsApp: +27 81 462 3628
Link: https://wa.me/27814623628
Style: Large filled button with WhatsApp icon
```

**Secondary — keep existing contact form but reduce to 3 fields only:**
```
Fields:
1. Name (text)
2. Email (email)
3. Tell us about your project (textarea, 4 rows)

Submit button: Send message

Remove: phone field, budget dropdown, service selector (move to intake form instead)
```

**Contact details block:**
```
Email: hello@lumina7.co.za
WhatsApp: +27 81 462 3628
Location: Cape Town, South Africa
Hours: Mon–Fri, 9am–5pm SAST
```

---

## 9. New Service Detail Pages

Create a consistent template for each service detail page. Structure is identical across all four — only content changes.

**Template structure:**
```
1. Hero — service name, one-sentence description, WhatsApp CTA
2. What's included — bullet list
3. How it works — 3 steps specific to this service
4. Relevant portfolio samples (2–3 from /work filtered by service tag)
5. Starting price + FAQ (2–3 questions specific to this service)
6. Final CTA — WhatsApp
```

**URLs:**
- `/services/brand-identity`
- `/services/websites`
- `/services/print`
- `/services/signage`

Content for each page is defined in Section 5 above. Expand each service block into the full template.

---

## 10. Global Components to Update

### Footer
Update footer service links to match new service list:
```
Services:
- Brand Identity → /services/brand-identity
- Print & Materials → /services/print
- Signage → /services/signage
- Websites → /services/websites
- Social Media Assets → /services/print
```

Update footer tagline from current to:
```
Professional design for South African businesses.
```

Keep: B-BBEE, registration number, contact details, copyright.

### Meta / SEO
Update homepage meta:
```
Title: Lumina7 | Brand Identity, Websites & Print Design — Cape Town
Description: Cape Town design studio specialising in brand identity, websites, print and signage for South African businesses. Fast turnaround. Fixed quotes. B-BBEE Level 1.
```

Update services page meta:
```
Title: Design Services | Lumina7 Cape Town
Description: Brand identity from R5,000. Websites from R8,000. Print, signage, and social media assets. Fixed quotes, 2–4 week delivery.
```

---

## 11. Design Decisions & Rationale

| Decision | Rationale |
|---|---|
| WhatsApp as primary CTA | 94% of SA internet users use WhatsApp. 98% open rate vs 20% email. No premium SA design studio uses WhatsApp as primary CTA — this is a direct gap. |
| Showing starting prices | 73% of SA consumers leave when pricing is hidden. Competitors hide pricing. "From R___" anchors qualify leads and build trust without boxing you in. |
| 7-section homepage max | Research: pages with <10 elements convert at 2x rate of cluttered pages. Weather Channel saw 225% uplift from decluttering. |
| Floating WhatsApp button (mobile only) | 91% of SA web traffic is mobile. Sticky CTA ensures conversion option is always visible during scroll. |
| No hero video/carousel | Slows load time. Carousels are routinely ignored. LCP must be <2.5s — video breaks this on mobile connections. |
| 3-field form only | Every additional form field increases abandonment by ~12%. Expedia gained $12M/year from removing one field. |
| Testimonials near CTA | Testimonials placed near pricing/CTA improve conversion by 27% vs bottom-of-page placement. |
| Industry portfolio diversity | Restaurant + professional services work shown side-by-side. Both segments evaluate primarily through portfolio. |

---

## 12. Content Not Included in This PRD

The following require client input before implementation:

- [ ] Real client testimonials with photos (3 minimum)
- [ ] Calendly or booking link URL
- [ ] Bank details for invoice template
- [ ] Partner details (name, services, referral contact)
- [ ] Any new portfolio work to add to /work
- [ ] Final pricing confirmation for each service

---

## 13. Implementation Priority

Implement in this order:

| Priority | Item | Estimated effort |
|---|---|---|
| 1 | Homepage — all 8 sections | High |
| 2 | Floating WhatsApp button (global) | Low |
| 3 | Services page — updated content | Medium |
| 4 | Contact page — simplify form | Low |
| 5 | Footer — updated links and copy | Low |
| 6 | Meta/SEO updates | Low |
| 7 | About page — updated copy | Low |
| 8 | Work page — updated heading/sub | Low |
| 9 | Service detail pages (x4) | Medium |

---

*Document version 1.0 — Lumina7 Studio — March 2026*
