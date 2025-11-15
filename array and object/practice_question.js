console.log("Hello bachooooooo....");
//Question 1->
// runTwice(function greet(){
//     console.log("Ram Ram bhai sareyane..");
// }
// );

// function runTwice(fn){
    
//     for(let i=1;i<=2;i++){
//          fn();
//     }
// }



//Question2->
//pure function ->aisa function jio same input pe same output de use pure fiunction kahte hai 
//impure function-> aisa function jo same input pe alag alag output degta ho aur uska side effect ho ..
//1->pure function->
// function pure(a,b){
//     console.log(a+b);
// }
// pure(2,3);
// pure(2,3);




//2-> Impure Function->
// let global=0;
// function impure(a){
//     global++;
//     console.log(global+a);
// }
// impure(2);
// impure(2);
// impure(2);



//question3-> write a function that uses a object destructuring inside parameter to extract and print name and age 

// function abcd({name,age}){
//     console.log(name);
//     console.log(age);
// }
// abcd({name:"Divyanshu",age:18});




// let obj={
//     name:"harsh",
//     age:10,
//     fnc:function(){
//         console.log(this);
//         let fnc2= () =>{
//         console.log(this);
//     };
//     fnc2();

//     }
    
// };
// console.log(this);//globally
// obj.fnc();
//This Keyword-->
//1-> this keyword ki value change hoti according to thier place means wo kaha likha gya hai
//2-> agar thi sglobally likha gya hia to uski value window hogi;
//3-> agr this ek arrow function ke andar likha gaya hia to us function ka jo parent hoga uski value hogi;
//4-> agar this kisi function ke andar likha gya hai to this ki value jo real value hai wo hogi






//using map()-->
// let arr=[1,2,3,4,5];
// let newarr=arr.map(function(val){
//     return val*val;
// });
// console.log(newarr);





//use filter to get only even number->
// let arr=[1,2,3,4,5,6,7,8];
// let newarr=arr.filter(function(val){
//     if(val%2==0)return val;
// })
// console.log(newarr);




// let salary=[1000,2000,3000,4000];
// let ans=salary.reduce(function(acc,val){
//     return acc+val;
// },0);
// console.log(ans)



//create and object user and test the behaviour of object
// freeze() and object.seal() by adding and changing keys.
 
let user={
    name:"Divyanshu",
    age:21,
    profession:"Student"
}
console.log(user.name);
console.log(user);
user.profession="Enginner";
console.log(user);


//imprtand freeze()->data change nhi hogi freeze ho jati hai.
//freeze() -. isme na value add kar skte hai na hi value change kar skte hai 
// Object.freeze(user);
// user.profession="Businessman";
// console.log(user);

//seal()->isme valye change ho jati hai
//isme value change kar skte hia but nayi value add nhi kar skte jo exist na kar raha ho..

