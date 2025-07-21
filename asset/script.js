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
let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');

