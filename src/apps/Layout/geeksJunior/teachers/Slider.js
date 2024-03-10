import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.css';
import classes from './GeeksTeachers.module.css';
import teachers from './Teachers.json';

const SliderSlick = ({ sliderRef, next, previous }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
  };

  return (
    <div>
      <Slider className={classes.slider} ref={sliderRef} {...settings}>
        {teachers.map((teacher) => (
          <div key={teacher.id} className="teachers">
            <div className="info">
              <div className="rom">
                <img
                  className="image"
                  src="https://geeks.kg/back_media/general/2023/07/18/89e4eb40-b4d2-4fda-86a6-dadd9f7af77e.webp"
                  alt="teacher"
                />
              </div>
              <div className="info-teacher">
                <div className="title">{teacher.title}</div>
                <div className="subtitle">{teacher.subtitle}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderSlick;
