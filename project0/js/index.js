
function Elem(id) {
    this.elem = document.getElementById(id);
}


Elem.prototype.html = function(val) {
    let elem = this.elem;
    if (val) {
        elem.innerHTML = val;
        return this;
    } else {
        return elem.innerHTML;
    }
}

Elem.prototype.on = function(type, fn) {
    document.addEventListener(type, fn);
    return this;
}

var div1 = new Elem('num');
div1.html('<p>222</p>').on('click', function(){
    alert('click');
})

