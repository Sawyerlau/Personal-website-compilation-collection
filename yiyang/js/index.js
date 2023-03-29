
var body = document.querySelector("body")
//获得页面向左、向上卷动的距离
function getScroll() {
    return {
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    };
}

var lis = document.querySelectorAll(".recommend .wrapper .bd .top ul li");
var names = document.querySelectorAll(".recommend .wrapper .bd .bottom ul li")
var ullis = document.querySelectorAll(".strategy .wrapper .bd ul li")
var img = document.querySelector(".strategy .wrapper .bd img")
var shortcut = document.querySelector(".shortcut");
var header = document.querySelector(".header");
var rightAside = document.querySelector(".rightAside");
var hearerLia = document.querySelectorAll(".header .nav ul li.navli a");
var hearerOls = document.querySelectorAll(".header .nav ul li.navli ol");
var hearnavimage = document.querySelector(".header .logo h1 a ");
var down = document.querySelector(".down");
// 核心服务
var corelis = document.querySelectorAll(".core .wrapper .bd ul li")
var coreimg = document.querySelector(".core .wrapper .bd img");

//scrolltop，点击即可滑动到首页
var sroll = document.querySelector(".srollTop");

//获取护工团队的信息li
var ursingRihgt = document.querySelectorAll(".ursing .wrapper .bd .content .right ul li")
var ursingImg = document.querySelector(".ursing .wrapper .bd .content .left img")
for (var i = 0; i < lis.length; i++) { } //将li遍历到数组内
for (var i = 0; i < names.length; i++) { } //将服务名称遍历到数组内
for (var i = 0; i < ullis.length; i++) { } //将项目特色遍历到数组内
for (var i = 0; i < hearerLia.length; i++) { }//将nav的每一个li遍历到数组内
for (var i = 0; i < hearerOls.length; i++) { }//将nav的每一个ol li遍历到数组内
for (var i = 0; i < corelis.length; i++) { }//将core的每一个li遍历到数组内
for (var i = 0; i < ursingRihgt.length; i++) { }//将core的每一个li遍历到数组内
//用于开关下滑指示
function downOpen() {
    down.style.display = "flex"
}
function downClose() {
    down.style.display = "none"
}


// 用于开关推荐内的li图片
function lisOpen() {
    lis[0].style.height = "200px"
    lis[1].style.height = "200px"
    lis[2].style.height = "200px"
    lis[3].style.height = "200px"
}
function lisClose() {
    lis[0].style.height = "0px"
    lis[1].style.height = "0px"
    lis[2].style.height = "0px"
    lis[3].style.height = "0px"
}
//用于显示服务推荐的服务名称
function nameOpen() {
    names[0].style.opacity = "1"
    names[1].style.opacity = "1"
    names[2].style.opacity = "1"
    names[3].style.opacity = "1"
}
function nameClose() {
    names[0].style.opacity = "0"
    names[1].style.opacity = "0"
    names[2].style.opacity = "0"
    names[3].style.opacity = "0"
}
//用于显示快捷导航
function shortcutOpen() {
    shortcut.style.opacity = "1"
}
function shortcutClose() {
    shortcut.style.opacity = "0"
    shortcut.style.position = "fixed"
}
//用于显示头部
function headerOpen() {//下滑

    header.style.backgroundColor = "#fff"
    hearerLia[0].style.color = "#000"
    hearerLia[1].style.color = "#000"
    hearerLia[2].style.color = "#000"
    hearerLia[3].style.color = "#000"
    hearerLia[4].style.color = "#000"

    hearnavimage.style.backgroundImage = "url(./image/logo2.webp)"
}
function headerClose() {

    header.style.backgroundColor = ""

    hearerLia[0].style.color = "#fff"
    hearerLia[1].style.color = "#fff"
    hearerLia[2].style.color = "#fff"
    hearerLia[3].style.color = "#fff"
    hearerLia[4].style.color = "#fff"

    hearnavimage.style.backgroundImage = "url(./image/logo.webp)"
}

//右侧aside显示
function asideOpen() {
    rightAside.style.opacity = "1"
}
function asideClose() {
    rightAside.style.opacity = "0"
}


