// alert("done");
//当前屏具有动画效果的元素
var screenAnimationElement = {
    '.first-screen': [
        '.first-title',
        '.first-content',
    ],
    '.second-screen':[
        '.second-title',
        '.second-content',
        '.second-hr',
        '.second-pic2_2',
    ],
    '.third-screen':[
        '.third-pic',
        '.third-title',
        '.third-hr',
        '.third-content',
        '.third-tips',
    ],
    '.forth-screen':[
        '.forth-title',
        '.forth-hr',
        '.forth-content',
        '.forth-img1',
        '.forth-img2',
        '.forth-img3',
        '.forth-img4',
    ],
    '.fifth-screen':[
        '.fifth-pic',
        '.fifth-title',
        '.fifth-hr',
        '.fifth-content',
    ]
}

function setScreenAnimation(screenCls) {
    var screen = document.querySelector(screenCls); //获取当前屏元素
    var animationElements = screenAnimationElement[screenCls];
    var isSetAnimationClass = false; //判断是否初始化子元素样式
    var isAnimationDone = false;
    screen.onclick = function () {
        if (isSetAnimationClass === false) {
            for (var i = 0; i < animationElements.length; i++) {
                var element = document.querySelector(animationElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute("class", baseCls + ' ' + animationElements[i].substr(1) + '-init');
            }
            isSetAnimationClass = true;
            return;
        }
        if (isAnimationDone === false) {
            for (var i = 0; i < animationElements.length; i++) {
                var element = document.querySelector(animationElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute("class", baseCls.replace("-init", "-done"));
            }
            isAnimationDone = true;
            return;
        }
        if (isAnimationDone === true) {
            for (var i = 0; i < animationElements.length; i++) {
                var element = document.querySelector(animationElements[i]);
                var baseCls = element.getAttribute('class');
                element.setAttribute("class", baseCls.replace("-done", "-init"));
            }
            isAnimationDone = false;
            return;
        }
    }
}

for(k in screenAnimationElement){
    setScreenAnimation(k);
}