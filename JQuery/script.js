$(document).ready(function(){
    $("h1").css("color",'blue');
});

$("h1").click(function(){
    $("h1").css("color",'purple');
});

$("input").keypress(function(event){
    if(event.key == "Enter") {
        $("h1").text($(this).val());
        $(this).val("");
    }
});

$("button").remove();