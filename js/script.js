//////////////////////// Нажатие по меню мнаряжения ////////////////////////
$('.equipments__menu--item')
const equip_item = document.querySelectorAll('.equipments__menu--item');
$('.equipments__menu--item').click(function () {
    $('.equipments__menu--item').removeClass('_active');
    $(this).addClass('_active');
});
//////////////////////// Нажатие по меню мнаряжения ////////////////////////
///
///
///
//////////////////////// Свайпер ////////////////////////
swiper = new Swiper('.picklocks .swiper', {
    // pagination: {
    //     el: '.titiland .swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.picklocks .swiper__arr-right',
        prevEl: '.picklocks .swiper__arr-left'
    },

    freeMode: false,
    loop: true,
    allowTouchMove: true,

    autoplay: {
        delay: 5000,
        speed: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            speed: 1000,
        }
    }
});

swiper2 = new Swiper('.awards .swiper', {
    pagination: {
        el: '.awards .swiper-pagination',
        clickable: true,
    },

    loop: false,
    freeMode: false,
    allowTouchMove: true,

    autoplay: false,
    breakpoints: {
        768: {
            speed: 1000,
        }
    },
    spaceBetween: 20
});
//////////////////////// Свайпер ////////////////////////
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
//////////////////////// Перетащить блок ////////////////////////
window.addEventListener('resize', btnRemove);
function btnRemove() {
    if (window.matchMedia('screen and (max-width: 600px)').matches)
        $(".picklocks__btn").appendTo(".picklocks__container");
    else
        $(".picklocks__btn").appendTo(".picklocks__content");

}
btnRemove()

window.addEventListener('resize', btnRemove2);
function btnRemove2() {
    if (window.matchMedia('screen and (max-width: 600px)').matches)
        $(".miticoin__btn").appendTo(".miticoin__container");
    else
        $(".miticoin__btn").appendTo(".miticoin__content");

}
btnRemove2()

window.addEventListener('resize', btnRemove3);
function btnRemove3() {
    if (window.matchMedia('screen and (max-width: 600px)').matches)
        $(".phone__content").prependTo(".phone__container");
    else
        $(".phone__content").prependTo(".phone__block");

}
btnRemove3()
//////////////////////// Перетащить блок ////////////////////////
///
///
///
//////////////////////// Selecet ////////////////////////
let select_item = document.querySelector('.select-equipments');
let select_item_text = document.querySelector('.select-equipments__chose');
let equips = document.querySelector('.equipments');

select_item.addEventListener('click', function (e) {
    equips.classList.toggle('_active');
});

$(".equipments__menu--item").click((e) => {
    equips.classList.remove('_active');
    select_item_text.innerHTML = e.target.innerHTML;

});
//////////////////////// Select ////////////////////////
///
///
///
//////////////////////// Паралакс луны и коллайдера ////////////////////////
const bg_lines = document.querySelector('.full-bg')
const collider_images = document.querySelectorAll('.swiper img')

document.addEventListener('mousemove', Paralaks)

function Paralaks(e) {
    if (window.matchMedia('screen and (min-width: 780px)').matches) {
        let offsetX = (e.clientX / window.innerWidth * 12) - 6;
        let offsetY = (e.clientY / window.innerHeight * 12) - 6;
        collider_images.forEach((item) => {
            item.setAttribute("style", "transform: translate(" + offsetX + "px, " + offsetY + "px);");
        });

        bg_lines.setAttribute("style", "transform: translate(" + -offsetX + "px, " + -offsetY + "px);");

    }
}
//////////////////////// Паралакс луны и коллайдера ////////////////////////
///
///
///
///////////////////// Тык по логу = скролл на верх сайта /////////////////////
let logo = document.querySelector('.logo')
logo.addEventListener('click', () => {
    let scroll_to = $('body').offset().top;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == scroll_to)
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
});
///////////////////// Тык по логу = скролл на верх сайта /////////////////////
///
///
///
///////////////////// Тык по меню скролл /////////////////////
/*
const menu_tocenomic = document.querySelector('.scroll_tocenomic');
const menu_whitepaper = document.querySelector('.scroll_whitepaper');
const menu_roadmap = document.querySelector('.scroll_roadmap');
const menu_titiland = document.querySelector('.scroll_titiland');
const menu_zoomloop = document.querySelector('.scroll_zoomloop');
const menu_miticoin = document.querySelector('.scroll_miticoin');

menu_roadmap.addEventListener('click', (e) => {
    let scroll_to = $('.roadmap').offset().top - 220;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == Math.floor(scroll_to))
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
    removeMenuOpened();
});

menu_titiland.addEventListener('click', (e) => {
    let scroll_to = $('.titiland').offset().top - 100;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == Math.floor(scroll_to))
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
    removeMenuOpened();
});

menu_zoomloop.addEventListener('click', (e) => {
    let scroll_to = $('.zoomloop').offset().top - 180;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == Math.floor(scroll_to))
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
    removeMenuOpened();
});

menu_miticoin.addEventListener('click', (e) => {
    let scroll_to = $('.miticoin').offset().top - 170;
    if ($('html, body').is(':animated'))
        return;
    if (window.scrollY == Math.floor(scroll_to))
        return;

    $('html, body').animate({
        scrollTop: scroll_to
    }, 1000);
    removeMenuOpened();
});
*/
///////////////////// Тык по меню скролл /////////////////////
///
///
///
///////////////////// Анимация /////////////////////
const anim_items = document.querySelectorAll('.anim');

if (anim_items.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    async function animOnScroll() {
        anim_items.forEach((item) => {
            let scrollY = window.pageYOffset || document.documentElement.scrollTop;

            let anim_item_height = item.offsetHeight;
            let anim_item_offsetY = item.getBoundingClientRect().top + scrollY;
            let anim_start = 4;

            let anim_item_point = window.innerHeight - anim_item_height / anim_start;
            if (anim_item_height > window.innerHeight) {
                let anim_item_point = anim_item_height - window.innerHeight / anim_start;
            }

            if ((scrollY > anim_item_offsetY - anim_item_point) && (scrollY < (anim_item_offsetY + anim_item_height))) {
                item.classList.add('_anim-active');
            }
        });

    }
    animOnScroll();
}
///////////////////// Анимация /////////////////////