//开启项目特色1
function olli1Open() {
    img.setAttribute("src", "./image/olli1.webp")
    ullis[0].style.backgroundColor = "#f29437";
    ullis[1].style.backgroundColor = "#fff";
    ullis[2].style.backgroundColor = "#fff";
}
//开启项目特色2
function olli2Open() {
    img.setAttribute("src", "./image/olli2.webp")
    ullis[0].style.backgroundColor = "#fff";
    ullis[1].style.backgroundColor = "#f29437";
    ullis[2].style.backgroundColor = "#fff";
}

//开启项目特色3
function olli3Open() {
    img.setAttribute("src", "./image/olli3.webp")
    ullis[0].style.backgroundColor = "#fff";
    ullis[1].style.backgroundColor = "#fff";
    ullis[2].style.backgroundColor = "#f29437";
}

//开启核心服务1
function coreli1Open() {
    coreimg.setAttribute("src", "./image/coreli1.webp")
    corelis[0].style.backgroundColor = "#f29437";
    corelis[1].style.backgroundColor = "#fff";
    corelis[2].style.backgroundColor = "#fff";
    corelis[3].style.backgroundColor = "#fff";
}
//开启核心服务2
function coreli2Open() {
    coreimg.setAttribute("src", "./image/coreli2.webp")
    corelis[0].style.backgroundColor = "#fff";
    corelis[1].style.backgroundColor = "#f29437";
    corelis[2].style.backgroundColor = "#fff";
    corelis[3].style.backgroundColor = "#fff";
}
//开启核心服务3
function coreli3Open() {
    coreimg.setAttribute("src", "./image/coreli3.webp")
    corelis[0].style.backgroundColor = "#fff";
    corelis[1].style.backgroundColor = "#fff";
    corelis[2].style.backgroundColor = "#f29437";
    corelis[3].style.backgroundColor = "#fff";
}
//开启核心服务4
function coreli4Open() {
    coreimg.setAttribute("src", "./image/coreli4.webp")
    corelis[0].style.backgroundColor = "#fff";
    corelis[1].style.backgroundColor = "#fff";
    corelis[2].style.backgroundColor = "#fff";
    corelis[3].style.backgroundColor = "#f29437";
}


//以下用于设置滚动事件
var point1 = 100;//用户准备下滑了
var point2 = 1200;
var point3 = 1700;
body.onscroll = function () {
    // console.log(this.getScroll().top)
    if (this.getScroll().top >= 0 && this.getScroll().top <= point1) {
        // shortcutClose()
        asideClose()
        headerClose()
        downClose()
        sroll.style.display = "none"
    } if (this.getScroll().top >= point1 && this.getScroll().top <= point2) { //开始滑动
        // shortcutOpen()
        headerOpen()
        downOpen()
    } if (this.getScroll().top >= point2 && this.getScroll().top <= point3) {
        asideOpen()
        sroll.style.display = "block"
    }
}

//设置当nav 的a标签有鼠标移入的时候，ol的变化
hearerLia[1].onmouseenter = function () {
    hearerOls[0].style.display = "block"
    hearerOls[1].style.display = "none"
    hearerOls[2].style.display = "none"
    hearerOls[3].style.display = "none"
    // 以下用于判定，鼠标是否已经移开
    hearerOls[0].onmouseenter = function () {
        hearerOls[0].style.display = "block"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "none"
    }
    hearerOls[0].onmouseleave = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "none"
    }
}

