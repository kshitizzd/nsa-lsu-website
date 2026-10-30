/* NSA @ LSU website (https://tigerlink.lsu.edu/NSALSU/): design and behaviour for the NSA pages.
   Loaded by the TigerLink pages with <script src=...>. Source: github.com/kshitizzd/nsa-lsu-website */
var NSA_CSS = `
/* NSA @ LSU styles for TigerLink. Every rule starts with .nsa so TigerLink's own
   menu, events and footer are never affected. Injected by a script because
   TigerLink removes <style> tags. Avoid the characters  >  <  &  in this file
   (TigerLink's editor may rewrite them inside scripts). */

.nsa { --purple: #461D7C; --purple-dark: #2E1257; --purple-soft: #F1ECF8; --gold: #FDD023; --gold-soft: #FFF6D1;
  --crimson: #C8102E; --ink: #221C2E; --muted: #6B6478; --line: #E7E2EC; --tint: #FAF7F2;
  --serif: 'Fraunces', Georgia, serif; --sans: 'Inter', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
  font-family: var(--sans); color: var(--ink); font-size: 16px; line-height: 1.65; text-align: left; }
.nsa * { box-sizing: border-box; }
.nsa h1, .nsa h2, .nsa h3 { font-family: var(--serif); color: var(--ink); font-weight: 700; line-height: 1.2; margin: 0 0 .5em; letter-spacing: -.01em; text-transform: none; }
.nsa h1 { font-size: clamp(2em, 4.5vw, 3em); }
.nsa h2 { font-size: clamp(1.5em, 3vw, 2em); }
.nsa h3 { font-size: 1.2em; }
.nsa p, .nsa li { font-size: 1em; line-height: 1.65; color: inherit; margin: 0 0 1em; }
.nsa ul { padding-left: 20px; margin: 0 0 1em; }
.nsa a { color: var(--purple); text-decoration: underline; text-underline-offset: 3px; }
.nsa img { max-width: 100%; display: block; }
.nsa-wrap { max-width: 1120px; margin: 0 auto; padding: 0 16px; }
.nsa-section { padding: clamp(40px, 7vw, 80px) 0; }
.nsa-tint { background: var(--tint); }
.nsa-eyebrow { text-transform: uppercase; letter-spacing: .12em; font-size: .78em !important; font-weight: 600; color: var(--crimson) !important; margin-bottom: .6em !important; }
.nsa-lead { font-size: clamp(1.05em, 1.6vw, 1.2em) !important; max-width: 640px; }
.nsa-muted { color: var(--muted) !important; }
.nsa-small { font-size: .875em !important; }

/* Buttons */
.nsa .nsa-btn { display: inline-block; padding: .75em 1.35em; border-radius: 999px; border: 2px solid var(--purple); background: var(--purple); color: #fff; font: 600 .95em/1.2 var(--sans); text-decoration: none; cursor: pointer; transition: background .15s, color .15s; margin: 0 8px 8px 0; }
.nsa .nsa-btn:hover { background: var(--purple-dark); border-color: var(--purple-dark); color: #fff; }
.nsa .nsa-btn-gold { background: var(--gold); border-color: var(--gold); color: var(--ink); }
.nsa .nsa-btn-gold:hover { background: #F2C200; border-color: #F2C200; color: var(--ink); }
.nsa .nsa-btn-ghost { background: transparent; border-color: rgba(255, 255, 255, .85); color: #fff; }
.nsa .nsa-btn-ghost:hover { background: #fff; color: var(--purple); }
.nsa .nsa-btn-outline { background: transparent; color: var(--purple); }
.nsa .nsa-btn-outline:hover { background: var(--purple-soft); color: var(--purple-dark); }

/* Hero */
.nsa-hero { position: relative; min-height: clamp(440px, 70vh, 620px); display: flex; align-items: center; color: #fff; background: var(--purple-dark) center / cover no-repeat; overflow: hidden; }
.nsa-hero::after { content: ''; position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(100deg, rgba(46, 18, 87, .92) 0%, rgba(46, 18, 87, .7) 45%, rgba(46, 18, 87, .25) 100%); }
.nsa-hero-slides, .nsa-slide { position: absolute; top: 0; right: 0; bottom: 0; left: 0; }
.nsa-slide { background-size: cover; background-position: center; opacity: 0; transition: opacity 1.4s ease; transform: scale(1.04); }
.nsa-slide.nsa-show { opacity: 1; animation: nsa-drift 9s ease-out forwards; }
@keyframes nsa-drift { to { transform: scale(1); } }
.nsa-hero .nsa-wrap { position: relative; z-index: 1; width: 100%; padding-top: 56px; padding-bottom: 56px; }
.nsa-hero h1 { color: #fff; font-size: clamp(2.4em, 6vw, 3.8em); margin-bottom: .35em; }
.nsa-hero p { color: rgba(255, 255, 255, .92); }
.nsa-namaste { font-family: 'Tiro Devanagari Hindi', serif; font-size: clamp(1.4em, 3vw, 1.9em) !important; color: var(--gold) !important; margin: 0 0 .2em !important; }
.nsa-actions { margin-top: 24px; }

/* Split layout + photo carousel */
.nsa-split { display: grid; gap: 40px; align-items: center; }
@media (min-width: 860px) { .nsa-split { grid-template-columns: 1.1fr 1fr; gap: 64px; } }
.nsa-photo-card { margin: 0; background: #fff; padding: 10px 10px 12px; border-radius: 18px; box-shadow: 0 1px 2px rgba(34, 28, 46, .06), 0 6px 20px rgba(34, 28, 46, .08); transform: rotate(1.2deg); }
.nsa-frame { position: relative; aspect-ratio: 16 / 10; border-radius: 12px; overflow: hidden; background: var(--tint); }
.nsa-frame img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity .8s ease; }
.nsa-frame img.nsa-show { opacity: 1; }
.nsa-arrow { position: absolute; top: 50%; transform: translateY(-50%); width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; z-index: 2; border-radius: 50%; background: rgba(255, 255, 255, .88); color: var(--ink); font-size: 1.5em; line-height: 1; cursor: pointer; opacity: 0; transition: opacity .2s; padding: 0; }
.nsa-photo-card:hover .nsa-arrow { opacity: 1; }
@media (hover: none) { .nsa-arrow { opacity: .9; } }
.nsa-prev { left: 10px; }
.nsa-next { right: 10px; }
.nsa-dots { display: flex; justify-content: center; gap: 6px; padding-top: 10px; }
.nsa-dots span { width: 8px; height: 8px; border-radius: 4px; background: var(--line); cursor: pointer; transition: width .2s, background .2s; }
.nsa-dots span.nsa-on { width: 20px; background: var(--purple); }
.nsa-caption { font-size: .875em !important; color: var(--muted) !important; text-align: center; font-style: italic; margin: 6px 0 0 !important; }

/* Cards */
.nsa-cards { display: grid; gap: 20px; }
@media (min-width: 760px) { .nsa-cards { grid-template-columns: 1fr 1fr; } }
@media (min-width: 1000px) { .nsa-cards-3 { grid-template-columns: repeat(3, 1fr); } }
.nsa-card { display: flex; flex-direction: column; padding: 28px; border-radius: 20px; background: var(--purple); color: #fff; }
.nsa-card h3 { color: #fff; font-size: 1.4em; margin-bottom: 10px; }
.nsa-card p { color: rgba(255, 255, 255, .88); margin-bottom: 24px; }
.nsa-card .nsa-btn { margin-top: auto; align-self: flex-start; background: var(--gold); border-color: var(--gold); color: var(--ink); }
.nsa-card-gold { background: var(--gold-soft); color: var(--ink); }
.nsa-card-light { background: var(--purple-soft); color: var(--ink); }
.nsa-card-gold h3, .nsa-card-gold p, .nsa-card-light h3, .nsa-card-light p { color: var(--ink); }
.nsa-card-gold .nsa-btn, .nsa-card-light .nsa-btn { background: var(--purple); border-color: var(--purple); color: #fff; }

/* Page header */
.nsa-head { padding: clamp(36px, 6vw, 64px) 0 clamp(20px, 3vw, 32px); background: linear-gradient(180deg, var(--purple-soft), #fff); }

/* Accordion (TigerLink removes details/summary, so this is built with a script) */
.nsa-acc { display: grid; gap: 12px; margin-top: 20px; }
.nsa-acc-item { background: #fff; border: 1px solid var(--line); border-radius: 14px; }
.nsa-acc-title { display: flex; justify-content: space-between; align-items: center; gap: 12px; padding: 18px 22px; margin: 0 !important; font: 600 1.1em/1.3 var(--serif) !important; cursor: pointer; }
.nsa-acc-title::after { content: '+'; font: 400 1.5em/1 var(--sans); color: var(--purple); }
.nsa-acc-item.nsa-open .nsa-acc-title::after { content: '\\2013'; }
.nsa-acc-body { display: none; padding: 0 22px 18px; }
.nsa-acc-item.nsa-open .nsa-acc-body { display: block; }

/* Checklists */
.nsa-checks { display: grid; gap: 20px; margin-top: 20px; }
@media (min-width: 860px) { .nsa-checks { grid-template-columns: 1fr 1fr; } }
.nsa-check { background: #fff; border: 1px solid var(--line); border-radius: 16px; padding: 22px 24px; }
.nsa-check h3 { display: flex; justify-content: space-between; align-items: baseline; }
.nsa-check h3 small { font: 600 .8em var(--sans); color: #1F7A4D; }
.nsa-check label { display: flex; gap: 12px; align-items: flex-start; padding: 9px 0; border-bottom: 1px solid var(--line); cursor: pointer; font-weight: 400; margin: 0; }
.nsa-check label:last-child { border-bottom: 0; }
.nsa-check input { width: 18px; height: 18px; margin: 3px 0 0; flex: none; accent-color: var(--purple); }
.nsa-check input:checked + span { color: var(--muted); text-decoration: line-through; }

/* Food glossary */
.nsa-food p { margin: 0; padding: 8px 0; border-bottom: 1px solid var(--line); }
.nsa-food b { display: inline-block; min-width: 200px; }

/* Links page */
.nsa-links { display: grid; gap: 32px; }
@media (min-width: 860px) { .nsa-links { grid-template-columns: repeat(3, 1fr); } }
.nsa-links h2 { font-size: 1.25em; }
.nsa-links ul { list-style: none; padding: 0; }
.nsa-links li { padding: 10px 0; border-bottom: 1px solid var(--line); margin: 0; }
.nsa-links li a { font-weight: 600; display: block; }
.nsa-links li span { color: var(--muted); font-size: .9em; }

/* Photo albums */
.nsa-albums { display: grid; gap: 14px; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); margin-top: 16px; }
.nsa-album { display: flex; flex-direction: column; gap: 4px; padding: 18px 20px; background: #fff; border: 1px solid var(--line); border-left: 4px solid var(--crimson); border-radius: 12px; cursor: pointer; transition: transform .15s, border-color .15s; }
.nsa-album:hover, .nsa-album.nsa-on { transform: translateY(-2px); border-color: var(--purple); border-left-color: var(--crimson); }
.nsa-album b { font-size: 1em; }
.nsa-album-year { font: 700 .8em/1 var(--sans); color: var(--crimson); letter-spacing: .08em; }
.nsa-viewer { margin-top: 28px; }
.nsa-viewer-head { display: flex; justify-content: space-between; align-items: flex-end; gap: 12px; flex-wrap: wrap; margin-bottom: 12px; }
.nsa-viewer-head h2 { margin: 0; }
.nsa-drive { position: relative; height: min(75vh, 720px); min-height: 420px; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; background: #fff; }
.nsa-drive iframe { position: relative; z-index: 1; display: block; width: 100%; height: 100%; border: 0; background: transparent; }
.nsa-loader { position: absolute; top: 0; right: 0; bottom: 0; left: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; color: var(--muted); }
.nsa-drive.nsa-loaded .nsa-loader { display: none; }
.nsa-spinner { width: 36px; height: 36px; border: 3px solid var(--purple-soft); border-top-color: var(--purple); border-radius: 50%; animation: nsa-spin .8s linear infinite; }
@keyframes nsa-spin { to { transform: rotate(360deg); } }
@media (prefers-reduced-motion: reduce) { .nsa-frame img { transition: none; } .nsa-spinner { animation-duration: 2.4s; } }

/* ---------- NSA header (replaces TigerLink's menu on NSA pages) ---------- */
.nsa-topbar { position: sticky; top: 0; z-index: 1000; background: rgba(255, 255, 255, .97); border-bottom: 1px solid var(--line); }
.nsa-header-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; min-height: 68px; max-width: 1240px; }
.nsa a.nsa-brand { display: flex; align-items: center; gap: 12px; text-decoration: none; color: var(--ink); }
.nsa-mark { display: inline-flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 12px; background: var(--purple); color: var(--gold); font: 700 .95em/1 var(--serif); flex: none; }
.nsa-brand-text { font: 700 1.05em/1.2 var(--serif); white-space: nowrap; }
.nsa-brand-text small { display: block; color: var(--muted); font: 400 .75em/1.3 var(--sans); }
.nsa-nav { display: flex; align-items: center; gap: 2px; }
.nsa .nsa-nav a { white-space: nowrap; padding: 8px 11px; border-radius: 8px; color: var(--ink); text-decoration: none; font-weight: 500; font-size: .92em; line-height: 1.2; }
.nsa .nsa-nav a:hover { background: var(--purple-soft); }
.nsa .nsa-nav a.nsa-active { color: var(--purple); background: var(--purple-soft); }
.nsa .nsa-nav a.nsa-btn { margin: 0 0 0 10px; padding: .55em 1.1em; background: var(--gold); border-color: var(--gold); color: var(--ink); font-weight: 600; }
.nsa-nav-toggle { display: none; width: 44px; height: 44px; padding: 11px 10px; cursor: pointer; }
.nsa-nav-toggle i { display: block; height: 2px; background: var(--ink); margin: 5px 0; border-radius: 2px; }
@media (max-width: 1100px) {
  .nsa-nav-toggle { display: block; }
  .nsa-nav { display: none; position: absolute; left: 0; right: 0; top: 100%; flex-direction: column; align-items: stretch; background: #fff; border-bottom: 1px solid var(--line); padding: 8px 16px 16px; box-shadow: 0 8px 20px rgba(34, 28, 46, .08); }
  .nsa-nav.nsa-open { display: flex; }
  .nsa .nsa-nav a { padding: 12px; }
  .nsa .nsa-nav a.nsa-btn { margin: 8px 0 0; text-align: center; }
}

/* ---------- NSA footer ---------- */
.nsa-footer { background: var(--purple-dark); color: rgba(255, 255, 255, .82); padding: 56px 0 24px; font-size: .95em; }
.nsa-footer p { color: rgba(255, 255, 255, .82); }
.nsa.nsa-footer a { color: #fff; }
.nsa-footer h4 { color: var(--gold); font: 600 .85em/1.3 var(--sans); text-transform: uppercase; letter-spacing: .08em; margin: 0 0 .7em; }
.nsa-footer-grid { display: grid; gap: 32px; }
@media (min-width: 760px) { .nsa-footer-grid { grid-template-columns: 1.4fr 1fr 1fr; } }
.nsa-footer .nsa-footer-brand { font: 700 1.25em/1.3 var(--serif); color: #fff; }
.nsa-footer-brand span { font: 400 .72em var(--sans); color: rgba(255, 255, 255, .7); }
.nsa-social a { margin-right: 14px; }
.nsa-disclaimer { margin-top: 36px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, .15); }
.nsa-footer .nsa-disclaimer p { font-size: .82em; color: rgba(255, 255, 255, .6); }
.nsa .nsa-disclaimer a { color: rgba(255, 255, 255, .78); }

/* ---------- Extra pieces used on Home, Committee and Contact ---------- */
.nsa .nsa-btn-small { padding: .45em .95em; font-size: .85em; }
.nsa a.nsa-arrow-link { font-weight: 600; text-decoration: none; }
.nsa a.nsa-arrow-link::after { content: ' \\2192'; }
.nsa-section-tight { padding-top: 24px; padding-bottom: 8px; }
.nsa-section-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 16px; flex-wrap: wrap; margin-bottom: 24px; }
.nsa-section-head h2 { margin: 0; }
.nsa-tiles { display: grid; gap: 16px; }
@media (min-width: 760px) { .nsa-tiles { grid-template-columns: repeat(3, 1fr); } }
.nsa a.nsa-tile { display: flex; flex-direction: column; gap: 4px; padding: 22px 24px; background: #fff; border: 1px solid var(--line); border-left: 4px solid var(--crimson); border-radius: 14px; text-decoration: none; color: var(--ink); transition: transform .15s, border-color .15s; }
.nsa a.nsa-tile:hover { transform: translateY(-2px); border-color: var(--purple); border-left-color: var(--crimson); }
.nsa-tile b { font: 700 1.2em/1.3 var(--serif); }
.nsa-tile span { color: var(--muted); font-size: .95em; }
.nsa .nsa-tile .nsa-tile-kicker { color: var(--crimson); font-size: .72em; font-weight: 600; text-transform: uppercase; letter-spacing: .1em; }
.nsa-contact-list { list-style: none; padding: 0; margin: 0 0 20px; }
.nsa .nsa-contact-list li { display: flex; flex-direction: column; padding: 12px 0; border-bottom: 1px solid var(--line); margin: 0; }
.nsa-contact-list li span { font-size: .85em; color: var(--muted); }
@media (min-width: 860px) { .nsa-contact-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; } }
.nsa-map { display: block; width: 100%; aspect-ratio: 4 / 3; border: 0; border-radius: 14px; box-shadow: 0 6px 20px rgba(34, 28, 46, .08); }
.nsa-note { margin-top: 32px; padding: 20px 24px; border-radius: 14px; background: var(--gold-soft); }
.nsa .nsa-note p { margin: 0; }

/* Committee: restyle TigerLink's officer list as NSA cards */
.nsa-people .row { display: grid !important; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; margin: 0 !important; }
.nsa-people .row::before, .nsa-people .row::after { display: none !important; content: none !important; }
.nsa-people [class*="col-"] { width: auto !important; float: none !important; padding: 0 !important; margin: 0 !important; max-width: none !important; }
.nsa-people .feature { height: 100%; margin: 0 !important; padding: 28px 16px 22px !important; background: #fff; border: 1px solid var(--line); border-radius: 18px; text-align: center; }
.nsa-people .image-wrapper { position: relative !important; top: auto !important; left: auto !important; width: 120px !important; height: 120px !important; margin: 0 auto 14px !important; border-radius: 50%; overflow: hidden; border: 4px solid var(--gold-soft); opacity: 1 !important; background-size: cover !important; background-position: center !important; }
.nsa-people .image-wrapper img { display: block !important; position: static !important; width: 100% !important; height: 100% !important; object-fit: cover; opacity: 1 !important; }
.nsa-people h3, .nsa-people .h5 { font-family: var(--serif) !important; font-size: 1.12em !important; font-weight: 700 !important; color: var(--ink) !important; margin: 0 0 4px !important; text-transform: none !important; letter-spacing: 0 !important; line-height: 1.3 !important; }
.nsa-people .section-cont__content-officers_position { display: block; color: var(--crimson); font-weight: 600; font-size: .8em; text-transform: uppercase; letter-spacing: .06em; }
.nsa-initials { display: flex; align-items: center; justify-content: center; width: 100%; height: 100%; background: linear-gradient(135deg, var(--purple), var(--purple-dark)); color: var(--gold); font: 700 2.1em/1 var(--serif); }

/* TigerLink's contact block shows LSU Campus Life social icons; NSA's own links are shown above it. */
.nsa-native [class*="section-cont__content-contact_"][class*="_display"] { display: none !important; }

/* Online forms and roommate board (built by forms.js) */
.nsa-form-card { background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 24px; max-width: 760px; box-shadow: 0 2px 10px rgba(46, 18, 87, .06); }
.nsa-form-card .nsa-field { display: block; margin: 0 0 14px; font: 600 .9em/1.3 var(--sans); color: var(--ink); }
.nsa-form-card input[type=text], .nsa-form-card input[type=email], .nsa-form-card input[type=tel], .nsa-form-card input[type=date], .nsa-form-card select, .nsa-form-card textarea { display: block; width: 100%; margin: 6px 0 0; padding: 10px 12px; height: auto; border: 1px solid #CFC8D8; border-radius: 10px; background: #fff; color: var(--ink); font: 400 1em/1.4 var(--sans); box-shadow: none; }
.nsa-form-card textarea { resize: vertical; }
.nsa-form-card input:focus, .nsa-form-card select:focus, .nsa-form-card textarea:focus { outline: 2px solid var(--gold); border-color: var(--purple); }
.nsa-form-card .nsa-row { display: grid; grid-template-columns: 1fr 1fr; gap: 0 16px; }
.nsa-form-card .nsa-hint, .nsa .nsa-hint { display: block; margin: 5px 0 0; font: 400 .85em/1.45 var(--sans); color: var(--muted); }
.nsa-fieldset { border: 0; padding: 0; margin: 0 0 14px; min-width: 0; }
.nsa-fieldset legend { padding: 0; font: 600 .9em/1.3 var(--sans); margin-bottom: 8px; }
.nsa-choices { display: grid; grid-template-columns: 1fr; gap: 8px; }
.nsa-choices-2 { grid-template-columns: 1fr 1fr; }
.nsa-choice { display: flex; align-items: center; gap: 10px; margin: 0; padding: 11px 14px; border: 1px solid #CFC8D8; border-radius: 10px; cursor: pointer; font: 400 .95em/1.3 var(--sans); }
.nsa-choice input, .nsa-consent input { width: 18px; height: 18px; margin: 0; flex: none; accent-color: var(--purple); }
.nsa-consent { display: flex; align-items: flex-start; gap: 10px; margin: 0 0 16px; font: 400 .92em/1.4 var(--sans); cursor: pointer; }
.nsa-hp { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
.nsa-notice { padding: 12px 14px; border-radius: 10px; margin: 0 0 16px; font: 500 .92em/1.4 var(--sans); }
.nsa-notice-error { background: #FDECEE; color: #8A1020; }
.nsa-result { max-width: 760px; padding: 26px; border-radius: 18px; background: var(--purple-soft); }
.nsa-result-ok { background: #E8F5EE; }
.nsa-result h3 { margin-bottom: 8px; }
.nsa-copy-line { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; margin-bottom: 10px; }
.nsa-form-card .nsa-copy-input, .nsa-copy-input { flex: 1; min-width: 200px; padding: 10px 12px; border: 1px solid #CFC8D8; border-radius: 10px; font: 400 .9em var(--sans); }
.nsa-filter { display: flex; flex-wrap: wrap; gap: 14px; margin: 0 0 20px; }
.nsa-filter label { font: 600 .85em/1.3 var(--sans); }
.nsa-filter select { display: block; margin-top: 4px; padding: 8px 10px; border: 1px solid #CFC8D8; border-radius: 10px; background: #fff; font: 400 .95em var(--sans); }
.nsa-listings { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 18px; margin: 0 0 20px; }
.nsa-listing { background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 20px; display: flex; flex-direction: column; }
.nsa-listing h3 { margin: 6px 0 2px; }
.nsa-tag { align-self: flex-start; background: var(--gold); color: var(--ink); border-radius: 999px; padding: 3px 11px; font: 600 .75em/1.4 var(--sans); }
.nsa-facts { list-style: none; padding: 0; margin: 8px 0; }
.nsa-facts li { margin: 0 0 3px; font-size: .92em; }
.nsa-facts span { display: inline-block; min-width: 92px; color: var(--muted); }
.nsa-chips { display: flex; flex-wrap: wrap; gap: 6px; margin: 4px 0 10px; }
.nsa-chips span { background: var(--purple-soft); color: var(--purple-dark); border-radius: 999px; padding: 3px 10px; font: 500 .78em/1.4 var(--sans); }
.nsa-about { font-size: .92em; }
.nsa-listing-foot { margin-top: auto; display: flex; justify-content: space-between; align-items: center; gap: 8px; }
.nsa-listing-foot .nsa-btn { margin: 0; }
.nsa-contact-reveal { margin-top: 12px; padding: 10px 12px; background: var(--gold-soft); border-radius: 10px; font-size: .92em; word-break: break-word; }
.nsa-empty { grid-column: 1 / -1; padding: 28px; text-align: center; background: var(--tint); border-radius: 18px; }
.nsa-empty p { margin: 0; color: var(--muted); }
.nsa-post-head { margin-top: 36px; }
@media (max-width: 640px) { .nsa-form-card .nsa-row, .nsa-choices-2 { grid-template-columns: 1fr; } .nsa-form-card { padding: 18px; } }

/* TigerLink restyles checkboxes and radios (hides the real input), so force them visible and clickable */
.nsa-form-card input[type=checkbox], .nsa-form-card input[type=radio] { -webkit-appearance: auto !important; appearance: auto !important; display: inline-block !important; position: static !important; opacity: 1 !important; visibility: visible !important; width: 18px !important; height: 18px !important; min-width: 18px; margin: 0 !important; padding: 0 !important; clip: auto !important; pointer-events: auto !important; z-index: 1; transform: none !important; border: initial; }
.nsa-form-card .nsa-choice::before, .nsa-form-card .nsa-choice::after, .nsa-form-card .nsa-consent::before, .nsa-form-card .nsa-consent::after, .nsa-form-card .nsa-field::before, .nsa-form-card .nsa-field::after { content: none !important; display: none !important; }
.nsa-form-card .nsa-choice, .nsa-form-card .nsa-consent { position: relative; padding-left: 14px; }
.nsa-form-card .nsa-consent { padding-left: 0; }
.nsa-form-card .nsa-choice span, .nsa-form-card .nsa-consent span { padding: 0 !important; margin: 0 !important; }

/* Events page: TigerLink's own upcoming-events block, given the NSA look */
.nsa-events { font-family: 'Inter', -apple-system, 'Segoe UI', Roboto, Arial, sans-serif; }
.nsa-events .wrapper-events--featured { background: #FAF7F2; padding: 48px 0 64px; }
.nsa-events .feature.feature-9 { background: #fff; border: 1px solid #E7E2EC; border-radius: 18px; overflow: hidden; padding: 0 0 22px; text-align: left; box-shadow: 0 2px 10px rgba(46, 18, 87, .06); }
.nsa-events .feature.feature-9 img { border-radius: 0; width: 100%; height: 200px; object-fit: cover; }
.nsa-events .section-cont__content-events_month_featured, .nsa-events .section-cont__content-events_day_featured { font-weight: 700; color: #C8102E; text-transform: uppercase; letter-spacing: .06em; font-size: .85em; }
.nsa-events .section-cont__content-events_time_featured { color: #6B6478; font-size: .85em; }
.nsa-events .feature.feature-9 span:first-of-type { margin-left: 20px; }
.nsa-events .section-cont__content-events_name_featured { font-family: 'Fraunces', Georgia, serif; font-weight: 700; color: #221C2E; font-size: 1.3em; margin: 8px 20px 0; }
.nsa-events .cg_dynamic_msg { font-family: 'Fraunces', Georgia, serif; color: #221C2E; }
`;

