const inputDom = document.querySelectorAll("form>input");
const display = document.querySelector("p");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

const submitButton = document.getElementById("submit");
const form = document.querySelector("form")

console.log(Array.from(inputDom));

const validate = (event) => {

  event.preventDefault();

  let loopCheckError = false
  display.textContent = ""

  Array.from(inputDom).forEach((element) => {
    if (element.value.length === 0) {
      display.textContent = "missing some value, please try again";
      display.style.color = "red";
      loopCheckError = true
    }
  });

  if (loopCheckError) {
    return 
  }

  if (password.value !== confirmPassword.value) {
    display.textContent = "password and confirm do not match, check again";
    display.style.color = "red";
    return;
  }
  display.textContent = "your data complete";
  display.style.color = "green";

};

form.addEventListener("submit", validate);


// const form = document.querySelector('form');
// const message = document.querySelector('p');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // const password  = password.value;
    
//     const formData = new FormData(form)
//     const { username, email ,password, "confirm-password":confirmPassword } = Object.fromEntries(formData);

//     if (password  !== confirmPassword ) {
//         message.textContent = "password and confirm do not match, check again";
//         message.style.color = "red";
//         return;
//     } 

//     if (username.length === 0 || email.length === 0) {
//         message.textContent = "missing some value, please try again";
//         message.style.color = "red";
//         return;
//     }

//     message.textContent = "you data completed";
//     message.style.color = "green";
// })
