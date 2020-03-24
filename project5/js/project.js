window.onload = function () {
    var tip = document.getElementsByTagName("span"),
        box = document.getElementsByClassName("box")[0],
        pics = document.getElementsByClassName("picture"),
        index = 0,
        timer = null;
    //浏览器兼容性处理

    //添加事件
    var addHandler = function (element, type, handler) {
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    }

    //切换图片和标题样式
    var changeImg = function () {
        for (var i = 0; i < 4; i++) {
            tip[i].className = "";
            pics[i].style.display = "none";
        }
        tip[index].className = "color";
        pics[index].style.display = "block";
    }

    for (var i = 0; i < 4; i++) {
        tip[i].setAttribute("data-id", i);
        addHandler(tip[i], "mouseover", function () {
            index = this.getAttribute("data-id");
            changeImg();
        })
    }
    //开启关闭图片轮播
    function autoStart() {
        timer = setInterval(function () {
            index++;
            if (index > 3) index = 0;
            changeImg();
        }, 1000)
    }

    function autoStop() {
        if (timer) {
            clearInterval(timer);
        }
    }


    
        autoStart();
        addHandler(box, "mouseover", autoStop);
        addHandler(box, "mouseout", autoStart);
        
    

}