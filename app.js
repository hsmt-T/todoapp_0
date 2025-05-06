$("#addTodo").click(function(){
    const inputtodo = $("input").val();
    $("#TodoList").append("<li><input type='checkbox'>" + inputtodo + "</li>");

    $("input").val("");
});

$(document).on("change","input[type=checkbox]",function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through")
    }else{
        $(this).parent().css("text-decoration","none")
    }
})