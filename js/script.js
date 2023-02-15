
const noPhoto='./assets/images/no_photo.png'
let Data=[{id:0,price:600,name:'Тарелка керамическая ручной работы  ⌀ 12',newItem:false,popular:false,star:null,prevPrice:810,photo:null,count:0,},{id:1,price:0,name:'Кашпо для цветов керамическое  СИМПЛГРЕЙ',newItem:false,popular:false,star:null,prevPrice:null,photo:'./assets/images/kashpo.jpg',count:0,},{id:2,price:12999,name:'Умные часы SMARTWATCH XM 109 черный',newItem:false,popular:true,prevPrice:null,photo:'./assets/images/watches.png',count:1,},{id:3,price:15700,name:'Золотое кольцо МАЛИКА с аметистом и фианитами',newItem:true,popular:false,prevPrice:null,photo:'./assets/images/ring.png',count:0,},{id:4,price:15700,name:'Золотое кольцо МАЛИКА с аметистом и фианитами',newItem:true,popular:false,prevPrice:null,photo:'./assets/images/ring.png',count:0,},]
let a=''
Data=Data.map(({price,name,photo,prevPrice,popular,newItem,id,count})=>{a+=` <li style="position-relative" class="card">
    <img class="photo"  src="${photo ? photo : noPhoto}" />
    <img class="heart" src="./assets/icons/heart.png"/>
    <img class="weights" src="./assets/icons/weights.png"/>
    ${popular ? `<div class="popular">ХИТ</div>` : ''}
    ${newItem ? `<div class="newItem">NEW</div>` : ''}
    <div class="photo-switcher">
    <input class="radio" type="radio" name="photo-switcher${id}" id="radio1${id}" checked/><label for="radio1${id}" class="photo-el"></label>
    <input class="radio" type="radio" name="photo-switcher${id}" id="radio2${id}"/><label for="radio2${id}" class="photo-el"></label>
    <input class="radio" type="radio" name="photo-switcher${id}" id="radio3${id}"/><label for="radio3${id}" class="photo-el"></label>
    <input class="radio" type="radio" name="photo-switcher${id}" id="radio4${id}"/><label for="radio4${id}" class="photo-el"></label>    
    </div>
    <span class="name" ">${name}</span>
    <div class="price-block">
    <span class="price">${price} ₽</span>
    ${prevPrice ? `<span class="prev-price">${prevPrice}₽</span>` : ''}

    </div>
    <div class="button-section">
      <div class="count-block">
       <button class="count-block__btn minus" id="${id}">-</button>
       <span class="count" id="${id}">${count}</span>
       <button class="count-block__btn plus" id="${id}">+</button>
      </div>
      <button class="store-btn"><img  src="./assets/icons/store.png"/> В корзину</button>
    </div>
    </li>
    `
const UL=`<ul style="grid-template-columns: repeat(${Data.length}, 1fr);" class="card-container">${a}</ul>`
document.querySelector('.slider__goods').innerHTML=UL
const buttons=document.querySelectorAll('.count-block__btn');buttons.forEach((button)=>{button.addEventListener('click',(event)=>{const id=event.target.id;const countElement=document.querySelector(`.count[id="${id}"]`)
button.classList.contains('plus')?count+=1:count=count-1
countElement.textContent=count;});});})
const Cards=document.querySelectorAll('.card')
const CardContainer=document.querySelector('.card-container')
const Right=document.querySelector('.right-arrow')
const Left=document.querySelector('.left-arrow')
let count=0
let width=document.querySelector('.card').offsetWidth
let smallScreenWidth=300
const MoveSlider=(w)=>{CardContainer.style.transform=`translate(-${+count * w + 25}px)`}
Right.addEventListener('click',()=>{count++
if(count>=Cards.length-3){count=0}
MoveSlider(width)})
Left.addEventListener('click',()=>{count--
if(count<0)count=0
MoveSlider(width)})
CardContainer.addEventListener('touchstart',handleTouchStart,false)
CardContainer.addEventListener('touchmove',handleTouchMove,false)
let x1=null
let y1=null
function handleTouchStart(event){const firstTouch=event.touches[0]
x1=firstTouch.clientX
y1=firstTouch.clientY}
function handleTouchMove(event){if(!x1||!y1)return false
let x2=event.touches[0].clientX
let y2=event.touches[0].clientY
let xDiff=x2-x1
let yDiff=y2-y1
if(Math.abs(xDiff)>Math.abs(yDiff)){if(xDiff>0){count--
MoveSlider(smallScreenWidth)}
else{count++
MoveSlider(smallScreenWidth)}}
x1=null
y1=null}