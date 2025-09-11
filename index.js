//console.log(`Hello`);
//console.log( `I like you`)
//window.alert(`This is an alert`);
//window.alert(`i like cuties`)
//document.getElementById("tush").textContent=`HELLO`;
//document.getElementById("myp").textContent=`i like cutie`;
//let x;
//x=123;
//console.log(x);
/*let age=25;
let price=10.29;
let gpa=2.1;
console.log(typeof gpa);
console.log(age);
console.log(price);
console.log(gpa);
console.log(`you ara ${age} old`);
console.log(`the price is $${price}`);
console.log(`your gpa is ${gpa}`);
let firstname="Tushar";
console.log(typeof firstname);
console.log(`your name is ${firstname}`);
let online =true;
console.log(typeof online);
console.log(`he is online ${online}`);*/
/*let fullname="tushar kumar";
let age=34;
let student=true;
document.getElementById("p1").textContent = fullname;
document.getElementById("p2").textContent = `you are ${age} years old`;
document.getElementById("p3").textContent = `you are student ${student}`;*/
/*let username;
document.getElementById("mysubmit").onclick=function(){
    username=document.getElementById("mytext").value;
    document.getElementById("myh1").textContent=`HEllo ${username}`
}*/
/*let age=window.prompt("How old are you?");
age=Number(age);
age+=1;
console.log(age,typeof age);   */
/*const PI=3.14;
let radius;
let circum;
document.getElementById("mysubmit2").onclick=function(){
   radius=document.getElementById("mytext2").value;
    radius =Number(radius);
    circum=Number(circum);
    circum=2*PI*radius;
document.getElementById("myh3").textContent=circum+"cm";
}*/
//counter program
/*const decreaseb=document.getElementById("decreaseb");
const resetb=document.getElementById("resetb");
const increaseb=document.getElementById("increaseb");
const counter=document.getElementById("counter")
let count=0;
increaseb.onclick=function(){
count++;
counter.textContent=count;
}
decreaseb.onclick=function(){
count--;
counter.textContent=count;
}
resetb.onclick=function(){
count=0;
counter.textContent=count;
}*/
//math inbuilt function
//RANDOM NUMBER GENERATOR
/*const min=20;
const max=100;
let randomnum=Math.floor(Math.random() *(max-min))+min;
console.log(randomnum);
*/
const myb=document.getElementById("myb");
const myl=document.getElementById("myl");
const myl1=document.getElementById("myl1");
const myl2=document.getElementById("myl2");
const min=1;
const max=6;
let randomnum;
let randomnum1;
let randomnum2;
myb.onclick=function(){
    randomnum=Math.floor(Math.random() * max)+min;
    randomnum1=Math.floor(Math.random() * max)+min;
    randomnum2=Math.floor(Math.random() * max)+min;
    myl.textContent=randomnum;
     myl1.textContent=randomnum;
      myl2.textContent=randomnum;
}