/* NSA @ LSU behaviour for TigerLink sections. Safe to include on a page more than once.
   Written without the characters  less-than, greater-than and ampersand, because
   TigerLink's editor may rewrite them inside scripts. */
(function () {
  if (!document.getElementById('nsa-fonts')) {
    var f = document.createElement('link');
    f.id = 'nsa-fonts';
    f.rel = 'stylesheet';
    f.href = 'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700' +
      String.fromCharCode(38) + 'family=Inter:wght@400;500;600' +
      String.fromCharCode(38) + 'family=Tiro+Devanagari+Hindi' +
      String.fromCharCode(38) + 'display=swap';
    document.head.appendChild(f);
  }
  if (!document.getElementById('nsa-css')) {
    var s = document.createElement('style');
    s.id = 'nsa-css';
    s.textContent = NSA_CSS;
    document.head.appendChild(s);
  }

  var reduce = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  function each(sel, fn) { Array.prototype.forEach.call(document.querySelectorAll(sel), fn); }

  function carousels() {
    each('.nsa-photo-card', function (card) {
      if (card.getAttribute('data-ready')) return;
      card.setAttribute('data-ready', '1');
      var imgs = card.querySelectorAll('.nsa-frame img');
      var dotsBox = card.querySelector('.nsa-dots');
      if (!dotsBox) {
        dotsBox = document.createElement('div');
        dotsBox.className = 'nsa-dots';
        card.insertBefore(dotsBox, card.querySelector('.nsa-caption'));
      }
      var dots = [];
      var current = 0;
      var timer = null;
      Array.prototype.forEach.call(imgs, function (img, i) {
        var d = document.createElement('span');
        d.addEventListener('click', function () { show(i); start(); });
        dotsBox.appendChild(d);
        dots.push(d);
      });
      function show(i) {
        imgs[current].classList.remove('nsa-show');
        dots[current].classList.remove('nsa-on');
        current = (i + imgs.length) % imgs.length;
        imgs[current].classList.add('nsa-show');
        dots[current].classList.add('nsa-on');
      }
      function stop() { clearInterval(timer); }
      function start() {
        stop();
        if (reduce) return;
        if (imgs.length === 1) return;
        timer = setInterval(function () { show(current + 1); }, 5000);
      }
      card.querySelector('.nsa-prev').addEventListener('click', function () { show(current - 1); start(); });
      card.querySelector('.nsa-next').addEventListener('click', function () { show(current + 1); start(); });
      card.addEventListener('mouseenter', stop);
      card.addEventListener('mouseleave', start);
      if (imgs.length) { show(0); start(); }
    });
  }

  function accordions() {
    each('.nsa-acc-title', function (t) {
      if (t.getAttribute('data-ready')) return;
      t.setAttribute('data-ready', '1');
      t.setAttribute('role', 'button');
      t.setAttribute('tabindex', '0');
      function toggle() { t.parentNode.classList.toggle('nsa-open'); }
      t.addEventListener('click', toggle);
      t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); } });
    });
  }

  function checklists() {
    each('.nsa-check', function (list) {
      if (list.getAttribute('data-ready')) return;
      list.setAttribute('data-ready', '1');
      var key = 'nsa-checklist-' + list.id;
      var saved = {};
      try { saved = JSON.parse(localStorage.getItem(key) || '{}'); } catch (e) {}
      var boxes = list.querySelectorAll('input');
      var counter = document.createElement('small');
      list.querySelector('h3').appendChild(counter);
      function update() {
        var done = 0;
        Array.prototype.forEach.call(boxes, function (b) { if (b.checked) done++; });
        counter.textContent = done + ' / ' + boxes.length;
      }
      Array.prototype.forEach.call(boxes, function (b, i) {
        b.checked = !!saved[i];
        b.addEventListener('change', function () {
          saved[i] = b.checked;
          try { localStorage.setItem(key, JSON.stringify(saved)); } catch (e) {}
          update();
        });
      });
      update();
    });
  }

  function folderId(url) {
    var m = url.match(/\/folders\/([A-Za-z0-9_-]+)/) || url.match(/[?]id=([A-Za-z0-9_-]+)/);
    return m ? m[1] : '';
  }

  function albums() {
    each('.nsa-gallery', function (box) {
      if (box.getAttribute('data-ready')) return;
      box.setAttribute('data-ready', '1');
      var viewer = box.querySelector('.nsa-viewer');
      var title = viewer.querySelector('h2');
      var open = viewer.querySelector('.nsa-open-drive');
      var frame = viewer.querySelector('.nsa-drive');
      var cards = box.querySelectorAll('.nsa-album');
      function load(card, scroll) {
        var link = card.querySelector('a').href;
        var id = folderId(link);
        Array.prototype.forEach.call(cards, function (c) { c.classList.remove('nsa-on'); });
        card.classList.add('nsa-on');
        title.textContent = card.querySelector('b').textContent;
        open.href = link;
        if (!id) { window.open(link, '_blank'); return; }
        var old = frame.querySelector('iframe');
        if (old) frame.removeChild(old);
        frame.classList.remove('nsa-loaded');
        var ifr = document.createElement('iframe');
        ifr.title = 'Photos: ' + title.textContent;
        ifr.src = 'https://drive.google.com/embeddedfolderview?id=' + id + '#grid';
        ifr.onload = function () { frame.classList.add('nsa-loaded'); };
        frame.appendChild(ifr);
        viewer.style.display = 'block';
        if (scroll) viewer.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      Array.prototype.forEach.call(cards, function (card) {
        card.querySelector('a').addEventListener('click', function (e) { e.preventDefault(); });
        card.addEventListener('click', function () { load(card, true); });
      });
      if (cards.length) load(cards[0], false);
    });
  }

  // Header: mobile menu toggle and highlight the page you're on.
  function header() {
    each('.nsa-topbar', function (bar) {
      if (bar.getAttribute('data-ready')) return;
      bar.setAttribute('data-ready', '1');
      var nav = bar.querySelector('.nsa-nav');
      var toggle = bar.querySelector('.nsa-nav-toggle');
      if (toggle) toggle.addEventListener('click', function () { nav.classList.toggle('nsa-open'); });
      var here = location.pathname.toLowerCase().replace(/\/+$/, '');
      if (here === '/nsalsu' || here === '') here = '/nsalsu/home';
      Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
        var path = a.pathname.toLowerCase().replace(/\/+$/, '');
        if (path === here) a.classList.add('nsa-active');
      });
    });
    each('.nsa-year', function (y) { y.textContent = new Date().getFullYear(); });
  }

  // Committee: officers without a profile photo get their initials instead of a grey icon.
  function officers() {
    each('.nsa-people img', function (img) {
      if (img.getAttribute('data-ready')) return;
      img.setAttribute('data-ready', '1');
      if (img.src.indexOf('/images/ico/') === -1) return;
      var card = img.closest('.feature');
      var nameEl = card ? card.querySelector('.h5, h3') : null;
      var name = nameEl ? nameEl.textContent.trim() : '';
      var initials = name.split(/\s+/).map(function (p) { return p.charAt(0); }).join('').slice(0, 2).toUpperCase();
      var box = document.createElement('span');
      box.className = 'nsa-initials';
      box.textContent = initials || 'NSA';
      img.parentNode.style.backgroundImage = 'none';
      img.parentNode.replaceChild(box, img);
    });
  }

  // Home hero: fade through the banner photos every 6 seconds.
  function heroSlides() {
    each('.nsa-hero-slides', function (box) {
      if (box.getAttribute('data-ready')) return;
      box.setAttribute('data-ready', '1');
      var slides = box.querySelectorAll('.nsa-slide');
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (slides.length - 1 === 0 || reduce) return;
      var current = 0;
      setInterval(function () {
        slides[current].classList.remove('nsa-show');
        current = (current + 1) % slides.length;
        slides[current].classList.add('nsa-show');
      }, 6000);
    });
  }

  function init() { header(); heroSlides(); carousels(); accordions(); checklists(); albums(); officers(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

var NSA_API = "https://script.google.com/macros/s/AKfycbzANbV6hxqy5CSTPI3P6TtrhSSziVqSsWz2ZusXgafZ-2mHz5qT40ZbniI9TJzBkJn5/exec";
/* NSA forms for TigerLink. Each form is built here (not in the page HTML) so TigerLink's editor
   can't strip the fields. Answers go to the NSA Google Sheet through the Apps Script web app
   in NSA_API, using JSONP (a script tag), which works from any page without extra setup. */
(function () {
  var API = typeof NSA_API === 'string' ? NSA_API : '';
  var NSA_EMAIL = 'nepalisa@lsu.edu';

  // ---------- small helpers ----------
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === 'text') n.textContent = attrs[k];
      else if (k === 'cls') n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c); });
    return n;
  }

  var seq = 0;
  function api(action, params, done) {
    if (!API) { done({ ok: false, error: 'Online forms are not connected yet. Please email ' + NSA_EMAIL + '.' }); return; }
    var name = 'nsaCb' + (++seq) + Date.now();
    var s = document.createElement('script');
    var finished = false;
    var timer = setTimeout(function () { finish({ ok: false, error: 'The connection timed out. Please try again.' }); }, 20000);
    function finish(res) {
      if (finished) return;
      finished = true;
      clearTimeout(timer);
      try { delete window[name]; } catch (e) { window[name] = undefined; }
      if (s.parentNode) s.parentNode.removeChild(s);
      done(res || { ok: false, error: 'Something went wrong. Please try again.' });
    }
    window[name] = finish;
    var q = ['action=' + encodeURIComponent(action), 'callback=' + name];
    Object.keys(params).forEach(function (k) { q.push(encodeURIComponent(k) + '=' + encodeURIComponent(params[k])); });
    s.src = API + (API.indexOf('?') === -1 ? '?' : String.fromCharCode(38)) + q.join(String.fromCharCode(38));
    s.onerror = function () { finish({ ok: false, error: 'Could not reach the NSA form service. Please try again.' }); };
    document.body.appendChild(s);
  }

  function semesters(includeCurrent) {
    var terms = ['Spring', 'Summer', 'Fall'];
    var d = new Date();
    var m = d.getMonth() + 1;
    var now = m <= 5 ? 0 : (m <= 7 ? 1 : 2);
    var idx = includeCurrent ? now : now + 1;
    var out = [];
    for (var i = 0; i < 4; i++) {
      var k = idx + i;
      out.push(terms[k % 3] + ' ' + (d.getFullYear() + Math.floor(k / 3)));
    }
    out.push('Not sure yet');
    return out;
  }

  // ---------- form builder ----------
  // field: { name, label, type, required, options, placeholder, half, hint }
  function input(f) {
    var id = 'nsa-f-' + f.name + '-' + (++seq);
    var lab = el('label', { cls: 'nsa-field', 'for': id }, [f.label + (f.required ? ' *' : '')]);
    var ctl;
    if (f.type === 'select') {
      ctl = el('select', { id: id, name: f.name }, [el('option', { value: '', text: 'Choose...' })]);
      f.options.forEach(function (o) { ctl.appendChild(el('option', { value: o, text: o })); });
    } else if (f.type === 'textarea') {
      ctl = el('textarea', { id: id, name: f.name, rows: f.rows || 3, maxlength: f.max || 1000, placeholder: f.placeholder || '' });
    } else if (f.type === 'radios' || f.type === 'checks') {
      var box = el('fieldset', { cls: 'nsa-fieldset' }, [el('legend', { text: f.label + (f.required ? ' *' : '') })]);
      var grid = el('div', { cls: 'nsa-choices' + (f.cols2 ? ' nsa-choices-2' : '') });
      f.options.forEach(function (o) {
        var inp = el('input', { type: f.type === 'radios' ? 'radio' : 'checkbox', name: f.name, value: o });
        grid.appendChild(el('label', { cls: 'nsa-choice' }, [inp, el('span', { text: o })]));
      });
      box.appendChild(grid);
      return box;
    } else if (f.type === 'consent') {
      return el('label', { cls: 'nsa-consent' }, [el('input', { type: 'checkbox', name: f.name, value: '1' }), el('span', { text: f.label })]);
    } else {
      ctl = el('input', { id: id, name: f.name, type: f.type || 'text', maxlength: f.max || 150, placeholder: f.placeholder || '' });
      if (f.auto) ctl.setAttribute('autocomplete', f.auto);
    }
    lab.appendChild(ctl);
    if (f.hint) lab.appendChild(el('span', { cls: 'nsa-hint', text: f.hint }));
    return lab;
  }

  function buildForm(slot, fields, submitLabel, onSubmit, note) {
    slot.textContent = '';
    var form = el('form', { cls: 'nsa-form-card', novalidate: 'novalidate' });
    var msg = el('div', { cls: 'nsa-notice nsa-notice-error', style: 'display:none' });
    form.appendChild(msg);
    var row = null;
    fields.forEach(function (f) {
      var node = input(f);
      if (f.half) {
        if (!row) { row = el('div', { cls: 'nsa-row' }); form.appendChild(row); }
        row.appendChild(node);
        if (row.childNodes.length === 2) row = null;
      } else {
        row = null;
        form.appendChild(node);
      }
    });
    // Spam trap: a field people never see or fill in. Its name means nothing to browser autofill
    // (a field called "website" got filled in automatically and real people were blocked as spam).
    form.appendChild(el('div', { cls: 'nsa-hp', 'aria-hidden': 'true' }, [el('input', { type: 'text', name: 'nsa_hp_x7', tabindex: '-1', autocomplete: 'off', 'data-lpignore': 'true', 'data-1p-ignore': 'true' })]));
    var btn = el('button', { type: 'submit', cls: 'nsa-btn', text: submitLabel });
    form.appendChild(btn);
    if (note) form.appendChild(el('p', { cls: 'nsa-hint', text: note }));
    var started = Date.now();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = {};
      fields.forEach(function (f) {
        if (f.type === 'checks') {
          var vals = [];
          Array.prototype.forEach.call(form.querySelectorAll('input[name="' + f.name + '"]:checked'), function (c) { vals.push(c.value); });
          data[f.name] = vals.join('; ');
        } else if (f.type === 'radios') {
          var picked = form.querySelector('input[name="' + f.name + '"]:checked');
          data[f.name] = picked ? picked.value : '';
        } else if (f.type === 'consent') {
          data[f.name] = form.querySelector('input[name="' + f.name + '"]').checked ? '1' : '';
        } else {
          data[f.name] = form.querySelector('[name="' + f.name + '"]').value.trim();
        }
      });
      data.website = form.querySelector('input[name="nsa_hp_x7"]').value;
      var missing = fields.filter(function (f) { return f.required && !data[f.name]; })[0];
      if (missing) return error('Please fill in: ' + missing.label + '.');
      if (Date.now() - started - 2500 < 0) return error('Please take a moment to check your answers, then press the button again.');
      msg.style.display = 'none';
      btn.disabled = true;
      var label = btn.textContent;
      btn.textContent = 'Sending...';
      onSubmit(data, function (err) {
        btn.disabled = false;
        btn.textContent = label;
        if (err) error(err);
      });
    });
    function error(text) {
      msg.textContent = text;
      msg.style.display = 'block';
      msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    slot.appendChild(form);
    return form;
  }

  function result(slot, kind, title, paras, actions) {
    slot.textContent = '';
    var card = el('div', { cls: 'nsa-result nsa-result-' + kind }, [el('h3', { text: title })]);
    paras.forEach(function (p) { card.appendChild(typeof p === 'string' ? el('p', { text: p }) : p); });
    if (actions) card.appendChild(el('p', {}, actions));
    slot.appendChild(card);
    slot.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function link(href, text, cls) { return el('a', { href: href, cls: cls || 'nsa-btn nsa-btn-outline', text: text }); }
  function first(name) { return String(name || '').split(' ')[0]; }

  // ---------- Join the mailing list ----------
  function joinForm(slot) {
    buildForm(slot, [
      { name: 'name', label: 'Full name', required: true, auto: 'name' },
      { name: 'email', label: 'Email address', type: 'email', required: true, auto: 'email', hint: "Any email you check often. It doesn't have to be your LSU one." },
      { name: 'category', label: 'I am a...', type: 'radios', required: true, cols2: true,
        options: ['LSU Student', 'LSU Affiliated', 'LSU Faculty', 'BTR Nepali Community'] }
    ], 'Add me to the list', function (d, done) {
      api('join', d, function (res) {
        if (!res.ok) return done(res.error);
        if (res.status === 'exists') {
          result(slot, 'info', "You're already with us, " + first(d.name) + '!',
            ['We found ' + d.email + ' on our mailing list already, so there is nothing more you need to do.',
             'Not getting our emails? Check your spam or promotions folder for messages from ' + NSA_EMAIL + '.']);
        } else {
          result(slot, 'ok', 'Dhanyabad, ' + first(d.name) + '!',
            [d.email + ' is now on the NSA mailing list. You will hear from us at the next event.',
             'Tip: add ' + NSA_EMAIL + ' to your contacts so our emails do not land in spam.'],
            [link('/nsalsu/events/', 'See upcoming events')]);
        }
      });
    }, 'Your details are only seen by the NSA committee and are never shown on this website or shared.');
  }

  // ---------- Remove me from the mailing list ----------
  function removeForm(slot) {
    buildForm(slot, [
      { name: 'name', label: 'Your name', required: true, auto: 'name' },
      { name: 'email', label: 'Email you signed up with', type: 'email', required: true, auto: 'email' }
    ], 'Find me', function (d, done) {
      api('unsub_find', { email: d.email, website: d.website }, function (res) {
        if (!res.ok) return done(res.error);
        if (!res.found) {
          return result(slot, 'info', "We couldn't find that email",
            [d.email + " isn't on our mailing list. It may already have been removed, or you may have signed up with a different email."],
            [link('', 'Try another email')]);
        }
        var yes = el('button', { type: 'button', cls: 'nsa-btn', text: "Yes, that's me. Remove me" });
        var no = el('button', { type: 'button', cls: 'nsa-btn nsa-btn-outline', text: "No, that's not me" });
        result(slot, 'info', 'Are you ' + (res.name || 'the owner of this email') + '?',
          ['We found ' + res.email + ' on the NSA mailing list. Confirm and we will remove it straight away.'], [yes, no]);
        no.addEventListener('click', function () { removeForm(slot); });
        yes.addEventListener('click', function () {
          yes.disabled = true;
          yes.textContent = 'Removing...';
          api('unsub_confirm', { token: res.token }, function (r2) {
            if (!r2.ok) return result(slot, 'info', 'Please try again', [r2.error], [link('', 'Start over')]);
            result(slot, 'ok', "You've been removed",
              ['Your email is no longer on the NSA mailing list.',
               "Thank you for being part of the NSA family. Congratulations if you're graduating, and you're always welcome back!"],
              [link('/nsalsu/mailing-list/', 'Changed your mind? Join again')]);
          });
        });
        done();
      });
    });
  }

  // ---------- Coming to LSU (new students) ----------
  function arrivalForm(slot) {
    buildForm(slot, [
      { name: 'name', label: 'Full name', required: true, half: true, auto: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, half: true, auto: 'email' },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', half: true, placeholder: '+977 ...', auto: 'tel' },
      { name: 'from_city', label: 'Hometown in Nepal', half: true, placeholder: 'e.g. Pokhara' },
      { name: 'level', label: 'Program level', type: 'select', required: true, half: true,
        options: ['Undergraduate', "Master's", 'PhD', 'Visiting scholar / other'] },
      { name: 'semester', label: 'Starting semester', type: 'select', required: true, half: true, options: semesters(false) },
      { name: 'program', label: 'Major / department', placeholder: 'e.g. MS in Computer Science' },
      { name: 'arrival_date', label: 'Expected arrival date', type: 'date', half: true },
      { name: 'arrival_airport', label: 'Arriving at', type: 'select', half: true,
        options: ['Baton Rouge (BTR)', 'New Orleans (MSY)', 'Not booked yet', 'Other'] },
      { name: 'flight_details', label: 'Flight details (if booked)', placeholder: 'Airline, flight number, arrival time', max: 300 },
      { name: 'help', label: 'What can we help with?', type: 'checks',
        options: ['Airport pickup', 'Temporary stay on arrival', 'Finding housing / roommates', 'Ride to/from New Orleans',
                  'Groceries & shopping', 'SSN', "Driver's license", 'Bank account / phone plan', 'Just want to connect'] },
      { name: 'message', label: 'Anything else we should know?', type: 'textarea', rows: 4, placeholder: 'Questions, worries, dietary needs, anything at all.' }
    ], 'Send to NSA', function (d, done) {
      api('newstudent', d, function (res) {
        if (!res.ok) return done(res.error);
        result(slot, 'ok', 'Thank you, ' + first(d.name) + '!',
          ["We've got your details, and a welcome email is on its way to " + d.email + '. Someone from NSA will reach out soon.',
           'Keep an eye on your inbox (and the spam folder, just in case). Shubha yatra, and see you soon!']);
      });
    });
  }

  // ---------- Volunteer ----------
  function volunteerForm(slot) {
    buildForm(slot, [
      { name: 'name', label: 'Full name', required: true, half: true, auto: 'name' },
      { name: 'email', label: 'Email', type: 'email', required: true, half: true, auto: 'email' },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true, auto: 'tel' },
      { name: 'has_car', label: 'Do you have a car?', type: 'select', half: true, options: ['Yes', 'No'] },
      { name: 'help', label: 'I can help with', type: 'checks', required: true,
        options: ['Airport pickup from Baton Rouge (BTR)', 'Airport pickup from New Orleans (MSY)', 'Temporary stay (a few nights)',
                  'Grocery / shopping runs', 'Help with SSN, bank or phone', 'Show them around campus'] },
      { name: 'notes', label: 'Availability or notes', type: 'textarea', placeholder: 'e.g. Free most evenings in August. Can host one person for up to 3 nights.' }
    ], 'Count me in', function (d, done) {
      api('volunteer', d, function (res) {
        if (!res.ok) return done(res.error);
        result(slot, 'ok', 'Thank you, ' + first(d.name) + '!',
          [(res.updated ? "We've updated your volunteer details." : "You're on our volunteer list.") +
           " We'll reach out when a new student needs a hand. Dherai dhanyabad!"]);
      });
    });
  }

  // ---------- Roommate board ----------
  var LOOKING = ['Need a roommate', 'Looking for a room', 'Offering a sublease', 'Looking for a sublease'];

  function roommates(slot) {
    var key = (location.search.match(/[?]manage=([0-9a-f]{32})/) || location.search.match(/manage=([0-9a-f]{32})/) || [])[1];
    if (key) return manage(slot, key);
    slot.textContent = '';
    var filters = el('div', { cls: 'nsa-filter' });
    var board = el('div', { cls: 'nsa-listings' }, [el('p', { cls: 'nsa-muted', text: 'Loading listings...' })]);
    var postHead = el('div', { cls: 'nsa-post-head' }, [el('h2', { text: 'Post a listing' })]);
    var postSlot = el('div', { id: 'nsa-room-post' });
    slot.appendChild(filters);
    slot.appendChild(board);
    slot.appendChild(el('p', { cls: 'nsa-hint', text: 'Listings are removed after 45 days unless renewed. Meet in public and never pay before seeing a place.' }));
    slot.appendChild(postHead);
    slot.appendChild(postSlot);
    postForm(postSlot);

    var all = [];
    var sel = {};
    [['looking', 'Looking for', LOOKING], ['food', 'Food', ['Vegetarian', 'Non-veg', 'Eggitarian']], ['gender', 'Roommate', ['Female roommate', 'Male roommate']]]
      .forEach(function (f) {
        var s = el('select', {}, [el('option', { value: '', text: 'Any' })]);
        f[2].forEach(function (o) { s.appendChild(el('option', { value: o, text: o })); });
        s.addEventListener('change', render);
        sel[f[0]] = s;
        filters.appendChild(el('label', {}, [f[1], s]));
      });

    function render() {
      board.textContent = '';
      var shown = all.filter(function (l) {
        if (sel.looking.value && l.looking !== sel.looking.value) return false;
        if (sel.food.value && l.food !== sel.food.value && l.food !== 'No preference') return false;
        if (sel.gender.value && l.gender !== sel.gender.value && l.gender !== 'No preference') return false;
        return true;
      });
      if (!shown.length) {
        board.appendChild(el('div', { cls: 'nsa-empty' }, [el('p', { text: all.length ? 'No listings match those filters.' : 'No listings yet. Be the first! Post below and others looking for a place will find you.' })]));
        return;
      }
      shown.forEach(function (l) { board.appendChild(card(l)); });
    }

    function card(l) {
      var facts = el('ul', { cls: 'nsa-facts' });
      [['Move-in', l.movein], ['Budget / rent', l.budget], ['Area', l.area]].forEach(function (f) {
        if (f[1]) facts.appendChild(el('li', {}, [el('span', { text: f[0] }), String(f[1])]));
      });
      var chips = el('div', { cls: 'nsa-chips' });
      [l.food, l.smoking, 'Drinks: ' + l.drinking, l.gender].forEach(function (c) { chips.appendChild(el('span', { text: c })); });
      var btn = el('button', { type: 'button', cls: 'nsa-btn nsa-btn-small', text: 'Show contact' });
      var c = el('article', { cls: 'nsa-listing' }, [
        el('span', { cls: 'nsa-tag', text: l.looking }),
        el('h3', { text: l.name }),
        el('p', { cls: 'nsa-muted nsa-small', text: [l.dept, l.semester].filter(Boolean).join(' · ') }),
        facts, chips,
        l.about ? el('p', { cls: 'nsa-about', text: l.about }) : null,
        el('div', { cls: 'nsa-listing-foot' }, [el('span', { cls: 'nsa-muted nsa-small', text: 'Posted ' + l.posted }), btn])
      ]);
      btn.addEventListener('click', function () {
        btn.disabled = true;
        btn.textContent = 'Loading...';
        api('room_contact', { id: l.id }, function (res) {
          var box = el('div', { cls: 'nsa-contact-reveal' });
          if (!res.ok) box.textContent = res.error;
          else {
            box.appendChild(el('a', { href: 'mailto:' + res.email, text: res.email }));
            if (res.phone) {
              var digits = res.phone.replace(/[^0-9]/g, '');
              var line = el('div', {}, [res.phone + ' ']);
              if (digits.length - 10 + 1 > 0) line.appendChild(el('a', { href: 'https://wa.me/' + (digits.length === 10 ? '1' + digits : digits), target: '_blank', rel: 'noopener', text: '(WhatsApp)' }));
              box.appendChild(line);
            }
          }
          c.appendChild(box);
          btn.parentNode.removeChild(btn);
        });
      });
      return c;
    }

    api('room_list', {}, function (res) {
      if (!res.ok) { board.textContent = ''; board.appendChild(el('div', { cls: 'nsa-empty' }, [el('p', { text: res.error })])); return; }
      all = res.listings || [];
      render();
    });
  }

  function postForm(slot) {
    buildForm(slot, [
      { name: 'looking_for', label: 'I am...', type: 'radios', required: true, cols2: true, options: LOOKING },
      { name: 'first_name', label: 'First name', required: true, half: true, auto: 'given-name' },
      { name: 'last_name', label: 'Last name', half: true, auto: 'family-name' },
      { name: 'email', label: 'Email', type: 'email', required: true, half: true, auto: 'email' },
      { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', half: true, auto: 'tel' },
      { name: 'department', label: 'Department / program', half: true, placeholder: 'e.g. PhD, Civil Engineering' },
      { name: 'semester', label: 'Semester', type: 'select', half: true, options: semesters(true) },
      { name: 'move_in', label: 'Move-in date', type: 'date', half: true },
      { name: 'budget', label: 'Budget / rent per month', half: true, placeholder: 'e.g. $450 + utilities' },
      { name: 'area', label: 'Area or apartment complex', placeholder: 'e.g. Near Nicholson Dr' },
      { name: 'food', label: 'Food', type: 'select', half: true, options: ['Vegetarian', 'Non-veg', 'Eggitarian', 'No preference'] },
      { name: 'smoking', label: 'Smoking', type: 'select', half: true, options: ['Non-smoker', 'Smoker', 'No preference'] },
      { name: 'drinking', label: 'Drinking', type: 'select', half: true, options: ['No', 'Occasionally', 'Yes', 'No preference'] },
      { name: 'gender_pref', label: 'Roommate', type: 'select', half: true, options: ['Female roommate', 'Male roommate', 'No preference'] },
      { name: 'about', label: 'About you / the place', type: 'textarea', max: 600, placeholder: 'e.g. 2BHK, furnished, on the bus line. Early riser, love cricket.' },
      { name: 'consent', label: 'Show my listing and contact details on this page.', type: 'consent', required: true }
    ], 'Post my listing', function (d, done) {
      api('room_post', d, function (res) {
        if (!res.ok) return done(res.error);
        var url = location.origin + location.pathname + '?manage=' + res.key;
        var box = el('input', { type: 'text', readonly: 'readonly', value: url, cls: 'nsa-copy-input' });
        var copy = el('button', { type: 'button', cls: 'nsa-btn nsa-btn-small', text: 'Copy link' });
        copy.addEventListener('click', function () { box.select(); try { document.execCommand('copy'); copy.textContent = 'Copied!'; } catch (e) {} });
        result(slot, 'ok', 'Your listing is live!', [
          'Save this private link. It is the only way to renew or take down your listing:',
          el('div', { cls: 'nsa-copy-line' }, [box, copy])
        ], [link(location.pathname, 'See the board')]);
      });
    });
  }

  function manage(slot, key) {
    slot.textContent = 'Loading your listing...';
    api('room_manage', { key: key }, function (res) {
      if (!res.ok) return result(slot, 'info', 'Listing not found', [res.error], [link(location.pathname, 'Back to the board')]);
      var status = res.status === 'live' ? 'Live, showing until ' + res.until + '.' : (res.status === 'removed' ? 'Taken down.' : 'Expired. Renew it if you are still looking.');
      var renew = el('button', { type: 'button', cls: 'nsa-btn nsa-btn-gold', text: res.status === 'live' ? 'Still looking: keep it up longer' : 'Put my listing back up' });
      var remove = el('button', { type: 'button', cls: 'nsa-btn nsa-btn-outline', text: 'I found a place: take it down' });
      result(slot, 'info', 'Manage your listing', [
        'Listing: ' + res.listing.looking + ' (' + res.listing.name + ')',
        'Status: ' + status
      ], res.status === 'removed' ? [renew] : [renew, remove]);
      function act(op, btn) {
        btn.disabled = true;
        api('room_update', { key: key, op: op }, function (r2) {
          if (!r2.ok) return result(slot, 'info', 'Please try again', [r2.error]);
          result(slot, 'ok', op === 'renew' ? 'Renewed!' : 'Your listing has been taken down',
            [op === 'renew' ? 'Your listing will stay up for another 45 days.' : 'Congratulations on finding a place, and welcome home!'],
            [link(location.pathname, 'Back to the board')]);
        });
      }
      renew.addEventListener('click', function () { act('renew', renew); });
      remove.addEventListener('click', function () { act('remove', remove); });
    });
  }

  // ---------- start ----------
  function init() {
    var map = { 'nsa-join-form': joinForm, 'nsa-remove-form': removeForm, 'nsa-arrival-form': arrivalForm,
                'nsa-volunteer-form': volunteerForm, 'nsa-roommates': roommates };
    Object.keys(map).forEach(function (id) {
      var slot = document.getElementById(id);
      if (slot) {
        if (slot.getAttribute('data-ready')) return;
        slot.setAttribute('data-ready', '1');
        map[id](slot);
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
