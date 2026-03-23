# Website Update Brief

## Repositioning openuc2-next for Professional / Industrial Audiences

**Site:** https://youseetoo.github.io/openuc2-next/  
**Date:** March 2026  
**Priority:** High

---

## Context & Goal

We are shifting our website messaging to appeal to professional R&D and industrial audiences **without redesigning the site**. The changes are primarily copy/language, section ordering, and adding a new Success Stories section. The overall design, layout system, and styling remain unchanged.

> **Core principle:** We sell speed and configurability, not low cost. An R&D manager visiting the site should think "this can accelerate my prototyping" — not "this is a cheap microscope."

---

## Task 1: Homepage Copy & Reordering

*File: index page (homepage)*

### 1a. Hero section

Replace the hero tagline and subtitle. Keep the hero video/image and CTA buttons as-is.

| Current | New |
|---------|-----|
| **H1:** Microscopy you can build, configure, and own. | **H1:** From optical concept to working data — in hours, not months. |
| **Sub:** An open-source modular platform that scales from teaching fundamental optics to running automated fluorescence imaging — all built on the same standardized cube system. | **Sub:** A modular platform to configure, simulate, and build custom optical systems. One standardized cube interface — from rapid prototyping to production. |

### 1b. Three product cards — reverse the order

**Current order:** Education → Makers & Research → Professional  
**New order:** Professional → Makers & Research → Education

#### Card 1 (was card 3): Professional

| Current | New |
|---------|-----|
| **Label:** Professional | **Label:** Professional & Industry |
| **Title:** I need an automated microscope | **Title:** I need to prototype fast |
| **Body:** FRAME: a fully motorized, modular microscope with XYZ scanning, multi-channel fluorescence, and open-source software. Ready for your lab. | **Body:** FRAME: a fully motorized, modular microscope platform. Configure online, validate with ray tracing, swap imaging modes in seconds. From concept to data in days. |

#### Card 2: Makers & Research

Keep as-is. This card naturally bridges professional and educational audiences.

#### Card 3 (was card 1): Education

| Current | New |
|---------|-----|
| Shows: "From EUR 399" price tag | **Remove the price from the homepage card.** Move price to the Discovery product page only. Card should just show: "Explore Discovery Line →" |

### 1c. Institutional logo bar

Change label text from "Used in research at" → **"Trusted by"**. Keep logos as-is.

### 1d. Add speed metric bar (new element)

Add a horizontal stat bar **below the hero section** (above the product cards), using the same visual style as the FRAME spec stats (the row showing 130×90mm, <5µm, etc.):

| Minutes | Seconds | Hours | Weeks |
|---------|---------|-------|-------|
| to configure | to simulate | to prototype | to production |

### 1e. "Cubify your optical design" section — copy tweak

The body text currently starts with "Take any optical setup… and break it into standardized cube modules." This is fine. **Add one sentence at the end of this paragraph:**

> "Every cube-based prototype has a digital twin. Validate optically with ray tracing before building. Scale to CNC-machined production parts without redesign."

---

## Task 2: Global Copy Replacements (All Pages)

Apply across homepage, about page, FRAME page, and configurator page. These are context-sensitive — replace only in customer-facing body text, not in quoted publications or technical specs.

| Find (remove / avoid) | Replace with |
|------------------------|--------------|
| ~~low-cost 3D-printed~~ | standardized precision modules |
| ~~accessible~~ (in professional contexts) | configurable |
| ~~democratizing microscopy~~ | accelerating optical development |
| ~~makers, biohackers~~ (on homepage) | R&D teams, optical engineers |
| ~~build your own microscope~~ | configure your optical system |
| ~~inexpensive~~ | cost-effective (only when cost is explicitly relevant) |
| ~~cheap / budget~~ | [do not use anywhere] |

> **Note:** The word "open-source" stays everywhere, but when used on professional pages, always pair it with a benefit: "open-source, so you're never locked into a vendor's roadmap" or "open-source for full method transparency."

---

## Task 3: About Page — Reframe Origin Story

*File: /about*

### 3a. "Our story" opening paragraph

| Current | New |
|---------|-----|
| "…born from the frustration that research microscopes are **expensive**, inflexible, and closed." | "…born from the frustration that custom optical setups **take months to design, weeks to procure, and can't be iterated** without starting over." |

