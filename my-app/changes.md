# HCI Fixes — Implementation Log

## Hero Section (Booking Widget Background)

### Problem: Booking form competes with the background image
The booking widget sat directly over a high-detail train photograph with no visual separation. Users' eyes had to simultaneously parse the busy image and the form, making neither stand out.

**Solution:** Applied a 65% opacity dark overlay (`bg-[#0c1e3d]/65`) over the banner image, and added a bottom-to-transparent gradient to ease the transition into the page body. The widget is now the clear focal point.

> **HCI Principle — Gestalt: Figure-Ground Relationship.** The overlay establishes the widget as the "figure" and pushes the image to the "ground."

---

### Problem: No visual entry cue for the booking widget
The hero content appeared statically on load with no affordance indicating it was the primary interactive area.

**Solution:** Added a CSS `fadeInUp` animation to the hero content block on page load.

> **HCI Principle — Nielsen's Heuristic #1: Visibility of System Status.** Motion signals that the element is live and interactive, drawing the user's attention to the primary action.

---

## Booking Widget (Tabs)

### Problem: Tabs looked like independent floating buttons
The four booking tabs (`Book Tickets`, `PNR Status`, etc.) appeared as detached buttons, giving no visual clue that they controlled the content directly below them.

**Solution:** Styled tabs as connected folder tabs using top-only borders and a flush bottom edge that merges into the widget body. The active tab has an orange top border accent and sits slightly forward via `z-index`. Inactive tabs lift slightly on hover (`hover:-translate-y-0.5`) to reinforce their tab-like role.

> **HCI Principle — Gestalt: Law of Common Region.** The tabs visually attach to the widget body, communicating they belong to and control the same region.

---

### Problem: Form checkboxes used low-contrast text
The original `Person With Disability Concession` and `Flexible With Date` checkboxes used very light blue text on white, making them easy to miss and prone to accidental omission.

**Solution:** Set checkbox labels to `text-gray-800` (near-black) with `font-medium` weight — high contrast against the white background.

> **HCI Principle — Nielsen's Heuristic #5: Error Prevention.** High-contrast labels ensure users notice and consciously choose these options rather than overlooking them.

---

### Problem: "Search Trains" button did not feel dominant
The original CTA competed visually with the fraud banner, social bar, and surrounding noise, so the primary action was not clear.

**Solution:** Made the Search button full-width, bold, and orange (`bg-orange-500`), with a scale-up on hover (`hover:scale-[1.02]`), scale-down on press (`active:scale-[0.98]`), and a shadow boost on hover. All other elements use subdued colours by comparison.

> **HCI Principle — General HCI: Visual Hierarchy.** The button is the single most dominant element on the widget, directing user attention to the primary task.

---

## Navigation Bar

### Problem: Cluttered nav mixed promotional content with functional links
The original navbar blended `Upto 10% Cashback` banners alongside navigation links, making it hard to distinguish primary actions from ads.

**Solution:** Navigation links are listed only as functional destinations. Promotional content is surfaced in a dedicated "Offers & Updates" section lower on the page, separated from the nav.

> **HCI Principle — Nielsen's Heuristic #4: Consistency and Standards.** Navigation should contain only wayfinding items; promotional content belongs in content regions.

---

### Problem: Inconsistent typography casing across the navbar
The original used a jarring mix of ALL CAPS, Title Case, and sentence case across links and labels.

**Solution:** All nav links use consistent Title Case. Button labels use consistent capitalisation. The utility bar uses sentence case as appropriate for its smaller, secondary role.

> **HCI Principle — Nielsen's Heuristic #4: Consistency and Standards.** Uniform casing reduces cognitive load when scanning navigation.

---

### Problem: "Rail Drishti" label was opaque to new users
First-time users and tourists would not know what "Rail Drishti" means without prior knowledge.

**Solution:** Added a tooltip on hover — *"Track live train status and running information"* — appearing with a smooth fade transition.

> **HCI Principle — Nielsen's Heuristic #2: Match Between System and the Real World.** Plain-language descriptions help users map interface labels to their real-world intent.

---

### Problem: No hover feedback on nav links
Links gave no visual response on hover, reducing perceived interactivity.

**Solution:** Added a sliding underline animation on hover using an `after:` pseudo-element that grows from `w-0` to `w-full` in 300ms. The Login button scales up on hover and springs back on click.

> **HCI Principle — Nielsen's Heuristic #1: Visibility of System Status.** Immediate visual feedback confirms the element is interactive and responsive.

---

## Security Notice Banner

### Problem: Bright red fraud warning disrupted visual flow
The original `BEWARE OF FRAUDSTERS!` banner in aggressive red sat between the navbar and hero, visually alarming users and competing with the primary booking flow.

**Solution:** Replaced with a calm amber (`bg-amber-50`) informational strip pinned above the navbar, with a warning icon, plain-language text, and a dismiss button.

> **HCI Principle — Nielsen's Heuristic #8: Aesthetic and Minimalist Design.** Security notices should be informative without being alarming. Moving it above the main UI removes it from the task flow while keeping it accessible.

---

## Services Section (Icons)

### Problem: Inconsistent icon and typography treatment
The original circular service icons used mixed stroke weights and font sizes, making the row feel visually uneven.

**Solution:** All icons use the same `strokeWidth={1.75}`, `w-7 h-7` size, and `w-16 h-16` circle container with identical border and background. Label text is uniformly `text-sm font-semibold`. Icons lift and gain a shadow on hover (`group-hover:-translate-y-1.5 group-hover:shadow-md`).

