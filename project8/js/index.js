// 点击下拉框绑定显示下拉菜单
$('.select-head').click(() => {
    $('#out').text('');
    // 将搜索框内容清空
    $('.select-input').val("");
    if($('.select-body').css('display')=='none'){
        $('.select-body').css('display','block');
    }else{
        $('.select-body').css('display','none');
    }
});

//点击空白处隐藏下拉菜单
$(document).click((argument) => {
    if (!argument.target.classList.contains('s')) {
        $('.select-body').css('display', 'none');
    }
})

// 点击选项改变select框内容以及列表下方文本
// 设置初始旧值内容
let oldStr = '未选择';
let oldValue = 'underfined'
$('li').on('click',function(){
    $('.sp').text($(this).text());
    let newStr = $(this).text();
    let newValue = $(this).attr('value')
    let pStr = `
    之前的值是${oldStr}-${oldValue}`+"\n"+
    `改变之后的值是${newStr}-${newValue}
    `;
    // 修改旧值
    oldStr = newStr;
    oldValue = newValue;
    $('#out').text(pStr);
})

// 实现搜索功能
// 实时监听输入框变化
$('.select-input').on('input porpertychange',function(){
    let str = $(this).val();
    $('li').each(function(){
        let item =$(this).text().toLowerCase();
        if(item.indexOf(str.toLowerCase()) != -1){
            $(this).css('display', 'block');
        }else{
            $(this).css('display', 'none');
        }
    })
})



