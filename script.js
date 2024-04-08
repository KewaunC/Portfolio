document.addEventListener('DOMContentLoaded', function() {
    // Disable text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    // Disable right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Toggle menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
