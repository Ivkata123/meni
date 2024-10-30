function changeLanguage(lang) {
    // site elem data-en = trans
    const elements = document.querySelectorAll('[data-en]');

    // loop za sekoj elem transl
    elements.forEach(el => {
        if (el.hasAttribute(`data-${lang}`)) {
            // Get the translated text based on the selected language
            const translatedText = el.getAttribute(`data-${lang}`);

            // <i> tag elementi
            const icon = el.querySelector('i');
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon); // Reattach the icon
                el.appendChild(document.createTextNode(` ${translatedText}`)); 
            } else {
                el.textContent = translatedText;
            }
        }
        
        const span = el.querySelector('span');
        if (span && span.hasAttribute(`data-${lang}`)) {
            span.textContent = span.getAttribute(`data-${lang}`);
        }
    });
}

// default lang eng
document.addEventListener('DOMContentLoaded', function () {
    changeLanguage('en'); // Set English as the default language on page load
});
