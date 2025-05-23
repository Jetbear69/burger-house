// Animación de las hamburguesas flotantes
document.addEventListener('DOMContentLoaded', function() {
    const burgers = document.querySelectorAll('.floating');
    burgers.forEach((burger, index) => {
        burger.style.animationDelay = `${index * 0.2}s`;
    });

    // Slider de eventos
    const slides = document.querySelectorAll('.event-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Iniciar slider automático
    slideInterval = setInterval(nextSlide, 5000);

    // Click en los dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideInterval);
            currentSlide = index;
            showSlide(currentSlide);
            slideInterval = setInterval(nextSlide, 5000);
        });
    });

    // Mostrar el primer slide
    showSlide(0);

    // Efecto de scroll suave para los enlaces del menú
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animación del formulario de reserva
    const form = document.querySelector('.reservation-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu reserva! Te contactaremos pronto.');
    });
});