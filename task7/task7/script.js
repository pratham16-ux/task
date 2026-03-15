//7
fetch("https://jsonplaceholder.typicode.com/todos/")
.then(function(response){
    return response.json();
})
.then(function(data){
    data.forEach(function(todo){
        if(todo.completed === true){
            console.log(todo.title);
        }
    });
});