### 3b. Add Raspberry Pi analogy

After the existing LEGO analogy, add:

> "What Raspberry Pi did for embedded computing — making professional-grade capability accessible and configurable — UC2 does for optical systems."

---

## Task 4: Configurator Page — Copy Update

*File: /configurator*

| Current | New |
|---------|-----|
| **H1:** Design your microscope | **H1:** Configure. Simulate. Build. |
| **Sub:** Our drag-and-drop configurator lets you design custom optical setups from UC2 cube modules. Preview beam paths, check compatibility, and export a complete build package. | **Sub:** Design a custom optical system, validate it with ray tracing, and export a complete build package — before ordering a single component. |

### Add R&D callout box

Add a callout/CTA card **below the 3-step flow** (after "Export & build"), styled as a highlight box:

> **For R&D teams:** Submit your optical challenge and we'll deliver a validated configuration with ray-tracing results within 48 hours. [Contact us →]

---

## Task 5: FRAME Page — Add Timeline Comparison

*File: /products/frame*

### 5a. Add subtitle beneath FRAME tagline

Below the existing subtitle "Fast Rigid Automated Microscope Engine," add:

> "Swap imaging modes in seconds. Deploy a new modality in a day. Iterate without vendor lock-in."

### 5b. Add "How fast can you go?" section (new)

Insert a new section **between the Specifications table and the Software section**. Title: "How fast can you go?". Show two side-by-side timeline comparisons:

| Traditional vendor | With openUC2 |
|--------------------|--------------|
| Week 1–4: RFQ & quotes | **Day 1: Configure & simulate** |
| Month 2–4: Manufacturing | **Day 2: Assemble from modules** |
| Month 5: Delivery & setup | **Day 3: First data acquisition** |
| Month 6: First data | **Week 2: Integrated into workflow** |

Use a simple horizontal step/timeline visual matching existing site styling. The left column should be muted/gray, the right column should use the site accent color.

---

## Task 6: New "Success Stories" Section

### Location & layout

Add a new section on the **homepage**, placed **after the "What you can image" gallery** and **before the "Not sure where to start?" CTA**.

- **Section title:** "Built with openUC2" (not "Success Stories" — too corporate)
- **Layout:** Same card grid as the "What you can image" section (image + title + short text)
- Each card links to a dedicated story page
- Each card shows: placeholder image, partner/project name, one-line outcome, and a subtle tag (e.g. "Photonics", "Bio Imaging", "Multi-Camera")

---

### Story 1: FLIMlabs — Fluorescence Lifetime Imaging

**Tag:** FLIM / Photonics

- **Card headline:** "FLIM integration in days, not months"
- **Card body:** FLIMlabs needed to integrate their fluorescence lifetime electronics with a flexible microscopy platform. Using the UC2 cube system, the FLIM module was configured and running within days — capturing lifetime data with their time-correlated single-photon counting hardware on a fully modular setup.
- **Key metric to highlight:** Time from first contact to working FLIM data
- **Placeholder image:** FLIM false-color lifetime map, or photo of UC2 setup with FLIMlabs electronics attached. Size: 600×400px, jpg/png.

---

### Story 2: FairScope — Multi-Camera System

**Tag:** Multi-Camera / Global Health

- **Card headline:** "One platform, multiple cameras, global deployment"
- **Card body:** The FairScope project required a multi-camera microscopy system that could be reproduced reliably across multiple sites with varying resources. The UC2 modular architecture made it possible to define a standardized design, swap camera modules depending on local availability, and maintain consistent imaging performance across deployments.
- **Key metric to highlight:** Number of sites deployed / reproducibility across setups
- **Placeholder image:** Photo of the multi-camera UC2 setup or side-by-side image of identical systems at different sites. Size: 600×400px.

---

### Story 3: Photonic Computing — Optical Prototyping for Compute

**Tag:** Photonic Compute / R&D

- **Card headline:** "Rapid optical prototyping for photonic compute R&D"
- **Card body:** A photonic computing research team needed to rapidly iterate on free-space optical layouts — testing different lens configurations, beam paths, and detector positions. Instead of custom machining each iteration, they used the UC2 cube grid to reconfigure setups in minutes, validating optical alignment digitally before each physical build.
- **Key metric to highlight:** Number of optical configurations tested per week vs. traditional approach
- **Placeholder image:** Photo of UC2 cubes with laser/beam path visible, or screenshot of the configurator with a compute-relevant layout. Size: 600×400px.

