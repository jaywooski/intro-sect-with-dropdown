const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('#close-btn')
const navModal = document.querySelector('.nav-background');

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

menuBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal)