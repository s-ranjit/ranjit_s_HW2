 export function HamburgerMenu() {
 const hamburger = document.querySelector('#hamburger');
     const mobilenavLinks = document.querySelectorAll('#main-nav nav ul li a');

    mobilenavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.checked = false;  
        });
    });
}