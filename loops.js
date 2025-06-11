// loops 
//array.map()=> transform each element and return a new array
//  const nums = [1,2,3];
//  const double = nums.map(n=> n*2); ///[2,4,6]
// console.log(double);

// const nums = [1,2,3];
//  const double = nums.map(data, index) => {
//     console.log(data, index*2);
//     return data * 2
//  }


// array.filter() => returns elements that match a condition
// const nums =[1,2,3];
// const even = nums.filter(n => n % 2 === 0);
// console.log(even)



//array.find()=> find first element matching condition
// const nums= [1,2,3];
// const found = nums.find(n=> n>1);   //2
// console.log(found)

//array.some()=> check if **any** element matches conditon
// const nums=[1,2,3];
// const haseven= nums.some(n=>n%2===0);  //true
// console.log(haseven);


//array.every()=> check if **all** elements match condition
// const nums=[1,2,3];
// const allpositive= nums.every(n=>n>0);   //true
// console.log(allpositive)

//array.foreach()=> doesnt act as collective
// const nums=[1,2,3]; 
// nums.forEach((data, index)=>{
//     console.log(data*index);      //0,2,6
// })




//array.reduce()=> reduce array to a single value  
// const nums=[1,2,3];
// const sum= nums.reduce((acc, curr)=> acc + curr,0);    //6
// console.log(sum);



