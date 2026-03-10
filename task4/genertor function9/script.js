//1
function* couponGenerator(){
    yield "SAVE10";
    yield "DISCOUNT20";
    yield "OFFER30";
}

let coupons = couponGenerator();

console.log(coupons.next().value);
console.log(coupons.next().value);
console.log(coupons.next().value);

//2
function* motivationGenerator(){
    yield "Keep coding and never give up!";
    yield "Debugging makes you a better developer.";
    yield "Practice daily to become a pro developer.";
}

let messages = motivationGenerator();

console.log(messages.next().value);
console.log(messages.next().value);
console.log(messages.next().value);