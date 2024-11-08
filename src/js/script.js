const body = document.querySelector('body');

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header_menu');
const headerLinkAll = document.querySelectorAll('.header__item');

burger.addEventListener('click', function () {
	headerMenu.classList.toggle('active');
});

function videoPlay() {
	document.querySelector('.VideoCover').style.display = 'none';
	document.querySelector('.VideoIframe').src += '&autoplay=1';

	document.querySelector('.VideoWrap').removeEventListener('click', videoPlay);
}
document.querySelector('.VideoWrap').addEventListener('click', videoPlay);

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 3,
	spaceBetween: 30,
	freeMode: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});

const popupButtonAll = document.querySelectorAll('[data-popup-btn]')
const popupAll = document.querySelectorAll('[data-popup]')

popupButtonAll.forEach(function(element){
element.addEventListener('click', function(event){
    event.preventDefault()
    document.querySelector('#' + event.target.dataset.popupBtn).classList.add('active')
})
})

popupAll.forEach(function(element){
element.querySelector('[data-popup-close]').addEventListener('click', function(){
    element.classList.remove('active')
})
element.querySelector('[data-popup-window]').addEventListener('click', function(event){
    event.stopPropagation();
    element.addEventListener('click', function(){
        element.classList.remove('active')
    })
})
})

AOS.init();