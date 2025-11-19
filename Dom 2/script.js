var btn=document.querySelector('button');
var h1=document.querySelector('h1');


btn.addEventListener('click',function(){
    var rand=Math.random();
    if(rand<=0.5){
    h1.innerHTML='Head'
}
   else{
    h1.innerHTML='Tail'
}
})