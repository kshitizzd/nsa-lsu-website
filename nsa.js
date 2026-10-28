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

  function init() { header(); carousels(); accordions(); checklists(); albums(); officers(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
