var main=document.querySelector('#main');
var crsr=document.querySelector('.crsr');
main.addEventListener('mousemove',function(det){
    crsr.style.left=det.x+"px";
    crsr.style.top=det.y+"px";
})