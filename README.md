# NSA @ LSU website: design file

`nsa.js` holds the design (CSS) and behaviour (menu, photo carousel, arrival checklists,
newcomer's guide, photo albums, committee cards) for the Nepalese Student Association's
pages on TigerLink: https://tigerlink.lsu.edu/NSALSU/

The TigerLink pages load it with:

```html
<script src="https://cdn.jsdelivr.net/gh/kshitizzd/nsa-lsu-website@main/nsa.js"></script>
```

It adds a stylesheet and wires up the interactive parts of the page. It does not load any
other scripts (only Google Fonts), and it does not collect or send any data.

Why a separate file: TigerLink removes `<style>` tags and rewrites `{ }` inside scripts when a
page is saved, so the code can't be pasted into the page directly.

To update: replace `nsa.js` here and push. jsDelivr refreshes within about 12 hours, or right away
after visiting https://purge.jsdelivr.net/gh/kshitizzd/nsa-lsu-website@main/nsa.js
