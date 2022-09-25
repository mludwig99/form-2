
const userName = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const btnClear = document.querySelector(".clear");
const btnSend = document.querySelector(".send");
const popup = document.querySelector(".popup")


const checkForm = input => {
    input.forEach(element => {
        if (element.value === '') {
            console.log('błąd');
        
        }
        else {
            console.log('ok')
        }
    })
}


   


btnSend.addEventListener('click', e => {
    e.preventDefault();


    checkForm([userName, password, password2, email])
})

btnClear.addEventListener('click', e => {
    e.preventDefault();
  
    [userName, password, password2, email].forEach(element =>{
        element.value = '';
    })
})