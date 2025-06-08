import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.hero-slider', {
        modules: [Navigation, Pagination],
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
    })
})
