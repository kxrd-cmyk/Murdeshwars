document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar');
    const categoryItems = document.querySelectorAll('.category-item');
    const mainContent = document.querySelector('main');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const slider = document.querySelector('.slider');
    const applyFiltersBtn = document.querySelector('.apply-filters');

    // Toggle sidebar
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        mainContent.classList.toggle('sidebar-active');
    }

    // Close sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        mainContent.classList.remove('sidebar-active');
    }

    // Handle category selection
    function handleCategoryClick(e) {
        const clickedItem = e.currentTarget;
        
        // Remove active class from all items
        categoryItems.forEach(item => item.classList.remove('active'));
        
        // Add active class to clicked item
        clickedItem.classList.add('active');
        
        // Get the category name
        const category = clickedItem.querySelector('span').textContent;
        
        // Here you would typically filter the content based on the selected category
        console.log('Selected category:', category);
    }

    // Handle price range slider
    function handleSliderChange() {
        const value = slider.value;
        const maxValue = slider.max;
        const percentage = (value / maxValue) * 100;
        
        // Update the slider thumb position
        slider.style.background = `linear-gradient(to right, var(--primary-color) ${percentage}%, var(--section-bg) ${percentage}%)`;
        
        // Update the max price display
        const maxPriceSpan = document.querySelector('.range-values span:last-child');
        maxPriceSpan.textContent = `₹${value}`;
    }

    // Handle apply filters button
    function handleApplyFilters() {
        const selectedCategory = document.querySelector('.category-item.active span').textContent;
        const maxPrice = slider.value;
        
        // Here you would typically apply the filters to your content
        console.log('Applying filters:', {
            category: selectedCategory,
            maxPrice: maxPrice
        });
        
        // Close sidebar after applying filters
        closeSidebar();
    }

    // Event Listeners
    mobileMenuBtn.addEventListener('click', toggleSidebar);
    closeSidebarBtn.addEventListener('click', closeSidebar);
    categoryItems.forEach(item => item.addEventListener('click', handleCategoryClick));
    slider.addEventListener('input', handleSliderChange);
    applyFiltersBtn.addEventListener('click', handleApplyFilters);

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (!sidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeSidebar();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
}); 