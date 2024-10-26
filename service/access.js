// Button interaction
document.getElementById('benefit-details').addEventListener('click', function() {
    alert("More Benefits:\n\n1. Enhanced decision-making accuracy.\n2. Real-time data updates.\n3. Greater efficiency in managing resources.");
});

// Scroll reveal for sections
window.addEventListener('scroll', revealSections);

function revealSections() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Adjust this value for when the section appears

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Call revealSections once on page load to handle sections already in view
revealSections();
