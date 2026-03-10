(function() {
    console.log("Website Loaded");
})();


//2
(function(price, discount) {
    let finalPrice = price - (price * discount / 100);
    console.log("Discount Price:", finalPrice);
})(899, 20);