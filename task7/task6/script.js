fetch("https://jsonplaceholder.typicode.com/todos/")
.then(function(response){
    return response.json();
})
.then(function(data){
    data.forEach(function(todo){
        console.log(todo.title);
    });
});