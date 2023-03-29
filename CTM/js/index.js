//获得页面向左、向上卷动的距离
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}
var logo = document.getElementsByClassName("logo")[0]
logo.onclick = function () {
    window.open("./index.html", "_self")
}

var divdownimg = document.querySelectorAll("div.down>img");
for (var i = 0; i < divdownimg.length; i++) {
    console.log(divdownimg[i])
}
var body = document.querySelector("body")
var navscroll = document.querySelector("nav")

var nav1 = document.querySelector(".nav1");
var nav2 = document.querySelector(".nav2");
var nav3 = document.querySelector(".nav3");

//用于获取第一部分的标题，用于设置滚动事件，做出对应变化
var part1h2 = document.querySelector("div.content div.part1 h2.part1h2");
//用于获取第一部分的所有img标签
var part1imggroup = document.querySelectorAll("div.content div.part1 div.part1img img")
for (var i = 0; i < part1imggroup.length; i++) { }//遍历第一部分的所有img标签并且将其获取到数组内→part1imggroup[i]

//用于获取第二部分的标题，用于设置滚动事件，做出对应变化
var part2h2 = document.querySelector("div.content div.part2 h2.part2h2");

//用于获取第二部分的所有img标签
var part2imggroup = document.querySelectorAll("div.content div.part2 div.part2img img")
for (var i = 0; i < part2imggroup.length; i++) { }//遍历第一部分的所有img标签并且将其获取到数组内→part2imggroup[i]

//用于获取第三部分的标题，用于设置滚动事件，做出对应变化
var part3h2 = document.querySelector("div.content div.part3 h2.part3h2");

//用于获取第三部分的所有img标签
var part3imggroup = document.querySelectorAll("div.content div.part3 div.part3img img")
for (var i = 0; i < part3imggroup.length; i++) { }//遍历第一部分的所有img标签并且将其获取到数组内→part3imggroup[i]


