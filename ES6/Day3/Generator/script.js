function* fibonacci(number) {
    let num1 = -1;
    let num2 = 1;
    for (let i = 0; i < number; i++) {
        result = num1 + num2;
        yield result;
        num1 = num2;
        num2 = result;
    }
}


for (let number of fibonacci(4)) {
    console.log(number);
}

console.log("-------------------------------------");

function* fibonacciMax(number) {
    let num1 = -1;
    let num2 = 1;
    result = num1 + num2; 
    while(result <= number){
        yield result;
        num1 = num2;
        num2 = result;
        result = num1 + num2;
    }
}

 

for (let number of fibonacciMax(8)) {
    console.log(number);
}
 








