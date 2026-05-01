// ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
  });
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileNav.classList.remove('open');
    });
  });
}

// スクロールフェードイン
const fadeEls = document.querySelectorAll('.fade-up');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeEls.forEach(el => observer.observe(el));

// 現在ページのナビをアクティブに
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a, .mobile-nav a').forEach(link => {
  if (link.getAttribute('href') === current) {
    link.style.color = 'var(--primary)';
    link.style.fontWeight = '700';
  }
});
