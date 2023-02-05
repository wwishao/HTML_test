const fs = require('fs');

//2. 调用方法读取文件
// fs.readFile('./resources/为学.md', (err, data)=>{
//     //如果失败, 则抛出错误
//     if(err) throw err;
//     //如果没有出错, 则输出内容
//     console.log(data.toString());
// });


// Pomise 方法
const p = new Promise((resolve, reject) => {
    fs.readFile('尚硅谷ES6教程/代码/ES6/ES6_Promise/resources/为学.md',(err,data)=>{
        if(err) reject(err);
        resolve(data);
    })
});

p.then(function (value){
    console.log(value.toString());
},function(reason){
    console.log('读取失败');
})