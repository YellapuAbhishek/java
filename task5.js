
var appName = "Simple Calculator App";

console.log( appName);


runCalculator(divi); 

function runCalculator(callback) {
 
    let num1 = 10;
    let num2 = 5;

    
    let result = callback(num1, num2);
    console.log("Result:", result);
}


function divi(a, b) {
    return a / b;
}

function modulodivi(a, b) {
    return a % b;
}


runCalculator(modulodivi);
