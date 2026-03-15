//8
fetch("https://jsonplaceholder.typicode.com/todos/")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log("Data received");
})
.catch(function(){
    console.log("Server Error");
})
.finally(function(){
    console.log("Process Completed");
});
