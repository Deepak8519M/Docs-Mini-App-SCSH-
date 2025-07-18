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
