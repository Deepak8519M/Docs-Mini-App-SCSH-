Great question! Let's clarify why **Tailwind CSS** is listed in the `devDependencies` instead of `dependencies` in your `package.json`.

---

### ✅ **Quick Definitions**

| Field               | Used For                                                                             |
| ------------------- | ------------------------------------------------------------------------------------ |
| `"dependencies"`    | Packages required **at runtime** (in production).                                    |
| `"devDependencies"` | Packages only needed **during development** (e.g., build tools, linters, compilers). |

---

### 🎯 So why is **Tailwind CSS** in `devDependencies`?

Because Tailwind is a **build-time CSS framework**. It doesn’t get shipped **directly to the browser** as a runtime library like React does.

#### Specifically:

- It processes your source files (HTML/JSX/TSX/etc.) during the build.
- It generates the final CSS file from your class names.
- Once built, your final app **does not need Tailwind itself** — just the generated CSS.

---

### 🧠 Therefore:

```json
"tailwindcss": "^3.4.17"
```

is in:

```json
"devDependencies"
```

👉 Because it’s **only needed to build the final CSS**, not to **run your app** in production.

---

### 📦 On the other hand:

```json
"react": "^19.1.0",
"react-dom": "^19.1.0"
```

These go in `"dependencies"` because they’re needed **at runtime**, in the actual React app running in the browser.

---

### ✅ Summary:

| Package              | devDependencies? | dependencies? | Why?                                 |
| -------------------- | ---------------- | ------------- | ------------------------------------ |
| `tailwindcss`        | ✅ Yes           | ❌ No         | Needed during development/build only |
| `react`, `react-dom` | ❌ No            | ✅ Yes        | Needed during runtime in browser     |

---

In **Tailwind CSS**, you can control font weight using the `font-` utilities.

Here's how to **define font weight** in Tailwind:

---

### ✅ Basic Syntax

```html
class="font-normal"
```

---

### ✅ Available Font Weights in Tailwind CSS

| Class             | Weight | Description      |
| ----------------- | ------ | ---------------- |
| `font-thin`       | 100    | Very thin        |
| `font-extralight` | 200    | Extra light      |
| `font-light`      | 300    | Light            |
| `font-normal`     | 400    | Normal (default) |
| `font-medium`     | 500    | Medium           |
| `font-semibold`   | 600    | Semi bold        |
| `font-bold`       | 700    | Bold             |
| `font-extrabold`  | 800    | Extra bold       |
| `font-black`      | 900    | Heaviest (black) |

---

### ✅ Example Usage

```html
<h1 class="text-3xl font-bold">Heading</h1>
<p class="text-base font-light">This is a paragraph.</p>
```

---

### ✅ Custom Fonts (Like Poppins)

If you're using a custom font like **Poppins**, you can still apply `font-bold`, `font-light`, etc., as long as those weights are imported from Google Fonts.

> 💡 **Make sure to import the font weights you want.**
> For example, in Google Fonts:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
  rel="stylesheet"
/>
```

---

You're getting this error because in **PostCSS** (which Tailwind uses under the hood), **`@import` statements must come first**—**before any other CSS rules or Tailwind directives (except `@charset` or `@layer`)**.

---

### 🔴 Your Current Code (Incorrect Order)

```css
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");

* {
  margin: 0;
}
```

---

### ✅ Fix: Move `@import` to the Top

```css
@import url("https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
}
```

> ✅ Rule: `@import` must go at the top of the file, before any Tailwind or CSS code.

---

### 💡 Bonus Tip: Use Font in Tailwind

In your `tailwind.config.js`, add the font:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
};
```

Then use it like:

```html
<h1 class="font-urbanist font-bold text-3xl">Hello!</h1>
```

---

Great question! Let's break down **why your centered `Docs.` text doesn't appear to resize when you zoom in or out**.

---

### 🔍 Here's your code for the heading:

```jsx
<h1 className="text-zinc-900 text-[13vw] leading-none tracking-normal font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
  Docs.
</h1>
```

---

### ✅ 1. `text-[13vw]` — What it means

- This sets the **font size** based on the **viewport width** (`vw` = viewport width).
- `13vw` means: the text will always be **13% of the total browser width**.
- This **makes it responsive to the screen size**, **not** to browser **zoom**.

---

### ❓ So why doesn’t it resize with zoom?

When you zoom in/out using the browser:

- The **viewport width remains the same** in CSS `vw` units.
- The browser visually scales **everything**, not just text.
- But `vw`-based sizes **don’t adjust like `rem`, `em`, or `px`** when zooming.

That’s why:

- The `Docs.` heading **looks like it's not changing** on zoom (it is technically being scaled visually by the browser zoom, but since it’s tied to the viewport, it doesn’t “grow” the way you expect).

---

### ✅ How to fix if you want it to respond to zoom

Use **relative units** like `rem` or `em` instead of `vw`:

```jsx
<h1 className="text-zinc-900 text-[6rem] leading-none tracking-normal font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
  Docs.
</h1>
```

Or, you can combine responsiveness and accessibility:

```jsx
<h1 className="text-zinc-900 text-7xl md:text-8xl lg:text-9xl font-semibold absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
  Docs.
</h1>
```

> ✅ This way, it will scale with zoom **and** screen size.

---

### 💡 Summary:

- `vw` is tied to screen width, not zoom level.
- Use `rem`, `em`, or Tailwind’s responsive font sizes (`text-5xl`, `text-7xl`, etc.) for better zoom behavior.

---
