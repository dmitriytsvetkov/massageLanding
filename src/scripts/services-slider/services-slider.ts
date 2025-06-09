import Swiper from 'swiper'
import { Controller } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    const tabsSwiper = new Swiper('.tabs-swiper', {
        modules: [Controller],
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        slideToClickedSlide: true,
        breakpoints: {
            667: {
                spaceBetween: 135,
            },
            1024: {
                spaceBetween: 0,
                centeredSlides: false,
                slidesPerView: 3,
                slideToClickedSlide: false,
            },
        },
    })

    const contentSwiper = new Swiper('.content-swiper', {
        modules: [Controller],
        slidesPerView: 1,
        allowTouchMove: false,
    })

    tabsSwiper.controller.control = contentSwiper
    contentSwiper.controller.control = tabsSwiper

    tabsSwiper.on('click', (swiper) => {
        const idx = swiper.clickedIndex

        if (typeof idx === 'number') {
            contentSwiper.slideTo(idx)

            swiper.slides.forEach((slide, i) => {
                slide.classList.toggle('swiper-slide-active', i === idx)
            })
        }
    })
})
