document.querySelectorAll('video').forEach((v) => {
	v.setAttribute('pip', 'false');
	v.defaultMuted = true;
	v.addEventListener('onloadeddata ', () => {
		v.play();
	});
});

////////////////////// Нажатие по меню cнаряжения ////////////////////////
$('.equipments__menu--item').click(function () {
	$('.equipments__menu--item').removeClass('_active');
	$('.information__block').removeClass('_active');
	$(this).addClass('_active');
	if (document.querySelector('.' + $(this).attr('id')))
		document.querySelector('.' + $(this).attr('id')).classList.add('_active');
});
//////////////////// Нажатие по меню cнаряжения ////////////////////////
///
///
///
//////////////////////// Бургер ////////////////////////
let toggle = document.querySelector('.burger');
let header = document.querySelector('.header');
let body = document.body;

toggle.addEventListener('click', function (e) {
	this.classList.toggle('opened');
	header.classList.toggle('opened');
	body.classList.toggle('overflow--hide');
});
//////////////////////// Бургер ////////////////////////
///
///
///
//////////////////////// Select ////////////////////////
let select_item = document.querySelector('.select-equipments');
let select_item_text = document.querySelector('.select-equipments__chose');
let equips = document.querySelector('.equipments');

select_item.addEventListener('click', function (e) {
	equips.classList.toggle('_active');
});

$('.equipments__menu--item').click((e) => {
	equips.classList.remove('_active');
	select_item_text.innerHTML = e.target.innerHTML;
});
//////////////////////// Select ////////////////////////
///
///
///
//////////////////////// Паралакс луны и коллайдера ////////////////////////
const bg_lines = document.querySelector('.full-bg');
const collider_images = document.querySelectorAll('.swiper img');

document.addEventListener('mousemove', Paralaks);

function Paralaks(e) {
	if (window.matchMedia('screen and (min-width: 780px)').matches) {
		let offsetX = (e.clientX / window.innerWidth) * 12 - 6;
		let offsetY = (e.clientY / window.innerHeight) * 12 - 6;
		collider_images.forEach((item) => {
			item.setAttribute(
				'style',
				'transform: translate(' + offsetX + 'px, ' + offsetY + 'px);'
			);
		});

		bg_lines.setAttribute(
			'style',
			'transform: translate(' + -offsetX + 'px, ' + -offsetY + 'px);'
		);
	}
}
//////////////////////// Паралакс луны и коллайдера ////////////////////////
///
///
///
///////////////////// Тык по логу = скролл на верх сайта /////////////////////
let logo = document.querySelector('.logo');
logo.addEventListener('click', () => {
	let scroll_to = $('body').offset().top;
	if ($('html, body').is(':animated')) return;
	if (window.scrollY == scroll_to) return;

	$('html, body').animate(
		{
			scrollTop: scroll_to,
		},
		1000
	);
});
///////////////////// Тык по логу = скролл на верх сайта /////////////////////
///
///
///
///////////////////// Анимация /////////////////////
const anim_items = document.querySelectorAll('.anim');

if (anim_items.length > 0) {
	window.addEventListener('scroll', animOnScroll);

	async function animOnScroll() {
		anim_items.forEach((item) => {
			let scrollY = window.pageYOffset;

			let anim_item_height = item.offsetHeight;
			let anim_item_offsetY = item.getBoundingClientRect().top + scrollY;
			let anim_start = 4;

			let anim_item_point = window.innerHeight - anim_item_height / anim_start;
			if (anim_item_height > window.innerHeight) {
				anim_item_point = anim_item_height - window.innerHeight / anim_start;
			}

			if (
				scrollY > anim_item_offsetY - anim_item_point &&
				scrollY < anim_item_offsetY + anim_item_height
			) {
				item.classList.add('_anim-active');
			}
		});
	}
	animOnScroll();
}
///////////////////// Анимация /////////////////////
///
///
///
///////////////////// Popup 404 visible /////////////////////
const er404_blocks = document.querySelectorAll('.er_404');
const popup404 = document.querySelector('.popup404');

er404_blocks.forEach((item) => {
	item.addEventListener('click', openPopupFunc);
});

function openPopupFunc(e) {
	popup404.classList.add('open');
	body.classList.add('overflow--hide');
	e.preventDefault();
}
///////////////////// Popup 404 visible /////////////////////
///
///
///
///////////////////// popup404 hidden /////////////////////
const close_btns = document.querySelectorAll('.popup__close-btn');

popup404.addEventListener('click', hidePopup404);

close_btns.forEach((item) => {
	item.addEventListener('click', (e) => {
		popup404.classList.remove('open');
		body.classList.remove('overflow--hide');
		e.preventDefault();
	});
});

function hidePopup404(e) {
	if (!e.target.closest('.popup__content')) {
		popup404.classList.remove('open');
		body.classList.remove('overflow--hide');
	}
	e.preventDefault();
}
///////////////////// popup404 hidden /////////////////////
///
///
///
///////////////////// Убрать куки /////////////////////
const cookie_btn = document.querySelector('.cookie__btn');
const cookiewin = document.querySelector('.cookie');

cookie_btn.addEventListener('click', (e) => {
	cookiewin.classList.add('cookie--hide');
});

function getCookie(name) {
	let matches = document.cookie.match(
		new RegExp(
			'(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
		)
	);
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

let cookiecook = getCookie('cookiecook');

if (cookiecook != 'no' || cookiecook == null) {
	cookiewin.classList.remove('cookie--hide');

	let date = new Date();
	date.setDate(date.getDate() + 1);
	document.cookie = 'cookiecook=no; path=/; expires=' + date.toUTCString();
}
/////////////////// Убрать куки /////////////////////
