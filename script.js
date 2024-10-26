function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const span = el.querySelector('span');
        if (span) {
            span.textContent = span.getAttribute(`data-${lang}`);
        }
    });
}
