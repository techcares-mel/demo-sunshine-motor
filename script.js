/* ============================================================
   Sunshine Motor Repairs & Tyres — script.js
   ============================================================ */

(function () {
  'use strict';

  // ----- Scroll progress bar -----
  const progressBar = document.getElementById('scrollProgress');
  const nav = document.getElementById('nav');
  const backToTop = document.getElementById('backToTop');

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const pct = (scrollY / (docHeight - winHeight)) * 100;
    if (progressBar) progressBar.style.width = pct + '%';

    if (scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    if (scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- Back-to-top click -----
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ----- Mobile nav overlay -----
  const navToggle = document.getElementById('navToggle');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileClose = document.getElementById('mobileClose');

  function openMobile() {
    if (mobileOverlay) mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeMobile() {
    if (mobileOverlay) mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (navToggle) navToggle.addEventListener('click', openMobile);
  if (mobileClose) mobileClose.addEventListener('click', closeMobile);
  if (mobileOverlay) {
    mobileOverlay.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMobile);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobile();
  });

  // ----- Reveal-on-scroll -----
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // ----- Stats counter -----
  const easeOutQuad = function (t) { return t * (2 - t); };

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target')) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(t);
      const value = Math.round(target * eased);
      el.textContent = value + suffix;
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = target + suffix;
    }
    requestAnimationFrame(tick);
  }

  const statObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        statObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number').forEach(function (el) {
    statObserver.observe(el);
  });

  // ----- Active nav link tracking -----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  const activeObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.45 });

  sections.forEach(function (s) { activeObserver.observe(s); });

  // ----- Contact form -----
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.style.transition = 'opacity 0.3s ease';
      form.style.opacity = '0';
      setTimeout(function () {
        form.style.display = 'none';
        const thanks = document.createElement('div');
        thanks.className = 'form-thanks';
        thanks.innerHTML = '<h3>Thank you!</h3><p>We have received your message and will be in touch shortly.</p>';
        form.parentNode.appendChild(thanks);
      }, 300);
    });
  }

})();
