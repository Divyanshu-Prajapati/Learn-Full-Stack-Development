// function getUser(username,cb){
//     setTimeout(function(){
//         cb({
//             id:2,
//             username:"dkp"
//         });
//     },1000);
// }


// 1- setTimeout- it runs only once after a time/delay
//syntax- setTimeout(function(),time)
// setTimeout(()=>{
//     console.log("ram ram");
// },2000)

// setTimeout(function(){
//     console.log("Radhe Radhe");
// },1000);
//so we write setimeout in this type and we use any function 



//question
// Print "Hello" after 1 second
// setTimeout(function(){
//     console.log("hello");
// },1000)

// Create a function and call it using setTimeout
// function student(){
//     console.log("i am a student");
// }

// setTimeout(()=> {
//     student();
// },2000);

// Print numbers 1–3 with delay (use multiple timeouts)
// for(let i=1;i<=3;i++){
//     setTimeout(()=>{
//         console.log(` i is ${i}`);
//     },i*1000);
// }



//Cleaar timeout
// it helps to stop a scheduled timeout
//so it cancels execution completely.
// let id=setTimeout(function(){
//     console.log("i am settimeout");
// },2000);
// setTimeout(function(){
//     console.log(`id is :- ${id}`);
// },2000);
// clearTimeout(id);//now it totally cancel the execution
//and its compulsory to store in a variable so that we can cancel the timeout

// let time=setTimeout(function(){
//     clearTimeout(id);
// },5000);




//setInterval-->runs repeadly after fixed time
// let i=1;
// setInterval(function(){
//     console.log(`In am Interval of ${i} sec`);
//     i++;
// },3000);
// let count=0;
// setInterval(()=>{
//     console.log(`${count}`);
//     count++;
// },1000);
//to clear setInterval we needs to store in a variable
// let count=0;
// let a=setInterval(()=>{
//     console.log(`${count}`);
//     count++;
//     if(count==5)clearInterval(a);
// },1000);


// ‼️‼️ now master CallBack. ‼️‼️
//callback is a function that pass as an argument
//example->
// function callback(name,cb){
//     console.log(`Hello ${name}`);
//     setTimeout(function(){
//         cb();
//     },1000);
// }
// function abc(){
//     console.log('abc');
// } 

// callback("dkp",abc);

// function add(a,b,cb){
//     let result=a+b;
//     cb(result);
// }
// add(2,5,function(res){
//     console.log(`sum is:- ${res}`);
// })




// Use callback with setTimeout
// Create function that waits 2 sec then calls callback
// Pass data in callback
// Callback inside loop
// Create calculator using callback

// function student(name,cb){
//     console.log(`Hii ${name}`);
//     let id=setTimeout(function(){
//         cb(id);
//     },2000);
// }
// function data(id){
//     console.log("He is good Student");
//     console.log(`Timeout id:- ${id}`);
// }
// student("Divyanshu",data);

//callback inside loop-> callback ek argument hai

// function greet(num,cb){
//     console.log(num);
//     cb();
// }
// for(let i=1;i<=5;i++){
//     let name=prompt("enter name:- ");
//     greet(i,()=>{
//         console.log(`, Namaste ${name}`);
//     })
// }


// function calculator(a,b,cb){
//     console.log(a);
//     console.log(b);
//     let sum=a+b;
//     cb(sum);
// }
// calculator(5,6,(sum)=>{
//     console.log(`sum is:- ${sum}`);
// })

// function calculator(a,b,operation){
//     let result=operation(a,b);
//     console.log("Result:- ",result);
// }

// calculator(3,4,(a,b)=>a+b);
// calculator(8,5,function(a,b){
//     return a-b;
// });


//now i study Nested Callback
//callback inside callback

// function step1(cb){
//     console.log("Step 1 Done");
//     cb();
// }
// function step3(cb){
//     console.log("step 3 done");
//     cb();
// }
// function step2(cb){
//     console.log("step 2 done");
//     cb();
// }

// step1(()=>{
//     step3(()=>{
//         step2(()=>{
//             console.log("All Completed");
//         })
//     })
// })

//Example - (Login → Fetch → Display)
// function login(cb){
//     console.log("User Logged in");
//     cb();
// }
// function fetch(cb){
//     console.log("Fetch Data");
//     cb();
// }
// function display(cb){
//     console.log("Display Data");
//     cb();
// }
// login(()=>{
//     fetch(()=>{
//         display(()=>{
//             console.log("All Completed");
//         })
//     })
// })


// Q1
// Create a function:
// After 1 second → print "Hello"
// Then call callback → print "Welcome"
// function print(cb){
//     setTimeout(()=>{
//         console.log("hello");
//         cb();
//     },1000);
// }
// function welcome(){
//     console.log("Welcome");
// }
// print(welcome);


// Q2
// Create a function:
// After 2 seconds → print "Task 1 done"
// Then callback → print "Task 2 done"

// function task1(cb){
//     setTimeout(()=>{
//         console.log("Task 1 done");
//         cb();
//     },2000);
// }
// function task2(){
//     console.log("task 2 completed");
// }
// task1(()=>{
//     task2(()=>{

//     })
// })


// Q3
// Create a function:
// After 1 sec → print number
// Call callback → print "Processed <number>"
// 👉 Call this for numbers 1, 2, 3
// function number(num,cb){
//     setTimeout(()=>{
//         console.log(num);
//         cb(num);
//     },num*1000);
// }
// function callback(n){
//     console.log("processed ",n);
// }
// number(1,(n1)=>{
//     console.log("processed",n1);
//     number(2,(n2)=>{
//         console.log("processed",n2);
//         number(3,(n3)=>{
//             console.log("processed",n3);
//         });
//     })
// });
// ;



// function fetchprofile(username,cb){
//     console.log("fetching profile data.......");
//     setTimeout(()=>{
//         cb({id:21,username,age:21,email:"huihui@gmail.com"});
//     },2000);
// }
// function getposts(username,cb){
//     console.log(`Fetching ${username} posts.....`);
//     setTimeout(cb({username,posts:["image.pic","waterfall.jpg","nainitall.lakes"]}),2000);
// }
// fetchprofile("Divyanshu",function(det){
//     console.log("All Details");
//     console.log(det);
//     getposts(det.username,function(dets){
//         console.log("Posts:- ");
//         console.log(dets.posts);
//     })

// })



fetch("https://randomuser.me/api/")
.then(function(rawdata){
    return rawdata.json();
})
.then((data)=>{
    console.log(data.results[0].name );
})
.catch(function(err){
    console.log(err);
})
