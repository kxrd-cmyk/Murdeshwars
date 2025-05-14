document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons and menu cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuCards = document.querySelectorAll('.menu-card');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Filter menu cards
            menuCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                    // Add animation
                    card.style.animation = 'fadeIn 0.5s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Add hover effect to menu cards
    menuCards.forEach(card => {
        const imageOverlay = card.querySelector('.image-overlay');
        
        card.addEventListener('mouseenter', function() {
            // Add smooth transition for overlay
            imageOverlay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset transition
            imageOverlay.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        });
    });

    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    let count = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            count++;
            cartCount.textContent = count;
            
            // Add animation to button
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Get item details
            const card = this.closest('.menu-card');
            const itemName = card.querySelector('h3').textContent;
            const itemPrice = card.querySelector('.price').textContent;
            
            // Here you would typically add the item to a cart array or send to a backend
            console.log(`Added to cart: ${itemName} - ${itemPrice}`);
        });
    });
}); 