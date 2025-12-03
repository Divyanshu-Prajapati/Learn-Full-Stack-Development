let a1=document.querySelector("#a1");
let s1=document.querySelector("#s1");
let a2=document.querySelector("#a2");
let s2=document.querySelector("#s2");
let a3=document.querySelector("#a3");
let s3=document.querySelector("#s3");
let a4=document.querySelector("#a4");
let s4=document.querySelector("#s4");
let a5=document.querySelector("#a5");
let s5=document.querySelector("#s5");
let a6=document.querySelector("#a6");
let s6=document.querySelector("#s6");
let a7=document.querySelector("#a7");
let s7=document.querySelector("#s7");
// a1.addEventListener('click',function(){
//     s1.play();
// })
// a2.addEventListener('click',function(){
//     s2.play();
// })
// a3.addEventListener('click',function(){
//     s3.play();
// })
// a4.addEventListener('click',function(){
//     s4.play();
// })
// a5.addEventListener('click',function(){
//     s5.play();
// })
// a6.addEventListener('click',function(){
//     s6.play();
// })
// a7.addEventListener('click',function(){
//     s7.play();
// })


document.addEventListener('keydown',function(dets){
    if(dets.key=='z'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s1.play();
    }
    if(dets.key=='x'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s2.play();
    }
    if(dets.key=='c'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s3.play();
    }
    if(dets.key=='v'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s3.play();
    }
    if(dets.key=='b'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s5.play();
    }
    if(dets.key=='m'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s2.play();
    }
    if(dets.key=='n'){
        a1.style.transform="translateY(-2px) scale(1.03)";
        a1.style.boxShadow="0 12px 25px rgba(0,0,0,0.3)";
        s5.play();
    }

})