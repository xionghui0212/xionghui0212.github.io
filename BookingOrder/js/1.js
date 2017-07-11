$(function () {
    $(".fight").on("click", function () {
        $(".mask").show();
    });
    $(".change").on("click", function () {
        $(".data").addClass("bg").find("ul").css("visibility", "hidden");
        $(".fight").hide();
        $(".change").hide();
        $(".refresh").show();
    });
    $(".refresh").on("click",function(){
        window.location.reload();
    })
})