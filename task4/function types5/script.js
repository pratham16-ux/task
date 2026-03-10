//1
function showMessage() {
    console.log("Named Function Example");
}

showMessage();


//2
let multiply = function(a, b){
    return a * b;
};

console.log(multiply(5, 4));


//3
let square = (num) => {
    return num * num;
};

console.log(square(6));