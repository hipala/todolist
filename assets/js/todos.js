// check off (勾選) specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");  // 字體變灰、劃掉
});

// click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){ // 這邊的this是span
        $(this).remove();  // 這邊的this是父元素li，包在裡面等fadeOut完畢才執行
    });
    event.stopPropagation(); // 避免向上觸發事件
})

$("input[type='text']").keypress(function(event){
    if(event.which === 13){ // enter鍵
        // grabbing new todo text from input
        var todoText = $(this).val();
        // 清空輸入欄
        $(this).val("");
        // create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
})