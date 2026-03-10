# HCI Improvements

# Home Page

## Hero Section (Booking Widget Background)

**Problem: Booking form competes with the background image**
The booking widget sat directly over a high-detail train photograph with no visual separation. Users' eyes had to simultaneously parse the busy image and the form, making neither stand out.
Solution: Applied a 65% opacity dark overlay (`bg-[#0c1e3d]/65`) over the banner image, and added a bottom-to-transparent gradient to ease the transition into the page body. The widget is now the clear focal point.
HCI Principle: Gestalt - Figure-Ground Relationship. The overlay establishes the widget as the "figure" and pushes the image to the "ground."

---

**Problem: No visual entry cue for the booking widget**
The hero content appeared statically on load with no affordance indicating it was the primary interactive area.
Solution: Added a CSS `fadeInUp` animation to the hero content block on page load.
HCI Principle: Nielsen's Heuristic - Feedback. Motion signals that the element is live and interactive, drawing the user's attention to the primary action.

---

## Booking Widget (Tabs)

**Problem: Tabs looked like independent floating buttons**
The four booking tabs ("Book Tickets", "PNR Status", etc.) appeared as detached buttons, giving no visual clue that they controlled the content directly below them.
Solution: Styled tabs as connected folder tabs using top-only borders and a flush bottom edge that merges into the widget body. The active tab has an orange top border accent and sits slightly forward via `z-index`. Inactive tabs lift slightly on hover (`hover:-translate-y-0.5`) to reinforce their tab-like role.
HCI Principle: Gestalt - Law of Common Region. The tabs visually attach to the widget body, communicating they belong to and control the same region.

---

**Problem: Form checkboxes used low-contrast text**
The original "Person With Disability Concession" and "Flexible With Date" checkboxes used very light blue text on white, making them easy to miss and prone to accidental omission.
Solution: Set checkbox labels to `text-gray-800` (near-black) with `font-medium` weight - high contrast against the white background.
HCI Principle: Nielsen's Heuristic - Error Prevention. High-contrast labels ensure users notice and consciously choose these options rather than missing them.

---

**Problem: "Search Trains" button did not feel dominant**
The original CTA competed visually with the fraud banner, social bar, and surrounding noise, so the primary action was not clear.
Solution: Made the Search button full-width, bold, orange (`bg-orange-500`), with a scale-up on hover (`hover:scale-[1.02]`) and scale-down on press (`active:scale-[0.98]`), plus a shadow boost on hover. All other elements use subdued colors by comparison.
HCI Principle: General HCI - Visual Hierarchy. The button is the single most dominant element on the widget, directing user attention to the primary task.

---

## Navigation Bar

**Problem: Cluttered nav mixed promotional content with functional links**
The original navbar blended "Upto 10% Cashback" banners alongside navigation links, making it hard to distinguish primary actions from ads.
Solution: Navigation links are listed only as functional destinations. Promotional content is surfaced in a dedicated "Offers & Updates" section lower on the page, separated from the nav.
HCI Principle: Nielsen's Heuristic - Consistency and Standards. Navigation should contain only wayfinding items; promotional content belongs in content regions.

---

**Problem: Inconsistent typography casing across the navbar**
The original used a jarring mix of ALL CAPS, Title Case, and sentence case across links and labels, creating visual inconsistency.
Solution: All nav links use consistent Title Case. Button labels use consistent capitalisation. The utility bar uses sentence case as appropriate for its smaller, secondary role.
HCI Principle: Nielsen's Heuristic - Consistency and Standards. Uniform casing reduces cognitive load when scanning navigation.

---

**Problem: "Rail Drishti" label was opaque to new users**
First-time users and tourists would not know what "Rail Drishti" means without prior knowledge.
Solution: Added a tooltip on hover that reads "Track live train status and running information", appearing with a smooth fade transition.
HCI Principle: Nielsen's Heuristic - Match Between System and the Real World. Plain-language descriptions help users map interface labels to their real-world intent.

---

**Problem: No hover feedback on nav links**
Links gave no visual response on hover, reducing perceived interactivity.
Solution: Added a sliding underline animation on hover using `after:` pseudo-element that grows from `w-0` to `w-full` in 300ms, plus the Login button scales up on hover and springs back on click.
HCI Principle: Nielsen's Heuristic - Visibility of System Status. Immediate visual feedback confirms the element is interactive and responsive.

