# E-Commerce Shoe Store - Project Plan (Revised)

**Project Goal:** Build a responsive single-product (shoe) e-commerce page using Next.js, TypeScript, Tailwind CSS, and Framer Motion. The page will feature a hero section displaying the selected shoe variation and a color selection section below. Clicking a color swatch will smoothly update the hero image, product details, and the overall site theme/accent color using animations.

**Revised Plan:**

1.  **Project Initialization:** (Completed)
    *   Next.js project with TypeScript, Tailwind CSS, ESLint initialized.
    *   `framer-motion` installed.

2.  **Project Structure:**
    ```
    shoe-store/
    ├── src/
    │   ├── app/
    │   │   └── page.tsx         # Main page (manages state, layout)
    │   │   └── layout.tsx       # Root layout (applies dynamic theme)
    │   │   └── globals.css      # Global styles
    │   ├── components/
    │   │   ├── HeroSection.tsx    # Displays selected product info & image
    │   │   ├── ColorSelector.tsx   # Color swatches (triggers variation & theme change)
    │   │   └── AnimatedImage.tsx   # Handles image display & fade animation
    │   └── data/
    │       └── productData.ts    # Product details (updated paths, theme colors)
    ├── public/
    │   └── product-images/     # Directory for actual product images
    │       ├── red/main.png
    │       ├── blue/main.png
    │       ├── green/main.png
    │       └── black/main.png
    ├── next.config.mjs
    ├── package.json
    ├── tsconfig.json
    └── tailwind.config.ts
    └── PLAN.md
    ```

3.  **Data Modeling (`src/data/productData.ts`):**
    *   Update the `ProductVariation` interface to include theme-related colors (e.g., `themeColorClass`, `buttonColorClass`).
    *   Update the `imagePath` for each variation to `/product-images/[color]/main.png`.
    *   Define appropriate Tailwind classes for the theme color associated with each variation.

4.  **Layout & Theme (`src/app/layout.tsx`):**
    *   Modify the root layout to apply a dynamic theme class (likely to the `<body>` tag) based on the selected color state managed in `page.tsx`.

5.  **Component Implementation:**
    *   **`ColorSelector.tsx`:**
        *   Accepts variations, selected ID, and a single handler function (`onSelectVariation`).
        *   The handler (defined in `page.tsx`) updates both selected variation and theme state.
    *   **`AnimatedImage.tsx`:** (No changes needed).
    *   **`HeroSection.tsx`:**
        *   Accepts the currently selected `ProductVariation` object.
        *   Displays product name, description, price.
        *   Renders `AnimatedImage`.
        *   May include an "Add to Cart" button styled with the dynamic theme color.

6.  **Page Creation (`src/app/page.tsx`):**
    *   Manages state for `selectedVariationId` and `currentThemeClasses` (e.g., background, button).
    *   Defines the `handleSelectVariation` function passed to `ColorSelector`.
    *   Renders the page structure: `HeroSection` and `ColorSelector`.
    *   Passes selected variation data to `HeroSection`.
    *   Applies dynamic theme classes to relevant container elements.

7.  **Styling & Responsiveness:**
    *   Use Tailwind CSS, incorporating dynamic theme classes.
    *   Ensure responsiveness.

8.  **Animation:**
    *   Image transitions via `AnimatedImage`.
    *   Theme color transitions via CSS transitions on elements.

**Component Interaction Diagram (Revised):**

```mermaid
graph TD
    A[src/app/page.tsx] --> B{Page State (selectedVariationId, currentThemeClasses)};
    A --> C(HeroSection);
    A --> D(ColorSelector);
    B -- Updates --> C;
    B -- Updates Theme --> A;  // Page applies theme classes
    C -- Displays --> E[Product Info];
    C -- Contains --> F(AnimatedImage);
    F -- Uses --> G[Selected Image Path];
    D -- Selects Color --> H[handleSelectVariation];
    H -- Updates --> B;