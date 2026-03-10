//1
function createEmployee(name, role = "Trainee"){
    console.log("Employee Name:", name);
    console.log("Role:", role);
}

createEmployee("Pratham"); 
createEmployee("Prince", "Developer");


//2
function calculateDiscount(price, discount = 10){
    let finalPrice = price - (price * discount / 100);
    return finalPrice;
}

console.log(calculateDiscount(999));
console.log(calculateDiscount(999, 20));


//3
function orderFood(item, quantity = 1){
    console.log("Item:", item);
    console.log("Quantity:", quantity);
}

orderFood("Pizza");
orderFood("Burger", 3);  

