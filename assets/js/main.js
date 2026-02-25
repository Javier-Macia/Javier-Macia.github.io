/**
 * Aside show and hide
 */
var aside_toggle = document.getElementById('aside-toggle');

// ─── Helpers ───────────────────────────────────────────────────────────────

function isDesktop() {
    return window.innerWidth > 1024;
}

function getStorageKey() {
    return isDesktop() ? 'aside-state-desktop' : 'aside-state-mobile';
}

function saveState(state) {
    localStorage.setItem(getStorageKey(), state);
}

function loadState() {
    // Desktop: default open. Mobile: default closed.
    var defaultState = isDesktop() ? 'expanded' : 'collapsed';
    return localStorage.getItem(getStorageKey()) || defaultState;
}

// ─── Mobile open / close ───────────────────────────────────────────────────

function openMobile(aside) {
    aside.style.display = 'block';
    // Force reflow so the animation starts from translateX(-100%)
    aside.getBoundingClientRect();
    aside.animate([
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0)' }
    ], { duration: 400, fill: 'forwards' });
    aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
    saveState('expanded');
}

function closeMobile(aside) {
    var anim = aside.animate([
        { transform: 'translateX(0)' },
        { transform: 'translateX(-100%)' }
    ], { duration: 400, fill: 'forwards' });
    anim.onfinish = function () {
        aside.style.display = 'none';
        // Clear the web-animation so CSS can take over cleanly next time
        anim.cancel();
    };
    aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
    saveState('collapsed');
}

// ─── Desktop open / close ─────────────────────────────────────────────────

function openDesktop(aside) {
    aside.classList.remove('collapsed');
    saveState('expanded');
}

function closeDesktop(aside) {
    aside.classList.add('collapsed');
    saveState('collapsed');
}

// ─── Toggle ────────────────────────────────────────────────────────────────

function toggleMenu() {
    var aside = document.getElementById('aside-nav');
    var state = loadState();

    if (isDesktop()) {
        if (state === 'expanded') {
            closeDesktop(aside);
        } else {
            openDesktop(aside);
        }
    } else {
        if (state === 'expanded') {
            closeMobile(aside);
        } else {
            openMobile(aside);
        }
    }
}

// ─── Restore state on load ─────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', function () {
    var aside = document.getElementById('aside-nav');
    var state = loadState();

    if (isDesktop()) {
        // Apply collapsed class without transition on initial load
        aside.style.transition = 'none';
        if (state === 'collapsed') {
            aside.classList.add('collapsed');
        } else {
            aside.classList.remove('collapsed');
        }
        // Re-enable transition after a tick
        requestAnimationFrame(function () {
            aside.style.transition = '';
        });
    } else {
        // On mobile the aside starts hidden via CSS; nothing extra needed
        // unless it was left open (unlikely across page loads, but handle it)
        if (state === 'expanded') {
            openMobile(aside);
        }
    }
});

// ─── Resize: re-apply the saved state for the new breakpoint ──────────────

window.addEventListener('resize', function () {
    var aside = document.getElementById('aside-nav');
    var state = loadState();

    if (isDesktop()) {
        // Clear any mobile inline styles
        aside.style.display = '';
        aside.style.transform = '';

        if (state === 'collapsed') {
            aside.classList.add('collapsed');
        } else {
            aside.classList.remove('collapsed');
        }
        aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
    } else {
        // Clear desktop collapsed class; mobile visibility is via display
        aside.classList.remove('collapsed');
        if (state === 'expanded') {
            aside.style.display = 'block';
            aside_toggle.innerHTML = '<i class="bx bx-x"></i>';
        } else {
            aside.style.display = 'none';
            aside_toggle.innerHTML = '<i class="bx bx-menu"></i>';
        }
    }
});

// ─── Background images ────────────────────────────────────────────────────

window.addEventListener('load', function () {
    var bg = document.getElementsByClassName('bg');
    for (var i = 0; i < bg.length; i++) {
        bg[i].style.backgroundImage = 'url(' + bg[i].getAttribute('data-bg') + ')';
    }
});

// ─── Click handler ────────────────────────────────────────────────────────

aside_toggle.addEventListener('click', toggleMenu);
