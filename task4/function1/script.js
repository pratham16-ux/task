//1
function greetUser(name) {
    console.log("Welcome to Stackly, " + name);
}

greetUser("Pratham");


//2
function calculateSalary(basic, bonus){
    return basic + bonus;
}

let salary = calculateSalary(20000, 5000);
console.log("Total Salary:", salary);


//3
function checkEvenOdd(num){
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(7));


//4
function findMax(a, b, c){
    return Math.max(a, b, c);
}

console.log("Largest:", findMax(10, 25, 15));


//5
function calculateGST(price){
    return price + (price * 0.18);
}

console.log("Price with GST:", calculateGST(1000));


//6
function login(username, password){
    if (username === "admin" && password === "1234"){
        return "Login Successful";
    } else {
        return "Invalid Username or Password";
    }
}

console.log(login("admin", "1234"));