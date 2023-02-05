const fs = require('fs');
const { resolve, join } = require('path');
const p = new Promise((resolve, reject) => {
    fs.readFile('尚硅谷ES6教程/代码/ES6/ES6_Promise/resources/为学.md', (err, data) => {
        if (err) reject(err); //失败标记
        resolve(data); //成功
    })
});

p.then(
    value => {
        return new Promise((resolve, reject) => {
            fs.readFile('尚硅谷ES6教程/代码/ES6/ES6_Promise/resources/插秧诗.md', (err, data) => {
                resolve([value, data]); //成功
            })
        })
    }).then(value => {
        return new Promise((resolve, reject) => {
            fs.readFile('尚硅谷ES6教程/代码/ES6/ES6_Promise/resources/观书有感.md', (err, data) => {
                value.push(data);
                resolve(value)
            })
        })
    }).then(value => {
        console.log(value.join('\r\n'));
    })