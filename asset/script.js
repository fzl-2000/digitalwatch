//toggle
const body = document.body;
let toggle_button=document.querySelector('.convert_farsi_parent')
let title=document.querySelector('.title h1')
console.log(title)
toggle_button.addEventListener('click',toggleF)
function toggleF() {
    toggle_button.classList.toggle('active')
    if(toggle_button.classList.contains('active')){
        title.textContent="ساعت دیجیتال"
    }
    else{
        title.textContent="digital watch"
       
    }
}
//swiper
 const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  ///analog watch
function setClock() {
  let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');
let digitalHour=document.querySelector('.digital-hour')
let digitalMinute=document.querySelector('.digital-minute')
let digitalSecond=document.querySelector('.digital-second')
let nw=new Date()
digitalHour.innerHTML=nw.getHours()
digitalMinute.innerHTML=nw.getMinutes()
digitalSecond.innerHTML=nw.getSeconds()


let hourTime=nw.getHours()%12
 if (hourTime === 0) 
  hourTime = 12;
let minuteTime=nw.getMinutes()
let secondTime=nw.getSeconds()
const hourDeg = (hourTime * 30) + (minuteTime * 0.5);
const minuteDeg = minuteTime * 6;
const secondDeg = secondTime * 6;
hourHand.style.transform = `rotate(${hourDeg}deg)`;
minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
secondHand.style.transform = `rotate(${secondDeg}deg)`;
  
}

setInterval(setClock,1000)
setClock();




