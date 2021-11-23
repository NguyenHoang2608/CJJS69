const numbers = [1, 8, 3, 2, 5, 0, 10, 8, 20, 22];
let a = [];

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i]%2 == 0){
//        a.push(numbers[i]);
//     }
    
// }
// console.log(a);

// //filter

// function test(number){
//     if(number %2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let res = numbers.filter(test)
// console.log(res);

// let res1 = numbers.filter(function (number){
//     if(number %2 == 0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(res1);

// function sum(a,b){
//     return a+b;
// }
// const sum1 = (a,b)=>{
//     return a+b;
// };

// const sum1 = (a,b)=> a+ b;
// function test(number){
//         if(number <  10){
//             return true;
//         }else{
//             return false;
//         }
//     }
// let res = numbers.filter(test);    
// console.log(res);

// let resMap = numbers.map((number) => number + 2)
// console.log(resMap);

// const values = [1, true, {}, "", [], "1"];

// const types = values.map((values)=>typeof(values));
// console.log(types);

// //index of 
// let indexofRes = numbers.indexOf(8);
// console.log( indexofRes);
// let indexofRes1 = numbers.lastIndexOf(8);
// console.log( indexofRes1);

// //includes
// let includes1 = numbers.includes(8);
// console.log(includes1);


// //concatRes 
// let num1= [1,2];
// let num2= [3,4];
// let concats = num1.concat(num2);
// console.log(concats);


// // some 
// let someRes = numbers.some((number)=>number %2 == 0);
// console.log(someRes);

// //every
// let everyRes1 = numbers.every((number)=>number %2 == 0);
// console.log(everyRes1);


// const a1 = [1,2,3,4,5,6,7,8];
// a1.reverse();
// console.log(a1);
// console.log(a1.join(""));

// function difference(arr1,arr2) {
//     let array = arr1.concat(arr2);
//     let unq = [];
//     for (let i = 0; i < array.length; i++) {
//         if(unq.includes(array[i]))
//         continue;
//         else unq.push(array[i]);
//     }
//     return unq;
//   }
//   console.log(difference([1, 2, 3], [100, 2, 1, 10]));


// function findMin(arr){
//     let min  = arr[0];
//     for(let val of arr){
//         if(min>val){
//             min = val;
//         }
//     }
//     return min;
// }
// //templace 
// let myName = "Quang ";
// let company= "áđâs ";
// let className= "khoa 2 ";



// //destructuring {array,object}
// //array
// let skills = ["Js","Go","java",];
// // let js = skills[0];
// // let go=skills[1];
// //let [js,go,java] = skills;
// //console.log[js,go];

// let [, go, ...res] = skills;
// console.log(go)
// console.log(res);


//Rest / spread
// const sum = (...params)=>{
//     let total = 0;
//     params.forEach((items) => (total+= items))
//     console.log(total);
// }
// sum(1,2,3,4,5);

let arr1 = [1,2,3];
let arr2 = [4,5,6];
// console.log(arr1.concat(arr2));

// console.log([1,2, ...arr2,3])
  

let arr3 = [...arr1.concat(arr2)];
console.log(arr3)