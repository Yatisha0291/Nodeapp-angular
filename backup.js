/*
console
setInterval
setTimeout
clearInterval
clearTimeout
Libraries - Math,date work here
*/

const fs = require("fs");

const obj=require('./second');

obj.fun();
console.log(obj.crew);
fs.readFile("package.json", "utf8", function(err, data){
    if(err)
    console.log("Not able to read file");
    else
    console.log(data);
});

console.log("after file read");



