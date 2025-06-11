//function

// function greet(name, callback){
//     console.log(`hello ${name}`);
//     callback();
// }

// //callback function 
// function callme(){
//     console.log('its a callback funtion!');
// }

// //passing function as an argument
// greet('peter', callme)

// Console after 2 sec delay
// setTimeout(() => console.log("Hello world!"), 2000)
// setInterval(() => console.log("Hello world!"), 2000)




function greetuser(name, anju){


 console.log(`hello ${name}`);
anju()}
greetuser('peter', anju)