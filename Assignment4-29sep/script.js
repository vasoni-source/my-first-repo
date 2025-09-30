const counter = document.getElementById('count');
const incrementBtn =  document.getElementById('inc')
const reset  = document.getElementById('reset')


const increaseCounter = ()=>{
    const {innerText=""} = counter;
    counter.innerText =+innerText+2;
}
incrementBtn.addEventListener('click',increaseCounter);
reset.addEventListener('click',()=>{
    counter.innerText = 0;
})
const timer = document.getElementById('timer')

const startTimer  = document.getElementById('startTimer')
const stop = document.getElementById('stop')
let id;
const  timerfn = ()=>{
 if(id) clearInterval(id)
    id = setInterval(()=>{
        const {innerText=" "} = timer;
        timer.innerText = +innerText -1;
    },1000)
}
startTimer.addEventListener('click',timerfn);
stop.addEventListener('click',()=>{
    if(id) clearInterval(id);
    startTimer.removeEventListener('click',timerfn);
}

)
const input = document.getElementById('input')
const myForm= document.getElementById('myForm')
const formMsg = document.getElementById('form-msg')
myForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("value: ",e.target.input.value);
    formMsg.innerText= e.target.input.value;
})
const toggleBtn = document.querySelector('#toggle')
const para = document.querySelector('#para')

toggleBtn.addEventListener('click',()=>{
    if(para.style.display === "none"){

        toggleBtn.innerText = "hide";
        para.style.display = "block"
    }
    else{
        toggleBtn.innerText = "show";
        para.style.display = "none"
    }
})
const fn = (e)=>{
    const { target: { classList = [] } } = e
    // @TODO: why includes not working on classList
    if (classList[0] === 'list') {
        console.log(`clicked li: ${e.target.innerText}`)
    }
}
const ul = document.querySelector('#parent-list')
ul.addEventListener('click',fn )
const add = document.getElementById('add')

add.addEventListener('click',()=>{
    const lastLiText = document.querySelector('ul li:last-child').textContent;
    const liAdd = document.createElement('li');
    ul.appendChild(liAdd);
    liAdd.setAttribute("class","list");
    liAdd.innerText = +lastLiText+1;

})
const outer = document.querySelector('#outer')
const inner = document.querySelector('#inner')

outer.addEventListener('click',()=>{
    console.log("outer clicked");
})
inner.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("inner clicked");
})
const addBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn');
const sec = document.getElementById('sec');
addBtn.addEventListener('click',()=>{
    const para = document.createElement('p');
    sec.appendChild(para);
    para.innerText = "Hello World";

})
removeBtn.addEventListener('click',()=>{
    lastPara = document.querySelector('section p:last-child');
    console.log(lastPara);
    lastPara.remove();
})

const box = document.getElementById('colorBox')
const colors = ["blue","yellow","pink","green"];
let currentIndex = 0;
const colorchange = ()=>{
    box.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
}
const intervalId = setInterval(colorchange,2000)

const stopBtn = document.getElementById('stopBtn')

stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
})
const greet = document.getElementById('greetpara');

function hello (){
    const msg = document.createElement('p');
    greet.appendChild(msg);
    msg.innerText = "hello";
}

setTimeout(hello,5000);
const p1 = document.getElementById('p');

const incBtn = document.getElementById('incBtn');
const decBtn = document.getElementById('decBtn');
let font = 20;
p1.style.fontSize = font;
incBtn.addEventListener('click',()=>{
    p1.style.fontSize  = font+2 + 'px';
    font = font+2;
})
decBtn.addEventListener('click',()=>{
    p1.style.fontSize  = font-2 + 'px';
    font = font-2;
})
const form = document.getElementById('form')
const input1 = document.getElementById('input1');
let inputV = document.getElementById('inputV');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inputValue = input1.value;
    console.log(input1.value);
    if(inputValue >=1 && inputValue<=100){
        inputV.innerText = "valid Age"
    }
    else{
        inputV.innerText = "Invalid Age"
    }
})
const para2 = document.getElementById('para2')
const changeBtn = document.getElementById('changeBtn')

changeBtn.addEventListener('click',()=>{
    para2.textContent = "i changed the text";
})
 const ul2 = document.querySelector('#ul2')
 const addLiBtn = document.querySelector('#addLi')
 let num = 1;
 addLiBtn.addEventListener('click',()=>{
    const li = document.createElement('li')
    ul2.appendChild(li);
    li.innerText = num;
    num = num+1;
 })

 function changeBackgroundColor(color){
    document.body.style.backgroundColor = color;
 }
 const buttons = document.querySelectorAll(".btns")
 buttons.forEach(btn => {
    btn.addEventListener('click',()=>{
        const color = btn.dataset.color;
        document.body.style.backgroundColor = color;
    })
 });