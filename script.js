const display = document.getElementById("display")
function appendToDisplay(number){
    display.value += number;
};

function clearDisplay(){
    display.value = " ";
};

function backspace(){
    display.value = display.value.slice(0, -1);
};

//Operators

const operations = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
 };

function add(a, b){
   return a + b;
};

function subtract(a, b){
    return a - b;
 };

 function multiply(a, b){
    return a * b;
 };

 function divide(a, b){
    return a / b;
 };

 function operate(operator, num1, num2){
    if (operator in operations){
        return operations[operator](num1, num2);
    } else {
        return "Err";
    }
 }

