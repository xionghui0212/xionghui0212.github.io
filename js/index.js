$(function () {
    var headerHeight = $("header").eq(0).height();
    var navHeight = $(".nav").height()
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= headerHeight) {
            // 3. 如果，scrollTop的值大于 top的高度， 就让导航栏固定
            // $(".nav").css("position", "fixed");
            $("nav").eq(0).css({
                "position": "fixed",
                "top": 0
            });

            // 处理main ，因为nav这块，定位变为固定定位，此时，会脱离文档流
            // 所以，要给main设置 margin-top 为：导航栏的高度

            $("section").eq(0).css("padding-top",navHeight );
        } else {
            // 4. 相反，就让导航栏  变回原来的位置
            $("nav").eq(0).css("position", "static");
            $("section").eq(0).css("padding-top", 0);
        }


    });
})