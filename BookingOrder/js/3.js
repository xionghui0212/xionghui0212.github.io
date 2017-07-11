$(function () {
    init();

    function init() {
        swap("#tab1", "#tab2", "#tab3", "active");
        swap("#tab2", "#tab3", "#tab1", "active");
        swap("#tab3", "#tab1", "#tab2", "active");
        cancelOrder("#service", ".mask1");
        cancelOrder("#client", ".mask2");
        cancelMask(".mask1 .right", ".mask1");
        cancelMask(".mask2 .right", ".mask2");
        myGiveUp();
        hisGiveUp();
        refund();
    }

    function swap(dom1, dom2, dom3, className) {
        $(dom1).on("click", function () {
            $(this).attr("class", "").addClass(className + "1");
            $(dom2).attr("class", "").addClass(className + "2");
            $(dom3).attr("class", "").addClass(className + "3");
        })
    }

    function cancelOrder(btn, mask) {
        $(btn).on("click", function () {
            $(mask).show();
        })
    }

    function cancelMask(btn, mask) {
        $(btn).on("click", function () {
            $(mask).hide();
        })
    }

    function myGiveUp() {
        $(".mask2 .left").on("click", function () {
            window.location.href = "1.html";
        })
    }

    function hisGiveUp() {
        $(".mask1 .left").on("click", function () {
            $(".mask1").hide();
            $("h1").css({
                "background": "url('images/cross.png') no-repeat left center",
                "width": "110px",
                "color": "#b3b3b3"
            }).html("订单已取消");
            $("#service").hide();
            $("#client").hide();
            $("#refund").show();
        })
    }

    function refund() {
        $("#refund").on("click", function () {
            $(this).css("background-color","#b3b3b3").html("退款中");
        })
    }
})