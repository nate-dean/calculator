
let firstNumber
let secondNumber 

let operator 
let result = 0;
let step = 0;

let numArray = [];
let secondNumArray = [];

let display = document.getElementById("display")

function getNumber(num){
if (step === 0 || step === 1){
    numArray.push(num)
    step = 1
    firstNumber = Number(numArray.join(""))
    display.value = firstNumber
} else if (step === 2){
    secondNumArray.push(num)
    secondNumber = Number(secondNumArray.join(""))
    display.value = secondNumber
}
};

function getOperator(op){
step = 2
operator = op
};

function clearDisplay(){
    display.value = null
    firstNumber = null
    secondNumber = null
    step = 0
    operation = null
    result = 0 
    numArray = []
    secondNumArray = []
};

function backspace(){
    display.value = display.value.slice(0, -1);
};

const calculateResult = () => {
 console.log("Calculate Here")
};