
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle ? themeToggle.querySelector('i') : null;
    const root = document.documentElement;

    // Check localStorage
    const currentTheme = localStorage.getItem('theme');
    
    // Check system preference if no localStorage
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
        root.setAttribute('data-theme', 'dark');
        if (icon) {
            icon.classList.remove('bx-moon');
            icon.classList.add('bx-sun');
        }
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (root.getAttribute('data-theme') === 'dark') {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                if (icon) {
                    icon.classList.remove('bx-sun');
                    icon.classList.add('bx-moon');
                }
            } else {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                if (icon) {
                    icon.classList.remove('bx-moon');
                    icon.classList.add('bx-sun');
                }
            }
        });
    }
});
