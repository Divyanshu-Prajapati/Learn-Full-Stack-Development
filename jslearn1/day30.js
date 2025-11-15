// <---  Day 30 -->
// <-- Operaters in javascript -->

// 1->Arithmatics operators
//+ - * / ** %

//% modulo ka matlab hai remaider
//agar aisa ho ki devide karne wala jyada ho aur devide ho rha hai wo kam ho 
//to zero baar me divode hode aur zero bbaar me devide ho rha hai to jise hum devoide kar rhe hai wo value puri bach jayegi aur whi humara answer hoga ..

//**  iska measn hota exponenet measn power 

// 2-> Assignment operators-->
//=  +=  -=  *=  /=  %=

//3--> Comparison Operator --->
// ==, ===, !=, !==, >, <, >=, <=..
//==  -> never use this its not strict
//=== -> always use this its strict 
// let a="10";
// let b=10;
// console.log(a==b);

// let c="20";
// let d=20;
// console.log(c===d);

//measn == only value check karta hai uske data type ko nhi check karta hai

// != -> not use this its not strict 
// !== ->always use this its strict 

// let a=20;
// let b="20";
// console.log(a!=b);

// let c=20;
// let d="20";
// console.log(c!==d);


//4-> Logical Operator -->
//&& || !



//5--> Ternary Operator--->
// condition ? true statement : false statement;



//6--> Type Checking Operators --->
//typeof
//instanceof

// let a=12+"33";
// console.log(typeof(a));



//7-> String Operator-->(for concatenation)
//ye string me jodta hai 



//8->spread /Rest operator->
//9->Nullishing Coalescing Operator->



//10->Optianal Chaining->
// like hum object banate hai {house->room->315 }
// so ab hume 315 acces karna hai --> house.room.315. -->agar 315 nhi hua to error de dega isi se bachne ke liye optional chaining use karte hai
// house?.room?.315 --> it is optional Chaining 


//variable hoisting -->
// means variable ko banane se pahle bhi use kar skte hai like 
// ex->
// console.log(a);
// var a=10;
//  o/p-> optput iska aata hai undefined
//error nahi aata hia aisa isliye hota hai kyuki varible do part me break hota hai
// var a=10; breaks into 
// var a;
// a=10;


// so ye hoisting let ke sath kaam nhi karta 
// so error aata hia isme 
// temporal dead zone hota hia 
// means hum jaha variable banate hai uske uper se starting tak temporal dead zone hota hai
// so hum temporal dead zone me access nahi kar skte hai




