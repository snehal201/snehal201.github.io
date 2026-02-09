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

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 


/*===== HOUSE PRICE GAME LOGIC =====*/
const houses = [
    { city: "Munich, City Center", size: 85, rooms: 3, year: 2015, price: 850000 },
    { city: "Berlin, Kreuzberg", size: 60, rooms: 2, year: 1990, price: 420000 },
    { city: "Hamburg, HafenCity", size: 110, rooms: 4, year: 2020, price: 950000 },
    { city: "Frankfurt, Westend", size: 95, rooms: 3, year: 2005, price: 780000 },
    { city: "Cologne, Ehrenfeld", size: 70, rooms: 3, year: 1985, price: 350000 },
    { city: "Leipzig, Plagwitz", size: 80, rooms: 3, year: 1910, price: 290000 }
];

let currentHouse = {};

function loadNextHouse() {
    // Pick a random house
    const randomIndex = Math.floor(Math.random() * houses.length);
    currentHouse = houses[randomIndex];

    // Update UI
    document.getElementById('g-city').innerText = currentHouse.city;
    document.getElementById('g-size').innerText = currentHouse.size;
    document.getElementById('g-rooms').innerText = currentHouse.rooms;
    document.getElementById('g-year').innerText = currentHouse.year;

    // Reset inputs
    document.getElementById('user-guess').value = '';
    document.getElementById('game-result').style.display = 'none';
}

function checkPrice() {
    const userGuess = parseInt(document.getElementById('user-guess').value);

    if (!userGuess) {
        alert("Please enter a price estimation!");
        return;
    }

    const actualPrice = currentHouse.price;
    const difference = Math.abs(userGuess - actualPrice);
    const percentageDiff = (difference / actualPrice) * 100;

    const resultDiv = document.getElementById('game-result');
    const msgElement = document.getElementById('feedback-msg');
    const priceElement = document.getElementById('actual-price');

    priceElement.innerText = "€" + actualPrice.toLocaleString();

    if (percentageDiff <= 5) {
        msgElement.innerHTML = "<span style='color:green'>AMAZING! 🎯</span> You are within 5%!<br>You have great market intuition.";
    } else if (percentageDiff <= 15) {
        msgElement.innerHTML = "<span style='color:orange'>Close! 👍</span> You were within 15%.<br>Not bad, but the AI is closer.";
    } else {
        msgElement.innerHTML = "<span style='color:red'>Missed it! 😅</span> You were off by " + Math.round(percentageDiff) + "%.<br>This is why we need Machine Learning!";
    }

    resultDiv.style.display = 'block';
}

// Initialize the game when the page loads
window.addEventListener('load', loadNextHouse);