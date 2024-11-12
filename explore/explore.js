console.log("MRSAC History Page Loaded");

// Array of image paths (replace with actual paths)
const images = [
    "image1.jpg", // Make sure these paths match your actual image files
    "image2.jpg",
    "image3.jpg"
];

// Slideshow Functionality
let slideshowImage = document.getElementById('slideshow-image');
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    slideshowImage.style.opacity = 0; // Fade out
    setTimeout(() => {
        slideshowImage.src = images[currentImageIndex]; // Change image
        slideshowImage.style.opacity = 1; // Fade in
    }, 500); // Match with CSS transition duration
}

setInterval(changeImage, 3000); // Change every 5 seconds

// Intersection Observer for Timeline Animation
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
});

timelineItems.forEach(item => {
    observer.observe(item);
});

// Toggle mobile menu
function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}
