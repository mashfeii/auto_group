/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper from 'swiper'
import { Navigation } from 'swiper/modules'
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import '../../scss/base/swiper.scss'
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css'

// Инициализация слайдеров
function initSliders() {
  if (document.querySelector('.swiper')) {
    // Указываем скласс нужного слайдера
    new Swiper('.swiper', {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 30,
      loop: true,
      speed: 800,
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        420: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1268: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      },
    })
  }
}
window.addEventListener('load', function() {
  // Запуск инициализации слайдеров
  initSliders()
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
})
