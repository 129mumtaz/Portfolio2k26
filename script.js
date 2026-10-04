// /**
//  * Tsabit Mumtaz — Portfolio
//  * Vanilla JavaScript for interactions
//  */

// (function () {
//   'use strict';

//   // ----------------------------------------
//   // Scroll Reveal
//   // ----------------------------------------
//   const revealElements = document.querySelectorAll('.reveal');

//   const revealObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//           revealObserver.unobserve(entry.target);
//         }
//       });
//     },
//     {
//       threshold: 0.1,
//       rootMargin: '0px 0px -40px 0px',
//     }
//   );

//   revealElements.forEach((el) => revealObserver.observe(el));

//   // ----------------------------------------
//   // Header hide/show on scroll
//   // ----------------------------------------
//   const header = document.getElementById('site-header');
//   let lastScrollY = 0;
//   let ticking = false;

//   function updateHeader() {
//     const currentScrollY = window.scrollY;

//     if (currentScrollY > 100) {
//       if (currentScrollY > lastScrollY) {
//         // Scrolling down — hide
//         header.style.transform = 'translateY(-100%)';
//       } else {
//         // Scrolling up — show
//         header.style.transform = 'translateY(0)';
//       }
//     } else {
//       header.style.transform = 'translateY(0)';
//     }

//     lastScrollY = currentScrollY;
//     ticking = false;
//   }

//   window.addEventListener(
//     'scroll',
//     () => {
//       if (!ticking) {
//         requestAnimationFrame(updateHeader);
//         ticking = true;
//       }
//     },
//     { passive: true }
//   );

//   // ----------------------------------------
//   // Active nav indicator
//   // ----------------------------------------
//   const sections = document.querySelectorAll('section[id]');
//   const navLinks = document.querySelectorAll('.nav-link[data-nav]');

//   const sectionObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const id = entry.target.id;
//           navLinks.forEach((link) => {
//             link.classList.toggle('active', link.dataset.nav === id);
//           });
//         }
//       });
//     },
//     {
//       threshold: 0.2,
//       rootMargin: '-80px 0px -40% 0px',
//     }
//   );

//   sections.forEach((section) => sectionObserver.observe(section));

//   // ----------------------------------------
//   // Mobile menu
//   // ----------------------------------------
//   const menuToggle = document.getElementById('menu-toggle');
//   const mobileMenu = document.getElementById('mobile-menu');
//   const mobileLinks = document.querySelectorAll('.mobile-nav-link');
//   const bar1 = document.getElementById('bar-1');
//   const bar2 = document.getElementById('bar-2');
//   let menuOpen = false;

//   function toggleMenu() {
//     menuOpen = !menuOpen;

//     if (menuOpen) {
//       mobileMenu.classList.add('open');
//       mobileMenu.setAttribute('aria-hidden', 'false');
//       menuToggle.setAttribute('aria-expanded', 'true');
//       menuToggle.setAttribute('aria-label', 'Close menu');
//       document.body.style.overflow = 'hidden';

//       // Animate bars to X
//       bar1.style.transform = 'translateY(3.25px) rotate(45deg)';
//       bar2.style.transform = 'translateY(-3.25px) rotate(-45deg)';
//     } else {
//       mobileMenu.classList.remove('open');
//       mobileMenu.setAttribute('aria-hidden', 'true');
//       menuToggle.setAttribute('aria-expanded', 'false');
//       menuToggle.setAttribute('aria-label', 'Open menu');
//       document.body.style.overflow = '';

//       // Reset bars
//       bar1.style.transform = '';
//       bar2.style.transform = '';
//     }
//   }

//   menuToggle.addEventListener('click', toggleMenu);

//   mobileLinks.forEach((link) => {
//     link.addEventListener('click', () => {
//       if (menuOpen) toggleMenu();
//     });
//   });

//   // Close menu on escape
//   document.addEventListener('keydown', (e) => {
//     if (e.key === 'Escape' && menuOpen) {
//       toggleMenu();
//       menuToggle.focus();
//     }
//   });

//   // ----------------------------------------
//   // Smooth scroll offset for sticky nav
//   // ----------------------------------------
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener('click', function (e) {
//       const targetId = this.getAttribute('href');
//       if (targetId === '#') return;

//       const target = document.querySelector(targetId);
//       if (!target) return;

//       e.preventDefault();

//       const headerHeight = header.offsetHeight;
//       const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

//       window.scrollTo({
//         top: targetPosition,
//         behavior: 'smooth',
//       });
//     });
//   });
// })();
