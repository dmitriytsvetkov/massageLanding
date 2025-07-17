import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.hero-slider', {
        modules: [Navigation, Pagination, Autoplay],
        loop: true,
        slidesPerView: 1,
        spaceBetween: 4,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: true,
    })
})
