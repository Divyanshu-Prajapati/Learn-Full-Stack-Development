var arr=[
    {
        dp:"https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D",story:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",story:"https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1758922584983-82ffd5720c6a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1714462396046-29272a3cb549?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1720345490280-551a6a051123?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",story:"https://images.unsplash.com/photo-1737197957593-fddef9c68ba5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1736899801606-17d410ca7da1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1719406507302-d693dac6ff92?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1677644761773-5af3b3aad691?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1575090974211-38cfb3c90b0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"
    }
];

var clutter=" "
var storyian=document.querySelector('#storyian')
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`
})
document.querySelector('#storyian').innerHTML=clutter
storyian.addEventListener('click',function(dets){
    document.querySelector('#full-screen').style.display="block"
    document.querySelector('#full-screen').style.backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
    document.querySelector('#full-screen').style.display="none"
    },1500)
})