hearerLia[2].onmouseenter = function () {
    hearerOls[0].style.display = "none"
    hearerOls[1].style.display = "block"
    hearerOls[2].style.display = "none"
    hearerOls[3].style.display = "none"
    // 以下用于判定，鼠标是否已经移开
    hearerOls[1].onmouseenter = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "block"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "none"
    }
    hearerOls[1].onmouseleave = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "none"
    }
}
hearerLia[3].onmouseenter = function () {
    hearerOls[0].style.display = "none"
    hearerOls[1].style.display = "none"
    hearerOls[2].style.display = "block"
    hearerOls[3].style.display = "none"

    // 以下用于判定，鼠标是否已经移开
    hearerOls[2].onmouseenter = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "block"
        hearerOls[3].style.display = "none"
    }
    hearerOls[2].onmouseleave = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "none"
    }
}
hearerLia[4].onmouseenter = function () {
    hearerOls[0].style.display = "none"
    hearerOls[1].style.display = "none"
    hearerOls[2].style.display = "none"
    hearerOls[3].style.display = "block"

    // 以下用于判定，鼠标是否已经移开
    hearerOls[3].onmouseenter = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "block"
    }
    hearerOls[3].onmouseleave = function () {
        hearerOls[0].style.display = "none"
        hearerOls[1].style.display = "none"
        hearerOls[2].style.display = "none"
        hearerOls[3].style.display = "none"
    }
}

sroll.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
sroll.onmouseenter = function () {
    this.innerHTML = "⏫"
    sroll.onmouseleave = function () {
        this.innerHTML = "👆"
    }
}
var ctrl = 3000;//用来控制切换时间


//这一部分用户替换护士姓名、图片
var nameIndex = 0;//当前下标
var ursingName = new Array();//姓名数组
var ursingImgs = new Array();//图片数组路径
ursingName[0] = "姓名：赵晓琳";//姓名
ursingName[1] = "姓名：廖佳珥";//姓名
ursingName[2] = "姓名：徐道英";//姓名
ursingName[3] = "姓名：谭丽";//姓名

ursingImgs[0] = "./image/ursing1.webp"
ursingImgs[1] = "./image/ursing2.webp"
ursingImgs[2] = "./image/ursing3.webp"
ursingImgs[3] = "./image/ursing4.webp"
setInterval(function () {

    if (nameIndex == ursingName.length - 1) {
        nameIndex = 0;
    } else {
        nameIndex += 1;
    }
    ursingRihgt[0].innerText = ursingName[nameIndex];
    ursingImg.src = ursingImgs[nameIndex]
}, ctrl);


//这一部分用户替换护工工作经验
var expIndex = 0;//当前下标
var ursingExp = new Array();//图片数组
ursingExp[0] = "工作经验：84个月";
ursingExp[1] = "工作经验：30个月";
ursingExp[2] = "工作经验：47个月";
ursingExp[3] = "工作经验：35个月";
setInterval(function () {

    if (expIndex == ursingExp.length - 1) {
        expIndex = 0;
    } else {
        expIndex += 1;
    }
    ursingRihgt[1].innerText = ursingExp[expIndex];
}, ctrl);


//这一部分用户替换护工职业技能
var abilityIndex = 0;//当前下标
var ursingAbility = new Array();//图片数组
ursingAbility[0] = "职业技能：照顾自理老人、照顾不能自理老人、护理病人、做家务。";
ursingAbility[1] = "职业技能：已通过卫生部门的培训、有卫生员素质、烘焙、烹饪。";
ursingAbility[2] = "职业技能：照顾病人、已通过红十字会急救培训、有养老护理经验。";
ursingAbility[3] = "职业技能：熟系老年人基本救助方法、通过国家营养师考试、掌握老年人卫生防治知识。";
setInterval(function () {

    if (abilityIndex == ursingAbility.length - 1) {
        abilityIndex = 0;
    } else {
        abilityIndex += 1;
    }
    ursingRihgt[2].innerText = ursingAbility[abilityIndex];
}, ctrl);

//这一部分用户替换护士姓名
var itemIndex = 0;//当前下标
var ursingItem = new Array();
ursingItem[0] = "服务项目：医院护工，康复护理";
ursingItem[1] = "服务项目：养老护工，出院照料";
ursingItem[2] = "服务项目：住院陪护，精神慰藉";
ursingItem[3] = "服务项目：应急救援，营养调理";
setInterval(function () {

    if (itemIndex == ursingItem.length - 1) {
        itemIndex = 0;
    } else {
        itemIndex += 1;
    }
    ursingRihgt[3].innerText = ursingItem[itemIndex];
}, ctrl);