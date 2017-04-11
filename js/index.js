$(function () {
    $(window).scroll(function () {
        var headerHeight = $("header").eq(0).height(),
        scrollTop = $(document).scrollTop();

        if (scrollTop >= headerHeight) {
            $("nav").eq(0).addClass("navbar-fixed-top");
        } else {
            $("nav").eq(0).removeClass("navbar-fixed-top");
        }
    })
})