// let a=document.querySelector('h1');
// a.innerHTML='To kaise ho aap log ';


let h1=document.querySelector('#h1');
let inc=document.querySelector('#inc');
let dec=document.querySelector('#dec');
inc.addEventListener('click',function(){
    let gh=h1.innerHTML;
    gh++;
    h1.innerHTML=gh;
})
dec.addEventListener('click',function(){
    let dh=h1.innerHTML;
    dh--;
    h1.innerHTML=dh;
})