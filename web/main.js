/* ── Reset overflow on load ───────────────────────────────── */
document.body.style.overflow = '';


/* ── Language toggle ──────────────────────────────────────── */
let lang = 'es';

document.getElementById('langBtn').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  document.getElementById('langLabel').textContent = lang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = lang;
  applyLang();
});

function applyLang() {
  document.querySelectorAll('[data-es]').forEach(el => {
    const text = el.getAttribute('data-' + lang);
    if (!text) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else if (text.includes('<')) {
      el.innerHTML = text;
    } else if (el.tagName === 'A' || el.tagName === 'BUTTON' || el.tagName === 'SPAN' || el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'H4') {
      el.textContent = text;
    } else {
      el.innerHTML = text;
    }
  });

  // Gallery overlay titles
  document.querySelectorAll('.gallery-item').forEach(item => {
    const title = item.getAttribute('data-title-' + lang);
    if (title) item.querySelector('.overlay-title').textContent = title;
  });

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const text = btn.getAttribute('data-' + lang);
    if (text) btn.textContent = text;
  });
}

/* ── Nav scroll behavior ──────────────────────────────────── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Menu panel ───────────────────────────────────────────── */
const menuBtn   = document.getElementById('menuBtn');
const menuPanel = document.getElementById('mobileMenu');

function openMenu() {
  menuBtn.classList.add('open');
  menuBtn.setAttribute('aria-expanded', true);
  menuPanel.classList.add('visible');
  menuPanel.setAttribute('aria-hidden', false);
  nav.classList.add('menu-open');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menuBtn.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', false);
  menuPanel.classList.remove('visible');
  menuPanel.setAttribute('aria-hidden', true);
  nav.classList.remove('menu-open');
  document.body.style.overflow = '';
}

menuBtn.addEventListener('click', () => {
  menuPanel.classList.contains('visible') ? closeMenu() : openMenu();
});

menuPanel.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && menuPanel.classList.contains('visible')) closeMenu();
});

/* ── Hero slideshow ───────────────────────────────────────── */
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const dots      = Array.from(document.querySelectorAll('.hero-dot'));
const obraTitle = document.getElementById('heroObraTitle');
let slideIdx = 0;
let slideTimer;

function goToSlide(idx) {
  slides[slideIdx].classList.remove('active');
  dots[slideIdx].classList.remove('active');
  slideIdx = (idx + slides.length) % slides.length;
  slides[slideIdx].classList.add('active');
  dots[slideIdx].classList.add('active');
  if (obraTitle) obraTitle.textContent = slides[slideIdx].querySelector('img').alt;
}

function startSlideshow() {
  slideTimer = setInterval(() => goToSlide(slideIdx + 1), 5000);
}

dots.forEach((dot, i) => dot.addEventListener('click', () => {
  clearInterval(slideTimer);
  goToSlide(i);
  startSlideshow();
}));

startSlideshow();

/* ── Lightbox ─────────────────────────────────────────────── */
const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxTitle= document.getElementById('lightboxTitle');
const lightboxYear = document.getElementById('lightboxYear');
const lightboxClose= document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

const stripItems = Array.from(document.querySelectorAll('.strip-item'));
let currentIdx = 0;

function openLightbox(item) {
  currentIdx = stripItems.indexOf(item);
  showItem(currentIdx);
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', false);
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', true);
  document.body.style.overflow = '';
}

function showItem(idx) {
  const item = stripItems[idx];
  lightboxImg.src = item.querySelector('img').src;
  lightboxImg.alt = item.querySelector('img').alt;
  lightboxTitle.textContent = item.querySelector('.overlay-title').textContent;
  lightboxYear.textContent  = item.querySelector('.overlay-meta').textContent;
}

stripItems.forEach(item => item.addEventListener('click', () => openLightbox(item)));
lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => { currentIdx = (currentIdx - 1 + stripItems.length) % stripItems.length; showItem(currentIdx); });
lightboxNext.addEventListener('click', () => { currentIdx = (currentIdx + 1) % stripItems.length; showItem(currentIdx); });
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape')     closeLightbox();
  if (e.key === 'ArrowLeft')  { currentIdx = (currentIdx - 1 + stripItems.length) % stripItems.length; showItem(currentIdx); }
  if (e.key === 'ArrowRight') { currentIdx = (currentIdx + 1) % stripItems.length; showItem(currentIdx); }
});

/* ── About image parallax ─────────────────────────────────── */
const aboutImg = document.querySelector('.about-image img');
if (aboutImg) {
  window.addEventListener('scroll', () => {
    const rect = aboutImg.closest('.about-image').getBoundingClientRect();
    const vh = window.innerHeight;
    const progress = (vh - rect.top) / (vh + rect.height);
    const shift = Math.round((progress - 0.5) * 30);
    aboutImg.style.objectPosition = `center calc(50% + ${shift}px)`;
  }, { passive: true });
}

/* ── Fade-in on scroll ────────────────────────────────────── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.press-item, .expo-item, .about-grid').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});
