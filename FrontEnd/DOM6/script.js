// var all=document.querySelectorAll(".in");
// all.forEach(function(ele){
//     ele.childNodes[3].addEventListener('click',function(elem){
//         if(elem.innerHTML=='Add Friend'){
//             elem.innerHTML='Remove Friend';
//         }
//         else{
//             elem.innerHTML=='Add Friend';
//         }
//     })
// })






var all=document.querySelectorAll('button');
all.forEach(function(ele){
    ele.addEventListener('click',function(){
        if(ele.innerHTML=='Add Friend'){
            ele.innerHTML='Remove Friend';
        }
        else{
            ele.innerHTML='Add Friend';
        }
    })
})


