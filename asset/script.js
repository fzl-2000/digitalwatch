const body = document.body;
let toggle_button=document.querySelector('.convert_farsi_parent')
let title=document.querySelector('.title h1')
let date=document.querySelector('.date')
let monthNameT=document.querySelector('.month-name')
//toggle
toggle_button.addEventListener('click',toggleF)
function toggleF() {
    toggle_button.classList.toggle('active')
    if(toggle_button.classList.contains('active')){
        title.textContent="ساعت دیجیتال"
      date.innerHTML=setPersianDate()
      setDigitalClock()

}
    else{
        title.textContent="digital watch"
        date.innerHTML=setDate()
        EnglishClock()       
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
let nw=new Date()
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
//set date
function setDate() {
  let nw=new Date()
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthName = months[nw.getMonth()];
  const monthNum = nw.getMonth();
  const day = nw.getDate();
  const year = nw.getFullYear();
  monthNameT.textContent=monthName
    return ` ${monthNum} / ${day}/ ${year}`

}
date.innerHTML=setDate()

//set persian date

function setPersianDate() {
  const now = new persianDate();
  let year=now.year()
  let month=now.month()
  let day = now.date();
  monthsName=now.format("MMMM")
  monthNameT.innerHTML=monthsName
  return `${year} / ${month} / ${day}`
}
//set digital clock
let digitalHour=document.querySelector('.digital-hour')
let digitalMinute=document.querySelector('.digital-minute')
let digitalSecond=document.querySelector('.digital-second')
let ampmD=document.querySelector('.am-pm')
let nw=new Date()
function setDigitalClock() {
digitalHour.innerHTML=nw.getHours()
digitalMinute.innerHTML=nw.getMinutes()
digitalSecond.innerHTML=nw.getSeconds()
ampmD.style.display='none'
}
  
//digital clock
function EnglishClock() {
 let hours=nw.getHours()
 let minute=nw.getMinutes()
 let second=nw.getSeconds()
let ampm = hours >= 12 ? 'pm' : 'am';
ampmD.style.display='block'
ampmD.textContent=ampm
  hours = hours % 12;
  hours = hours ? hours : 12;
  digitalHour.innerHTML=hours
  digitalMinute.innerHTML=minute
  digitalSecond.innerHTML=second
 console.log(ampm) 
}
EnglishClock()