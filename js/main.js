'use strict';

/* ====================================================
   Navbar: efecto scroll
   ==================================================== */
const navbar = document.getElementById('mainNav');
if (navbar) {
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ====================================================
   Animaciones fade-up con IntersectionObserver
   ==================================================== */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

/* ====================================================
   Nav link activo según página actual
   ==================================================== */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link[data-page]').forEach(link => {
    if (link.dataset.page === page) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
})();

/* ====================================================
   Formulario de contacto
   ==================================================== */
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      form.querySelector(':invalid')?.focus();
      return;
    }

    const btn     = document.getElementById('submitBtn');
    const success = document.getElementById('formSuccess');
    const error   = document.getElementById('formError');

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Enviando…';
    success?.classList.add('d-none');
    error?.classList.add('d-none');

    /* Reemplazar el setTimeout con un fetch a Formspree/Resend en producción */
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="bi bi-send me-2"></i>Enviar mensaje';
      success?.classList.remove('d-none');
      success?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      form.reset();
      form.classList.remove('was-validated');
    }, 1800);
  });
}

/* ====================================================
   Carrusel de equipo (index.html)
   ==================================================== */
(function () {
  const track    = document.getElementById('teamCarTrack');
  if (!track) return;

  const prev     = document.getElementById('teamCarPrev');
  const next     = document.getElementById('teamCarNext');
  const progress = document.getElementById('teamCarProgress');
  const items    = track.querySelectorAll('.team-car-item');

  function itemW() {
    const item = items[0];
    const gap  = parseFloat(getComputedStyle(track).gap) || 20;
    return item.offsetWidth + gap;
  }

  function visibleCount() {
    return Math.max(1, Math.round(track.clientWidth / itemW()));
  }

  function currentIndex() {
    return Math.round(track.scrollLeft / itemW());
  }

  function scrollToIndex(i) {
    i = Math.max(0, Math.min(i, items.length - 1));
    track.scrollTo({ left: i * itemW(), behavior: 'smooth' });
  }

  function update() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const pct = maxScroll > 0 ? (track.scrollLeft / maxScroll) * 100 : 0;
    if (progress) progress.style.width = pct + '%';
    if (prev) prev.disabled = track.scrollLeft <= 2;
    if (next) next.disabled = track.scrollLeft >= maxScroll - 2;
  }

  if (prev) prev.addEventListener('click', () => scrollToIndex(currentIndex() - visibleCount()));
  if (next) next.addEventListener('click', () => scrollToIndex(currentIndex() + visibleCount()));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();


/* ====================================================
   Mobile navbar — fallback toggle + auto-cierre
   ==================================================== */
(function () {
  var menu    = document.getElementById('navMain');
  var toggler = document.querySelector('[data-bs-target="#navMain"]');
  if (!menu || !toggler) return;

  // Si Bootstrap JS no cargó (CDN caído), manejamos el toggle manualmente
  if (typeof bootstrap === 'undefined') {
    toggler.addEventListener('click', function () {
      var isOpen = menu.classList.contains('show');
      menu.classList.toggle('show', !isOpen);
      toggler.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // Cerrar el menú al hacer clic en cualquier enlace (UX mobile)
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      if (!menu.classList.contains('show')) return;
      if (window.bootstrap && bootstrap.Collapse) {
        var col = bootstrap.Collapse.getInstance(menu);
        if (col) { col.hide(); return; }
      }
      menu.classList.remove('show');
      toggler.setAttribute('aria-expanded', 'false');
    });
  });
})();

/* ====================================================
   Smooth scroll para anclas internas
   ==================================================== */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight + 12 : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
