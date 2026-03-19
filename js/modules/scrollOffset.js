export function initScrollOffset() {
    // Seleccionar todos los enlaces de ancla que apuntan a una sección (ej. #contacto)
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');

            // Ignorar si el href es solo '#'
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();

                // Obtener la altura del header (o usar 80px por defecto)
                const header = document.querySelector('.js-header');
                const headerHeight = header ? header.getBoundingClientRect().height : 80;

                // Calcular la posición destino aplicando el offset del header
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                // Hacer scroll suave hacia la posición calculada
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Opcional: Actualizar la URL sin hacer "salto" de página
                window.history.pushState(null, null, targetId);
            }
        });
    });
}
