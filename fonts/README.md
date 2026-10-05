# Self-hosted web fonts

These are the same variable-font files Google Fonts serves, stored locally so
the site makes no third-party request to `fonts.googleapis.com` /
`fonts.gstatic.com` on page load.

| File | Family | Axes used | Subset |
| --- | --- | --- | --- |
| `inter-latin.woff2` | Inter | `wght` 400–800 | latin |
| `inter-latin-ext.woff2` | Inter | `wght` 400–800 | latin-ext |
| `newsreader-latin.woff2` | Newsreader | `opsz` 6–72, `wght` 500–700 | latin |
| `newsreader-latin-ext.woff2` | Newsreader | `opsz` 6–72, `wght` 500–700 | latin-ext |

Both families are licensed under the SIL Open Font License 1.1, which permits
redistribution alongside a website.

- Inter: <https://fonts.google.com/specimen/Inter> (OFL)
- Newsreader: <https://fonts.google.com/specimen/Newsreader> (OFL)

The `@font-face` rules live at the top of `css/styles.css`, with the same
`unicode-range` values Google serves, so the `latin-ext` files are only
fetched when a page actually uses those codepoints. The two `latin` files are
preloaded in `_layouts/default.html`.

To refresh after an upstream version bump, re-request the CSS with a current
browser User-Agent and re-download the `woff2` URLs it returns:

    curl -A "<modern browser UA>" \
      "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Newsreader:opsz,wght@6..72,500..700&display=swap"
