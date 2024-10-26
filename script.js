function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        if (el.hasAttribute(`data-${lang}`)) {
            const translatedText = el.getAttribute(`data-${lang}`);
            const icon = el.querySelector('i');
            
            if (icon) {
                el.innerHTML = '';
                el.appendChild(icon);
                el.appendChild(document.createTextNode(translatedText));
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
