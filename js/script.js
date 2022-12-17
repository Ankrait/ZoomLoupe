$('.equipments__menu--item')
const equip_item = document.querySelectorAll('.equipments__menu--item');
$('.equipments__menu--item').click(function () {
    $('.equipments__menu--item').removeClass('_active');
    $(this).addClass('_active');
});

swiper = new Swiper('.swiper', {
    // pagination: {
    //     el: '.titiland .swiper-pagination',
    //     clickable: true,
    // },
    navigation: {
        nextEl: '.swiper__arr-right',
        prevEl: '.swiper__arr-left'
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
        $(".miticoin__btn").appendTo(".miticoin__container");
    else
        $(".miticoin__btn").appendTo(".miticoin__content");

}
btnRemove()
//////////////////////// Перетащить блок ////////////////////////