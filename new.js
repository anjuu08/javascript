// const array= [1,2,3,4,5,6];
// array.push(7,8,9)

// array.pop(6)

// console.log(array.length)
// console.log(array.length)


// console.log(array.shift())
// console.log(array)








// const num=[1,2,3,4,5,6,7,8,9,10];
// const double= num.map(n=>n*2);    //2,4,6,8,10,12,14,16,18,20
// console.log(double);


// const double= num.map(n=>n*2);
// console.log();


// const even = num.filter(n => n % 2 === 0);   //2,4,6,8,10
// console.log(even);

// const greater = num.filter(n => n >5);  //6,7,8,9,10
// console.log(greater);

// const found = num.find(n=> n>3);   //4
// console.log(found)


// const found = num.find(n=> n%4==0);   //4
// console.log(found)

// const isgreater= num.some (n=> n<0);     //false
// console.log(isgreater);

// const isgreater= num.some (n=> n>8);    //true
// console.log(isgreater);


// const lessorequal= num.every(n=>n<= 10);   //true
// console.log(lessorequal);

// const allpositive= num.every(n=>n>0);   //true
// console.log(allpositive)

// num.forEach((data, index)=>{
// console.log(data*index);   //0,2,6,12,20,30,42,56,72,90
// })



// num.forEach(()=>{
// console.log();   
// })


// const sum= num.reduce((acc, curr)=> acc + curr,0);   //55
// console.log(sum);


// for => Loop when you know how many times to run
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// while => Loop until a condition becomes false
// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do...while => Run at least once before checking the condition
// let j = 0;
// do {
//   console.log(j);
//   j++;
// } while (j < 5);

// for...in => Loop through object keys (properties)
// const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// for...of => Loop through iterable values (arrays, strings, etc.)
// const arr = [10, 20, 30];
// for (let val of arr) {
//   console.log(val);
// }

// forEach => Loop through array items (cannot break or return)
// arr.forEach((val, index) => {
//   console.log(index, val);
// });

// for await...of => Loop through async iterable data
// const urls = ['url1', 'url2'];
// async function fetchAll() {
//   for await (let url of urls) {
//     console.log(url);
//   }
// }


// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// for(let i=10;i>0;i--){
//     console.log(i);

// }

// let i=10;
// while(i > 0){
//     if(i%2===0)
//     console.log(i);
//     i--;
    
// }

// const obj={ name:"sophia",  age: 18, country: "nepal"};
// for(let key in obj){
//     console.log(key, obj[key]);
// }


// const array=[1,2,3,4,5]
// for(val of array){
//     console.log(val);
// }

// const string="sophia"
// for(char of string){
//     console.log(char);
// }
// console.log();



// blacktick
// const  personName ="ramesh";
// console.log("Hello,"+personName);
// console.log("hello,${personName}");


//var
// var sum= 2;
// function add(){
//     var sum = 10+20;
//     console.log(sum);      //30 2

// }
// add();
// console.log(sum);


// //array  destructuring
// const[a,b]=[1,2];
// console.log(a,b);


// //object destructuring
// const user ={name:"hari", age:30};
// const{name , age}=user;
// console.log(user);


// // Assign parameter value 
// function greet(name="guest"){
//  console.log(`hello, ${name}`);    // hello, deepana
// }
// greet('deepana')


// //spread operator
// const arr1=[1,2];
// const arr2= [...arr1, 3,4];   //[1,2,3,4]
// console.log(arr2);


// const userDetail ={name: "sita"};
// const newUser= {...userDetail, age:25};    //{name: 'sita', age: 25}
// console.log(newUser);



// //Rest parameters
// function sum(...nums){
//     return nums.reduce((acc,curr)=> acc+ curr);     //3anju
// }
// console.log(sum(1,2, 'anju'))


//optional chaining\
// const userProfile = {profile: {name:"sita"}};
// console.log(userProfile)




// // optional chaining 
// const userProfile = {profile: undefined};
// console.log(userProfile?.profile?.name);

const profile= {
    profile: {
        name: "ram"
    }
};
const userProfileName = profile.profile?.name;
const phone = profile. contact?.phone;



// // nullish coalescing
// const input= null;
// const result = input ?? "guest";
// console.log(result);




// // double not(!!)
