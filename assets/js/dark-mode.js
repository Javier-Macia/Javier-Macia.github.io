
document.addEventListener('DOMContentLoaded', () => {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const root = document.documentElement;

    // Check localStorage
    const currentTheme = localStorage.getItem('theme');

    // Check system preference if no localStorage
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const updateIcons = (theme) => {
        themeToggles.forEach(toggle => {
            const icon = toggle.querySelector('i');
            if (icon) {
                if (theme === 'dark') {
                    icon.classList.remove('bx-moon');
                    icon.classList.add('bx-sun');
                } else {
                    icon.classList.remove('bx-sun');
                    icon.classList.add('bx-moon');
                }
            }
        });
    };

    if (currentTheme === 'dark' || (!currentTheme && systemPrefersDark)) {
        root.setAttribute('data-theme', 'dark');
        updateIcons('dark');
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            if (root.getAttribute('data-theme') === 'dark') {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                updateIcons('light');
            } else {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                updateIcons('dark');
            }
        });
    });
});
