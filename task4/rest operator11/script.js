function sumAll(...numbers){
    let total = 0;

    for (let num of numbers){
        total += num;
    }

    return total;
}

console.log(sumAll(10, 20, 30, 40));


//2
function showArgs(first, ...rest){
    console.log("First Argument:", first);
    console.log("Rest Arguments:", rest);
}

showArgs("Apple", "Banana", "Orange", "Mango");


//3
function totalBill(...prices){
    let total = 0;

    for (let price of prices){
        total += price;
    }

    return total;
}

console.log("Total Bill:", totalBill(200, 150, 350, 100));


