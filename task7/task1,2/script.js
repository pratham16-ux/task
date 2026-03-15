//1
setInterval(function () {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    console.log(hours + ":" + minutes + ":" + seconds);

}, 1000);


//2
let birthYear = Number(prompt("Enter your birth year"));

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log("Your age is " + age);

