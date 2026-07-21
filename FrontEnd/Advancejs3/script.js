//Create a user object that stores name and email and has a login method which print "User logged in"
// let user={
//     name:"Mahi mar rha hai",
//     email:"mahi@gmail.com",
//     login:function(){
//         console.log("Logged in")
//     },
// };


//By help of object make 4 peaople data 
//yani ki constructor object ke andar nhi class ke andar banati hai 
// class data{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//    loggedin(){
//     console.log("Logged in");
//    }
// }
// let user1=new data("mike",19);
// let user2=new data("john",21);
// console.log(user1);
// console.log(user2);



// Q3->
class Student{
    intro(){
        return (this.name+this.rollno);
    }
    constructor(name,rollno){
        this.name=name;
        this.rollno=rollno;

    }
    
}
let s1=new Student("Ajit pawar"+ "  "+312);
console.log(s1.intro());