/* Shared navigation behaviour — included on every page */
(function () {
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
