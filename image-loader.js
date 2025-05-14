document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const loadImage = (img) => {
        const container = img.closest('.image-container');
        if (container) {
            const overlay = container.querySelector('.loading-overlay');
            const spinner = container.querySelector('.loading-spinner');
            
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                if (overlay) overlay.style.display = 'none';
                if (spinner) spinner.style.display = 'none';
            });
            
            if (img.complete) {
                img.classList.add('loaded');
                if (overlay) overlay.style.display = 'none';
                if (spinner) spinner.style.display = 'none';
            }
        }
    };

    images.forEach(loadImage);
});