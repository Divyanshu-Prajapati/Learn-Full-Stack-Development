// function hello(){
//     console.log("hello bruh padh likh le!!!");
// }
// hello();



// function sum(a,b){
//     let ans=a+b;
//     console.log("sum is :- "+ans);
// }
// sum(2,9);




// function yup(name="guest"){
//     console.log(`hi ${name}`);
// }
// yup();


//METHOD 1-->
// function unlimited(...nums){
//     //ab nums ek rest opoerator hai 
//     //nums ek array hai..
//     let sum=0;
//     nums.forEach(function(val){
//         sum=sum+val;  
//     })
//     console.log(`Sum of ${nums} is:- ${sum}`);

// }
// unlimited(1,2,3,4,5,6);




// REDUCE--> ye array ko ek single value me banata hai ..
// METHOD 2 -->
// function addnumbers(...nums){
//     let ans=nums.reduce(function(acc,val){
//         return acc+val;
        
//     },0);
//     console.log(ans);
// }

// addnumbers(2,1,33,1);



//IIFE-->Immediately invoked function - jo turant chal jaye ..
// (function(){
//  console.log("mai to turant chal gya");
// })();



//closure-->
// function outer(){
//     let a=10;
//     function inner(){
//         console.log(a+10);
//     }
//     inner();
// }
// outer();



//create a list of array of five fruits and add one at the end and remove one from beginning ..
// let arr=["apple","orange","banana","lichi","mango"];
// arr.push("newapple");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift("pahleApple");
// console.log(arr);



//create an object-->
// let identity={
//     name:"dkp",
//     age:20,
//     city:"Gorakhpur CM City"
// }
// console.log(identity.name);
// console.log(identity.city);
// for(variablename in Objectname){

// }
// for(let key in identity){
//     console.log(identity[key]);
// }



// use settimeout() to log("time is up") after 2 sec-->
// setTimeout(function(){
//     console.log("Time is up !!");
// },5000)//here 5000-> means 5sec delay to log 