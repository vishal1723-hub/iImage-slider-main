const items = document.querySelectorAll('.slider .list .item');
const thumbnails = document.querySelectorAll('.slider .thumbnail .item img');
let currentIndex = 0;
let interval = 3000; // Change image every 3 seconds

// Function to show current image
function showSlide(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

// Function to set active thumbnail
function setActiveThumbnail(index) {
    thumbnails.forEach((thumbnail, i) => {
        thumbnail.classList.toggle('active', i === index);
    });
}

// Automatically move to the next slide every 3 seconds
function autoSlide() {
    currentIndex++;
    if (currentIndex >= items.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
    setActiveThumbnail(currentIndex);
}

// Event listeners for navigation arrows
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
    setActiveThumbnail(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
    setActiveThumbnail(currentIndex);
});

// Start the automatic sliding
showSlide(currentIndex);
setActiveThumbnail(currentIndex);
setInterval(autoSlide, interval);
