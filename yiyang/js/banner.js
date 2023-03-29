// banner图
var dSwiper = document.querySelector(".swiper");
var dDots = document.querySelectorAll(".dot");


var timer = null; //每5s切换一张
var swiperTimer = null; //切换

var showIndex = 1; //当前显示图片的下标
var myWidth = 1240; //单位宽度

var autoCount = 0;//用于自动轮播计数
// 自动轮播
timer = setInterval(function () {
    autoCount++;
    if (autoCount === 10) {
        autoCount = 0;
        next();
    }

}, 500)


// 下一张
function next() {
    autoCount = 0;
    toScroll(showIndex + 1)
}

// 上一张
function perv() {
    autoCount = 0;
    toScroll(showIndex - 1)
}

// 轮播的函数
function toScroll(targetIndex) {
    // 完成2张图片的切换
    // 路程
    var s = -1 * targetIndex * myWidth - dSwiper.offsetLeft;
    var t = 20;//swiperTimer执行20次完成图片切换
    var v = s / t;
    var count = 0; //计数
    clearInterval(swiperTimer);
    swiperTimer = setInterval(function () {
        count++;
        var l = dSwiper.offsetLeft + v;
        dSwiper.style.left = l + 'px';
        if (count === t) {
            // 完成切换
            clearInterval(swiperTimer)
            if (targetIndex === 0) {
                //需要调整到倒数第二张
                targetIndex = 4;
            } else if (targetIndex === 5) {
                //需要跳转到第二张
                targetIndex = 1;
            }
            // 防止出现偏差
            dSwiper.style.left = -1 * targetIndex * myWidth + 'px';

            // 上一个点
            dDots[showIndex - 1].className = "dot";
            //更改showIndex的值
            showIndex = targetIndex;
            //当前点
            dDots[showIndex - 1].className = "dot checked";
        }

    }, 30)
}
//banner图