# X-ON — Technical & Functional Specification Document

> **Document Type:** Specification Baseline · Customer-Facing & Admin Architecture  
> **Brand Name:** **X-ON**  
> **Brand Slogan:** *"Press On. Slay On. Repeat."*  
> **Reference Website (Structure Only):** [https://lalafolie.us/](https://lalafolie.us/)  
> **Verified Structure Baseline:** 23 September 2026  
> **Official Address:** 3168 Bill Beck Blvd, Kissimmee, FL 34744  
> **Official Telephone:** 689-212-8888  

---

## 1. Brand Identity & Business Core (X-ON)

### 1.1 Brand Positioning
- **X-ON** is where modern nail artistry meets effortless beauty.
- Created for nail enthusiasts and nail salon professionals alike, X-ON curates handmade press-on nails and premium nail essentials designed with **quality, style, and performance** in mind.
- From statement-making couture nail sets to everyday professional supplies, every X-ON product makes beautiful nails easier, faster, and accessible—without compromising on a polished, European/American luxury finish.

### 1.2 Crucial Branding Distinction
- **Reference Website:** [https://lalafolie.us/](https://lalafolie.us/) is strictly a structural/layout benchmark.
- **Project Identity:** All copy, brand names, visual marks, contact information, addresses, and social handles belong strictly to **X-ON**.

---

## 2. Project Scope & Architecture

### 2.1 Scope Overview: 20 Page Templates Total
- **14 Customer-Facing Page Templates**
- **6 Admin Management Page Templates**
- **Admin Principle:** CRUD actions (Add, Edit, Delete, View Detail) are handled entirely within the management view via **Modals, Right-side Drawers, or Confirmation Popups**. Add/Edit/Delete do not constitute separate pages.

### 2.2 User Roles
1. **Guest:** Browses catalog, reviews, gallery, blogs, submits contact/wholesale inquiry forms.
2. **Registered Customer:** Manages personal profile, authentication, saved addresses, orders.
3. **Wholesale Applicant / Partner:** Submits B2B salon/wholesale tier requests.
4. **Admin:** Full management over products, orders, content, gallery, inquiries, and users.

---

## 3. UI/UX & Aesthetic Rules (Strict)

1. **European & American Luxury Aesthetic:**
   - Editorial, haute couture visual presentation inspired by high-fashion houses (Chanel, Celine, Vogue).
   - Crisp, architectural typography: Serif headlines (**Cormorant Garamond**) paired with grotesque geometric sans (**Montserrat**) with wide uppercase tracking (`tracking-[0.2em]`).
2. **Sharp Card Edges (Non-Rounded):**
   - **STRICT MANDATE:** All cards, media thumbnails, modals, buttons, and badges must feature crisp, minimal to zero border-radius (`rounded-none` or max `rounded-[2px]`). No bubbly or overly rounded corners.
3. **Language:**
   - **100% English** across all customer-facing and administrative interfaces.
4. **Color Palette:**
   - Deep Carbon Noir (`#0A0A0A`, `#121212`)
   - Champagne Gold (`#C8A97E`, `#E2CEAB`)
   - Alabaster Ivory (`#FAF9F6`, `#FAF8F5`)
   - Muted Slate & Border Accents (`#222222`, `#2A2A2A`)

---

## 4. Customer-Facing Templates (14 Pages)

| # | Page Template | Route | Primary Sections & Content |
|---|---|---|---|
| **01** | **Home** | `/` | Hero Cinema Video; Handmade Press-On Nails; Nail Essentials; Best Sellers; Our Reviews (5.0 Google); Find Us (Kissimmee, FL); X-ON Newsletter / Updates; Global Footer. |
| **02** | **Shop / Collection** | `/shop` | Search toolbar; Price range filter; Shape filter (Almond, Coffin, Oval, Round, Square, Stiletto); Product Type filter (Handmade Press-Ons, Nail Essentials, Best Sellers); Product Grid; Pagination. Reused for all categories/themes. |
| **03** | **Product Detail** | `/product/[slug]` | High-res gallery/video preview; Title; Price/Sale price; Size selector (XS, S, M, L); Quantity; Add to Bag CTA; SKU & Taxonomy; Additional Info tabs; Verified Reviews; Related products; Newsletter; Footer. |
| **04** | **About** | `/about` | Brand Story: *"Press On. Slay On. Repeat."*; Artisan craftsmanship; Modern nail artistry; Quality, style & performance; Newsletter; Footer. |
| **05** | **Wholesale Signup** | `/wholesale-signup` | Hero banner; B2B registration form (Username, Email, Business Name, Business Address, Phone, Password); Membership tier selector; Submit CTA; Admin notification. |
| **06** | **Bundle & Save** | `/bundle-and-save` | Curated bundle showcases; Discount percentage badges; Original vs Sale pricing; Select options / Add to Bag; Value comparison. |
| **07** | **Sizing Chart** | `/sizing-chart` | Introduction; Tape & ruler 3-step measuring tutorial; Millimeter size table (Thumb-Index-Middle-Ring-Pinky for XS/S/M/L); Silhouette anatomy guide (Almond, Coffin, Stiletto, Oval, Square); Length details. |
| **08** | **Gallery Product** | `/gallery-product` | "Now Selling" visual grid; High-fashion lookbook; Quick shop links; Size indicators; Pagination; Newsletter; Footer. |
| **09** | **Gallery Coming Soon** | `/gallery-coming-soon` | Seasonal / Upcoming collections showcase; Lookbook teasers; Waitlist notification sign-up. |
| **10** | **Blog** | `/blog` | News & Editorial list; Category tags; Article cards with date & author; Read More CTA; Newsletter; Footer. |
| **11** | **Blog Detail** | `/blog/[slug]` | Dynamic rich article; Heading, paragraphs, imagery, quotes; Tag list; Comment / discussion section; Related articles. |
| **12** | **Contact Us** | `/contact-us` | Brand benefits; Contact & Wholesale direct line (`689-212-8888`); Flagship address (`3168 Bill Beck Blvd, Kissimmee, FL 34744`); Contact Form (Name, Email, Phone/Order #, Message). |
| **13** | **My Account** | `/my-account` | Login form; Password recovery; Customer Registration; Privacy notice; Session state. |
| **14** | **Legal / Content Page** | `/terms`, `/privacy` | Reusable layout for Terms of Service, Privacy Policy, Accessibility, and Shipping policies. |

---

## 5. Admin Management Templates (6 Pages)

> **Interaction Rule:** Add/Edit/Delete actions are executed within the same management screen via **Modals, Drawers, or Confirmation Popups**.

| # | Admin Screen | Route | Core Functionality |
|---|---|---|---|
| **01** | **Dashboard** | `/admin` | KPI Cards (Total Products, Active Products, Orders, Customers, Wholesale Inquiries); Recent Orders list; Recent Contact Inquiries; Quick Action buttons. |
| **02** | **Products** | `/admin/products` | Product management data table; Search & filter bar; Add Product (Drawer/Modal); Edit Product (Pre-filled form); Delete Product (Confirmation popup); Stock/Status toggles. |
| **03** | **Orders** | `/admin/orders` | Order list with status filters; Order detail slide-over drawer; Line items, customer address, payment status, tracking number updates. |
| **04** | **Website Content** | `/admin/content` | Content CMS for Home, About, Bundle, Sizing, and Contact; Section visibility, headline editing, banner image upload, CTA links. |
| **05** | **Blog & Gallery** | `/admin/media` | Tabbed management: `Blog Posts`, `Product Gallery`, `Coming Soon Collections`. Image upload, rich text editor, sort order, publish state. |
| **06** | **Users & Inquiries** | `/admin/users` | Tabbed view: `Customers`, `Wholesale Applications`, `Contact Inquiries`. Review submissions, change application status (Pending/Approved/Rejected), admin notes. |

---

## 6. Technical Stack & Data Models

### 6.1 Frontend Stack
- **Framework:** Next.js 16 (App Router, JavaScript ESModules)
- **Styling:** Vanilla Tailwind CSS with custom editorial utility tokens
- **Typography:** `Cormorant Garamond` (Headings) & `Montserrat` (Body / UI)
- **State Management:** React Context / Hooks for Cart, Wishlist, Filter states

### 6.2 Backend Stack
- **Framework:** Express.js (Node.js ESModules)
- **Database:** MongoDB via Mongoose
- **Architecture Pattern:** Clean Layered Pattern:
  ```text
  Routes ──> Controllers ──> Services ──> Repositories ──> Mongoose Models
  ```

### 6.3 Database Entities (Mongoose Schemas)
1. **Product:** `name`, `slug`, `sku`, `images`, `price`, `sale_price`, `sizes`, `stock`, `product_type`, `categories`, `shapes`, `description`, `additional_info`, `is_featured`, `is_best_seller`.
2. **Category / Taxonomy:** `name`, `slug`, `type` (`shape`, `theme`, `product_type`), `status`, `sort_order`.
3. **PageContent:** `page_key`, `section_key`, `heading`, `body`, `media`, `cta_label`, `cta_link`, `is_visible`, `sort_order`.
4. **BlogPost:** `title`, `slug`, `cover_image`, `excerpt`, `content`, `publish_date`, `status`, `author`.
5. **GalleryItem:** `title`, `media_url`, `collection_name`, `linked_product_id`, `size_labels`, `status`, `sort_order`.
6. **User:** `email`, `password_hash`, `first_name`, `last_name`, `role` (`guest`, `customer`, `wholesale`, `admin`), `status`.
7. **WholesaleApplication:** `user_id`, `business_name`, `business_address`, `phone`, `email`, `membership_status` (`pending`, `approved`, `rejected`), `notes`.
8. **Inquiry:** `name`, `email`, `phone`, `order_number`, `message`, `status` (`new`, `in_progress`, `resolved`), `notes`, `created_at`.
9. **Order:** `order_id`, `customer`, `line_items`, `subtotal`, `shipping_fee`, `total`, `status` (`pending`, `processing`, `shipped`, `delivered`, `cancelled`), `shipping_address`, `tracking_number`.

---

## 7. Acceptance Criteria (Demo Baseline)

1. **Branding Accuracy:** The site strictly uses **X-ON** branding, *"Press On. Slay On. Repeat."*, Address: `3168 Bill Beck Blvd, Kissimmee, FL 34744`, Phone: `689-212-8888`.
2. **Card Design:** All product, video, content, and testimonial cards have **sharp, non-rounded edges (`rounded-none`)**.
3. **Home Page Structure:** Accurately features:
   - Handmade Press-On Nails
   - Nail Essentials
   - Best Sellers
   - Our Reviews
   - Find Us (Kissimmee, FL)
   - X-ON Newsletter / Updates
   - Footer
4. **Code Quality:** Backend must maintain **Controller -> Service -> Repository -> Model** separation. Frontend must compile cleanly with `npm run build`.
