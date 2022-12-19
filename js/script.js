$('.equipments__menu--item')
const equip_item = document.querySelectorAll('.equipments__menu--item');
$('.equipments__menu--item').click(function () {
    $('.equipments__menu--item').removeClass('_active');
    $(this).addClass('_active');
});

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
//////////////////////// Перетащить блок ////////////////////////



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


