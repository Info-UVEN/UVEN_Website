document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.slider-track');
    const sectors = document.querySelectorAll('.sector');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    const sectorCount = sectors.length;
    
    // Set initial positions
    updateSlider();
    
    // Next button click handler
    nextBtn.addEventListener('click', function() {
        if (currentIndex < sectorCount - getVisibleSectors()) {
            currentIndex++;
            updateSlider();
        }
    });
    
    // Previous button click handler
    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });
    
    // Update slider position and button states
    function updateSlider() {
        const visibleSectors = getVisibleSectors();
        const translateValue = -currentIndex * (100 / visibleSectors);
        track.style.transform = `translateX(${translateValue}%)`;
        
        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= sectorCount - visibleSectors;
    }
    
    // Get number of visible sectors based on screen width
    function getVisibleSectors() {
        if (window.innerWidth >= 992) {
            return 4;
        } else if (window.innerWidth >= 768) {
            return 2;
        } else {
            return 1;
        }
    }
    
    // Update on window resize
    window.addEventListener('resize', function() {
        updateSlider();
    });
});