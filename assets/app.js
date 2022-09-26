const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('#close-btn')
const navModal = document.querySelector('.nav-background');

const f_icon = document.querySelector('.feature-icon');
const c_icon = document.querySelector('.company-icon');

const features = document.querySelector('#features-list');
const aboutCompany = document.querySelector('#company-list');


// Modal functionality
const openModal = () => {
    navModal.style.display = 'block';
}

const closeModal = () => {
    navModal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == navModal) {
        navModal.style.display = 'none';
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




// -------------------Event listeners---------------------- 
menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)
c_icon.addEventListener('click', showCompany);
f_icon.addEventListener('click', showFeatures);