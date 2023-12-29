const but_select = document.querySelector('.footer__lang');
const select = document.querySelectorAll('.footer__lang--item');
const current_select = document.querySelector('.footer__lang--current');

let language = getCookie('lang') || 'ru';
current_select.innerHTML = document.querySelector(`[data-value = ${language}]`).innerHTML;
translation('en');

// but_select.addEventListener("click", () => {
//     but_select.classList.toggle("active");
// });

// select.forEach((el) => {
//     el.addEventListener("click", () => changeLanguage(el));
// })

// function changeLanguage(el) {
//     if (language != el.dataset.value && el.dataset.value !== 'zh') {
//         language = el.dataset.value;
//         translation();

//         let date = new Date;
//         date.setDate(date.getDate() + 30);
//         document.cookie = `lang=${language}; path=/; expires=` + date.toUTCString();

//         current_select.innerHTML = el.innerHTML;
//     }
// }

function translation(lang) {
	const translate_blocks = document.querySelectorAll('[data-lang]');

	translate_blocks.forEach((el) => {
		try {
			el.innerHTML = translate[el.dataset.lang][lang];
		} catch (error) {
			console.warn(error);
		}
	});
}
