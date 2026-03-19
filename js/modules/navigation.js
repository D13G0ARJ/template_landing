export function initNavigation() {
    const menuBtn = document.querySelector('.js-menu-btn');
    const header = document.querySelector('.js-header');

    if (menuBtn && header) {
        menuBtn.addEventListener('click', () => {
            header.classList.toggle('is-menu-open');

            // Accesibilidad (ARIA)
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }

    // Cerrar menú móvil al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.js-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (header.classList.contains('is-menu-open')) {
                header.classList.remove('is-menu-open');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Intersection Observer for ScrollSpy
    const sections = document.querySelectorAll('section[id]');

    if (sections.length > 0 && navLinks.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px', // Trigger precisely when section is in the middle of viewport
            threshold: 0
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');

                    // Remove active class from all links
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Add active class exactly to corresponding link
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section));
    }
}
