const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');
const menuLinks = offScreenMenu ? offScreenMenu.querySelectorAll('a') : [];

if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
        const isOpen = hamMenu.classList.contains('active');
        hamMenu.setAttribute('aria-expanded', isOpen);
        hamMenu.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });
}

menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
        hamMenu.setAttribute('aria-expanded', 'false');
        hamMenu.setAttribute('aria-label', 'Open navigation menu');
    });
});