---

## Security Notice Banner

**Problem: Bright red fraud warning disrupted visual flow**
The original "BEWARE OF FRAUDSTERS!" banner in aggressive red sat between the navbar and hero, visually alarming users and competing with the primary booking flow.
Solution: Replaced with a calm amber (`bg-amber-50`) informational strip at the very top of the page - above the navbar - with a warning icon, plain-language text, and a dismiss button.
HCI Principle: Nielsen's Heuristic - Aesthetic and Minimalist Design. Security notices should be informative without being alarming. Moving it above the main UI removes it from the task flow while keeping it accessible.

---

## Services Section (Icons)

**Problem: Inconsistent icon and typography treatment**
The original circular service icons used mixed stroke weights and font sizes, making the row feel visually uneven.
Solution: All icons use the same `strokeWidth={1.75}`, same `w-7 h-7` size, same `w-16 h-16` circle container with identical border and background. Label text is uniformly `text-sm font-semibold`. Icons lift and gain a shadow on hover (`group-hover:-translate-y-1.5 group-hover:shadow-md`).
HCI Principle: Gestalt - Law of Similarity. Uniform visual treatment groups all service icons as a single category, and consistent hover behaviour reinforces their shared interactive nature.

---

## Footer

**Problem: Inconsistent column spacing made groupings ambiguous**
The original footer had uneven padding between columns and irregular vertical rhythm within lists, making it unclear which links belonged to which section.
Solution: Applied consistent `gap-10` between columns and `space-y-2` within each link list. Each section header uses a bottom border separator (`border-b border-white/10`) and consistent `font-semibold text-sm` in Title Case.
HCI Principle: Gestalt - Law of Proximity. Items spaced tightly within a column and clearly separated between columns are perceived as belonging together.

---

**Problem: Social media links competed visually with primary content**
The original used a prominent purple social media bar that drew attention away from the main booking flow.
Solution: Social links are placed in the footer's bottom utility bar as small, low-contrast text buttons (`text-gray-500`) with a subtle border. They only brighten on hover.
HCI Principle: General HCI - Visual Hierarchy. Secondary elements should be visually subordinate so they do not compete with primary actions.

---

## Color Palette

**Problem: Jarring mix of blue, orange, red, and purple throughout the page**
Multiple saturated accent colors created noise and made it impossible to establish a clear visual hierarchy.
Solution: Adopted a restrained two-color system: IRCTC navy (`#1a3c6e`) as the primary brand color, and orange (`#f97316`) exclusively for calls-to-action. All other UI uses neutral grays. Red and purple are eliminated entirely.
HCI Principle: Nielsen's Heuristic - Aesthetic and Minimalist Design. A limited palette reduces visual noise and lets hierarchy be communicated through a single accent color.

---

## Dark Mode (Navbar Toggle)

**Problem: No way for users to switch to a comfortable viewing environment**
The original site had a fixed light theme with no dark mode option, which can cause eye strain in low-light conditions and is a growing user expectation.
Solution: Added a sun/moon icon toggle button in the navbar (desktop and mobile). Clicking it adds or removes a `dark` class on `<html>`, which activates Tailwind's `dark:` variants across all components. The preference is persisted in `localStorage` so it survives page reloads.
HCI Principle: Nielsen's Heuristic - User Control and Freedom. Users should be able to personalise their environment; a persistent preference that survives sessions gives genuine control rather than a one-session toggle.

---

## Font Size Accessibility Widget (Floating Button)

**Problem: No mechanism for users with visual impairments to adjust text size**
The entire page used fixed font sizes, offering no accommodation for users who need larger or smaller text. There was no in-page accessibility control.
Solution: Added a fixed floating button (bottom-right corner) using the universal accessibility symbol. Clicking it opens a popover modal with two buttons to increase or decrease the base font size in 10% steps (range: 80%–130%). Changing the font size sets `font-size` on `<html>`, causing all `rem`-based text to scale proportionally. Buttons are disabled and dimmed at the limits. The chosen size is persisted in `localStorage`.
HCI Principle: Nielsen's Heuristic - Flexibility and Efficiency of Use. Accommodating a range of users - including those with low vision - by providing in-page text-size control makes the interface usable for a wider audience without requiring browser zoom.
