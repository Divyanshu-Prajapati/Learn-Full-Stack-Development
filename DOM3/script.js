// let btn=document.querySelector('button');
// // btn.addEventListener('click',function(){
// //     let h=document.createElement('h2');
// //     h.innerHTML="hello bro";
// //     main.appendChild('h');
    
// // })




// // appendChild--->>>>
// let main=document.querySelector('main')
// let h1=document.createElement('hi')
// let btn=document.querySelector('button')
// h1.innerHTML='hello bhaiyo!!';
// btn.addEventListener('click',function(){
//     main.appendChild(h1);
// })
// setTimeout(function(){
//     h1.innerHTML=''
// },1000)





let main=document.querySelector('main')
let btn=document.querySelector('button')
window.addEventListener('mousemove',function(){
    var div=document.createElement('div')
    let a=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let c=Math.floor(Math.random()*255)
    div.style.width='50px'
    div.style.height='50px'
    div.style.borderRadius='50%'
    div.style.backgroundColor=`rgb(${a},${b},${c})`
    div.style.position='absolute';
    var l=Math.random()*90;
    var t=Math.random()*90;
    div.style.left= l + '%';
    div.style.top= t + '%';
    div.classList.add('circle')
    main.appendChild(div)
})
btn.addEventListener('click',function(){
    let circles=document.querySelectorAll('.circle');
    circles.forEach(function(c){
        c.remove();
    });

})


