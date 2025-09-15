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
/*const myb=document.getElementById("myb");
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
}*/
//ternary operator;
/*let age=12;
let message=age>=18 ? "you are an adult":"you are not an adult";
console.log(message);
let time=10;
let greet =time > 10 ? "Good Morning": "Good afternoon";
console.log(greet);*/
//switch case 
//pad.end and pad.start function.rplaceWith also in string
//string slicing
/*const fullname="tushar kr";
//let firstname=fullname.slice(0,6);
//let lastname=fullname.slice(7);
let firstname=fullname.slice(0,fullname.indexOf(" "));
let lastname=fullname.slice(fullname.indexOf(" ")+1);
console.log(firstname);
console.log(lastname);
const email="tushar@gmail.com";
let username=email.slice(0,email.indexOf("@"));
let extension=email.slice(email.indexOf("@")+1);
console.log(username);
console.log(extension);*/
//method chaining
//------NO METHOD CHAINING;
/*let username =window.prompt("Enter your username: ")
username=username.trim();
let letter=username.charAt(0);
letter=letter.toUpperCase();
let extra=username.slice(1);
extra=extra.toLocaleLowerCase();
username=letter+extra;
console.log(username);*/
//---METHOD CHAINING---
/*let username =window.prompt("Enter your username: ");
username=username.trim().charAt(0).toUpperCase() +username.trim().slice(1).toLowerCase();
console.log(username); */
//logical operators same as c++
//using of while loop for restriction
/*let username="";
while(username === "" || username === null){
    username = window.prompt("Enter your name");
}

console.log(`hello ${username}`);*/
/*let login=false;
let username;
let pass;
while(!login){
    username=window.prompt(`Enter your name`);
    pass=window.prompt(`Enter password`);
    if(username ==="tushar" && pass ===  "tushar"){
        login=true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials");
    }
}*/
//NUMBER GUESSING GAME
/*const minnum=1;
const maxnum=100;
const answer=Math.floor(Math.random()*(maxnum - minnum + 1)) + minnum;
console.log(answer);
let attempt=0;
let guess;
let running=true;
while(running){
guess=window.prompt(`guess a number between ${minnum} - ${maxnum}`);
guess=Number(guess);
if(isNaN(guess)){
    window.alert("please enter a valid number");
}
else if(guess < minnum || guess> maxnum){
    window.alert("please enter a valid number");
}
else{
    attempt++;
    if(guess<answer){
        window.alert("TOO LOW try again");
    }
    else if(guess>answer){
        window.alert("TOO high try again");
    }
    else{
        window.alert(`Correct! The answe was ${answer}.It took you ${attempt} attempt.`);
        running=false;
    }
}   
}*/
 //functions,variable and globally decleration
 //temperatue convertor for degree alt+0176
 /*const box=document.getElementById("box");
 const tof=document.getElementById("tof");
 const toc=document.getElementById("toc");
 let temp;
 function convert(){
    if(tof.checked){
        temp=Number(box.value);
        temp=temp * 9 / 5 + 32;
        result.textContent=temp.toFixed(1)+"°F";

    }
    else if(toc.checked){
        temp=Number(box.value);
        temp=(temp-32) * (5/9);
        result.textContent=temp.toFixed(1)+"°C";
    }
    else{
       result.textContent="SELECT A UNIT";
    }
 }*/
 //ARRAY and spread operator...
 //DICE ROLLER
 /*function rolldice(){
    const numofdice=Number(document.getElementById("nod").value);
    const diceresult=document.getElementById("result");
    const image=document.getElementById("images");
    const values=[];
    const images=[];
    for (let i=0;i<numofdice;i++){
        const value=Math.floor(Math.random()*6)+1; 
        values.push(value);
        images.push(`<img src="public/pictures/${value}.svg" alt="Dice ${value}>`);
    }
    diceresult.textContent=`dice values are: ${values.join(', ')}`;
    image.innerHTML=images.join('');
 }*/
/*function rolldice() {
    const numofdice = parseInt(document.getElementById("nod").value, 10);

    

    const diceresult = document.getElementById("result");
    const image = document.getElementById("images");

    const values = [];
    const imagesArr = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        const path = `pictures/${value}.svg`;
        console.log("Trying to load:", path);
        values.push(value);
        imagesArr.push(`<img src="${path}" alt="Dice ${value}" style="width:60px; margin:5px;">`);
    }

    diceresult.textContent = `Dice values are: ${values.join(", ")}`;
    image.innerHTML = imagesArr.join("");
}*/
//RANDOM PASS GENERATOR
/*in this we need 4 four const with false then pass them in a function whith string like lc=abc and for all same then make constraint for pass lenth and use random inbuilt function;
*/
 
 


