// Array of images for each section
const images1 = ['image1.jpg', 'image1_alt1.jpg', 'image1_alt2.jpg'];
const images2 = ['image2.jpg', 'image2_alt1.jpg', 'image2_alt2.jpg'];
const images3 = ['image3.jpg', 'image3_alt1.jpg', 'image3_alt2.jpg'];
const images4 = ['image4.jpg', 'image4_alt1.jpg', 'image4_alt2.jpg'];

// Track the current index for each section's image rotation
let index1 = 0, index2 = 0, index3 = 0, index4 = 0;

// Function to update images every 5 seconds
function changeImages() {
    // Get each section's image element by ID
    const img1 = document.getElementById('image1');
    const img2 = document.getElementById('image2');
    const img3 = document.getElementById('image3');
    const img4 = document.getElementById('image4');

    // Update each image's `src` attribute to the next image in the array
    img1.src = images1[index1];
    img2.src = images2[index2];
    img3.src = images3[index3];
    img4.src = images4[index4];

    // Update the index for the next rotation (loop back to 0 when reaching the end)
    index1 = (index1 + 1) % images1.length;
    index2 = (index2 + 1) % images2.length;
    index3 = (index3 + 1) % images3.length;
    index4 = (index4 + 1) % images4.length;
}

// Call the changeImages function every 5 seconds
setInterval(changeImages, 5000);

// Toggle menu function for mobile devices
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
}
