import { initNavigation } from './modules/navigation.js';
import { initScrollOffset } from './modules/scrollOffset.js';
import { initScrollAnimations } from './modules/scrollAnimations.js';
import { initTimeline } from './modules/timeline.js';
import { initCarousel } from './modules/carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar menú móvil
    initNavigation();

    // Inicializar scroll suave con offset
    initScrollOffset();

    // Inicializar animaciones Scroll
    initScrollAnimations();

    // Inicializar Timeline interactivo
    initTimeline();

    // Inicializar Carrusel de Proyectos
    initCarousel();
});
