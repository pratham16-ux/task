//1
let company = "Stackly";

function showCompany() {
    console.log(company);
}

showCompany();


//2
if (true) {
    var a = 10;
    let b = 20;
    const c = 30;

    console.log("Inside block:", a, b, c);
}

console.log("var outside:", a);


//3
function test() {
    let message = "Hello";
    console.log(message);
}

test();
