# X-ON — Project Rules & Implementation Guidelines

> **Mandatory Reference:** Read [docs/REQUIREMENTS.md](file:///d:/Career/X-ON%20final/docs/REQUIREMENTS.md) for full technical and functional specifications.

## 1. Brand Identity
- **Brand Name:** **X-ON** (Strictly use X-ON; https://lalafolie.us/ is only a reference for structure).
- **Tagline:** *"Press On. Slay On. Repeat."*
- **Address:** `3168 Bill Beck Blvd, Kissimmee, FL 34744`
- **Phone:** `689-212-8888`
- **Core Offerings:** Handmade Press-On Nails & Selected Nail Essentials.

## 2. Design Constraints
- **Card Geometry:** All cards, buttons, badges, modals must have **sharp, non-rounded corners (`rounded-none` or max `rounded-[2px]`)**. Overly rounded borders are strictly prohibited.
- **Aesthetic:** European & American high-end luxury editorial, dark noir mode with champagne gold accents (`#C8A97E`) and serif typography (`Cormorant Garamond`).
- **Language:** **100% English** across all public and admin interfaces.

## 3. Architecture Scope
- **Customer-Facing:** 14 Page Templates (Home, Shop, Product Detail, About, Wholesale Signup, Bundle & Save, Sizing Chart, Gallery Product, Gallery Coming Soon, Blog, Blog Detail, Contact Us, My Account, Legal).
- **Admin:** 6 Page Templates (Dashboard, Products, Orders, Website Content, Blog & Gallery, Users/Inquiries). Admin CRUD actions MUST use Modals/Drawers on the same screen.
- **Backend:** Express.js + MongoDB with strict **Controller -> Service -> Repository -> Model** architecture.
