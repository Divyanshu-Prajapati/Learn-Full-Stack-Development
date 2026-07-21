// let inp=prompt("Enter user age:- ");
// if(inp==null){
//     console.error("bhai cancel kyu kiya kuch enter karde");
// }
// else{
//     if(inp.trim()===""){
//     console.log("enter kar bhai kuch");}
//     else{
//         inp=Number(inp);
//         //for string
//         if(isNaN(inp)){
//             console.error("Enter only number");
//         }
//         else{

//             if(inp>=18){
//                  console.log("you are eligible for vote");
//             }
//            else{ 
//             console.log("you are not elible chal nikalta ban");
//             }
//         }

//     }
// }





// let num=+prompt("number do");
// console.log(num);
//promt ke aage + lagane se ye number lega only -->




//Question ATM SImulator-->
//Allow three withdrawals starts with 1000 balance.ask withdrawal amount 3 times.if enough balance deduct ,else print insufficient balance


// let curbalance=1000;
// for(let i=1;i<=3;i++){
//     let amount=+prompt(`Enter amount:- (${i} times..)`);
//     if(curbalance>=amount){
//         curbalance=curbalance-amount;
//         console.log(`Withdraw :- ${amount} current balance:- ${curbalance}`);
//     }
//     else{
//         console.log("Insufficient balance..");
//         break;
//     }
//     if(curbalance>0){
//         console.log("Bahut paisa hain...");
//     }
    
// }






// <---- Functions---->
// #PArametrs
// 1-->requird
// function abcd(a,b,c,...rest){
//     console.log(a,b,c,...rest);
//     console.log(rest);
//     console.log("keep hardworking...");
//     console.log(rest[0]);
// }
// abcd(1,2,3,4,5);



// 2-->Destructured
// function abcd({fname,lname},{name}){
//     console.log(fname);

// }
// abcd({fname:"jayshree",lname:"Ram"},{name:"hradwork bro..."});




// <---- Spread Arguments----->
// function abcd(a,b,c,d,e){
//     console.log(a,c,b,d,e);

// }
// let arr=[1,3,2,4,5];
// abcd(...arr);//it is spread operator ->ye arr ko bikher deta hai.




