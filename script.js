document.addEventListener('DOMContentLoaded', () => {
    // JavaScript can be used for more complex animations or interactions if needed.
    // For example, adding hover effects, modal popups, or other features.
    const buttons = document.querySelectorAll('a');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.getElementById('menu-list');

    hamburger.addEventListener('click', function () {
        if (menuList.style.display === 'block') {
            menuList.style.display = 'none';
        } else {
            menuList.style.display = 'block';
        }
    });
});
