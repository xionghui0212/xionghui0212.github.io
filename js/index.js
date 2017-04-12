$(function () {
    init();

    function init() {
        navFix();
    }


    function navFix() {
        var headerHeight = null;
        $(window).on('resize', function () {
            //每当改变页面宽度时改变header高度
            headerHeight = $("header").eq(0).height();
            $("nav").eq(0).css("top", headerHeight);
        })

        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();
            headerHeight = $("header").eq(0).height();

            console.log(headerHeight)
            if (scrollTop >= headerHeight) {
                $("nav").eq(0).addClass("navbar-fixed-top");
            } else {
                $("nav").eq(0).removeClass("navbar-fixed-top");
            }
        })
    }

})