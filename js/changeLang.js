const but_select = document.querySelector('.footer__lang');
const select = document.querySelectorAll('.footer__lang--item');
const current_select = document.querySelector('.footer__lang--current');

let lang = getCookie("lang") || "ru";
current_select.innerHTML = document.querySelector(`[data-value = ${lang}]`).innerHTML;
// translation();

but_select.addEventListener("click", () => {
    but_select.classList.toggle("active");
});

select.forEach((el) => {
    el.addEventListener("click", () => changeLanguage(el));
})

// перенаправить на url с указанием языка
function changeLanguage(el) {
    if (lang != el.dataset.value && el.dataset.value !== 'zh') {
        lang = el.dataset.value;
        translation();

        let date = new Date;
        date.setDate(date.getDate() + 30);
        document.cookie = `lang=${lang}; path=/; expires=` + date.toUTCString();

        current_select.innerHTML = el.innerHTML;
    }
}

function translation() {
    const translate_blocks = document.querySelectorAll('[data-lang]');

    translate_blocks.forEach(el => {
        el.innerHTML = translate[lang][el.dataset.lang];
    });
}


// const userLang = (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';

// const translate_blocks = document.querySelectorAll('[data-lang]');
// const rmPoints = document.querySelectorAll('.rm_point');
// const tr = {}
// translate_blocks.forEach(el => {
//     tr[el.dataset.lang] = el.innerHTML.trim();
// });

// let str = "";
// for (let el in tr){
//     str+= '"' + el + '": ' +  '"' + tr[el].split('\n').join().trim() + '",';
// }
// let json = JSON.stringify(tr);
// console.log(json);