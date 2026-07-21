// Q1
// for(let i=1;i<=10;i++){
//     console.log(i)
// }



// Q2
// let naam=prompt("Enter your name:-  ")
// let a=prompt("Enter your age");
// if(a>=18){
//     console.log(` ${naam} is Eligible to Vote`);
// }
// else{
//     console.log(` ${naam} is not Eligible to Vote`);
// }



// Q3
// let a=5;
// for(let i=1;i<=10;i++){
//     let j=a*i;
//     console.log(`${a} * 1 = ${j}`);
// }



// Q4->Ask user for password and print access status Hardcoded correct password. Compare with user input.
// let currpass="abcd";
// let pass=prompt("Enter your current passwaord:- ");
// if(currpass===pass){
//     console.log("you are allowed");
// }else{
//     console.log("Your Passwaord is Incorrect !!!")
// }


// Q5->Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
// let currpass="abcd";
// for(let i=1;i<=3;i++){
//     let left=3-i;
//     let b=prompt("Enter current password :- "+`left ${left} chances`);
//     if(b===currpass){
//         console.log("You are allowed successfully");
//         break;
//     }

// }
// console.log("You have not more time left");




// Q6-->Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".
// let count=0;
// while(1){

//     let inp=prompt("Enter yes or stop");
//     if(inp=="stop"){
//         break;
//     }
//     if(inp=="yes"){
//         count++;
//     }
    
// }
// console.log(`you type yes ${count} times`);



// Q7-->Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// while(1){
//     let inp=prompt("Enter number:- ");
//     if(inp%2==0){
//         break;
//     }
// }




//Q8-->Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

// let count=0;
// for(let i=1;i<=5;i++){
//     let inp=prompt("Enter number:- ");
//     if(inp>0){
//         count++;
//     }
// }
// console.log(`There are ${count} positive number`);



