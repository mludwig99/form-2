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

  formBox.classList.add("error");
  errorMesage.textContent = mesage;
};

const clearError = (input) => {
  const formBox = input.parentElement;
  formBox.classList.remove("error");
};

const checkForm = (input) => {
  input.forEach((element) => {
    if (element.value === "") {
      displayError(element, element.placeholder);
    } else {
      clearError(element);
    }
  });
};

const checkLenght = (input, min) => {
  if (input.value.length < min) {
    displayError(
      input,
      `${input.previousElementSibling.innerText.slice(
        0,
        -1
      )} min ${min} characters.`
    );
  }
};

const checkPassword = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    displayError(pass2, "Passwords do not macht");
  }
};
const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(email.value)) {
    clearError(email);
  } else {
    displayError(email, "email is invalid");
  }
};

const checkErrors = () => {
  const allInputs = document.querySelectorAll(".form-box");
  let errorCount = 0;

  allInputs.forEach((element) => {
    if (element.classList.contains("error")) {
      errorCount++; 
    }
  })
  if (errorCount === 0) {
    popup.classList.add('show-popup')
  }
};

btnSend.addEventListener("click", (e) => {
  e.preventDefault();

  checkForm([userName, password, password2, email]);
  checkLenght(userName, 4);
  checkLenght(password, 8);
  checkPassword(password, password2);
  validateEmail(email);
  checkErrors();
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();

  [userName, password, password2, email].forEach((element) => {
    element.value = "";
    clearError(element);
  });
});
