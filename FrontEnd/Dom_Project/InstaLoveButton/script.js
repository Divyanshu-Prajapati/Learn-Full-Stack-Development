var con=document.querySelector('#container');
var love=document.querySelector('i');
var h1=document.querySelector('h1');
con.addEventListener('dblclick',function(){
    let i=h1.innerHTML;
    i++;
    h1.innerHTML=i;
    love.style.transform='translate(-50%,-50%) scale(1)';
    love.style.opacity='0.8';
    setTimeout(function(){
        love.style.transform='translate(-50%,-50%) scale(0)';
    },1500)
    setTimeout(function(){
        love.style.opacity='0';
    },1000)

})