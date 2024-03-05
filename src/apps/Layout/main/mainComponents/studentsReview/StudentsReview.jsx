import React from 'react'
import classes from './studentsReview.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css'


function ReviewSlider({ slides }) {
    return (
        <Swiper
            modules={[Navigation]}
            spaceBetween={40}
            slidesPerView={3}
            navigation
            scrollbar={{ draggable: true }}
            loop={true}
        >
            <SwiperNavButton/>
            {slides.map((slide, index) => (
                <SwiperSlide key={index} className={classes.swiperSlide}>
                <div className={classes.reviewSlide}>
                    <iframe style={{width: "100%", height: "300px"}} src={slide.src} rel='nofollow' allowFullScreen loading='lazy' className={classes.reviewIframe}></iframe>
                </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ReviewSlider

const SwiperNavButton = () => {
    const swiper = useSwiper()

    return (
        <div>
            <div className={classes.btns}>
                <button color='black' onClick={() => swiper.slidePrev()}>
                </button>
                <button color='black' onClick={() => swiper.slideNext()}>
                </button>
            </div>
        </div>
    )
}