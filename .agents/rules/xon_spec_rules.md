# X-ON Project Development Rules & Constraints

## Rule 1: Brand Integrity (MANDATORY)
- **Official Brand:** **X-ON** (Never use Lalafolie as the brand name; Lalafolie is ONLY a structural/layout UI reference).
- **Brand Slogan:** *"Press On. Slay On. Repeat."*
- **Brand Address:** `3168 Bill Beck Blvd, Kissimmee, FL 34744`
- **Brand Telephone:** `689-212-8888`
- **Brand Positioning:** *"Where modern nail artistry meets effortless beauty. Handmade press-on nails and curated nail essentials for nail lovers and professionals alike."*

## Rule 2: Visual Aesthetic & Card Geometry (STRICT)
- **Sharp Edges Only:** **Do NOT use rounded corners** on cards, buttons, modals, or media thumbnails. Always use `rounded-none` or at most `rounded-[2px]`.
- **European/American Luxury Vibe:**
  - Editorial serif typography for headings (`Cormorant Garamond` / `font-serif`).
  - Sleek geometric grotesque sans for body/UI (`Montserrat` / `font-sans`) with uppercase wide tracking (`tracking-[0.2em]`).
  - Deep noir `#0A0A0A`, warm champagne gold `#C8A97E`, and alabaster ivory `#FAF9F6`.
- **Language:** **100% English** across all interfaces.

## Rule 3: Page Architecture & Scope
- **Customer-Facing (14 Templates):**
  1. Home (`/`)
  2. Shop / Collection (`/shop`)
  3. Product Detail (`/product/[slug]`)
  4. About (`/about`)
  5. Wholesale Signup (`/wholesale-signup`)
  6. Bundle & Save (`/bundle-and-save`)
  7. Sizing Chart (`/sizing-chart`)
  8. Gallery Product (`/gallery-product`)
  9. Gallery Coming Soon (`/gallery-coming-soon`)
  10. Blog (`/blog`)
  11. Blog Detail (`/blog/[slug]`)
  12. Contact Us (`/contact-us`)
  13. My Account (`/my-account`)
  14. Legal / Content Page (`/terms`, `/privacy`)
- **Admin Management (6 Templates):**
  1. Dashboard (`/admin`)
  2. Products (`/admin/products`)
  3. Orders (`/admin/orders`)
  4. Website Content (`/admin/content`)
  5. Blog & Gallery (`/admin/media`)
  6. Users & Inquiries (`/admin/users`)
- **Admin CRUD Rule:** Add, Edit, Delete, and View Detail MUST be handled on the same management screen via Modals, Drawers, or Confirmation popups. Do NOT create separate page templates for Add/Edit/Delete.

## Rule 4: Backend Layered Architecture (MANDATORY)
- Every backend resource must follow the strict layered flow:
  `Route -> Controller -> Service -> Repository -> Model (Mongoose MongoDB)`
- **Repositories** handle all MongoDB queries (`BaseRepository` provides generic CRUD).
- **Services** encapsulate business rules and validation.
- **Controllers** handle HTTP request/response formatting via `ApiResponse`.

## Rule 5: User Testing Preference
- When the user indicates "Làm thôi không cần mở chrome lên test giúp tôi", do NOT launch the browser or run `browser_subagent`. Verify code correctness via static analysis and build commands (`npm run build`).
