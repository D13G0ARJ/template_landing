export function initTimeline() {
    const nodes = document.querySelectorAll('.js-timeline-node');
    const titleElement = document.querySelector('.js-timeline-title');
    const descElement = document.querySelector('.js-timeline-desc');
    const progressLine = document.querySelector('.js-timeline-progress');

    if (!nodes.length || !titleElement || !descElement) return;

    // Animación sutil al reemplazar el texto en el DOM
    const updateTextWithAnimation = (element, newText) => {
        // Remover la clase para reiniciar la animación CSS
        element.classList.remove('fade-text');
        // trigger reflow para forzar reseteo del navegador
        void element.offsetWidth;
        element.textContent = newText;
        element.classList.add('fade-text');
    };

    // Actualizar la línea de barra de progreso fucsia visualmente
    const updateProgressLine = (activeIndex) => {
        if (!progressLine) return;
        const totalNodes = nodes.length - 1;
        const percentage = (activeIndex / totalNodes) * 100;
        progressLine.style.setProperty('--timeline-progress', `${percentage}%`);
    };

    nodes.forEach((node, index) => {
        node.addEventListener('click', () => {
            // O(N): Remover la clase modificadora activa de todos los nodos
            nodes.forEach(n => n.classList.remove('timeline__node--active'));

            // Aplicar la clase BEM activa solo al nodo clickeado
            node.classList.add('timeline__node--active');

            // Actualizar la estética de progreso detrás de los nodos
            updateProgressLine(index);

            // Obtener el contenido almacenado en los Custom Data Attributes
            const title = node.getAttribute('data-title');
            const desc = node.getAttribute('data-desc');

            // Inyectar
            if (title) updateTextWithAnimation(titleElement, title);
            if (desc) updateTextWithAnimation(descElement, desc);
        });
    });

    // Estado inicial de la línea basada en el elemento con --active default
    const activeIndex = Array.from(nodes).findIndex(n => n.classList.contains('timeline__node--active'));
    if (activeIndex !== -1) {
        updateProgressLine(activeIndex);
    }
}
