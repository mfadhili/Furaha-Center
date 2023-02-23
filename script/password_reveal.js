 /** Script for Password reveal and password Icon change*/

 // Select html items using id
 const passwordInput = document.querySelector('#password');
 const eye = document.querySelector("#eye");

 // Function for hide/reveal
 function toggleEye() {
     this.classList.toggle("fa-eye-slash")
     const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
     passwordInput.setAttribute("type", type);
 }

 // Event Listener

 eye.addEventListener("click", toggleEye, false)