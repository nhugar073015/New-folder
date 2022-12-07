//import {n} from "./app1"
const app = require('./app')
const app1 = require("./app1")
const fs = require('fs')
const http = require('http');
const colour = require('colours');
console.log("--------------Assignment of var----------------------")
let x=10; 
let y=x;
x=55; // OK , Copy the Value
console.log(y);//10
console.log(x);//55
console.log("a+b+x=", app.a+app.b+x);//100
console.log("--------------declaring and printing arrayr----------------------")
const arr = [10,20,30,40,50,30];// [10, 20, 30, 40, 50, 30]
console.log(arr);
console.log("---------------import data from different file------------------")
console.log(app);
console.log(app.a);
console.log(app.b);
console.log(app.z());
console.log("----------------filter on array----------------------------------")
let result=arr.filter((item)=>{
    return item===30
    
})
console.log(result);                //[30, 30]
let result1=arr.filter((item)=>{
    return item>=30
    
})
console.log(result1);           //[30, 40, 50, 30]

console.log("-------------------Importing from app1------------------------------")
console.log(app1.n)
console.log("-----------------Importing fs and creating file and writing content on it---------------")

fs.writeFileSync("hello.txt","Text message inside hello.txt")

console.log("-------------------printing directory and current file------------------------------")
console.log('Current Directory :',__dirname.red);
console.log("Current file name: ",__filename.green); 

console.log("-----------------inport http and use it --------------------------------------------")
http.createServer((req,resp)=>{
    resp.write("<h1>Hello NodeJS</h1>");
    resp.end();
}).listen(4500)

http.createServer((req,resp)=>{
    resp.write("<h1>Hi NodeJS</h1?");
    resp.end();
}).listen(5500)

console.log('Hello in red'.red);