export function initCarousel() {
    const carousels = document.querySelectorAll('.js-carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.js-carousel-track');
        const btnPrev = carousel.querySelector('.js-carousel-prev');
        const btnNext = carousel.querySelector('.js-carousel-next');

        if (!track || !btnPrev || !btnNext) return;

        let currentIndex = 0;

        // Determinar dinámicamente cuántas tarjetas saltar según el tamaño de pantalla (css)
        const getCardsPerView = () => {
            const slide = track.querySelector('.js-carousel-slide');
            if (!slide) return 1;
            const slideWidth = slide.offsetWidth;
            const trackWidth = track.offsetWidth;
            return Math.round(trackWidth / slideWidth);
        };

        const updateCarousel = () => {
            const slide = track.querySelector('.js-carousel-slide');
            const skipSlides = getCardsPerView();
            const slideWidth = slide ? slide.offsetWidth : 0;
            const gap = parseFloat(getComputedStyle(track).gap) || 0;

            track.scrollTo({
                left: currentIndex * (slideWidth + gap),
                behavior: 'smooth'
            });

            const totalSlides = track.children.length;

            btnPrev.disabled = currentIndex === 0;
            btnNext.disabled = currentIndex >= totalSlides - skipSlides;

            btnPrev.style.opacity = btnPrev.disabled ? '0.3' : '1';
            btnNext.style.opacity = btnNext.disabled ? '0.3' : '1';
        };

        btnPrev.addEventListener('click', () => {
            const skipSlides = getCardsPerView();
            currentIndex = Math.max(currentIndex - skipSlides, 0);
            updateCarousel();
        });

        btnNext.addEventListener('click', () => {
            const skipSlides = getCardsPerView();
            const totalSlides = track.children.length;
            currentIndex = Math.min(currentIndex + skipSlides, totalSlides - skipSlides);
            updateCarousel();
        });

        // Track resize para reajustar límites
        window.addEventListener('resize', () => {
            // Un breve debounce simple o rAF
            requestAnimationFrame(() => {
                const skipSlides = getCardsPerView();
                const totalSlides = track.children.length;
                if (currentIndex > totalSlides - skipSlides) {
                    currentIndex = Math.max(0, totalSlides - skipSlides);
                }
                updateCarousel();
            });
        });

        // Inicializar estado activo
        updateCarousel();
    });
}
