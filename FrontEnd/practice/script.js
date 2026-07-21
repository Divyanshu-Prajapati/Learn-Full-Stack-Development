console.log("hi");
let fname="Divyanshu";
var lname="Prajapati";
const religion="Hindu";
console.log(fname,lname,religion);
var lname="kumar";
// let fname="ankur"; --> Redeclaration is not Allowed
//Reinitialization is allowed in both let and var.
//reinitialization in const is not allowed

(function print(){
    var a=10;
    {
        let b=20;

    }
    console.log(a);
})();
// console.log(a);

//let -> block scoped
//var-> function scoped

let d=20;
// let d=20; error -> d has been already declare
const fullname={name:"ankur"};
console.log(fullname.name);
fullname.name="DIvyanshu";
console.log(fullname);

// console.log(hoist);
// let hoist="abc"; error-> cannot access before initialization;

console.log(hoist2);
var hoist2=89;//error-> no error print undegfined


//Data TYPE-->
let a=10;
let b="abc";
let correct=true;
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(correct));

let nul=null;
console.log(nul);
 
let undef=undefined;
console.log(undef);

let arr=[1,2,3,4];
console.log(typeof(arr));

let num="123";
console.log(+123);

//7
let bol=1;
boly=Boolean(bol);
console.log(boly);

let na=2 * "hello";
console.log(typeof(na));
// console.log(instanceof(na));

let numb=12;
numb="hello kitty";
numb=false;

console.log(typeof(null));//object
console.log(typeof(undefined));//undefined