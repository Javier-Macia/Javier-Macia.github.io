/**
 * Functions for the scroll top button
 */
var scroll_top = document.getElementById('scrolltop-btn');

// Listener for the scroll event
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        scroll_top.classList.add('active');
    }else if (window.scrollY < 100) {
        scroll_top.classList.remove('active');        
    }
}
);

// Listener for the click event
scroll_top.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

scroll_top.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        window.scrollTo(0, 0);
    }
});
