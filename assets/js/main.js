/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL REVEALS*/
sr.reveal('.home__title',{});
sr.reveal('.button',{delay: 200});
sr.reveal('.home__social',{interval: 200});

sr.reveal('.about__img',{});
sr.reveal('.about__subtitle',{delay: 400});
sr.reveal('.about__text',{delay: 400});

sr.reveal('.skills__subtitle',{});
sr.reveal('.skills__text',{});
sr.reveal('.skills__data',{interval: 200});
sr.reveal('.skills__img',{delay: 600});

sr.reveal('.work__img',{interval: 200});
sr.reveal('.contact__input',{interval: 200});
sr.reveal('.dashboard__stats',{interval: 200}); /* Added Reveal for new Cards */