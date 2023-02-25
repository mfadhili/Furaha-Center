/** Script for Password reveal and password Icon change*/

    // Select html items using id
const passwordInput = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirm');

const eye = document.querySelector("#eye");
const eye_confirm = document.querySelector('#eye_confirm')

// Function for hide/reveal
function toggleEye() {
    this.classList.toggle("fa-eye-slash")
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
}

function toggleEyeConfirm() {
    this.classList.toggle("fa-eye-slash")
    const type = passwordConfirm.getAttribute("type") === "password" ? "text" : "password";
    passwordConfirm.setAttribute("type", type);
}

// Event Listener

eye.addEventListener("click", toggleEye, false)
eye_confirm.addEventListener("click", toggleEyeConfirm, false)
