const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('#close-btn')
const navModal = document.querySelector('.nav-background');
const featDown = document.querySelector('#features-drop');
const featUp = document.querySelector('#featUp');
const companyDrop = document.querySelector('#company-drop');
const features = document.querySelector('#features-list');



// Modal functionality
const openModal = (event) => {
    navModal.style.display = 'block';
}

const closeModal = (event) => {
    navModal.style.display = 'none';
}

window.onclick = function(event) {
    if(event.target == navModal) {
        navModal.style.display = 'none';
    }
}

// Dropdown functionality
const openFeatures = (event) => {
    features.style.display = 'inline-block';
    featDown.innerHTML = '<img src="./images/icon-arrow-up.svg" alt="Company Menu">'
    featDown.id = 'featUp';
}

const closeFeatures = (event) => {
    console.log('click');
    features.style.display = 'none';
    featUp.id = 'featDown';
    featDown.innerHTML = '<img src="./images/icon-arrow-down.svg" alt="Company Menu">';
}

menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)
featDown.addEventListener('click', openFeatures);
featUp.addEventListener('click', closeFeatures);
