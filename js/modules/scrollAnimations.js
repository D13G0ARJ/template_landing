export function initScrollAnimations() {
    // Todos los elementos que tengan la clase .fade-in-up
    const fadeElements = document.querySelectorAll('.fade-in-up');

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 15% del elemento visible para desencadenar la animación
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento entra en pantalla
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Dejamos de observarlo para que la animación suceda solo una vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar cada elemento
    fadeElements.forEach(el => observer.observe(el));
}
