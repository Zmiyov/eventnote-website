# Events Notes — Landing Page

Marketing landing page for **Events Notes**, the all-in-one app for photographers,
videographers, and production professionals (iPhone, iPad & Mac).

🔗 **Live site:** https://zmiyov.github.io/eventnote-website/

## Stack

Plain static HTML/CSS/JS — no build step.

```
index.html      # page markup
styles.css      # styling (beige/amber palette from the app)
script.js       # mobile nav + footer year
assets/         # logo, icon, App Store badge, screenshots
.nojekyll       # serve files as-is on GitHub Pages
```

## Local preview

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Before publishing — fill in placeholders in `index.html`

| Placeholder | Replace with |
|-------------|--------------|
| `APP_STORE_URL` | Your App Store listing URL |
| `PRIVACY_URL` | Hosted Privacy Policy URL |
| `TERMS_URL` | Hosted Terms of Service URL |

## Deploy (GitHub Pages)

Pushed to a public repo with Pages enabled on the `main` branch (root folder).

© Volodymyr Pysarenko
