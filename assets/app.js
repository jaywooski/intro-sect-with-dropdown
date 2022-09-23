const navbar = document.querySelector('#navbar');


const turnRed = (event) => {
    event.target.style.backgroundColor = 'red';
}

const reset = (event) => {
    event.target.style.backgroundColor = 'white';
}

navbar.addEventListener('click', turnRed)
navbar.addEventListener('mouseleave', reset)