//获取元素方法封装
var getElt = function (selector) {
    return document.querySelector(selector);
}

var getAllElt = function (selector) {
    return document.querySelectorAll(selector);
}

//获取元素样式
var getCls = function (element) {
    return element.getAttribute('class');
}

//设置元素样式
var setCls = function (element, cls) {
    return element.setAttribute("class", cls);
}

//添加元素样式
var addCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) == -1) {
        setCls(element, baseCls + " " + cls);
    }
}

//删除元素样式
var delCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) != -1) {
        setCls(element, baseCls.split(cls).join(" ").replace(/\s+/g, " "));
    }
}

//各屏具有动画效果的元素
var screenAnimationElement = {
    '.first-screen': [
        '.first-title',
        '.first-content',
    ],
    '.second-screen': [
        '.second-title',
        '.second-content',
        '.second-hr',
        '.second-pic2_2',
    ],
    '.third-screen': [
        '.third-pic',
        '.third-title',
        '.third-hr',
        '.third-content',
        '.third-tips',
    ],
    '.forth-screen': [
        '.forth-title',
        '.forth-hr',
        '.forth-content',
        '.forth-img1',
        '.forth-img2',
        '.forth-img3',
        '.forth-img4',
    ],
    '.fifth-screen': [
        '.fifth-pic',
        '.fifth-title',
        '.fifth-hr',
        '.fifth-content',
    ]
}

//页面载入时各屏动画效果回归初始状态
var setScreenAnimationInit = function (screenCls) {
    var animationElements = screenAnimationElement[screenCls];
    for (var i = 0; i < animationElements.length; i++) {
        var element = document.querySelector(animationElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute("class", baseCls + ' ' + animationElements[i].substr(1) + '-init');
    }
}

//随页面滚动各屏分别播放动画效果
var setScreenAnimationDone = function (screenCls) {
    var animationElements = screenAnimationElement[screenCls];
    for (var i = 0; i < animationElements.length; i++) {
        var element = document.querySelector(animationElements[i]);
        var baseCls = element.getAttribute('class');
        element.setAttribute("class", baseCls.replace("-init", "-done"));
    }
}


var ul_items = getAllElt(".right-li-item");
var a_items = getAllElt(".outline-a");
var ud = getElt(".underline");


//导航栏动画
var switchNavActive = function (idx) {
    for (var i = 0; i < ul_items.length; i++) {
        ud.style.left = 0 + "px";
    }
    ud.style.left = ((4-idx) * 94) + "px";
}


window.onload = function () {
    for (k in screenAnimationElement) {
        if (k === ".first-screen") {
            continue;
        }
        setScreenAnimationInit(k);
    }
}
switchNavActive(4);
window.onscroll = function () {
    var top = document.documentElement.scrollTop;
    if (top > 150) {
        var head = getElt(".head-top"),
            b = getElt(".left-title-b"),
            ul = getElt(".right-nav-ul"),
            out = getElt(".outline");
        addCls(head, "head-top-ani");
        addCls(b, "left-title-b-ani");
        addCls(ul, "right-nav-ul-ani");
        addCls(out, "outline-ani");
    } else {
        var head = getElt(".head-top"),
            b = getElt(".left-title-b"),
            ul = getElt(".right-nav-ul"),
            out = getElt(".outline");
        delCls(head, "head-top-ani");
        delCls(b, "left-title-b-ani");
        delCls(ul, "right-nav-ul-ani");
        delCls(out, "outline-ani");
        switchNavActive(4);
    }


    if (top > 0) {
        setScreenAnimationDone(".first-screen");
    }
    if (top >= 580 - 60) {
        setScreenAnimationDone(".second-screen");
        switchNavActive(3);
    }
    if (top >= 1160 - 60) {
        setScreenAnimationDone(".third-screen");
        switchNavActive(2);
    }
    if (top > 1740 - 60) {
        setScreenAnimationDone(".forth-screen");
        switchNavActive(1);
    }
    if (top > 2320 - 60) {
        setScreenAnimationDone(".fifth-screen");
        switchNavActive(0);
    }

}

//实现导航栏双向绑定
var navTopJump = function (i) {
    var item = ul_items[i];
    item.onclick = function () {
        document.documentElement.scrollTop = (4 - i) * 640;
    }
}
var navRightJump = function (i) {
    var item = a_items[i];
    item.onclick = function () {
        document.documentElement.scrollTop = i * 640;
    }
}
for (var i = 0; i < ul_items.length; i++) {
    navTopJump(i);
}
for (var i = 0; i < a_items.length; i++) {
    navRightJump(i);
}

//网页打开时直接播放第一屏动画
setTimeout(setScreenAnimationDone(".first-screen"), 500);

//导航栏下划线动画

var setUd = function (idx, lib) {
    lib[idx].onmouseover = function () {
        ud.style.left = ((4 - idx) * 94) + "px";
    }
    var activeIdx = 0;
    lib[4 - idx].onmouseout = function () {
        for (var i = 0; i < lib.length; i++) {
            if (getCls(lib[4 - i]).indexOf("right-li-ani") > -1) {
                activeIdx = i;
                break;
            }
        }
        ud.style.left = (activeIdx * 94) + "px";
    }
}

for (var i = 0; i < ul_items.length; i++) {
    setUd(i, ul_items);
}