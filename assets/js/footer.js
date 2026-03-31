// footer.js
// Script para cargar el footer común en todas las páginas

const footerHTML = `
<div class="container">
    <h4 class="mb-4" style="color: var(--brand-bg);">Conectemos</h4>
    <div class="social-links mb-3">
        <a href="https://github.com/RobertoOtarola" target="_blank" aria-label="GitHub">
            <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/robertootarola/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin"></i>
        </a>
    </div>
    <p class="mb-0 text-white-50">&copy; ${new Date().getFullYear()} Roberto Otarola. Todos los derechos reservados.</p>
</div>
`;

document.addEventListener("DOMContentLoaded", () => {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        // Ensure the footer still functions as the #contact anchor if needed by index.html
        if (!footerElement.id) {
            footerElement.id = 'contact';
        }
        footerElement.innerHTML = footerHTML;
    }
});
