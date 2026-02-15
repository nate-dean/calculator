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

function add(num1, num2){
   return parseFloat (num1) + parseFloat (num2);
};

function subtract(num1, num2){
    return parseFloat (num1) - parseFloat (num2);
 };

 function multiply(num1, num2){
    return parseFloat (num1) * parseFloat (num2);
 };

 function divide(num1, num2){
    return parseFloat (num1) / parseFloat (num2);
 };





