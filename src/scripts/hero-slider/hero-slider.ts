import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
