const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const btnClear = document.querySelector(".clear");
const btnSend = document.querySelector(".send");
const popup = document.querySelector(".popup");

const displayError = (input, mesage) => {
  const formBox = input.parentElement;
    const errorMesage = formBox.querySelector(".error-text");
    
    formBox.classList.add('error')
    errorMesage.textContent = mesage;
};


const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}



const checkForm = (input) => {
  input.forEach((element) => {
    if (element.value === "") {
      displayError(element, element.placeholder);
    } else {
      clearError(element)
    }
  });
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([userName, password, password2, email]);
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();

  [userName, password, password2, email].forEach((element) => {
    element.value = "";
  });
});
