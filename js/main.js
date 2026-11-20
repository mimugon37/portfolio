import { UI, ABOUT, PROJECTS, SKILLS, SPEAKING, ORGANIZE, TRASH, MOOD, TERMINAL, CONTACT, MUSIC } from './content.js';

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const h = (tag, attrs = {}, html = '') => {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === 'class') el.className = v;
    else el.setAttribute(k, v);
  }
  if (html) el.innerHTML = html;
  return el;
};
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const store = { get: (k) => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };

let lang = store.get('mg-lang') === 'en' ? 'en' : 'es';
const t = () => UI[lang];
const touch = matchMedia('(hover: none)').matches;
const small = () => innerWidth < 760;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const MENU_H = 28;

/* ───────────── íconos ───────────── */
const tile = (bg, inner, defs = '') => `<svg viewBox="0 0 64 64" aria-hidden="true">${defs}<rect x="3" y="3" width="58" height="58" rx="14" fill="${bg}"/>${inner}</svg>`;
const realIcon = (f) => `<img class="real-ico" src="assets/icons/${f}.webp" alt="" draggable="false">`;
const ICONS = {
  finder: realIcon('finder'),
  notes: realIcon('notes'),
  keynote: realIcon('preview'),
  reminders: realIcon('reminders'),
  photos: realIcon('photos'),
  terminal: realIcon('terminal'),
  mail: realIcon('mail'),
  trash: realIcon('trash'),
  music: realIcon('music'),
  doc: '<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 4h26l12 12v42a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z" fill="#fff" stroke="#d6cfc4"/><path d="M40 4v12h12" fill="#ece6dc" stroke="#d6cfc4"/><g stroke="#cfc6b8" stroke-width="2" stroke-linecap="round"><path d="M19 26h26M19 33h26M19 40h26M19 47h16"/></g></svg>',
  figma: realIcon('figma'),
  ps: tile('#001e36', '<text x="32" y="41" text-anchor="middle" font-family="Gabarito, sans-serif" font-weight="700" font-size="24" fill="#31a8ff">Ps</text>'),
  ai: tile('#330000', '<text x="32" y="41" text-anchor="middle" font-family="Gabarito, sans-serif" font-weight="700" font-size="24" fill="#ff9a00">Ai</text>'),
  ae: tile('#00005b', '<text x="32" y="41" text-anchor="middle" font-family="Gabarito, sans-serif" font-weight="700" font-size="24" fill="#9999ff">Ae</text>'),
  capcut: tile('#0d0d0d', '<path d="M20 24l24 16M20 40l24-16" stroke="#fff" stroke-width="4.5" stroke-linecap="round"/><rect x="14" y="18" width="36" height="28" rx="6" fill="none" stroke="#fff" stroke-width="3"/>'),
  blender: tile('#f6efe6', '<circle cx="34" cy="34" r="14" fill="#ea7600"/><circle cx="34" cy="34" r="8" fill="#fff"/><circle cx="34" cy="34" r="4.5" fill="#265787"/><path d="M14 30l14-10" stroke="#ea7600" stroke-width="5" stroke-linecap="round"/>'),
  unity: tile('#141414', '<path d="M32 14l15 9v18l-15 9-15-9V23z" fill="none" stroke="#fff" stroke-width="3" stroke-linejoin="round"/><path d="M32 32V50M32 32l15-9M32 32l-15-9" stroke="#fff" stroke-width="3"/>'),
  code: tile('#f06a35', '<path d="M24 22l-9 10 9 10M40 22l9 10-9 10M35 18l-6 28" fill="none" stroke="#fff" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>'),
  workspace: tile('#fff', '<rect x="14" y="14" width="16" height="16" rx="3" fill="#4285f4"/><rect x="34" y="14" width="16" height="16" rx="3" fill="#34a853"/><rect x="14" y="34" width="16" height="16" rx="3" fill="#fbbc04"/><rect x="34" y="34" width="16" height="16" rx="3" fill="#ea4335"/>'),
  team: tile('#f7c9d8', '<circle cx="24" cy="25" r="7" fill="#b8325f"/><circle cx="40" cy="25" r="7" fill="#e8467c"/><path d="M12 48a12 12 0 0 1 24 0z" fill="#b8325f"/><path d="M28 48a12 12 0 0 1 24 0z" fill="#e8467c"/>'),
  megaphone: tile('#f7d77a', '<path d="M14 28h8l20-11v30L22 36h-8z" fill="#3b1f1b"/><path d="M20 36l3 11h6l-2-11" fill="#3b1f1b"/><path d="M47 25a9 9 0 0 1 0 14" fill="none" stroke="#3b1f1b" stroke-width="3" stroke-linecap="round"/>'),
  globe: tile('#cfe3fb', '<circle cx="32" cy="32" r="16" fill="none" stroke="#2f55d4" stroke-width="3"/><ellipse cx="32" cy="32" rx="7" ry="16" fill="none" stroke="#2f55d4" stroke-width="2.4"/><path d="M16 32h32M19 24h26M19 40h26" stroke="#2f55d4" stroke-width="2.2"/>'),
};


