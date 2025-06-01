// Media page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Add any media-specific functionality here
    
    // Example: Media item hover effects
    const mediaItems = document.querySelectorAll('.media-item');
    
    mediaItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
        });
    });
    
    // Media page specific analytics or tracking can go here
    console.log('Media page loaded successfully');
});