const navbar = document.querySelector('.navbar')
const hamb = document.querySelector('.hamb')
const navLinks = document.querySelector('.nav-links')
const navLinksLi = document.querySelectorAll('.nav-links li')


window.addEventListener('scroll', () => {
    if(this.scrollY >= 100) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

hamb.addEventListener('click', () => {
    navLinks.classList.toggle('active')
    hamb.classList.toggle('active')
})



navLinksLi.forEach(li =>li.addEventListener('click', ()=> {
    navLinksLi.forEach(li => li.classList.remove('active'))

    hamb.classList.remove('active')
    navLinks.classList.remove('active')
}))




/* team */





/* typed js */

var options = {
    strings: [
        'Global Creators',
        'Your one stop website'
    ],

    typedSpeed: 40,
    loop: false,
    loopCount: Infinity,
    typedSpeed: 100,
    backDelay: 2000,
    
};

var typed = new Typed('#hero-titles', options);



/* AOS */

AOS.init();
