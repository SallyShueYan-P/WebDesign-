const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach((header) => {
    header.addEventListener('click', function() {
        const accordionSection = this.parentElement;
        const accordionContent = this.nextElementSibling;
        
        accordionSection.classList.toggle('accordion-expanded');
        accordionContent.style.display = accordionSection.classList.contains('accordion-expanded') ? 'block' : 'none';
    });
});
