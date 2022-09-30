const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('#close-btn')
const navModal = document.querySelector('.nav-background');
const navModalDesktop = document.querySelector('.nav-background-desktop')
const navModalDesktop2 = document.querySelector('.nav-background-desktop-2');

const f_icon = document.querySelector('.feature-icon');
const c_icon = document.querySelector('.company-icon');
const feats = document.querySelector('.fm');
const comp = document.querySelector('.cm');
const features = document.querySelector('#features-list');
const aboutCompany = document.querySelector('#company-list');


const f_icon_dt = document.querySelector('.feat-icon-dt');
const c_icon_dt = document.querySelector('.comp-icon-dt');
const featDeskTop = document.querySelector('#feat-dt');
const compDeskTop = document.querySelector('#comp-dt');

// Modal functionality
const openModal = () => {
    navModal.style.display = 'block';
}


const closeModal = () => {
    navModal.style.display = 'none';
}

window.onclick = function(event) {
    
    event.preventDefault();
    
    if(event.target == navModal || event.target == navModalDesktop || event.target == navModalDesktop2) {
        navModal.style.display = 'none';
        navModalDesktop.style.display = 'none';
        navModalDesktop2.style.display = 'none';
        c_icon_dt.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
        f_icon_dt.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
        f_icon.innerHTML='<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
        c_icon.innerHTML='<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
        features.className = 'collapse';
        aboutCompany.className = 'collapse';

    }
}

//-------------- Mobile dropdown functionality-------------
const showFeatures = () => {
    
    if(features.className === 'collapse') {
        features.className = 'show';
        f_icon.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="Company Menu">';
    }
    else if(features.className === 'show') {
        features.className = 'collapse';
        f_icon.innerHTML='<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
    }
    
    // console.log(features.className)
}


const showCompany = () => {
    if(aboutCompany.className === 'collapse') {
        aboutCompany.className = 'show';
        c_icon.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="Company Menu">';
    }
    else if(aboutCompany.className === 'show') {
        aboutCompany.className = 'collapse';
        c_icon.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
    }
    
    // console.log(aboutCompany.className)
}

const collapse = (event) => {
    
}

// Desktop dropdown functionality

const openFeaturesDesktop = () => {
    navModalDesktop.style.display = 'block';
    f_icon_dt.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="Company Menu">';
}

const openCompDesktop = () => {
    navModalDesktop2.style.display = 'block';
    c_icon_dt.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="Company Menu">';
}




// -------------------Event listeners---------------------- 
menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)
comp.addEventListener('click', showCompany);
feats.addEventListener('click', showFeatures);

featDeskTop.addEventListener('click', openFeaturesDesktop);
compDeskTop.addEventListener('click', openCompDesktop);
