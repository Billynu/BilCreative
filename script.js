window.onload = function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(function(element) {
        element.classList.add('show');
    });
};
