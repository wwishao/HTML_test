function animate(obj,width,callback) {
    clearInterval(obj.countDown);
    obj.countDown = setInterval( function () {
    if(obj.offsetLeft == width ){
            clearInterval(obj.countDown);
            //回调函数写到定时器结束里面
            if(callback){  // 检查有没有callback函数 传进来
                callback(obj);
            }
}
// 把每次加1这个步长值改为个慢慢变小的值 步长公式: (目标值-现在的位置) / 10
// //把我们步长值改为整数不要出现小数的问题
// var step = Math.ceil((width - obj.offsetLeft) / 10);
    var step = (width - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        obj.style.left = obj.offsetLeft +  step  + 'px';
},15);
}