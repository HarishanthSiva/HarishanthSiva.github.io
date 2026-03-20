/**
 * The Elite Peak — Menu Loader
 *
 * Fetches menu.json and dynamically renders the full menu into menu.html.
 * To update prices or add/remove items, edit menu.json only — no HTML changes needed.
 */

/* ── Helpers ── */

function fmtPrice(n) {
  return 'RS.\u00a0' + n.toLocaleString('en-US');
}

function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ── Item renderers ── */

function renderGridItem(item, delay) {
  const nameInner = item.note
    ? `<div><div class="menu-item-name">${escapeHTML(item.name)}</div><div class="menu-item-sub">${escapeHTML(item.note)}</div></div>`
    : `<div class="menu-item-name">${escapeHTML(item.name)}</div>`;
  return `<div class="menu-item" style="animation-delay:${delay}s">${nameInner}<div class="menu-item-price">${fmtPrice(item.price)}</div></div>`;
}

function renderTableRow(item) {
  const cells = item.prices.map(p =>
    p === null
      ? `<td class="dash">—</td>`
      : `<td>${p.toLocaleString('en-US')}</td>`
  ).join('');
  return `<tr><td>${escapeHTML(item.name)}</td>${cells}</tr>`;
}

/* ── Section renderer ── */

function renderSection(section, isFirst, subtitleStyle) {
  let html = '';

  if (section.subtitle) {
    if (subtitleStyle === 'si') {
      html += `<div class="si-sub"><h4>${escapeHTML(section.subtitle)}</h4></div>`;
    } else {
      const noteHTML = section.subtitleNote
        ? ` <span class="menu-cat-note">${escapeHTML(section.subtitleNote)}</span>`
        : '';
      const marginStyle = isFirst ? '' : ' style="margin-top:2rem"';
      html += `<div class="menu-cat-header"${marginStyle}><h3 class="menu-cat-title" style="font-size:1.25rem">${escapeHTML(section.subtitle)}</h3>${noteHTML}</div>`;
    }
  }

  if (section.layout === 'table') {
    const headers = section.columns.map(c => `<th>${escapeHTML(c)}</th>`).join('');
    const rows    = section.items.map(renderTableRow).join('');
    html += `<div class="menu-tbl-wrap"><table class="menu-tbl"><thead><tr>${headers}</tr></thead><tbody>${rows}</tbody></table></div>`;
  } else {
    const items = section.items.map((item, i) => renderGridItem(item, (i + 1) * 0.04)).join('');
    html += `<div class="menu-grid">${items}</div>`;
  }

  return html;
}

/* ── Category renderer ── */

function renderCategory(cat) {
  const noteHTML = cat.note ? `<span class="menu-cat-note">${escapeHTML(cat.note)}</span>` : '';
  let html = `<div class="menu-cat visible" data-category="${cat.id}">`;
  html += `<div class="menu-cat-header"><h3 class="menu-cat-title">${escapeHTML(cat.label)}</h3>${noteHTML}</div>`;
  cat.sections.forEach((section, i) => {
    html += renderSection(section, i === 0, cat.subtitleStyle);
  });
  html += '</div>';
  return html;
}

/* ── Tab renderer ── */

function renderTabs(categories) {
  const allTab = `<button class="mtab active" data-cat="all">All</button>`;
  const catTabs = categories.map(cat =>
    `<button class="mtab" data-cat="${cat.id}">${escapeHTML(cat.tabLabel)}</button>`
  ).join('');
  return allTab + catTabs;
}

/* ── Tab interaction ── */

function initTabs() {
  const tabs = document.querySelectorAll('.mtab');
  const cats = document.querySelectorAll('.menu-cat');

  function activateCat(cat) {
    tabs.forEach(t => t.classList.toggle('active',
      t.dataset.cat === cat || (cat === 'all' && t.dataset.cat === 'all')
    ));
    if (cat === 'all') {
      cats.forEach(c => c.classList.add('visible'));
    } else {
      cats.forEach(c => c.classList.toggle('visible', c.dataset.category === cat));
    }
    /* Re-trigger animations */
    document.querySelectorAll('.menu-item').forEach((item, i) => {
      item.style.animation = 'none';
      void item.offsetWidth;
      item.style.animation = '';
      item.style.animationDelay = (i % 16 * 0.04) + 's';
    });
    /* Scroll tabs into view */
    const activeTab = document.querySelector(`.mtab[data-cat="${cat}"]`);
    if (activeTab) activeTab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  tabs.forEach(tab => tab.addEventListener('click', () => activateCat(tab.dataset.cat)));

  /* Handle ?cat= URL param on load */
  const urlCat = new URLSearchParams(location.search).get('cat');
  if (urlCat && urlCat !== 'all') activateCat(urlCat);
}

/* ── Boot ── */

function loadMenu() {
  const tabsEl = document.getElementById('menuTabs');
  const bodyEl = document.getElementById('menuBody');
  if (!tabsEl || !bodyEl) return;

  if (typeof MENU_DATA === 'undefined' || !MENU_DATA.categories) {
    bodyEl.innerHTML = '<p style="color:var(--gold);text-align:center;padding:2rem">Menu data not found. Ensure menu-data.js is loaded.</p>';
    return;
  }

  const { categories } = MENU_DATA;
  tabsEl.innerHTML = renderTabs(categories);
  bodyEl.innerHTML = categories.map(renderCategory).join('');
  initTabs();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadMenu);
} else {
  loadMenu();
}
