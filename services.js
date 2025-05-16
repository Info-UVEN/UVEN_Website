const totalImages = 28;
let currentImage = 1;
let timer;

const imageElement = document.getElementById('image');
const pageNumberElement = document.getElementById('pageNumber');

function updateImage() {
    imageElement.src = `servicesimages/${currentImage}.png`;
    pageNumberElement.textContent = `${currentImage} / ${totalImages}`;
}

function showNext() {
    currentImage = currentImage < totalImages ? currentImage + 1 : 1;
    updateImage();
    resetTimer();
}

function showPrevious() {
    currentImage = currentImage > 1 ? currentImage - 1 : totalImages;
    updateImage();
    resetTimer();
}

function startAutoNext() {
    timer = setInterval(showNext, 10000); // 10 seconds
}

function resetTimer() {
    clearInterval(timer);
    startAutoNext();
}

// Initialize
updateImage();
startAutoNext();