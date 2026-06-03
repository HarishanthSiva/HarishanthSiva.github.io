/* Shared navigation behaviour — included on every page */
(function () {
  /* First-visit intro splash */
  (function () {
    if (localStorage.getItem('ep-visited')) return;
    localStorage.setItem('ep-visited', '1');

    var intro = document.createElement('div');
    intro.id = 'ep-intro';
    intro.innerHTML =
      '<div class="ep-intro-bg"></div>' +
      '<div class="ep-intro-content">' +
        '<div class="ep-intro-logo"><img src="resources/elitepeak_icon.jpg" alt="The Elite Peak" /></div>' +
        '<div class="ep-intro-rule"></div>' +
        '<div class="ep-intro-name">The Elite Peak</div>' +
        '<div class="ep-intro-sub">Villa &amp; Family Restaurant · Hatton, Sri Lanka</div>' +
        '<div class="ep-intro-rule ep-intro-rule-bot"></div>' +
        '<div class="ep-intro-tagline">"A Symphony of Taste, Elegance, and Service."</div>' +
        '<p class="ep-intro-hint">tap anywhere to continue</p>' +
      '</div>';
    document.body.prepend(intro);
    document.body.style.overflow = 'hidden';

    function dismiss() {
      intro.classList.add('ep-intro-out');
      document.body.style.overflow = '';
      setTimeout(function () { intro.remove(); }, 700);
    }

    setTimeout(dismiss, 3400);
    intro.addEventListener('click', dismiss);
  })();

  /* Sticky scroll */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 55);
    }, { passive: true });
  }

  /* Mobile drawer */
  const hamburger  = document.getElementById('hamburgerBtn');
  const drawer     = document.getElementById('navDrawer');
  const overlay    = document.getElementById('navOverlay');
  const closeBtn   = document.getElementById('drawerClose');

  function openDrawer()  { drawer.classList.add('open'); overlay.classList.add('open'); document.body.style.overflow='hidden'; }
  function closeDrawer() { drawer.classList.remove('open'); overlay.classList.remove('open'); document.body.style.overflow=''; }

  if (hamburger) hamburger.addEventListener('click', openDrawer);
  if (closeBtn)  closeBtn.addEventListener('click', closeDrawer);
  if (overlay)   overlay.addEventListener('click', closeDrawer);
  document.querySelectorAll('.drawer-link').forEach(l => l.addEventListener('click', closeDrawer));

  /* Scroll reveal */
  const ro = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); ro.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => ro.observe(el));

  /* Pittu Festival announcement bar — auto-expires 2026-06-08 Sri Lanka time */
  (function () {
    if (new Date() >= new Date('2026-06-08T00:00:00+05:30')) return;
    if (sessionStorage.getItem('ep-pittu-bar')) return;

    var isHome = location.pathname === '/' || /index\.html$/.test(location.pathname) || /\/$/.test(location.pathname);
    var festivalHref = isHome ? '#pittu-festival' : 'index.html#pittu-festival';

    var bar = document.createElement('div');
    bar.id = 'ep-promo-bar';
    bar.className = 'ep-promo-bar';
    bar.innerHTML =
      '<a href="' + festivalHref + '" class="ep-promo-link">' +
        '<span class="ep-promo-badge">NEW</span>' +
        '<span>Jaffna Style <strong>Pittu Festival</strong> &nbsp;·&nbsp; June 5, 6 &amp; 7 &nbsp;·&nbsp; from <strong>Rs 470</strong></span>' +
      '</a>' +
      '<button class="ep-promo-close" aria-label="Dismiss">✕</button>';
    document.body.prepend(bar);

    var navEl = document.getElementById('mainNav');
    if (navEl) navEl.style.top = '44px';

    bar.querySelector('.ep-promo-close').addEventListener('click', function () {
      bar.remove();
      if (navEl) navEl.style.top = '';
      sessionStorage.setItem('ep-pittu-bar', '1');
    });
  })();

  /* Floating "Book Now" button — appears after user scrolls 320px */
  (function () {
    const fb = document.createElement('a');
    fb.href = 'tel:+94512225527';
    fb.className = 'float-book';
    fb.setAttribute('aria-label', 'Call to book a table');
    fb.innerHTML = '<span class="float-book-pulse"></span>Book Now';
    document.body.appendChild(fb);

    let shown = false;
    window.addEventListener('scroll', function () {
      if (!shown && window.scrollY > 320) {
        shown = true;
        fb.classList.add('visible');
      }
    }, { passive: true });
  })();
})();
