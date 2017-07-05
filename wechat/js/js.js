$(function () {
    $("ul > li > a").on("touchstart", function () {
        $(this).addClass("active");
    });

    var apiData = {
        timestamp: +new Date,
        url: 'http://182.254.139.183:8005/',
        //url: 'http://wechat.censh.com/',
        path: 'api/queryDept.do?',
        param: 'deptId=1',
        appid: '6baf9c44c87d48fdb14c10b9080160f1',
        secretkey: 'anIBgISa5PM6fzewudYLhiz1UtAE8cPKQDi5YeZ5G1M'
    }
    console.log(apiData.timestamp)
    apiData.sign = 'appid=' + apiData.appid + '&secretkey=' + apiData.secretkey + '&timestamp=' + apiData.timestamp;
    console.log(apiData.sign);
    apiData.sign = md5(apiData.sign);
    console.log(apiData.sign);
    console.log(apiData.url + apiData.path + apiData.param + '&sign=' + apiData.sign)

    $.ajax({
        type: 'get',
        url: apiData.url + apiData.path + apiData.param  + '&sign=' + apiData.sign,
        //url: apiData.url + apiData.path + apiData.param,
        // data: {
        //     sign: apiData.sign
        // },
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
        }
    })

    // var xhr = null;
    // if (window.XMLHttpRequest) {
    //     xhr = new XMLHttpRequest();
    // } else {
    //     xhr = new ActiveXObject("Microsoft"); //ie6
    // }
    // //var param = "username="+username+"&password="+password
    // //param = encodeURI(param);
    // xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    // xhr.open('get', apiData.url + apiData.path + 'sign=' + apiData.sign + apiData.param, true);
    // xhr.send(null);
    // xhr.addEventListener('readystatechange', function () {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         var result = xhr.responseText;
    //         result = JSON.parse(result);
    //     }
    // });
})


//     var data = {
//         CONDITION: {
//             BRAND_CODE: '',
//             CATEGORY_CODE: '',
//             SKU_CODE: '',
//             PAGE_INDEX: 1,
//             PAGE_SIZE: 50
//         }
//     };

//     var sgin = 'TEST10000001' + JSON.stringify(data) + 'ZHT2016123';

//    console.log(typeof(JSON.stringify(data)))

//     sgin = md5(sgin);
//     sgin = sgin.toLocaleUpperCase();
//     console.log(sgin)