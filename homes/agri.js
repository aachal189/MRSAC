document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.createElement('div');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    nav.insertBefore(hamburger, navLinks);

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    // Close menu when a link is clicked
    navLinks.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            navLinks.classList.remove('show');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate sections on scroll
    const animatedSections = document.querySelectorAll('.animated-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // Dynamic counter animation
    function animateCounter(elementId, targetValue, duration) {
        const element = document.getElementById(elementId);
        const startValue = parseInt(element.textContent);
        const increment = (targetValue - startValue) / (duration / 16);
        let currentValue = startValue;

        const updateCounter = () => {
            currentValue += increment;
            element.textContent = Math.round(currentValue);

            if ((increment > 0 && currentValue < targetValue) || (increment < 0 && currentValue > targetValue)) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = targetValue;
            }
        };

        updateCounter();
    }

    // Trigger counter animations when the stats section is visible
    const statsSection = document.getElementById('stats');
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateCounter('image-counter', 1000000, 2000);
            animateCounter('farm-counter', 50000, 2000);
            animateCounter('efficiency-counter', 30, 2000);
            statsObserver.unobserve(statsSection);
        }
    }, observerOptions);

    statsObserver.observe(statsSection);

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
});
