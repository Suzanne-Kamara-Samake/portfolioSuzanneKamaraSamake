/**
 * Converts an HTML string into a DocumentFragment.
 *
 * @param {string} htmlString - The HTML string to convert.
 * @returns {DocumentFragment} - A DocumentFragment containing the parsed HTML elements.
 */
function htmlToFragment(htmlString) {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim(); // trim supprime les espaces inutiles
    return template.content.cloneNode(true); // Cloner pour éviter que le fragment se vide
}

/**
 * Construit le chemin complet pour un asset du dossier public
 * en tenant compte de la base URL configurée dans Vite
 * 
 * @param {string} path - Le chemin relatif (ex: "/Contact/mail.svg")
 * @returns {string} - Le chemin complet avec la base URL
 */
function getAssetPath(path) {
    const basePath = import.meta.env.BASE_URL || '/';
    // Si le path commence par /, on le traite comme absolu et on le préfixe avec la base
    if (path.startsWith('/')) {
        return basePath === '/' ? path : basePath.replace(/\/$/, '') + path;
    }
    return basePath + path;
}

export { htmlToFragment, getAssetPath };