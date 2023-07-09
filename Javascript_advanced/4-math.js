function divideBy(firstNumber) {
    // such that divideBy(25)(100) returns 4
    return (secondNumber) => {return (secondNumber / firstNumber);};
}
function addBy(firstNumber) {
    // such that addBy(25)(100) returns 125
    return (secondNumber) => {return (firstNumber + secondNumber);};
}
const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);