# Catholicism Examined

A simple website that answers common questions about Catholic beliefs in plain language, for non-Catholics. Every answer is backed **only** by:

1. **Scripture**: the NABRE, linked to [bible.usccb.org](https://bible.usccb.org)
2. **The Catechism of the Catholic Church**, linked to [vatican.va](https://www.vatican.va/archive/ENG0015/_INDEX.HTM)
3. **Official Church teaching** (councils, popes), linked to [vatican.va](https://www.vatican.va)

## Viewing the site
Double-click `index.html`, or run a local server:

```sh
python3 -m http.server
# then open http://localhost:8000
```

There is no build step. You can host it anywhere static, such as GitHub Pages or Netlify, by uploading the folder.

## Adding or editing a claim
**All claims live in one file: [`js/claims.js`](js/claims.js).**

1. Open `js/claims.js`. A commented **TEMPLATE** is at the top.
2. Copy the template and paste it as a new entry at the end of the `window.CLAIMS` list. Put a comma after the previous claim's closing `}`.
3. Fill in the fields: question, short answer, explanation, evidence, and common questions.
4. Check the sources: open **`verify.html`** in your browser. Nothing needs to be installed.
   If you have Node.js, you can also run `node scripts/verify-sources.mjs`.
5. Refresh the page. The new claim appears automatically.

## The source rule (enforced)
The checker (`js/verify-rules.js`, used by `verify.html` and the Node script) fails if any evidence:
- has a `type` other than `scripture`, `catechism`, or `magisterium`
- links anywhere other than `bible.usccb.org` (Scripture) or `www.vatican.va` (Catechism and Church teaching)
- is Scripture not tagged `NABRE`
- is missing its quote, reference, or link

It also checks that every "See:" reference in a common question points to real evidence.

The page runs the same check in the browser. Evidence that breaks the rule is hidden and a warning is logged to the console.

**Quotes must be copied word for word from the linked source.** The script can check where a link points, but it cannot check the wording. Always open the link and compare.

## Files
| File | Purpose |
|---|---|
| `index.html` | Page shell |
| `css/styles.css` | Look and feel. Colors are variables at the top. |
| `js/claims.js` | **All content** and the approved-source list |
| `js/app.js` | Renders claims. No need to edit. |
| `verify.html` | Open in a browser to run the source-rule check |
| `js/verify-rules.js` | The source-rule checks |
| `scripts/verify-sources.mjs` | Same check from the command line (optional, needs Node.js) |
