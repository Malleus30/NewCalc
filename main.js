"use strict"


let a = '';
let b = '';
let operator = '';
let count = 0;
const out = document.querySelector('.answer');

document.querySelector('.c').addEventListener('click', clear);

document.querySelector('.equal').addEventListener('click',calc);

document.querySelector('.baks').addEventListener('click', eraseLast);



function eraseLast(){
    if(a!=='' && operator !=='' && b!== '' && count===0){

        b = b.slice(0,-1);
        out.textContent = b;

    }else if(a!==''&& operator !== '' && b === ''){

        operator = operator.slice(0,-1);
        out.textContent = operator;

    }else if(a!=='' && b==='' && operator === ''){

        a = a.slice(0,-1);
        out.textContent = a;

    }
}





let blue_btn = document.querySelectorAll('.bgc-blue');

blue_btn.forEach(function(btn){
    btn.addEventListener('click', addOperator);
});


let btns = document.querySelectorAll('.bgc-dark');

btns.forEach(function(btn){
    btn.addEventListener('click', inpNumber);
});





function clear() {
    out.textContent=0;
    a = '';
    b = '';
    operator = '';
    count = 0;
}



function inpNumber(){

    out.textContent = '';

    const key = event.target.textContent;


    if(event.target.classList.contains('baks'))return;

    if(b === '' && operator === ''){
  
    a += key;

    out.textContent = a;

    }else if(a!=='' &&  b!=='' && count){
        
            b = key;

            out.textContent = b;
            
            count--;

    }else{

        b += key;

        out.textContent = b;

    }

    return;
}



function addOperator(){
  
    if(event.target.classList.contains('equal')) return;

    out.textContent='';

    const key = event.target.textContent;

    operator = key;

    out.textContent = operator;

}


function calc(){

    a=+a;
    b=+b;

    let operations = {'+': a + b, '-': a - b, '÷': a/b, '×': a * b};
    

    if(operator in operations){

     a =  operations[operator];

     out.textContent = a;

    count++;

    }
}











