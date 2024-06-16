document.addEventListener('DOMContentLoaded', function() {
    
    document.addEventListener('selectstart', function(e) {
        if (!e.target.classList.contains('email')) {
            e.preventDefault();
        }
    });
    

    document.addEventListener('contextmenu', function(e) {
        if (!e.target.classList.contains('email')) {
            e.preventDefault();
        }
    });
    
    
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });
});