/* símbolos tipo SF para barras de Notas y Recordatorios */
const sf = (d, vb = '0 0 20 20') => `<svg class="sf" viewBox="${vb}" aria-hidden="true">${d}</svg>`;
const SF = {
  sidebar: sf('<rect x="2.5" y="4" width="15" height="12" rx="2.5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M7.5 4v12" stroke="currentColor" stroke-width="1.4"/>'),
  list: sf('<path d="M3 5.5h14M3 10h14M3 14.5h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>'),
  grid: sf('<rect x="3" y="3.5" width="5.5" height="5.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="11.5" y="3.5" width="5.5" height="5.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="3" y="11" width="5.5" height="5.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="11.5" y="11" width="5.5" height="5.5" rx="1.2" fill="none" stroke="currentColor" stroke-width="1.4"/>'),
  trash: sf('<path d="M4 6h12M8 6V4.5h4V6M5.5 6l.8 10h7.4l.8-10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
  trashSm: sf('<path d="M4 6h12M8 6V4.5h4V6M5.5 6l.8 10h7.4l.8-10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
  compose: sf('<path d="M15 10.5V15a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 15V7a1.5 1.5 0 0 1 1.5-1.5H10" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/><path d="M8.5 11.5l.5-2.2 6.2-6.2 1.7 1.7-6.2 6.2z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
  aa: sf('<text x="1" y="15" font-family="-apple-system, system-ui" font-size="12.5" font-weight="500" fill="currentColor">Aa</text>'),
  checklist: sf('<circle cx="5" cy="6" r="2" fill="none" stroke="currentColor" stroke-width="1.3"/><circle cx="5" cy="14" r="2" fill="none" stroke="currentColor" stroke-width="1.3"/><path d="M9.5 6H17M9.5 14H17" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'),
  table: sf('<rect x="3" y="4" width="14" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M3 8.5h14M3 12.3h14M10 4v12" stroke="currentColor" stroke-width="1.2"/>'),
  clip: sf('<path d="M13.5 9.5l-4.6 4.6a2.6 2.6 0 0 1-3.7-3.7l5.3-5.3a1.7 1.7 0 0 1 2.4 2.4l-5 5a.8.8 0 0 1-1.1-1.1l4.4-4.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>'),
  lock: sf('<rect x="5" y="9" width="10" height="8" rx="1.8" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M7 9V7a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" stroke-width="1.4"/>'),
  share: sf('<path d="M10 12.5V3M6.8 6.2L10 3l3.2 3.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 9H5.5v8h9V9H13" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
  search: sf('<circle cx="8.5" cy="8.5" r="5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12.3 12.3L16.5 16.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
  folder: sf('<path d="M2.5 6A1.5 1.5 0 0 1 4 4.5h3.6l1.6 1.6H16A1.5 1.5 0 0 1 17.5 7.6V15A1.5 1.5 0 0 1 16 16.5H4A1.5 1.5 0 0 1 2.5 15z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
  plus: sf('<path d="M10 4v12M4 10h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>'),
  cal: sf('<rect x="3.5" y="4.5" width="13" height="12" rx="2" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M3.5 8.5h13" stroke="#fff" stroke-width="1.6"/>'),
  tray: sf('<path d="M3.5 11l2-6h9l2 6v4.5h-13z M3.5 11h4l1 2h3l1-2h4" fill="none" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>'),
  flag: sf('<path d="M5 17V3.5M5 4h9.5l-2 3.2 2 3.3H5" fill="currentColor" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>'),
  bullets: sf('<circle cx="5" cy="5.5" r="1.4" fill="#fff"/><circle cx="5" cy="10" r="1.4" fill="#fff"/><circle cx="5" cy="14.5" r="1.4" fill="#fff"/><path d="M8.5 5.5h7M8.5 10h7M8.5 14.5h7" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/>'),
};

/* ───────────── escritorio ───────────── */
// x/y relativos al área del escritorio (0..1). w = ancho de la miniatura en px (el alto sale solo: nada se estira).
const DESK = [
  { id: 'f-c3po', kind: 'folder', label: () => 'C3PO', open: 'finder:c3po', x: .045, y: .04 },
  { id: 'f-coopid', kind: 'folder', label: () => 'coopid', open: 'finder:coopid', x: .04, y: .22 },
  { id: 'f-planify', kind: 'folder', label: () => 'planify', open: 'finder:planify', x: .05, y: .4 },
  { id: 'f-kate', kind: 'folder', label: () => 'kate_moss', open: 'finder:kate', x: .043, y: .58 },
  { id: 'f-dead', kind: 'folder', label: () => 'dead_silence', open: 'finder:dead', x: .885, y: .05 },
  { id: 'f-skills', kind: 'folder', label: () => t().folders.skills, open: 'finder:skills', x: .89, y: .27 },
  { id: 'w-photos', kind: 'widget', widget: 'photos', open: 'photos', x: .752, y: .04 },
  { id: 'w-cal', kind: 'widget', widget: 'calendar', open: 'reminders', x: .752, y: .265 },
  { id: 'w-music', kind: 'widget', widget: 'music', open: 'music', x: .752, y: .49 },
  { id: 'd-about', kind: 'app', icon: 'doc', label: () => (lang === 'es' ? 'sobre_mi.txt' : 'about_me.txt'), open: 'notes', x: .785, y: .77 },
  { id: 'd-pitch', kind: 'app', icon: 'keynote', label: () => 'pitch_c3po.pdf', open: 'keynote', x: .2, y: .78 },
  { id: 'm-good', kind: 'file', mood: 'good-things', w: 80, x: .17, y: .05 },
  { id: 'm-start', kind: 'file', mood: 'start', w: 90, x: .175, y: .4 },
  { id: 'm-product', kind: 'file', mood: 'you-are-the-product', w: 76, x: .04, y: .77 },
  { id: 'm-cranes', kind: 'file', mood: 'cranes', w: 88, x: .885, y: .49 },
  { id: 's-star', kind: 'sticker', mood: 'star', w: 80, x: .245, y: .56, rot: -9 },
  { id: 's-lasso', kind: 'sticker', mood: 'lasso-tool', w: 92, x: .66, y: .68, rot: 7 },
  { id: 's-spray', kind: 'sticker', mood: 'spray-can', w: 48, x: .13, y: .6, rot: 14 },
  { id: 's-remember', kind: 'sticker', mood: 'remember', w: 84, x: .885, y: .74, rot: -4 },
];
const moodBy = (key) => MOOD.find((m) => m.src.endsWith('/' + key + '.webp'));

const desktop = $('#desktop');
const iconsEl = $('.icons');
const icons = new Map(); // id -> estado
let iconZ = 1;

function deskRect() { return desktop.getBoundingClientRect(); }

function buildIcons() {
  iconsEl.innerHTML = '';
  icons.clear();
  const W = desktop.clientWidth, H = desktop.clientHeight;
  for (const def of DESK) {
    const el = h('div', { class: `ic ic-${def.kind}`, tabindex: '0', 'data-id': def.id, role: 'button' });
    let label = '';
    if (def.kind === 'folder') {
      el.innerHTML = '<div class="ic-img"><svg viewBox="0 0 120 90"><use href="#folder"/></svg></div>';
      label = def.label();
    } else if (def.kind === 'widget') {
      el.innerHTML = `<div class="ic-img">${widgetHtml(def.widget)}</div>`;
      label = def.widget;
    } else if (def.kind === 'app') {
      el.innerHTML = `<div class="ic-img ic-appimg">${ICONS[def.icon]}</div>`;
      label = def.label();
    } else {
      const m = moodBy(def.mood);
      el.innerHTML = `<div class="ic-img"><img src="${m.src}" alt="" draggable="false" style="width:${def.w}px"></div>`;
      label = m.name;
      def.open = 'preview:' + m.src + '|' + m.name;
      if (def.rot) el.style.setProperty('--rot', def.rot + 'deg');
    }
    if (def.kind !== 'sticker' && def.kind !== 'widget') el.insertAdjacentHTML('beforeend', `<span class="ic-label">${esc(label)}</span>`);
    el.setAttribute('aria-label', label);
    iconsEl.appendChild(el);
    const st = { def, el, x: def.x * W, y: def.y * H, vx: 0, vy: 0, rx: def.x, ry: def.y };
    icons.set(def.id, st);
    place(st);
    bindIcon(st);
  }
}
/* widgets (como los del escritorio de macOS) */
const WIDGET_PICS = ['nyc-halftone', 'jungle-tower', 'cheers', 'glass-city', 'red-tower', 'painted-circles', 'blur-life'].map(moodBy);
function widgetHtml(type) {
  const es = lang === 'es';
  if (type === 'photos') {
    return `<div class="wd wd-photos">${WIDGET_PICS.map((m, i) => `<img src="${m.src}" alt="" draggable="false" class="${i ? '' : 'on'}">`).join('')}
      <span class="wd-cap"><b>Moodboard</b><small>${es ? 'Recuerdos' : 'Memories'}</small></span></div>`;
  }
  if (type === 'calendar') {
    const d = new Date();
    const long = d.toLocaleDateString(es ? 'es-AR' : 'en-US', { weekday: 'long' });
    return `<div class="wd wd-cal"><p class="wd-day">${esc(long)}</p><p class="wd-num">${d.getDate()}</p>
      <div class="wd-ev" style="--c:#ff9500"><b>Meetup C3PO</b><small>${es ? 'sem. 30/11 · P. Innovación' : 'wk Nov 30 · P. Innovación'}</small></div>
      <div class="wd-ev" style="--c:#e8467c"><b>Expo C3PO</b><small>${es ? 'marzo 2027' : 'March 2027'}</small></div></div>`;
  }
  const cas = moodBy('cassette');
  return `<div class="wd wd-music"><div class="wd-art"><img src="${cas.src}" alt="" draggable="false"></div>
    <div class="wd-song"><b>${esc(MUSIC.title)}</b><small>${esc(MUSIC.artist)}</small></div>
    <div class="wd-bar"><i></i></div><button class="wd-play" aria-label="play"><svg viewBox="0 0 20 20"><path d="M6 4l10 6-10 6z" fill="currentColor"/></svg></button></div>`;
}
let photoIdx = 0;
setInterval(() => {
  const imgs = $$('.wd-photos img');
  if (!imgs.length || document.hidden) return;
  imgs[photoIdx % imgs.length].classList.remove('on');
  photoIdx++;
  imgs[photoIdx % imgs.length].classList.add('on');
}, 3800);
document.addEventListener('click', (e) => {
  const b = e.target.closest('.wd-play');
  if (!b) return;
  toggleMusic();
});

function relabel() {
  for (const st of icons.values()) if (st.def.kind === 'widget') $('.ic-img', st.el).innerHTML = widgetHtml(st.def.widget);
  for (const st of icons.values()) {
    const lab = $('.ic-label', st.el);
    if (lab && st.def.label) { lab.textContent = st.def.label(); st.el.setAttribute('aria-label', lab.textContent); }
  }
}
function place(st) { if (!small()) st.el.style.transform = `translate(${st.x}px, ${st.y}px) rotate(var(--rot, 0deg))`; }
function clampIcon(st) {
  const W = desktop.clientWidth, H = desktop.clientHeight;
  st.x = Math.min(Math.max(st.x, 0), W - st.el.offsetWidth);
  st.y = Math.min(Math.max(st.y, 0), H - st.el.offsetHeight);
}
let wasSmall = small();
addEventListener('resize', () => {
  const W = desktop.clientWidth, H = desktop.clientHeight;
  for (const st of icons.values()) {
    if (small()) { st.el.style.transform = ''; continue; }
    st.x = st.rx * W; st.y = st.ry * H; clampIcon(st); place(st);
  }
  if (wasSmall !== small()) { wasSmall = small(); renderHero(); clock(); }
});

function select(ids) { for (const st of icons.values()) st.el.classList.toggle('sel', ids.includes(st.def.id)); }

function bindIcon(st) {
  const el = st.el;
  let sx, sy, ox, oy, moved = false, hist = [];
  el.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || small() || e.target.closest('.wd-play')) return;
    e.stopPropagation();
    closeMenus();
    select([st.def.id]);
    el.setPointerCapture(e.pointerId);
    sx = e.clientX; sy = e.clientY; ox = st.x; oy = st.y; moved = false;
    hist = [{ x: e.clientX, y: e.clientY, t: performance.now() }];
    st.flying = false;
    el.classList.add('grab');
    el.style.zIndex = ++iconZ; // al frente
  });
  el.addEventListener('pointermove', (e) => {
    if (!el.hasPointerCapture(e.pointerId)) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if (!moved && Math.hypot(dx, dy) > 4) moved = true;
    if (!moved) return;
    st.x = ox + dx; st.y = oy + dy;
    clampIcon(st); place(st);
    hist.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (hist.length > 5) hist.shift();
  });
  const up = (e) => {
    if (!el.hasPointerCapture(e.pointerId)) return;
    el.releasePointerCapture(e.pointerId);
    el.classList.remove('grab');
    if (moved) {
      const a = hist[0], b = hist[hist.length - 1], dt = Math.max(b.t - a.t, 1);
      const fresh = performance.now() - b.t < 80;
      st.vx = fresh ? (b.x - a.x) / dt * 16 : 0; st.vy = fresh ? (b.y - a.y) / dt * 16 : 0;
      if (Math.hypot(st.vx, st.vy) > 2 && !reduce) fling(st); else saveRel(st);
    }
    el.dataset.moved = moved ? '1' : '';
  };
  el.addEventListener('pointerup', up);
  el.addEventListener('pointercancel', up);
  let lastClick = 0;
  el.addEventListener('click', () => {
    if (el.dataset.moved) return;
    const now = performance.now();
    if (touch || small() || now - lastClick < 450) { lastClick = 0; openFrom(st.def.open, el); return; }
    lastClick = now;
  });
  el.addEventListener('keydown', (e) => { if (e.key === 'Enter') openFrom(st.def.open, el); });
}
function saveRel(st) { st.rx = st.x / desktop.clientWidth; st.ry = st.y / desktop.clientHeight; }

// física simple: inercia + rebote contra los bordes
const flying = new Set();
function fling(st) { st.flying = true; const was = flying.size; flying.add(st); if (!was) requestAnimationFrame(stepFly); }
function stepFly() {
  const W = desktop.clientWidth, H = desktop.clientHeight;
  for (const st of [...flying]) {
    if (!st.flying) { flying.delete(st); continue; }
    st.x += st.vx; st.y += st.vy;
    st.vx *= 0.93; st.vy *= 0.93;
    const w = st.el.offsetWidth, hh = st.el.offsetHeight;
    if (st.x < 0) { st.x = 0; st.vx *= -0.55; }
    if (st.x > W - w) { st.x = W - w; st.vx *= -0.55; }
    if (st.y < 0) { st.y = 0; st.vy *= -0.55; }
    if (st.y > H - hh) { st.y = H - hh; st.vy *= -0.55; }
    st.el.style.setProperty('--rot', ((st.def.rot || 0) + st.vx * 1.2) + 'deg');
    place(st);
    if (Math.hypot(st.vx, st.vy) < 0.3) {
      st.flying = false; flying.delete(st); saveRel(st);
      gsap.to(st.el, { '--rot': (st.def.rot || 0) + 'deg', duration: .5, ease: 'elastic.out(1,.4)', onUpdate: () => place(st) });
    }
  }
  if (flying.size) requestAnimationFrame(stepFly);
}
function messUp() {
  if (small()) return;
  for (const st of icons.values()) {
    const a = Math.random() * Math.PI * 2, s = 16 + Math.random() * 24;
    st.vx = Math.cos(a) * s; st.vy = Math.sin(a) * s;
    fling(st);
  }
}
function tidy() {
  if (small()) return;
  const W = desktop.clientWidth, H = desktop.clientHeight;
  let col = 0, row = 0;
  const cw = 116, rh = 120;
  for (const st of icons.values()) {
    const tx = W - 20 - cw * (col + 1) + (cw - st.el.offsetWidth) / 2, ty = 14 + rh * row;
    st.flying = false;
    gsap.to(st, { x: tx, y: Math.min(ty, H - st.el.offsetHeight), duration: .7, ease: 'power3.inOut', delay: (col * 6 + row) * .025, onUpdate: () => place(st), onComplete: () => saveRel(st) });
    row++;
    if (14 + rh * (row + 1) > H) { row = 0; col++; }
  }
}

// selección con lazo (como en el Finder)
(function lasso() {
  const box = $('.lasso');
  let sx, sy, on = false;
  desktop.addEventListener('pointerdown', (e) => {
    if (e.button !== 0 || small() || e.target.closest('.ic, .hero-folder')) return;
    closeMenus();
    select([]);
    const r = deskRect();
    sx = e.clientX - r.left; sy = e.clientY - r.top; on = true;
    desktop.setPointerCapture(e.pointerId);
    Object.assign(box.style, { left: sx + 'px', top: sy + 'px', width: 0, height: 0 });
    box.hidden = false;
  });
  desktop.addEventListener('pointermove', (e) => {
    if (!on) return;
    const r = deskRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const L = Math.min(x, sx), T = Math.min(y, sy), W = Math.abs(x - sx), H = Math.abs(y - sy);
    Object.assign(box.style, { left: L + 'px', top: T + 'px', width: W + 'px', height: H + 'px' });
    const hit = [];
    for (const st of icons.values()) {
      if (st.x < L + W && st.x + st.el.offsetWidth > L && st.y < T + H && st.y + st.el.offsetHeight > T) hit.push(st.def.id);
    }
    select(hit);
  });
  const end = () => { on = false; box.hidden = true; };
  desktop.addEventListener('pointerup', end);
  desktop.addEventListener('pointercancel', end);
})();

/* ───────────── título ───────────── */
function renderHero() {
  $('.hero-script').textContent = t().script;
  $('.hero-big').textContent = t().big;
  $('.hint').textContent = touch || small() ? t().hintTouch : t().hint;
}
const heroFolder = $('.hero-folder');
// la carpeta grande del medio abre "Sobre mí" (Notas, con la foto)
const openAboutMe = () => {
  const w = openFrom('notes', heroFolder);
  if (w?.state && w.state.sel !== 'me') { w.state.sel = 'me'; w.render(); }
};
heroFolder.addEventListener('dblclick', openAboutMe);
heroFolder.addEventListener('click', () => { if (touch || small()) openAboutMe(); });

/* ───────────── dock ───────────── */
const DOCK = ['finder', 'notes', 'keynote', 'reminders', 'photos', 'music', 'terminal', 'mail', '|', 'trash'];
const APP_OPEN = { finder: 'finder:projects', notes: 'notes', keynote: 'keynote', reminders: 'reminders', photos: 'photos', music: 'music', terminal: 'terminal', mail: 'mail', trash: 'trash' };
const dockInner = $('.dock-inner');
function buildDock() {
  dockInner.innerHTML = '';
  for (const k of DOCK) {
    if (k === '|') { dockInner.appendChild(h('span', { class: 'dock-sep' })); continue; }
    const b = h('button', { class: 'dock-it', 'data-app': k, 'aria-label': t().apps[k] }, `<span class="dock-ico">${ICONS[k]}</span><span class="dock-tip">${esc(t().apps[k])}</span><i class="dock-dot"></i>`);
    b.addEventListener('click', () => {
      const open = [...wins.values()].filter((w) => w.app === k);
      if (open.length) {
        const hidden = open.find((w) => w.min);
        if (hidden) restore(hidden); else focus(open[open.length - 1]);
        bounce(b, false);
      } else { bounce(b, true); openFrom(APP_OPEN[k], b); }
    });
    dockInner.appendChild(b);
  }
}
function bounce(b, big) {
  if (reduce) return;
  gsap.fromTo($('.dock-ico', b), { y: 0 }, { y: big ? -16 : -7, duration: .2, yoyo: true, repeat: big ? 3 : 1, ease: 'power2.out' });
}
function dockDots() {
  const open = new Set([...wins.values()].map((w) => w.app));
  for (const b of $$('.dock-it')) b.classList.toggle('on', open.has(b.dataset.app));
}
(function magnify() {
  if (touch) return;
  const dock = $('.dock');
  dock.addEventListener('mousemove', (e) => {
    for (const b of $$('.dock-it', dock)) {
      const r = b.getBoundingClientRect();
      const d = Math.abs(e.clientX - (r.left + r.width / 2));
      b.style.setProperty('--s', (1 + Math.max(0, 1 - d / 140) * 0.5).toFixed(3));
    }
  });
  dock.addEventListener('mouseleave', () => $$('.dock-it', dock).forEach((b) => b.style.setProperty('--s', 1)));
})();

/* ───────────── ventanas ───────────── */
const winsEl = $('.windows');
const wins = new Map(); // key -> ventana
let zTop = 10, cascade = 0;

const SIZES = {
  finder: [900, 580], notes: [760, 500], keynote: [960, 600], reminders: [680, 520], photos: [900, 600],
  music: [300, 132], terminal: [640, 420], mail: [580, 480], trash: [560, 340], about: [330, 480], preview: [600, 500],
};
const appOf = (key) => key.split(':')[0];

function openFrom(key, fromEl) {
  closeMenus();
  if (!key) return;
  const app = appOf(key);
  let existing = wins.get(key);
  if (!existing && app === 'finder') existing = [...wins.values()].find((w) => w.app === 'finder');
  if (existing) {
    if (app === 'finder' && existing.state && existing.state.view !== key.split(':')[1]) {
      existing.state.hist.push(existing.state.view);
      existing.state.view = key.split(':')[1]; existing.state.sel = 0; existing.render();
    }
    if (existing.min) restore(existing); else focus(existing);
    return existing;
  }
  return createWin(key, fromEl);
}

function createWin(key, fromEl) {
  const app = appOf(key);
  const arg = key.slice(app.length + 1).split('#')[0];
  const [w0, h0] = SIZES[app] || [600, 440];
  const R = deskRect();
  const w = Math.min(w0, R.width - 40), hh = Math.min(h0, R.height - 24);
  const off = (cascade++ % 5) * 24 - 48;
  let left = Math.max(10, (R.width - w) / 2 + off), top = Math.max(6, (R.height - hh) / 2 + off * .8);
  if (app === 'music') { left = Math.max(10, (R.width - w) / 2); top = 10; }

  const el = h('section', { class: `win win-${app}${['notes', 'reminders', 'about'].includes(app) ? ' unified' : ''}`, role: 'dialog', 'aria-label': t().apps[app] || app });
  el.style.cssText = `left:${left}px; top:${top + MENU_H}px; width:${w}px; height:${hh}px;`;
  el.innerHTML = `<header class="win-bar"><div class="lights"><button class="l-close" aria-label="close"></button><button class="l-min" aria-label="minimize"></button><button class="l-max" aria-label="zoom"></button></div><div class="win-title"></div><div class="win-tools"></div></header><div class="win-body"></div>`;
  winsEl.appendChild(el);
  const win = { key, app, arg, el, body: $('.win-body', el), title: $('.win-title', el), tools: $('.win-tools', el), min: false, state: null };
  wins.set(key, win);
  win.render = () => BUILDERS[app](win);
  win.render();
  bindWin(win);
  focus(win);
  dockDots();

  if (!reduce) {
    const fr = fromEl?.getBoundingClientRect?.();
    const er = el.getBoundingClientRect();
    const from = fr && fr.width
      ? { x: fr.left + fr.width / 2 - (er.left + er.width / 2), y: fr.top + fr.height / 2 - (er.top + er.height / 2), scale: .1, opacity: 0 }
      : { scale: .94, opacity: 0 };
    gsap.fromTo(el, from, { x: 0, y: 0, scale: 1, opacity: 1, duration: .5, ease: 'expo.out', clearProps: 'transform,opacity' });
  }
  return win;
}

function bindWin(win) {
  const { el } = win;
  el.addEventListener('pointerdown', () => focus(win), true);
  $('.l-close', el).addEventListener('click', (e) => { e.stopPropagation(); closeWin(win); });
  $('.l-min', el).addEventListener('click', (e) => { e.stopPropagation(); minimize(win); });
  $('.l-max', el).addEventListener('click', (e) => { e.stopPropagation(); el.classList.toggle('max'); });
  const bar = $('.win-bar', el);
  bar.addEventListener('dblclick', (e) => { if (!e.target.closest('button, a, input')) el.classList.toggle('max'); });
  let sx, sy, ox, oy, drag = false;
  bar.addEventListener('pointerdown', (e) => {
    if (e.target.closest('button, input, a') || small() || el.classList.contains('max')) return;
    drag = true; sx = e.clientX; sy = e.clientY; ox = el.offsetLeft; oy = el.offsetTop;
    bar.setPointerCapture(e.pointerId);
  });
  bar.addEventListener('pointermove', (e) => {
    if (!drag) return;
    el.style.left = Math.min(Math.max(ox + e.clientX - sx, -el.offsetWidth + 90), innerWidth - 90) + 'px';
    el.style.top = Math.min(Math.max(oy + e.clientY - sy, MENU_H), innerHeight - 60) + 'px';
  });
  const end = () => { drag = false; };
  bar.addEventListener('pointerup', end);
  bar.addEventListener('pointercancel', end);
}

function focus(win) {
  for (const w of wins.values()) w.el.classList.toggle('front', w === win);
  win.el.style.zIndex = ++zTop;
  $('.mb-app').textContent = t().apps[win.app] || 'Finder';
}
function topWin() { return [...wins.values()].filter((w) => !w.min).sort((a, b) => b.el.style.zIndex - a.el.style.zIndex)[0]; }
function closeWin(win) {
  if (!win || win.closing) return;
  win.closing = true;
  const done = () => { win.onClose?.(); win.el.remove(); wins.delete(win.key); dockDots(); const n = topWin(); if (n) focus(n); else $('.mb-app').textContent = 'Finder'; };
  if (reduce) return done();
  gsap.to(win.el, { scale: .94, opacity: 0, duration: .18, ease: 'power2.in', onComplete: done });
}
function minimize(win) {
  const target = $(`.dock-it[data-app="${win.app}"]`) || $('.dock-it[data-app="finder"]');
  const er = win.el.getBoundingClientRect(), tr = target.getBoundingClientRect();
  win.min = true;
  win.el.classList.remove('front');
  // la ventana de música no se oculta del todo: si no, YouTube corta la canción
  const hide = () => { if (win.app === 'music') { win.el.classList.add('parked'); } else win.el.hidden = true; const n = topWin(); if (n) focus(n); };
  if (reduce) return hide();
  gsap.to(win.el, { x: tr.left + tr.width / 2 - (er.left + er.width / 2), y: tr.top - (er.top + er.height / 2), scale: .06, opacity: .2, duration: .45, ease: 'power3.in', onComplete: hide });
}
function restore(win) {
  win.min = false; win.el.hidden = false; win.el.classList.remove('parked');
  focus(win);
  if (reduce) return gsap.set(win.el, { clearProps: 'transform,opacity' });
  gsap.to(win.el, { x: 0, y: 0, scale: 1, opacity: 1, duration: .45, ease: 'expo.out', clearProps: 'transform,opacity' });
}

/* ───────────── contenido de cada app ───────────── */
const projBy = (id) => PROJECTS.find((p) => p.id === id);
const TAG_COLORS = { c3po: '#8c9cc7', coopid: '#b0302a', planify: '#d98a2b', dead: '#8a8a63', kate: '#2b2b2b' };

function sidebar(active) {
  const T = t();
  const fav = [['projects', T.folders.projects], ['skills', T.folders.skills]];
  return `<aside class="side">
    <p class="side-h">${T.sidebar.fav}</p>
    ${fav.map(([k, l]) => `<button class="side-it ${active === k ? 'on' : ''}" data-go="${k}"><svg viewBox="0 0 120 90"><use href="#folder"/></svg>${esc(l)}</button>`).join('')}
    <p class="side-h">${T.sidebar.tags}</p>
    ${PROJECTS.map((p) => `<button class="side-it ${active === p.id ? 'on' : ''}" data-go="${p.id}"><i class="tag" style="background:${TAG_COLORS[p.id]}"></i>${esc(p[lang].title)}</button>`).join('')}
  </aside>`;
}

const BUILDERS = {
  finder(win) {
    win.state ||= { view: win.arg || 'projects', hist: [], sel: 0 };
    const T = t(), v = win.state.view;
    const proj = projBy(v);
    win.title.textContent = proj ? proj[lang].title : (T.folders[v] || v);
    win.tools.innerHTML = `<button class="tb-back" ${win.state.hist.length ? '' : 'disabled'} aria-label="${T.back}">‹</button>`;
    $('.tb-back', win.tools).onclick = () => { if (!win.state.hist.length) return; win.state.view = win.state.hist.pop(); win.state.sel = 0; win.render(); };
    let main = '';
    if (v === 'projects') {
      main = `<div class="grid-folders">${PROJECTS.map((p) => `<button class="gf" data-p="${p.id}">
        <span class="gf-ico"><svg viewBox="0 0 120 90"><use href="#folder"/></svg></span>
        <span class="gf-name">${esc(p[lang].title)}</span><span class="gf-meta">${p.files.length} ${T.items} · ${p.year}</span></button>`).join('')}</div>`;
    } else if (v === 'skills') {
      const row = (ico, name, use, kind, open) => `<tr ${open ? `data-open="${open}" class="link"` : ''}><td><span class="row-ico">${ICONS[ico]}</span>${esc(name)}</td><td>${esc(use)}</td><td class="muted">${kind}</td></tr>`;
      main = `<div class="list-wrap"><table class="list"><thead><tr>${T.skillsCols.map((c) => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody><tr class="grp"><td colspan="3">${T.hard}</td></tr>
        ${SKILLS.hard.map((s) => row(s.icon, s.name, s[lang], T.app)).join('')}
        <tr class="grp"><td colspan="3">${T.soft}</td></tr>
        ${SKILLS.soft.map((s) => row(s.icon, s[lang][0], s[lang][1], T.human, s.open)).join('')}</tbody></table></div>`;
    } else if (proj) {
      main = gallery(win, proj);
    }
    win.body.innerHTML = `<div class="finder">${sidebar(v)}<div class="f-main">${main}</div></div>`;
    for (const b of $$('.side-it', win.body)) b.addEventListener('click', () => {
      if (b.dataset.go === 'moodboard') return openFrom('photos', b);
      if (b.dataset.go === win.state.view) return;
      win.state.hist.push(win.state.view); win.state.view = b.dataset.go; win.state.sel = 0; win.render();
    });
    for (const b of $$('.gf', win.body)) {
      const go = () => { win.state.hist.push(v); win.state.view = b.dataset.p; win.state.sel = 0; win.render(); };
      b.addEventListener('dblclick', go);
      b.addEventListener('click', () => { if (touch || small()) go(); else $$('.gf', win.body).forEach((x) => x.classList.toggle('sel', x === b)); });
      b.addEventListener('keydown', (e) => { if (e.key === 'Enter') go(); });
    }
    for (const r of $$('tr.link', win.body)) r.addEventListener('click', () => openFrom(r.dataset.open, r));
    if (proj) bindGallery(win, proj);
  },

  notes(win) {
    const A = ABOUT[lang];
    win.state ||= { sel: 'me' };
    win.title.textContent = t().apps.notes;
    win.tools.innerHTML = '';
    const es = lang === 'es';
    const note = A.notes.find((n) => n.id === win.state.sel) || A.notes[0];
    const now = new Date();
    const stamp = now.toLocaleDateString(es ? 'es-AR' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric' }) + (es ? ', ' : ' at ') + now.toLocaleTimeString(es ? 'es-AR' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: !es });
    const body = note.body.map(([k, v], i) => {
      if (k === 'h') return `<h1>${esc(v)}</h1>`;
      if (k === 'p') return `<p>${esc(v)}</p>` + (note.id === 'me' && i === 1 ? '<img class="note-img" src="assets/img/mia.webp" alt="Mia">' : '');
      return `<ul>${v.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
    }).join('');
    const groups = [[es ? 'Hoy' : 'Today', A.notes.slice(0, 1)], [es ? 'Últimos 7 días' : 'Previous 7 Days', A.notes.slice(1)]];
    win.body.innerHTML = `<div class="mac-notes">
      <aside class="mn-side"><div class="mn-tb">${SF.sidebar}</div>
        <p class="mn-h">iCloud</p>
        <button class="mn-folder on">${SF.folder}<span>${es ? 'Notas' : 'Notes'}</span><b>${A.notes.length}</b></button>
        <button class="mn-folder">${SF.folder}<span>${es ? 'Sobre mí' : 'About me'}</span><b>1</b></button>
        <button class="mn-folder">${SF.trashSm}<span>${es ? 'Eliminado recientemente' : 'Recently Deleted'}</span><b>0</b></button>
      </aside>
      <section class="mn-list"><div class="mn-tb">${SF.list}${SF.grid}<span class="sp"></span>${SF.trash}${SF.compose}</div>
        ${groups.map(([g, ns]) => `<p class="mn-g">${g}</p>${ns.map((n) => `<button class="mn-it ${n.id === note.id ? 'on' : ''}" data-n="${n.id}"><b>${esc(n.title)}</b><span><em>${esc(n.date)}</em>${esc(n.preview)}</span></button>`).join('')}`).join('')}
      </section>
      <article class="mn-page"><div class="mn-tb">${SF.aa}${SF.checklist}${SF.table}${SF.clip}<span class="sp"></span>${SF.lock}${SF.share}${SF.search}</div>
        <div class="mn-doc"><p class="mn-date">${esc(stamp)}</p>${body}</div></article>
    </div>`;
    for (const b of $$('.mn-it', win.body)) b.onclick = () => { win.state.sel = b.dataset.n; win.render(); };
  },

  keynote(win) {
    const S = SPEAKING[lang];
    win.state ||= { sel: 0 };
    win.title.textContent = S.file;
    win.tools.innerHTML = `<a class="tb-btn" href="https://c3po-pitch.vercel.app" target="_blank" rel="noopener">▶ ${lang === 'es' ? 'Reproducir' : 'Play'}</a>`;
    win.body.innerHTML = `<div class="keynote">
      <aside class="kn-nav">${SPEAKING.slides.map((s, i) => `<button class="kn-th ${i === win.state.sel ? 'on' : ''}" data-i="${i}"><span>${i + 1}</span><img src="${s}" alt=""></button>`).join('')}</aside>
      <div class="kn-main">
        <div class="kn-stage"><img src="${SPEAKING.slides[win.state.sel]}" alt="${lang === 'es' ? 'Diapositiva del pitch de C3PO' : 'C3PO pitch slide'}"></div>
        <div class="kn-notes"><p class="kn-h">${S.notesTitle}</p><p>${esc(S.notes)}</p>
          <ul class="kn-list">${S.list.map(([a, b]) => `<li><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join('')}</ul>
          <a class="kn-live" href="https://c3po-pitch.vercel.app" target="_blank" rel="noopener">${S.live}</a></div>
      </div></div>`;
    for (const b of $$('.kn-th', win.body)) b.onclick = () => { win.state.sel = +b.dataset.i; win.render(); };
  },

  reminders(win) {
    const L = ORGANIZE[lang];
    const es = lang === 'es';
    win.state ||= { sel: 0, show: false, done: L.map((l) => l.items.map((it) => it[2])) };
    win.title.textContent = t().apps.reminders;
    win.tools.innerHTML = '';
    const all = L.flatMap((l, li) => l.items.map((it, ii) => ({ it, li, ii, color: l.color, done: win.state.done[li][ii] })));
    const pending = all.filter((x) => !x.done);
    const smart = [
      ['today', es ? 'Hoy' : 'Today', '#007aff', SF.cal, 0],
      ['sched', es ? 'Programados' : 'Scheduled', '#ff3b30', SF.cal, pending.filter((x) => x.it[3]).length],
      ['all', es ? 'Todos' : 'All', '#3a3a3c', SF.tray, pending.length],
      ['flag', es ? 'Marcados' : 'Flagged', '#ff9500', SF.flag, pending.filter((x) => x.it[4]).length],
    ];
    let title, color, rows;
    const sel = win.state.sel;
    if (typeof sel === 'number') {
      title = L[sel].list; color = L[sel].color;
      rows = all.filter((x) => x.li === sel);
    } else {
      const sm = smart.find((m) => m[0] === sel);
      title = sm[1]; color = sm[2];
      rows = sel === 'sched' ? all.filter((x) => x.it[3]) : sel === 'flag' ? all.filter((x) => x.it[4]) : sel === 'today' ? [] : all;
    }
    const doneRows = rows.filter((x) => x.done), openRows = rows.filter((x) => !x.done);
    const shown = win.state.show ? rows : openRows;
    win.body.innerHTML = `<div class="mac-rem">
      <aside class="mr-side"><div class="mr-search">${SF.search}<span>${es ? 'Buscar' : 'Search'}</span></div>
        <div class="mr-tiles">${smart.map(([k, n, c, ico, count]) => `<button class="mr-tile ${sel === k ? 'on' : ''}" data-s="${k}"><i style="background:${c}">${ico}</i><b>${count}</b><span>${n}</span></button>`).join('')}</div>
        <p class="mr-h">${es ? 'Mis listas' : 'My Lists'}</p>
        ${L.map((l, i) => `<button class="mr-list ${sel === i ? 'on' : ''}" data-i="${i}"><i style="background:${l.color}">${SF.bullets}</i><span>${esc(l.list)}</span><b>${win.state.done[i].filter((d) => !d).length}</b></button>`).join('')}
      </aside>
      <section class="mr-main"><div class="mr-tb"><span class="sp"></span>${SF.share}${SF.plus}</div>
        <header class="mr-head" style="color:${color}"><h2>${esc(title)}</h2><b>${openRows.length}</b></header>
        <p class="mr-done">${doneRows.length} ${es ? 'completados' : 'Completed'} · <button class="mr-show">${win.state.show ? (es ? 'Ocultar' : 'Hide') : (es ? 'Mostrar' : 'Show')}</button></p>
        ${shown.length ? `<ul>${shown.map((x) => `<li class="${x.done ? 'done' : ''}"><button class="mr-check" data-li="${x.li}" data-ii="${x.ii}" style="--c:${x.color}" aria-pressed="${x.done}" aria-label="${esc(x.it[0])}"></button>
          <div><p>${esc(x.it[0])}</p>${x.it[1] ? `<small>${esc(x.it[1])}</small>` : ''}${x.it[3] ? `<small class="when">${esc(x.it[3])}</small>` : ''}</div>${x.it[4] ? `<span class="mr-flag">${SF.flag}</span>` : ''}</li>`).join('')}</ul>`
          : `<p class="mr-empty">${es ? 'No hay recordatorios' : 'No Reminders'}</p>`}
      </section>
    </div>`;
    for (const b of $$('.mr-list', win.body)) b.onclick = () => { win.state.sel = +b.dataset.i; win.render(); };
    for (const b of $$('.mr-tile', win.body)) b.onclick = () => { win.state.sel = b.dataset.s; win.render(); };
    $('.mr-show', win.body).onclick = () => { win.state.show = !win.state.show; win.render(); };
    for (const b of $$('.mr-check', win.body)) b.onclick = () => {
      const li = +b.dataset.li, ii = +b.dataset.ii;
      const now = !win.state.done[li][ii];
      win.state.done[li][ii] = now;
      b.setAttribute('aria-pressed', now);
      b.closest('li').classList.toggle('done', now);
      if (!reduce) gsap.fromTo(b, { scale: .6 }, { scale: 1, duration: .5, ease: 'elastic.out(1.2,.4)' });
      setTimeout(() => win.render(), now ? 900 : 0);
    };
  },

  photos(win) {
    win.title.textContent = `${t().folders.moodboard} — ${MOOD.length}`;
    win.tools.innerHTML = '';
    win.body.innerHTML = `<div class="photos">${MOOD.map((m, i) => `<button class="ph" data-i="${i}" title="${esc(m.name)}"><img src="${m.src}" alt="${esc(m.name)}" loading="lazy"></button>`).join('')}</div>`;
    for (const b of $$('.ph', win.body)) {
      const m = MOOD[+b.dataset.i];
      b.onclick = () => openFrom('preview:' + m.src + '|' + m.name, b);
    }
  },

  preview(win) {
    const [src, name] = win.arg.split('|');
    win.title.textContent = name || '';
    win.tools.innerHTML = '';
    win.body.innerHTML = `<div class="preview"><img src="${src}" alt="${esc(name || '')}"></div>`;
    const img = $('img', win.body);
    const fit = () => {
      if (win.fitted || small()) return;
      win.fitted = true;
      const R = deskRect();
      const maxW = Math.min(R.width * .6, 880), maxH = R.height * .8 - 38;
      const k = Math.min(maxW / img.naturalWidth, maxH / img.naturalHeight, 1.2);
      const w = Math.round(img.naturalWidth * k), hh = Math.round(img.naturalHeight * k) + 38;
      Object.assign(win.el.style, {
        width: w + 'px', height: hh + 'px',
        left: Math.max(10, (R.width - w) / 2 + (Math.random() - .5) * 140) + 'px',
        top: Math.max(MENU_H + 6, MENU_H + (R.height - hh) / 2 + (Math.random() - .5) * 40) + 'px',
      });
    };
    if (img.complete && img.naturalWidth) fit(); else img.onload = fit;
  },

  terminal(win) {
    const T = TERMINAL[lang];
    win.title.textContent = 'mia — zsh';
    win.tools.innerHTML = '';
    win.state ||= { lines: [], boot: true };
    win.body.innerHTML = `<div class="term"><div class="term-out"></div><label class="term-in"><span class="ps">mia@macbook ~ %</span><input spellcheck="false" autocomplete="off" autocapitalize="off" aria-label="terminal"></label></div>`;
    const out = $('.term-out', win.body), input = $('input', win.body), box = $('.term', win.body);
    const line = (txt, cls) => out.insertAdjacentHTML('beforeend', `<p class="${cls || ''}">${esc(txt)}</p>`);
    const print = (txt, cls = '') => { win.state.lines.push([txt, cls]); line(txt, cls); box.scrollTop = box.scrollHeight; };
    for (const [txt, cls] of win.state.lines) line(txt, cls);
    const run = (raw) => {
      const cmd = raw.trim();
      print('mia@macbook ~ % ' + cmd, 'cmd');
      if (!cmd) return;
      const [c, ...rest] = cmd.toLowerCase().split(/\s+/);
      const arg = rest.join(' ');
      const map = { help: T.help, whoami: T.whoami, skills: T.skills, proyectos: T.proyectos, projects: T.proyectos, seguridad: T.seguridad, security: T.seguridad, ciberseguridad: T.seguridad, cybersecurity: T.seguridad, contacto: T.contacto, contact: T.contacto, ls: T.ls };
      if (map[c]) return print(map[c]);
      if (c === 'clear') { win.state.lines = []; out.innerHTML = ''; return; }
      if (c === 'cat') return print(T.cat);
      if (c === 'date') return print(new Date().toString());
      if (c === 'sudo') return print(T.sudo, 'pink');
      if (c === 'echo') return print(cmd.slice(5));
      if (c === 'exit') return closeWin(win);
      if (c === 'open') {
        const target = { proyectos: 'finder:projects', projects: 'finder:projects', habilidades: 'finder:skills', skills: 'finder:skills', moodboard: 'photos', fotos: 'photos', photos: 'photos', mail: 'mail', notas: 'notes', notes: 'notes', keynote: 'keynote', pitch: 'keynote', recordatorios: 'reminders', reminders: 'reminders' }[arg];
        if (target) { print(`${T.opening} ${arg}…`, 'muted'); setTimeout(() => openFrom(target, win.el), 250); return; }
      }
      print(`zsh: ${T.notFound} ${c}`, 'muted');
    };
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { run(input.value); input.value = ''; } });
    box.addEventListener('click', () => input.focus());
    if (win.state.boot) {
      win.state.boot = false;
      print(`Last login: ${new Date().toDateString()} on ttys001`, 'muted');
      print(t().terminalHello, 'muted');
      let i = 0; const word = 'whoami';
      const type = () => { if (!input.isConnected) return; input.value = word.slice(0, ++i); if (i < word.length) setTimeout(type, 90); else setTimeout(() => { run(word); input.value = ''; }, 300); };
      setTimeout(type, 700);
    }
    box.scrollTop = box.scrollHeight;
    if (!touch) setTimeout(() => input.focus(), 60);
  },

  mail(win) {
    const T = t();
    win.title.textContent = T.mailSubjectVal;
    win.tools.innerHTML = `<button class="tb-btn send">${T.send} ↑</button>`;
    win.body.innerHTML = `<div class="mail">
      <label><span>${T.mailTo}:</span><b class="chip">Mia González &lt;${esc(CONTACT.mail)}&gt;</b></label>
      <label><span>${T.mailSubject}:</span><input value="${esc(T.mailSubjectVal)}"></label>
      <textarea placeholder="${esc(T.mailBody)}"></textarea>
      <div class="mail-sig">${CONTACT.rows.map(([k, v, u]) => `<a href="${u}" target="_blank" rel="noopener"><b>${k}</b> ${esc(v)}</a>`).join('')}</div>
    </div>`;
    $('.send', win.tools).onclick = () => {
      const s = $('input', win.body).value, b = $('textarea', win.body).value;
      location.href = `mailto:${CONTACT.mail}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
    };
  },

  trash(win) {
    const T = t();
    win.title.textContent = T.apps.trash;
    win.state ||= { empty: false };
    win.tools.innerHTML = win.state.empty ? '' : `<button class="tb-btn">${T.trashEmpty}</button>`;
    win.body.innerHTML = win.state.empty
      ? `<p class="trash-done">${T.trashDone}</p>`
      : `<div class="trash">${TRASH[lang].map((f) => `<div class="tr-it">${ICONS.doc}<span>${esc(f)}</span></div>`).join('')}</div>`;
    const btn = $('.tb-btn', win.tools);
    if (btn) btn.onclick = () => {
      const items = $$('.tr-it', win.body);
      const done = () => { win.state.empty = true; win.render(); };
      if (reduce) return done();
      gsap.to(items, { y: -40, rotate: () => gsap.utils.random(-30, 30), opacity: 0, scale: .4, stagger: .08, duration: .45, ease: 'power2.in', onComplete: done });
    };
  },

  music(win) {
    const es = lang === 'es';
    win.title.textContent = `${MUSIC.title} — ${MUSIC.artist}`;
    win.tools.innerHTML = '';
    if (!win.body.querySelector('.yt-wrap')) {
      win.body.innerHTML = `<div class="mini">
        <div class="mini-cover"><div class="mini-crop"><div id="yt-host"></div></div></div>
        <div class="mini-info"><b>${esc(MUSIC.title)}</b><small>${esc(MUSIC.artist)}</small>
          <div class="music-row"><button class="music-btn" aria-label="play">${PLAY_SVG}</button><div class="music-bar"><i></i></div></div></div>
      </div>`;
      $('.music-btn', win.body).onclick = toggleMusic;
      win.onClose = () => { try { yt?.destroy(); } catch {} yt = null; setPlaying(false); };
      mountYT();
    }
  },

  about(win) {
    const A = ABOUT[lang];
    win.title.textContent = '';
    win.tools.innerHTML = '';
    win.body.innerHTML = `<div class="about">
      <img class="about-ph" src="assets/img/mia-face.webp" alt="Mia González">
      <h2>Mia González</h2><p class="about-role">${esc(A.aboutRole)}</p>
      <dl>${A.aboutSpecs.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>
      <button class="about-more">${lang === 'es' ? 'Más información…' : 'More Info…'}</button>
      <p class="about-foot">${lang === 'es' ? 'Hecho en Buenos Aires · 2026' : 'Made in Buenos Aires · 2026'}</p>
    </div>`;
    $('.about-more', win.body).onclick = (e) => openFrom('notes', e.currentTarget);
  },
};

/* galería de proyecto (vista Galería del Finder) */
function fileThumb(f) {
  if (f.src) return `<img src="${f.src}" alt="" loading="lazy">`;
  return ICONS.doc;
}
function stageHtml(f) {
  const T = t();
  if (f.src) return `<img src="${f.src}" alt="${esc(f.name)}">`;
  return `<div class="stage-soon">${ICONS.doc}<p>${T.soon}</p><small>${T.soonNote}</small></div>`;
}
function gallery(win, p) {
  const T = t(), L = p[lang];
  const sel = Math.min(win.state.sel || 0, p.files.length - 1);
  const f = p.files[sel];
  return `<div class="gal">
    <div class="gal-view">
      <div class="gal-stage ${f.src ? 'zoom' : ''}" ${f.src ? `title="${T.open}"` : ''}>${stageHtml(f)}</div>
      <div class="gal-strip">${p.files.map((x, i) => `<button class="gs ${i === sel ? 'on' : ''}" data-i="${i}" title="${esc(x.name)}">${fileThumb(x)}</button>`).join('')}</div>
    </div>
    <aside class="gal-info">
      <p class="gi-file">${esc(f.name)}</p>
      <h2 ${p.titleFont ? `style="font-family:${p.titleFont}; font-weight:400"` : ''}>${esc(L.title)}</h2>
      <p class="gi-tag">${esc(L.tag)}</p>
      <p class="gi-lede">${esc(L.lede)}</p>
      <dl class="gi-meta"><dt>${T.info.year}</dt><dd>${p.year}</dd><dt>${T.info.team}</dt><dd>${esc(L.team)}</dd><dt>${T.info.role}</dt><dd>${esc(L.role)}</dd><dt>${T.info.tools}</dt><dd>${esc(p.tools)}</dd></dl>
      ${L.sections.map(([a, b]) => `<h3>${esc(a)}</h3><p>${esc(b)}</p>`).join('')}
      ${L.cta ? `<a class="gi-cta" href="${L.cta[1]}" target="_blank" rel="noopener">${esc(L.cta[0])}</a>` : ''}
    </aside>
  </div>`;
}
function bindGallery(win, p) {
  for (const b of $$('.gs', win.body)) b.onclick = () => { win.state.sel = +b.dataset.i; win.render(); };
  const st = $('.gal-stage.zoom', win.body);
  if (st) st.onclick = () => { const f = p.files[win.state.sel || 0]; openFrom('preview:' + f.src + '|' + f.name, st); };
  if (p.id === 'planify' && !reduce) {
    for (const b of $$('.pf-b', win.body)) b.addEventListener('pointerenter', () => gsap.fromTo(b, { scale: 1 }, { scale: 1.16, duration: .4, ease: 'elastic.out(1.4,.35)', yoyo: true, repeat: 1 }));
  }
}
function planifyMock() {
  const plans = lang === 'es' ? ['café', 'picnic', 'recital', 'parque', 'cine', 'helado'] : ['coffee', 'picnic', 'gig', 'park', 'movies', 'ice cream'];
  const cols = ['#ff9ad5', '#c6f432', '#b9a3ff', '#ffd36e', '#7fe0ff', '#ff8a8a'];
  return `<div class="pf-phone"><div class="pf-screen">
    <p class="pf-logo">planify</p><p class="pf-q">${lang === 'es' ? '¿qué hacemos hoy?' : 'what are we doing today?'}</p>
    <div class="pf-bubbles">${plans.map((x, i) => `<span class="pf-b" style="--c:${cols[i]}; --d:${(i * .37).toFixed(2)}s">${esc(x)}</span>`).join('')}</div>
    <div class="pf-tab"><i></i><i></i><i></i></div>
  </div></div>`;
}

/* ───────────── barra de menú ───────────── */
const dropdown = $('.dropdown');
function menuItems(k) {
  const M = t().menu, T = t();
  const it = (label, fn) => ({ label, fn });
  if (k === 'apple') return [it(M.about, () => openFrom('about', $('.mb-logo'))), it(null), it(M.restart, restart), it(M.off, shutdown)];
  if (k === 'file') return [it(M.newFinder, () => createWin('finder:projects#' + Date.now())), it(M.close, () => closeWin(topWin()))];
  if (k === 'go') return [
    it(T.folders.projects, () => openFrom('finder:projects')), it(T.folders.skills, () => openFrom('finder:skills')), it(T.apps.photos, () => openFrom('photos')), it(null),
    ...PROJECTS.map((p) => it(p[lang].title, () => openFrom('finder:' + p.id))), it(null),
    it(T.apps.notes, () => openFrom('notes')), it(T.apps.keynote, () => openFrom('keynote')), it(T.apps.reminders, () => openFrom('reminders')), it(T.apps.mail, () => openFrom('mail')),
  ];
  if (k === 'window') return [it(M.tidy, tidy), it(M.mess, messUp), it(null), it(M.closeAll, () => [...wins.values()].forEach(closeWin))];
  if (k === 'help') return [it(M.help, () => toast(T.helpText))];
  return [];
}
function openMenu(btn) {
  const k = btn.dataset.menu;
  if (!dropdown.hidden && dropdown.dataset.k === k) return closeMenus();
  dropdown.innerHTML = '';
  for (const m of menuItems(k)) {
    if (!m.label) { dropdown.appendChild(h('hr')); continue; }
    const b = h('button', {}, esc(m.label));
    b.onclick = () => { closeMenus(); m.fn(); };
    dropdown.appendChild(b);
  }
  dropdown.dataset.k = k;
  dropdown.style.left = Math.min(btn.offsetLeft, innerWidth - 250) + 'px';
  dropdown.hidden = false;
  $$('.menubar [data-menu]').forEach((x) => x.classList.toggle('open', x === btn));
}
function closeMenus() { dropdown.hidden = true; $$('.menubar [data-menu]').forEach((x) => x.classList.remove('open')); }
for (const b of $$('.menubar [data-menu]')) b.addEventListener('click', (e) => { e.stopPropagation(); openMenu(b); });
document.addEventListener('pointerdown', (e) => { if (!e.target.closest('.dropdown, [data-menu]')) closeMenus(); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenus();
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'w' && topWin()) { e.preventDefault(); closeWin(topWin()); }
});

function renderMenubar() {
  const M = t().menus;
  for (const b of $$('.mb-item')) b.textContent = M[b.dataset.menu];
  for (const b of $$('.lang button')) b.classList.toggle('on', b.dataset.l === lang);
  document.documentElement.lang = lang;
  clock();
}
function clock() {
  const d = new Date(), T = t();
  const hm = d.toLocaleTimeString(lang === 'es' ? 'es-AR' : 'en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
  $('.mb-clock').textContent = small() ? hm : `${T.days[d.getDay()]} ${d.getDate()} ${T.months[d.getMonth()]}  ${hm}`;
}
setInterval(clock, 15000);
for (const b of $$('.lang button')) b.addEventListener('click', () => setLang(b.dataset.l));

function setLang(l) {
  if (l === lang) return;
  lang = l; store.set('mg-lang', l);
  renderMenubar(); renderHero(); relabel(); buildDock(); dockDots();
  for (const w of wins.values()) {
    if (w.app === 'reminders') w.state = null;
    w.render();
    w.el.setAttribute('aria-label', t().apps[w.app] || w.app);
  }
  const tw = topWin(); if (tw) $('.mb-app').textContent = t().apps[tw.app];
}

/* ───────────── avisos, apagar, reiniciar ───────────── */
let toastT;
function toast(msg) {
  const el = $('.toast');
  el.innerHTML = `<span class="toast-ico">${ICONS.finder}</span><p>${esc(msg)}</p>`;
  el.hidden = false;
  gsap.fromTo(el, { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: .4, ease: 'power3.out' });
  clearTimeout(toastT);
  toastT = setTimeout(() => gsap.to(el, { x: 40, opacity: 0, duration: .3, onComplete: () => { el.hidden = true; } }), 6500);
}
function shutdown() {
  const off = $('.off');
  $('.off-big', off).textContent = t().shutdown;
  $('.off-sub', off).textContent = t().shutdownSub;
  off.hidden = false;
  gsap.fromTo(off, { opacity: 0 }, { opacity: 1, duration: .6 });
  off.onclick = () => { off.hidden = true; restart(); };
}
function restart() {
  try { yt?.destroy(); } catch {}
  yt = null; setPlaying(false);
  [...wins.values()].forEach((w) => { w.el.remove(); wins.delete(w.key); });
  dockDots();
  $('.mb-app').textContent = 'Finder';
  buildIcons();
  $('.boot').hidden = false;
  boot();
}

/* ───────────── arranque ───────────── */
function intro() {
  if (reduce) return;
  gsap.from('.hero-big', { yPercent: 35, opacity: 0, duration: 1.1, ease: 'expo.out' });
  gsap.from('.hero-script', { opacity: 0, x: -24, duration: 1.3, delay: .3, ease: 'power3.out' });
  gsap.from('.hero-folder', { y: 50, scale: .9, opacity: 0, duration: 1, delay: .1, ease: 'expo.out' });
  gsap.from('.hint', { opacity: 0, y: 10, duration: .6, delay: .7, stagger: .08 });
  gsap.from([...icons.values()].map((s) => s.el.firstElementChild), { scale: 0, opacity: 0, duration: .6, ease: 'back.out(1.8)', stagger: { each: .045, from: 'random' }, delay: .35 });
  gsap.from('.ic-label', { opacity: 0, duration: .4, delay: .9 });
  gsap.from('.dock', { yPercent: 140, duration: .8, ease: 'expo.out', delay: .25 });
}
function boot() {
  const b = $('.boot');
  // ?skipboot salta la pantalla de carga (sirve para probar)
  if (reduce || location.search.includes('skipboot')) { b.hidden = true; if (!reduce) intro(); return; }
  const num = $('.boot-num'), line = $('.boot-line'), msg = $('.boot-msg'), crt = $('.crt');
  gsap.set(b, { opacity: 1 });
  gsap.set(crt, { scaleX: 1, scaleY: 1, opacity: 1, filter: 'brightness(1)' });
  const o = { v: 0 };
  const tl = gsap.timeline();
  tl.to(o, {
    v: 100, duration: 1.9, ease: 'steps(28)',
    onUpdate: () => { num.textContent = String(Math.round(o.v)).padStart(3, '0'); line.style.transform = `scaleX(${o.v / 100})`; },
  });
  tl.add(() => scramble(msg, 'MIA GONZALEZ PORTFOLIO'), '-=.6');
  tl.add(() => b.classList.add('ready'), '+=.3');
  // la música se prepara mientras carga, detrás de la pantalla negra
  if (!wins.has('music')) createWin('music');
  const enter = (withMusic) => {
    if (!b.classList.contains('ready') || b.dataset.going) return;
    b.dataset.going = '1';
    if (withMusic) playMusic(); else closeWin(wins.get('music'));
    const out = gsap.timeline({ onComplete: () => { b.hidden = true; b.classList.remove('ready'); delete b.dataset.going; } });
    out.to(crt, { scaleY: .006, filter: 'brightness(3)', duration: .22, ease: 'power3.in' });
    out.to(crt, { scaleX: 0, duration: .18, ease: 'power3.in' });
    out.add(intro, '-=.1');
    out.to(b, { opacity: 0, duration: .25 });
  };
  $('.boot-enter').onclick = (e) => { e.stopPropagation(); enter(true); };
  $('.boot-quiet').onclick = (e) => { e.stopPropagation(); enter(false); };
  b.onclick = () => enter(true);
  document.addEventListener('keydown', function k(e) { if (e.key === 'Enter' && b.classList.contains('ready')) { enter(true); document.removeEventListener('keydown', k); } });
}

/* ───────────── música de fondo (YouTube, tema completo) ───────────── */
const PLAY_SVG = '<svg viewBox="0 0 20 20"><path d="M6 4l10 6-10 6z" fill="currentColor"/></svg>';
const PAUSE_SVG = '<svg viewBox="0 0 20 20"><path d="M5 4h3.5v12H5zM11.5 4H15v12h-3.5z" fill="currentColor"/></svg>';
let yt = null, ytReady = false, wantPlay = false;
(function loadYT() {
  window.onYouTubeIframeAPIReady = () => { ytReady = true; mountYT(); };
  const s = document.createElement('script');
  s.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(s);
})();
function mountYT() {
  const host = document.getElementById('yt-host');
  if (!host || !ytReady || yt) return;
  yt = new YT.Player(host, {
    videoId: MUSIC.youtube, width: '100%', height: '100%',
    playerVars: { playsinline: 1, rel: 0, loop: 1, playlist: MUSIC.youtube, controls: 0, disablekb: 1, iv_load_policy: 3, fs: 0 },
    events: {
      onReady: () => { yt.setVolume(70); if (wantPlay) yt.playVideo(); },
      onStateChange: (e) => setPlaying(e.data === 1),
    },
  });
}
function playMusic() {
  wantPlay = true;
  if (!wins.has('music')) createWin('music');
  if (yt?.playVideo) yt.playVideo();
}
function toggleMusic() {
  if (!yt?.getPlayerState) return playMusic();
  if (yt.getPlayerState() === 1) { wantPlay = false; yt.pauseVideo(); } else playMusic();
}
function setPlaying(on) {
  for (const w of $$('.wd-music')) w.classList.toggle('playing', on);
  for (const b of $$('.wd-play, .music-btn')) b.innerHTML = on ? PAUSE_SVG : PLAY_SVG;
}
setInterval(() => {
  if (!yt?.getCurrentTime) return;
  const d = yt.getDuration?.() || 0, p = d ? (yt.getCurrentTime() / d) * 100 : 0;
  for (const i of $$('.wd-bar i, .music-bar i')) i.style.width = p.toFixed(1) + '%';
}, 500);
function scramble(el, text) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let f = 0;
  const total = 18;
  const tick = () => {
    f++;
    el.textContent = text.split('').map((c, i) => (c === ' ' ? ' ' : i < (f / total) * text.length ? c : chars[(Math.random() * chars.length) | 0])).join('');
    if (f < total) setTimeout(tick, 40);
  };
  tick();
}

/* ───────────── inicio ───────────── */
renderMenubar();
renderHero();
buildDock();
buildIcons();
boot();
// links directos: #c3po, #coopid, #notes, #keynote, #reminders, #terminal, #skills… (varios con coma)
const deepKeys = location.hash.slice(1).split(',').filter(Boolean).map((k) => (projBy(k) || k === 'skills' ? 'finder:' + k : APP_OPEN[k] || (k === 'about' ? 'about' : null))).filter(Boolean);
deepKeys.forEach((k, i) => setTimeout(() => openFrom(k), 1800 + i * 150));
