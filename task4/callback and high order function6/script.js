//1
function processData(callback){
    console.log("Processing data...");
    callback();
}

function showMessage(){
    console.log("Callback function executed");
}

processData(showMessage);


//2
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

function sub(x, y){
    return x - y;
}

console.log(calculate(10, 5, add));
console.log(calculate(10, 5, sub));




//3
function completeTask(){
    console.log("Task Completed");
}

function performCalculation(a, b, callback) {
    let result = a + b;
    console.log("Result:", result);
    callback();
}

performCalculation(4, 6, completeTask);



//4
function getUserData(callback){
    let user = {
        name: "Pratham",
        age: 22
    };
    
    callback(user);
}

function displayUser(user){
    console.log("Name:", user.name);
    console.log("Age:", user.age);
}

getUserData(displayUser);