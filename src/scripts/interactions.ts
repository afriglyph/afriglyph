export function initInteractions() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const basePath = new URL(import.meta.env.BASE_URL, window.location.origin).pathname.replace(/\/$/, '') || '/';

  function isHomePath(pathname: string): boolean {
    const current = pathname.replace(/\/$/, '') || '/';
    return current === basePath || current === '/';
  }

  document.querySelectorAll('.fade-up').forEach((el) => {
    if (prefersReducedMotion) {
      el.classList.add('visible');
      return;
    }
  });

  if (!prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
  }

  const onHome = isHomePath(window.location.pathname);

  document.querySelectorAll('a[href*="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || !href.includes('#')) return;

      const hashIndex = href.indexOf('#');
      const hash = href.slice(hashIndex);
      const pathPart = href.slice(0, hashIndex).replace(/\/$/, '') || '/';
      const isHomeHash = pathPart === basePath || pathPart === '/';

      if (isHomeHash && !onHome) return;

      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
        closeMobileMenu();
      }
    });
  });

  const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
  const menu = document.querySelector<HTMLElement>('.mobile-menu');

  function closeMobileMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function openMobileMenu() {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstLink = menu.querySelector<HTMLElement>('a');
    firstLink?.focus();
  }

  toggle?.addEventListener('click', () => {
    const isOpen = menu?.classList.contains('is-open');
    if (isOpen) closeMobileMenu();
    else openMobileMenu();
  });

  menu?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });

  const withBase = (path: string) => {
    const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
    if (path.startsWith('/#')) {
      return `${base.replace(/\/$/, '')}${path.slice(1)}`;
    }
    const normalized = path.startsWith('/') ? path.slice(1) : path;
    return `${base}${normalized}`;
  };

  const glyphImgs = [
    withBase('/images/glyphs/glyph-hero.jpg'),
    withBase('/images/glyphs/glyph-tray-3.jpg'),
    withBase('/images/glyphs/glyph-tray-2.jpg'),
    withBase('/images/glyphs/glyph-tray-1.jpg'),
  ];

  if (!prefersReducedMotion) {
    document.querySelectorAll<HTMLElement>('.glyph-zone').forEach((zone) => {
      const img = zone.querySelector<HTMLImageElement>('img');
      if (!img) return;
      let i = 0;
      setInterval(() => {
        i = (i + 1) % glyphImgs.length;
        img.src = glyphImgs[i];
      }, 2000);
    });
  }
}

initInteractions();