---

### Story 4: StainSTORM — Automated Histology Pipeline

**Tag:** Lab Automation / Pathology

- **Card headline:** "Fully automated tissue staining and imaging for under €30k"
- **Card body:** StainSTORM combines the openUC2 FRAME microscope with an Opentrons OT-2 liquid handler to create a fully automated cyclic immunohistochemistry pipeline. The system handles sample staining, washing, imaging, and analysis without manual intervention — enabling reproducible, decentralized cancer diagnostics across laboratories.
- **Key metric to highlight:** Total system cost vs. commercial alternatives (sub-€30k vs. €150k+)
- **Placeholder image:** Photo of FRAME inside Opentrons, or before/after tissue stain result. Size: 600×400px.

---

### Individual story page template

Each card links to a dedicated page. Use the same layout as the existing application pages (e.g. /applications/fluorescence). Structure per story page:

1. **Hero image** (placeholder, 1200×500px)
2. **Challenge:** 1–2 sentences describing the problem the partner had
3. **Solution:** Which UC2 components/configuration were used, how long it took
4. **Results:** Key metric (time saved, cost comparison, data quality achieved)
5. **Quote / Testimonial** (placeholder text for now, to be filled by marketing)
6. **Gallery:** 2–4 images (setup photo, data result, configurator screenshot). Use placeholders.
7. **CTA:** "Have a similar challenge? [Configure your system →] [Contact us →]"

---

## Task 7: Navigation Update

Update the top navigation to include the new stories. Under the existing "Applications" dropdown, add a divider line and a "Built with openUC2" sub-section. Alternatively, if the dropdown is too crowded, make "Built with openUC2" a separate top-level nav item between "Applications" and "Configurator."

Structure:

- Applications (existing dropdown, keep as-is)
- **Built with openUC2** (new — either sub-section or separate nav item)
  - FLIMlabs — FLIM Integration
  - FairScope — Multi-Camera System
  - Photonic Compute — Optical Prototyping
  - StainSTORM — Automated Histology

---

## Task 8: Placeholder Image Specifications

Where real images are not yet available, use placeholder images with the following specs. Placeholders should use a neutral light gray background with the openUC2 blue (#2E75B6) as accent, and centered text describing what image will go there.

| Location | Size (px) | Aspect | Placeholder text |
|----------|-----------|--------|------------------|
| Story card thumbnails | 600 × 400 | 3:2 | [Project name] — photo pending |
| Story page hero | 1200 × 500 | 12:5 | [Project name] hero — photo pending |
| Story page gallery | 800 × 600 | 4:3 | [Description] — photo pending |

---

## Summary Checklist

- [ ] **Task 1a:** Homepage hero tagline & subtitle updated
- [ ] **Task 1b:** Product cards reordered: Professional → Makers → Education
- [ ] **Task 1b:** EUR 399 price removed from Education card on homepage
- [ ] **Task 1c:** "Used in research at" → "Trusted by"
- [ ] **Task 1d:** Speed metric bar added below hero
- [ ] **Task 1e:** Digital twin sentence added to "Cubify" section
- [ ] **Task 2:** Global copy replacements applied across all pages
- [ ] **Task 3:** About page origin story reframed (speed, not cost)
- [ ] **Task 3:** Raspberry Pi analogy added to About page
- [ ] **Task 4:** Configurator page heading & subtitle updated
- [ ] **Task 4:** R&D callout box added below 3-step flow
- [ ] **Task 5a:** FRAME subtitle line added
- [ ] **Task 5b:** "How fast can you go?" timeline comparison section added
- [ ] **Task 6:** 4 success story cards added to homepage ("Built with openUC2")
- [ ] **Task 6:** 4 individual story pages created (placeholder content + images)
- [ ] **Task 7:** Navigation updated with success stories links
- [ ] **Task 8:** Placeholder images created where real photos are missing

---

> **Questions?** Reach out to the marketing team before changing anything outside this brief. The goal is minimal disruption — same design system, same components, just sharper words and smarter ordering.
