function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        
        if (el.hasAttribute(`data-${lang}`)) {
            el.textContent = el.getAttribute(`data-${lang}`);
        }

        
        const span = el.querySelector('span');
        if (span) {
            span.textContent = span.getAttribute(`data-${lang}`);
        }
    });
}
