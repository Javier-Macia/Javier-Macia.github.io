// Animación para la timeline de experiencia
document.addEventListener('DOMContentLoaded', function() {
    // Función para animar elementos cuando entran en el viewport
    function animateOnScroll() {
        const elements = document.querySelectorAll('[data-aos]');
        
        elements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('aos-animate');
            }
        });
    }
    
    // Verificar si un elemento está en el viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});