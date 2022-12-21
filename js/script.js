document.querySelectorAll('video').forEach(v => { v.setAttribute('pip', 'false'); }) //Яндекс
//////////////////////// Нажатие по меню cнаряжения ////////////////////////
// $('.equipments__menu--item').click(function () {
//     $('.equipments__menu--item').removeClass('_active');
//     $('.information__block').removeClass('_active');
//     $(this).addClass('_active');
//     document.querySelector('.' + $(this).attr('id')).classList.add('_active');
// });
////////////////////// Нажатие по меню cнаряжения ////////////////////////
///
///
///
//////////////////////// Свайпер ////////////////////////
new Swiper('.picklocks .swiper', {
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

    autoplay: true,
    breakpoints: {
        768: {
            speed: 1000,
        }
    }
});

new Swiper('.awards .swiper', {
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
// window.addEventListener('resize', btnRemove);
// function btnRemove() {
//     if (window.matchMedia('screen and (max-width: 600px)').matches)
//         $(".picklocks__btn").appendTo(".picklocks__container");
//     else
//         $(".picklocks__btn").appendTo(".picklocks__content");

// }
// btnRemove()

// window.addEventListener('resize', btnRemove2);
// function btnRemove2() {
//     if (window.matchMedia('screen and (max-width: 600px)').matches)
//         $(".miticoin__btn").appendTo(".miticoin__container");
//     else
//         $(".miticoin__btn").appendTo(".miticoin__content");

// }
// btnRemove2()

// window.addEventListener('resize', btnRemove3);
// function btnRemove3() {
//     if (window.matchMedia('screen and (max-width: 600px)').matches)
//         $(".phone__content").prependTo(".phone__container");
//     else
//         $(".phone__content").prependTo(".phone__block");

// }
// btnRemove3()
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

// $(".equipments__menu--item").click((e) => {
//     equips.classList.remove('_active');
//     select_item_text.innerHTML = e.target.innerHTML;
// });
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
// let logo = document.querySelector('.logo')
// logo.addEventListener('click', () => {
//     let scroll_to = $('body').offset().top;
//     if ($('html, body').is(':animated'))
//         return;
//     if (window.scrollY == scroll_to)
//         return;

//     $('html, body').animate({
//         scrollTop: scroll_to
//     }, 1000);
// });
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
///
///
///
///////////////////// Popup 404 visible /////////////////////
const er404_blocks = document.querySelectorAll('.er_404');
const popup404 = document.querySelector('.popup404');

er404_blocks.forEach(item => {
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

close_btns.forEach(item => {
    item.addEventListener('click', (e) => {
        popup404.classList.remove('open');
        body.classList.remove('overflow--hide')
        e.preventDefault();
    });
});

function hidePopup404(e) {
    if (!e.target.closest('.popup__content')) {
        popup404.classList.remove('open');
        body.classList.remove('overflow--hide')
    }
    e.preventDefault();
}
///////////////////// popup404 hidden /////////////////////
///
///
///
///////////////////// отправление почты /////////////////////
const email = document.querySelector('input');
const form_btn = document.querySelector('.form__btn');
const email_popup = document.querySelector('.email-accept');

function emailTest(value) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(value);
}

form_btn.addEventListener('click', (e) => {
    let value = email.value;

    if (emailTest(value)) {
        email_popup.classList.add("open");
        email.value = '';
    }
    else {
        e.preventDefault();
        email.classList.add("error");
        // $('.form__item span').addClass("error");
    }
});

email.addEventListener('focus', () => {
    email.classList.remove("error");
    // $('.form__item span').removeClass("error");
});
///////////////////// отправление почты /////////////////////
///
///
///
///////////////////// popup_email hidden /////////////////////
const popup_email = document.querySelector('.email-accept')
popup_email.addEventListener('click', hidePopupEmail);

close_btns.forEach(item => {
    item.addEventListener('click', (e) => {
        popup_email.classList.remove('open');
        body.classList.remove('overflow--hide')
        e.preventDefault();
    });
});

function hidePopupEmail(e) {
    if (!e.target.closest('.popup__content')) {
        popup_email.classList.remove('open');
        body.classList.remove('overflow--hide')
    }
    e.preventDefault();
}
///////////////////// popup_email hidden /////////////////////
///
///
///
///////////////////// Убрать куки /////////////////////
const cookie_btn = document.querySelector('.cookie__btn');
const cookiewin = document.querySelector('.cookie');

cookie_btn.addEventListener('click', (e) => {
    cookiewin.classList.add("cookie--hide");
});
// функция возвращает cookie с именем name, если есть, если нет, то undefined    
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let cookiecook = getCookie("cookiecook");

// проверяем, есть ли у нас cookie, с которой мы не показываем окно и если нет, запускаем показ
if (cookiecook != "no" || cookiecook == null) {
    cookiewin.classList.remove("cookie--hide");
    // показываем   

    let date = new Date;
    date.setDate(date.getDate() + 1);
    document.cookie = "cookiecook=no; path=/; expires=" + date.toUTCString();
}
///////////////////// Убрать куки /////////////////////

const blurs = document.querySelectorAll('.blurs')
blurs.forEach(item => {
    item.classList.add('displayn');
});