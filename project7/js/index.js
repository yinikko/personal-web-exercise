//alert('hi');
//设置页头下拉菜单事件
var imooc = document.getElementsByClassName('right-six')[0];
var ul = document.getElementById('right-ul');
var name_remind = document.getElementsByClassName('remind')[0];
var remind_content = document.getElementsByClassName('name_remind')[0];
var input = document.getElementsByClassName('user_input');
var li_p = document.getElementsByClassName('li_p');
var span_li = document.getElementsByClassName('span_check');
var agree=document.getElementsByClassName('agree-button')[0];
var button=document.getElementsByClassName('next')[0];
//设置工具变量记录各输入框的输入情况
var item=true;
var family = {
    user: input[0],
    pwd: input[1],
    re_pwd: input[2],
    name: input[3],
    ID_number: input[4],
    email: input[5],
    phone: input[6]
};

var p = {
    user: li_p[0],
    pwd: li_p[1],
    re_pwd: li_p[2],
    name: li_p[3],
    ID_number: li_p[4],
    email: li_p[5],
    phone: li_p[6]
}

var pattern = {
    user: /^[a-zA-Z]\w{5,29}$/,
    name: /^[\u4e00-\u9fa5]{2,15}$|^[a-zA-Z]{3,30}$/,
    ID_number: /^[1-9]\d{17}$|^[1-9]\d{16}[Xx]$/,
    email: /^[\w-]+@[\w-]+(\.[\w-]+)+$/,
    phone: /^1[3-9]\d{9}$/
}

var wrong = {
    user: "6-30位字母，数字或'_'字母开头",
    pwd: "6-20位字母，数字或符号",
    re_pwd: ["输入框不能为空", "两次密码输入不一致，请重新输入"],
    name: "姓名只能包含中文或英文，且中文在2-15，英文在3-30间",
    ID_number: "请输入18位身份证号码",
    email: "邮箱不能为空",
    phone: "您输入的的手机号码不是有效的格式"
}

var right = {
    user: "用户名输入正确",
    pwd: "",
    re_pwd: "两次输入一致",
    name: "姓名输入正确",
    ID_number: "号码输入正确",
    email: "邮箱格式正确",
    phone: "手机格式正确"
}

//设置判断输入函数
function check(input, p, pattern, right, wrong) {
    //获得焦点时清除提示
    input.onfocus = function () {
        p.innerHTML = "";
        // alert('11');
    }
    //失去焦点时判断输入
    input.onblur = function () {
        item=true;
        if (pattern.test(this.value)) {
            p.innerHTML = right;
            p.style.color = 'green';
        } else {
            p.innerHTML = wrong;
            p.style.color = 'red';
            item=false;
        }
    }

}


check(family.user, p.user, pattern.user, right.user, wrong.user);
check(family.ID_number, p.ID_number, pattern.ID_number, right.ID_number, wrong.ID_number);
check(family.email, p.email, pattern.email, right.email, wrong.email);
check(family.phone, p.phone, pattern.phone, right.phone, wrong.phone);

//设置登陆密码验证
family.pwd.onfocus = function () {
    span_li[1].style.backgroundColor = "rgb(204, 204, 204)";
    span_li[2].style.backgroundColor = "rgb(204, 204, 204)";
    p.pwd.innerHTML = "";
}
family.pwd.onblur = function () {

    item=true;
    var pwd0= /^\S{6,20}$/,
        pwd1= /^[0-9]{6,20}$|^[a-zA-Z]{6,20}$|^(\W){6,20}$/,
        pwd2= /^[0-9a-zA-Z]{6,20}$|^[\W|a-zA-Z]{6,20}$|^[\W|0-9]{6,20}$/,
        pwd3= /\W[0-9a-zA-Z]*/;
    if(!pwd0.test(family.pwd.value)) {
        item=false
        p.pwd.innerHTML = wrong.pwd;
        p.pwd.style.color = "red";
        span_li[1].style.backgroundColor = "rgb(204, 204, 204)";
        span_li[2].style.backgroundColor = "rgb(204, 204, 204)";
    }
    if (pwd1.test(family.pwd.value)) {
        span_li[0].style.backgroundColor = "red";
    } else if (pwd2.test(family.pwd.value)) {
        span_li[1].style.backgroundColor = "orange";
    } else if (pwd3.test(family.pwd.value)) {
        span_li[1].style.backgroundColor = "orange";
        span_li[2].style.backgroundColor = "green";
    }
}

//设置确认密码验证
family.re_pwd.onfocus=function(){
    p.re_pwd.innerHTML = "";
}

family.re_pwd.onblur=function(){
    item=true;
    if(family.re_pwd.value==""){
        p.re_pwd.innerHTML=wrong.re_pwd[0];
        p.re_pwd.style.color="red";
        item=false;
    }else{
        if(family.re_pwd.value==family.pwd.value){
            p.re_pwd.style.color="green";
            p.re_pwd.innerHTML=right.re_pwd;
        }else{
            item=false;
            p.re_pwd.style.color="red";
            p.re_pwd.innerHTML=wrong.re_pwd[1];
        }
    }
}

//姓名验证
family.name.onfocus=function(){
    name_remind.style.display="inline-block";
    p.name.innerHTML="";
}

family.name.onblur=function(){
    item=true;
    if(pattern.name.test(this.value)){
        p.name.innerHTML=right.name;
        p.name.style.color="green";
        name_remind.style.display="none";
    }else{
        p.name.innerHTML=wrong.name;
        p.name.style.color="red";
        name_remind.style.display="none";
        item=false;
    }
}

//设置提交按钮事件
//跳转
button.onclick=function(){
    if(agree.checked&&item==true){
        window.location.href="https://www.imooc.com/";
    }else{
        window.location.href="";
    }
}


//设置下拉菜单和姓名提示函数
function remindFun(member1, member2) {
    member1.onmouseover = function () {
        member2.style.display = "block";
    }

    member1.onmouseout = function () {
        member2.style.display = "none";
    }
}

remindFun(imooc, ul);
remindFun(ul, ul);
remindFun(name_remind, remind_content);