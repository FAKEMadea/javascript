let age = 16;
const name = "Rauno";

const header = document.querySelector("header");
const navlinks = document.querySelectorAll("nav__link");

console.log(navlinks);

function sayHello (){
    let message = "Hello " + name;
    console.log(message);
}

sayHello();


function simpleMath (a, b){
    let result = a + b;
    console.log(result);
}

simpleMath(11, 22);

window.addEventListener("scroll", function(){
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('red');
    } else{
        header.classList.remove('red');
    }

    console.log(scrollPos);
    
})