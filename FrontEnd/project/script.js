//.elem -> card ka class hai jitne bhi card hai sare
function openFeatures(){
    var allElem=document.querySelectorAll('.elem');
    var FullElemPage=document.querySelectorAll('.fullElem');
    var FullElemPagebackbtn=document.querySelectorAll('.fullElem .back');

    allElem.forEach(function(elem){
    elem.addEventListener('click',function(){
       FullElemPage[elem.id].style.display='block'
    })
    })
    FullElemPagebackbtn.forEach(function(back){
    
    back.addEventListener('click',function(){
        FullElemPage[back.id].style.display='none';
    })
    })
}
openFeatures();

let form=document.querySelector('.addtask form');
let taskInput=document.querySelector('.addtask form input');
let taskDetailsInput=document.querySelector('.addtask form textarea');
let taskCheckbox=document.querySelector('.addtask form #check');

let currentTask=[{
    task:'Mandir Jao',
    details:'Jagganath',
    imp:true
    },
   {
    task:'Recording',
    details:'Cohort',
    imp:false
   },
   {
    task:'Study hard',
    details:'for Placement',
    imp:true
   }
]


function renderTask(){
    var allTask=document.querySelector('.allTask');
var sum='';
currentTask.forEach(function(elem){
    sum+=`<div class="task">
                        <h5>${elem.task} <span class="${elem.imp}">imp</span></h5>
                        <button>Mark as Complete</button>
                    </div>`
})
allTask.innerHTML=sum;
}
renderTask();

form.addEventListener('submit',function(e){
    e.preventDefault();
    // console.log(taskCheckbox.checked);
    currentTask.push({
        task:taskInput.value,
        details:taskDetailsInput.value,
        imp:taskCheckbox.checked
        })
        console.log(currentTask);
})
