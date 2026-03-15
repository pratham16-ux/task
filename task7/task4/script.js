
//4
console.log("Reminder started...");

let reminder = setInterval(function () {
    console.log("Take a short break");
}, 5000);

setTimeout(function () {
    clearInterval(reminder);
    console.log("Reminder stopped");
}, 20000);
