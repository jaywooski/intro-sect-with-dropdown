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

// Dropdown functionality
const showFeatures = () => {
    if(features.style.display === 'flex'){
        features.style.display = 'none';
    }
    console.log('hey');
    // else {
    //     features.style.display === 'none';
    // }

    // console.log('heyyy')
}

const showCompany = () => {
    if(aboutCompany.style.display = 'none') {

    };
}

const collapse = (event) => {

}

menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)
c_icon.addEventListener('click', showCompany, false);
f_icon.addEventListener('click', showFeatures, 'false');