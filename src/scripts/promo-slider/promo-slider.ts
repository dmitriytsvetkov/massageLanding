import Swiper from 'swiper'
import { Pagination, Autoplay } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.promo-slider', {
        spaceBetween: 24,
        modules: [Pagination, Autoplay],
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: false,
        },
        breakpoints: {
            768: {
                spaceBetween: 32,
            },
        },
        autoplay: true,
    })
})
