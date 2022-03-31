const input__user = document.querySelector ('.input__user');
const user__button = document.querySelector ('.user__button');
const bizness__1 = document.querySelector ('.bizness__1');

user__button.addEventListener('click',f1);

function f1(){
    console.log("click");
    bizness__1.click()
}