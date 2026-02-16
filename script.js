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
    if(num2 === 0){
        return "Err";
    }
    return parseFloat (num1) / parseFloat (num2);
 };


function operate(operator, num1, num2){
    switch(operator){
        case '+':
            return add(num1, num2);
    break;
        case '-':
            return subtract(num1, num2);
    break;
        case '*':
            return multiply(num1, num2);
    break;
        case '/':
            return divide(num1, num2);
    }
}

// let storedNum = "";
// let clickedOperator = "";

// currentOperhand.textContent = 0;
// numberButton.forEach((number) => {
//     number.addEventListener('click', function(){
//         storedNum += number.value;
//         previousOperhand.textContent = storedNum;
//     })
// });
// operatorButton.forEach((operator => {
//     operator.addEventListener('click', function(){
//         num1 = storedNum; 
//         clickedOperator = operator.textContent;
//         previousOperhand.textContent = storedNum + clickedOperator;
//         storedNum = "";
//         console.log(num1 + storedNum);
//         console.log(storedOperator);
//         calculate();
//     })
// }));
// function calculate(){
//     const result = operate(clickedOperator, num1, num2, storedNum);
//     currentOperhand.textContent = result;
// }
// equalButton.addEventListener('click', calculate);