> **HCI Principle — Gestalt: Law of Similarity.** Uniform visual treatment groups all service icons as a single category, and consistent hover behaviour reinforces their shared interactive nature.

---

## Footer

### Problem: Inconsistent column spacing made groupings ambiguous
The original footer had uneven padding between columns and irregular vertical rhythm within lists, making it unclear which links belonged to which section.

**Solution:** Applied consistent `gap-10` between columns and `space-y-2` within each link list. Each section header uses a bottom border separator (`border-b border-white/10`) and consistent `font-semibold text-sm` in Title Case.

> **HCI Principle — Gestalt: Law of Proximity.** Items spaced tightly within a column and clearly separated between columns are perceived as belonging together.

---

### Problem: Social media links competed visually with primary content
The original used a prominent purple social media bar that drew attention away from the main booking flow.

**Solution:** Social links are placed in the footer's bottom utility bar as small, low-contrast text buttons (`text-gray-500`) with a subtle border — they only brighten on hover.

> **HCI Principle — General HCI: Visual Hierarchy.** Secondary elements should be visually subordinate so they do not compete with primary actions.

---

## Colour Palette

### Problem: Jarring mix of blue, orange, red, and purple throughout the page
Multiple saturated accent colours created noise and made it impossible to establish a clear visual hierarchy.

**Solution:** Adopted a restrained two-colour system:

| Role | Colour |
|---|---|
| Primary brand | IRCTC Navy `#1a3c6e` |
| Calls-to-action | Orange `#f97316` |
| Everything else | Neutral grays |

Red and purple are eliminated entirely.

> **HCI Principle — Nielsen's Heuristic #8: Aesthetic and Minimalist Design.** A limited palette reduces visual noise and lets hierarchy be communicated through a single accent colour.

---

## Dark Mode (Navbar Toggle)

### Problem: No way for users to switch to a comfortable viewing environment
The original site had a fixed light theme with no dark mode option, which can cause eye strain in low-light conditions.

**Solution:** Added a sun/moon icon toggle in the navbar (desktop and mobile). Clicking it adds or removes a `dark` class on `<html>`, activating Tailwind's `dark:` variants across all components. The preference is persisted in `localStorage` so it survives page reloads.

> **HCI Principle — Nielsen's Heuristic #3: User Control and Freedom.** A persistent preference that survives sessions gives genuine control rather than a one-session toggle.

---

## Font Size Accessibility Widget (Floating Button)

### Problem: No mechanism for users with visual impairments to adjust text size
The entire page used fixed font sizes, offering no accommodation for users who need larger or smaller text.

**Solution:** Added a fixed floating button (bottom-right corner) using the universal accessibility symbol `⌖`. Clicking it opens a popover with two buttons to increase or decrease the base font size in 10% steps (range: **80%–130%**). Changing the size sets `font-size` on `<html>`, causing all `rem`-based text to scale proportionally. Buttons are disabled and dimmed at the limits. The chosen size is persisted in `localStorage`.

> **HCI Principle — Nielsen's Heuristic #7: Flexibility and Efficiency of Use.** Accommodating users with low vision via in-page text-size control makes the interface usable for a wider audience without requiring browser zoom.

---

## Search & Booking Flow (`/search` + `/booking`)

### Visibility of System Status — Nielsen's Heuristic #1

A **4-step progress stepper** sits at the top of both `/search` (step 2 active) and `/booking` (step 3 active).

- ✅ Completed steps show **green check marks**
- ⬜ Upcoming steps are **greyed out**

---

### Reducing Cognitive Overload — Hick's Law + Nielsen's Heuristic #8

Train cards use **progressive disclosure**:

- Class pills (`Sleeper`, `AC 3 Tier`, etc.) show **only the base price** by default
- Clicking a class **smoothly expands** the date/availability panel below via a `slideDown` animation
- Nothing is revealed until the user explicitly requests it

---

### Fitts's Law — Fixing Tiny Tap Targets

| Element | Before | After |
|---|---|---|
| Book Now button | Small, low-contrast | Large orange CTA — `py-3 px-8 rounded-xl min-w-[140px]` |
| Date slots | Thin scrollable cells | Generous `min-w-[110px]` cards |
| Remove passenger | Tiny grey `×` | `w-5 h-5` trash icon with `p-2` hit area |

---

### Form Layout — Gestalt: Law of Proximity

Passenger form fields follow a **natural top-to-bottom reading pattern**:
```
[ Full Name                    ]   ← full-width row
[ Age          ] [ Gender      ]   ← side-by-side
[ Berth Preference             ]   ← full-width button group
```

---

### Error Recovery & Prevention — Nielsen's Heuristics #5 + #9

- ✅ Validation fires **on blur only** — never while the user is typing
- 💬 A subtle hint (e.g. `3–16 characters`) appears next to the label **before** an error state
- ❌ Error messages are **natural English** with a small icon — no terse code-like strings

---

### Payment Mode — Miller's Law

Replaced the long slash-separated string with **4 grouped cards**, each containing:

- A recognisable icon
- A short sub-label
- The convenience fee clearly stated

Scannable at a glance; no mental parsing required.

---

### Recognition Rather Than Recall — Nielsen's Heuristic #6

A **sticky right-sidebar** remains visible as the user scrolls through the entire booking form. It surfaces:

- Train name, route, date, class
- Per-passenger fare
- Convenience fee + GST
- **Grand total**

No need to scroll back up or remember previously seen information.

---

### Task-Focused Design

> *"IRCTC Co-branded Card Benefits"* is now a **de-emphasised grey card** at the bottom of the sidebar, clearly separated from the primary task flow.

It no longer resembles a mandatory step and does not interrupt the booking journey.
