let btn=document.querySelector('#add')
let txt=document.querySelector('h2');
let greet=document.querySelector('h3');
let flag=0;
btn.addEventListener('click',function(){
    if(flag==0){
        txt.innerHTML='Buyed';
        txt.style.color='green'
        greet.innerHTML='Conratulation you have Mercedes';
        btn.style.backgroundColor='#dadada'
        btn.style.color='#111';
        btn.innerHTML='Sell';
        flag=1;
    }
    else{
        btn.style.backgroundColor='cadetblue';
        btn.style.color='#fff';
        btn.innerHTML='Buy';
        txt.innerHTML='Kab Kharidega';
        txt.style.color='darkgoldenrod';
        greet.innerHTML=null;

        flag=0;

    }
})