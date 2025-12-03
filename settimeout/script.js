var count=0;
var d;
var btn=document.querySelector('#start');
var stop=document.querySelector('#stop')
var main=document.querySelector('main');
btn.addEventListener('click',function(){
    
   d= setInterval(function(){
    var h1=document.createElement('h1');
    main.appendChild(h1);
    let a=Math.floor(Math.random()*255)
    let b=Math.floor(Math.random()*255)
    let c=Math.floor(Math.random()*255)
    h1.style.color=`rgb(${a},${b},${c})`
    h1.style.position='absolute';
    var l=Math.random()*90;
    var t=Math.random()*90;
    h1.style.left= l + '%';
    h1.style.top= t + '%';
    h1.classList.add('circle')
    h1.innerHTML=count;
    count++;
},200);
})

stop.addEventListener('click',function(){
    clearInterval(d);
})
