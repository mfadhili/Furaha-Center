/* Toggle Mobile menu*/

// Select HTML items
const sidebar = document.querySelector('.side-bar')
const toggle = document.querySelector('.toggle')

// Function for toggle menu
function toggleMenu() {
    if (sidebar.querySelector('ul').classList.contains('clicked')) {
        sidebar.querySelector('ul').classList.remove('clicked');
        toggle.classList.remove('clicked');
        toggle.innerHTML = '☰';
    }
    else {
        sidebar.querySelector('ul').classList.add('clicked');
        toggle.classList.add('clicked');
        toggle.innerHTML = '&times;';
    }
}

// Event Listener
sidebar.addEventListener('click', toggleMenu, false);