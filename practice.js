//asycronous task  in javascript
// console.log("task1");

// //console after 2 seconds
// setTimeout(() => {
//     console.log("hello world")
// },2000);

// //console after 3 seconds
// setInterval(()=> {
//     console.log("hello world")
// },3000);


// Callback
// 1. Create a function greetUser that accepts a name and a callback function
function greetuser(name, callback){


 console.log(`hello ${name}`);
callback();
}
 function tata(){
   console.log('its a callback funtion!')
 }
greetuser('momo',tata); 