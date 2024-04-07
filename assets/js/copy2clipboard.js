/**
 * Functions to copy the code to the clipboard
 */
var code_highlight = document.querySelectorAll('div.highlight');

function addCopyButton(element) {
    var copy_code_button = `
        <button class="copy-code-button">
            <i class="bx bx-copy-alt">
            <span>Copiar código</span>
            </i>
        </button>
    `;
    element.insertAdjacentHTML('afterbegin', copy_code_button);
}

function showCopyText(code){
    if (code.querySelector('.copy-text')) {
        return;
    }

    var copy_text = `
        <div class="copy-text">
            <span>¡Código copiado!</span>
        </div>
    `;
    code.insertAdjacentHTML('afterbegin', copy_text);
    setTimeout(function() {
        // Fadein
        code.querySelector('.copy-text').style.opacity = 1;
    }, 500);
    setTimeout(function() {
        // Fadeout
        code.querySelector('.copy-text').style.opacity = 0;
    }, 1500);
    setTimeout(function() {
        // Remove element
        code.querySelector('.copy-text').remove();
    }, 2000);
}

function copyToClipboard(element) {
    var code = element.textContent;
    navigator.clipboard.writeText(code)
        .catch(function(err) {
            console.error('Error al copiar al portapapeles: ', err);
        });
}


code_highlight.forEach(function(code) {
    addCopyButton(code);
    var precode = code.querySelector('pre');
    code.addEventListener('click', function() {
        copyToClipboard(precode);
        showCopyText(code);
    });
}
);

