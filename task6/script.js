console.log(" Console Calculator ");

let num1 = Number(prompt("Enter first number"));
let num2 = Number(prompt("Enter second number"));

let operation = prompt("Choose operation: +  -  *  /  %  **");

let result;

if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
else if (operation === "**") {
    result = num1 ** num2;
}
else {
    result = "Invalid Operation";
}

console.log("Result:", result);