//以下用于设置滚动事件
body.onscroll = function () {
    if (this.getScroll().top > 0 && this.getScroll().top <= 500) {
        // 设置第一部分的标题的初始态（闭合）
        part1h2.style.width = "0px"
        part1h2.style.opacity = "0"
        //设置第一部分的img图片移出
        part1imggroup[0].style.left = "-100px";
        part1imggroup[1].style.right = "-100px";
        part1imggroup[2].style.left = "-100px";
        part1imggroup[3].style.right = "-100px";
        part1imggroup[0].style.opacity = "0";
        part1imggroup[1].style.opacity = "0";
        part1imggroup[2].style.opacity = "0";
        part1imggroup[3].style.opacity = "0";
        //nav1导航栏，未选中态
        nav1.classList.replace("nav1h", "nav1")

        // 设置第二部分的标题的初始态（闭合）
        part2h2.style.width = "0px"
        part2h2.style.opacity = "0"
        //用于设置引导下滑的渐变样式
        divdownimg[0].style.display = "inline"
        divdownimg[1].style.display = "inline"
        divdownimg[2].style.display = "inline"
        //导航栏从最开始的透明变换为深色背景
        navscroll.style.backgroundImage = "url(./img/nav.webp)"
    }
    if (this.getScroll().top > 500 && this.getScroll().top <= 1000) {

        // 设置第一部分的标题展开态
        part1h2.style.width = "500px"
        part1h2.style.opacity = "1"
        //nav1导航栏,选中态
        nav1.classList.replace("nav1", "nav1h")
        //设置第一部分的img图片移入
        part1imggroup[0].style.left = "97px";
        part1imggroup[1].style.right = "97px";
        part1imggroup[2].style.left = "97px";
        part1imggroup[3].style.right = "97px";
        part1imggroup[0].style.opacity = "1";
        part1imggroup[1].style.opacity = "1";
        part1imggroup[2].style.opacity = "1";
        part1imggroup[3].style.opacity = "1";



        //用于设置引导下滑的渐变样式，超过这个范围自动隐藏
        divdownimg[0].style.display = "none"
        divdownimg[1].style.display = "none"
        divdownimg[2].style.display = "none"

        //nav2导航栏，未选中态
        nav2.classList.replace("nav2h", "nav2")

    }
    if (this.getScroll().top > 1000 && this.getScroll().top <= 1500) {
        // 设置第一部分的标题的初始态（闭合）
        part1h2.style.width = "0px"
        part1h2.style.opacity = "0"
        //nav1导航栏，未选中态
        nav1.classList.replace("nav1h", "nav1")



        //设置第一部分的img图片移出
        part1imggroup[0].style.left = "-100px";
        part1imggroup[1].style.right = "-100px";
        part1imggroup[2].style.left = "-100px";
        part1imggroup[3].style.right = "-100px";
        part1imggroup[0].style.opacity = "0";
        part1imggroup[1].style.opacity = "0";
        part1imggroup[2].style.opacity = "0";
        part1imggroup[3].style.opacity = "0";

        //设置第二部分的img图片移出,,标题是闭合态
        part2imggroup[0].style.left = "-100px";
        part2imggroup[1].style.right = "-100px";
        part2imggroup[2].style.left = "-100px";
        part2imggroup[3].style.right = "-100px";
        part2imggroup[0].style.opacity = "0";
        part2imggroup[1].style.opacity = "0";
        part2imggroup[2].style.opacity = "0";
        art2imggroup[3].style.opacity = "0";
        // 设置第二部分的标题的初始态（闭合）
        part2h2.style.width = "0px"
        part2h2.style.opacity = "0"

        //nav2导航栏，未选中态
        nav2.classList.replace("nav2h", "nav2")

    }
    if (this.getScroll().top > 1500 && this.getScroll().top <= 2000) {
        //设置第二部分的img图片移入,标题是展开态
        part2imggroup[0].style.left = "97px";
        part2imggroup[1].style.right = "97px";
        part2imggroup[2].style.left = "97px";
        part2imggroup[3].style.right = "97px";
        part2imggroup[0].style.opacity = "1";
        part2imggroup[1].style.opacity = "1";
        part2imggroup[2].style.opacity = "1";
        part2imggroup[3].style.opacity = "1";
        // 设置第二部分的标题展开态
        part2h2.style.width = "500px"
        part2h2.style.opacity = "1"

        //nav2导航栏，选中态
        nav2.classList.replace("nav2", "nav2h")

    }
    if (this.getScroll().top > 2000 && this.getScroll().top <= 2500) {
        //设置第二部分的img图片移出,,标题是闭合态
        part2imggroup[0].style.left = "-100px";
        part2imggroup[1].style.right = "-100px";
        part2imggroup[2].style.left = "-100px";
        part2imggroup[3].style.right = "-100px";
        part2imggroup[0].style.opacity = "0";
        part2imggroup[1].style.opacity = "0";
        part2imggroup[2].style.opacity = "0";
        part2imggroup[3].style.opacity = "0";
        // 设置第二部分的标题的初始态（闭合）
        part2h2.style.width = "0px"
        part2h2.style.opacity = "0"
        //nav2导航栏，未选中态
        nav2.classList.replace("nav2h", "nav2")

        //设置第三部分的img图片移出,,标题是闭合态
        part3imggroup[0].style.left = "-100px";
        part3imggroup[1].style.right = "-100px";
        part3imggroup[2].style.left = "-100px";
        part3imggroup[3].style.right = "-100px";
        part3imggroup[0].style.opacity = "0";
        part3imggroup[1].style.opacity = "0";
        part3imggroup[2].style.opacity = "0";
        part3imggroup[3].style.opacity = "0";
        // 设置第三部分的标题的初始态（闭合）
        part3h2.style.width = "0px"
        part3h2.style.opacity = "0"

        //nav3导航栏，未选中态
        nav3.classList.replace("nav3h", "nav3")

    } if (this.getScroll().top > 2500 && this.getScroll().top <= 3000) {
        //设置第三部分的img图片移入,标题是展开态
        part3imggroup[0].style.left = "97px";
        part3imggroup[1].style.right = "97px";
        part3imggroup[2].style.left = "97px";
        part3imggroup[3].style.right = "97px";
        part3imggroup[0].style.opacity = "1";
        part3imggroup[1].style.opacity = "1";
        part3imggroup[2].style.opacity = "1";
        part3imggroup[3].style.opacity = "1";
        // 设置第三部分的标题展开态
        part3h2.style.width = "500px"
        part3h2.style.opacity = "1"

        //nav3导航栏，选中态
        nav3.classList.replace("nav3", "nav3h")


    } if (this.getScroll().top > 3000 && this.getScroll().top <= 3500) {
        // 设置第三部分的标题的初始态（闭合）
        part3h2.style.width = "0px"
        part3h2.style.opacity = "0"

        //nav3导航栏，未选中态
        nav3.classList.replace("nav3h", "nav3")
    }
}
//用于设置顶部导航栏点击对应nav后的页面滑动
nav1.onclick = function () {
    window.scrollTo({
        top: 930,
        behavior: "smooth"
    })
}
nav2.onclick = function () {
    window.scrollTo({
        top: 930 + 900,
        behavior: "smooth"
    })
}
nav3.onclick = function () {
    window.scrollTo({
        top: 930 + 900 + 900,
        behavior: "smooth"
    })
}


