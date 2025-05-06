$("#addTodo").click(function(){
    const inputtodo = $("input").val();
    $("#TodoList").append("<li><input type='checkbox'>" + inputtodo + "</li>");

    $("input").val("");
});
