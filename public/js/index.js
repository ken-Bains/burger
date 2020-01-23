$(document).ready(function(){

    $("form").on("submit", function(e){
        e.preventDefault()
        var data = {
            burger_name: $("#burgerInput").val()
        }
        $.post("/api/add", data, function(response){});
        location.reload();
    });

    $(".devourBtn").on("click", function(e) {
        var btnId = $(this).data("id");
        $.get("/api/" + btnId, function(res){});
        location.reload();
    })
});