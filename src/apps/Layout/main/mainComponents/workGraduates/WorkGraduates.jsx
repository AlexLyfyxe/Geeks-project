import React from 'react'
import classes from './workGraduates.module.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation } from 'swiper/modules';
import 'swiper/css'
import { ReactComponent as BlackArrowRight } from '../icons/blackArrowRight.svg'
import { ReactComponent as BlackArrowLeft } from '../icons/blackArrowLeft.svg'


function WorkSlider({ slides }) {
    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.headingAndBtns}>
                    <p className={classes.workTitle}>Выпускные работы студентов</p>
                    
                </div>
            </div>
            <div className={classes.sliderWrapper}>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={2.545}
                    navigation={{
                    nextEl: classes.swiperButtonNext,
                    prevEl: classes.swiperButtonPrev
                    }}
                    draggable={true}
                    loop={true}
                    className={classes.sliderContent}
                >
                    {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className={classes.workSlide}>
                        <img
                            src={slide.img}
                            alt={slide.alt}
                            className={classes.workImg}
                        />
                        <div className={classes.workInfo}>
                            <p className={classes.workTitle}>{slide.title}</p>
                            <p className={classes.workSubtitle}>{slide.subtitle}</p>
                        </div>
                        <button className={classes.linkBtn}>
                            <a 
                            href={slide.link} 
                            target='_blank' 
                            className={classes.link}
                            >
                            Перейти
                            <BlackArrowRight/>
                            </a>
                        </button>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default WorkSlider

const SwiperNavButton = () => {
    const swiper = useSwiper()

    return (
        <div>
            <div className={classes.btns}>
                <button color='black' onClick={() => swiper.slidePrev()}>
                    <BlackArrowLeft/>
                </button>
                <button color='black' onClick={() => swiper.slideNext()}>
                    <BlackArrowRight/>
                </button>
            </div>
        </div>
    )
}