import React from 'react';
import 'react-redux'
import '../../../style.css'
import classes from './main.module.css'
import { main } from './data'
import StudentsGraduatesItem from './mainComponents/studentsGraduates/StudentsGraduatesItem';
import WorkSlider from './mainComponents/workGraduates/WorkGraduates';
import ReviewSlider from './mainComponents/studentsReview/StudentsReview';
import { ReactComponent as BlackArrowRight } from '../main/mainComponents/icons/blackArrowRight.svg'
import { ContactsBox, Mapbox } from './mainComponents/contactsMap/ContactsMap';

const Main = () => {
  return (
    <div>
      <div className={classes.centerMain}>
        <div className={classes.upperImg}>
          <img src="https://editors.dexerto.com/wp-content/uploads/2024/01/02/sae-5.jpg" />
        </div>
        <div className={classes.mainContainer}>
          <div className={classes.centerWrapper}>
            <div className={classes.images}>
              <img src='https://i.pinimg.com/236x/2a/e6/4b/2ae64be9c72d6a515366f6448bd94500.jpg' />
              <div className={classes.shadowImg}></div>
            </div>
            <div className={classes.center_center}>
              <p className={classes.centerTitle}>Курсы программирования Бишкек</p>
              <p className={classes.centerSubtitle}>Образовательный центр Geeks (Гикс) был основан Fullstack-разработчиком Айдаром Бакировым и Android-разработчиком Нургазы Сулаймановым в 2018-ом году в Бишкеке с целью дать возможность каждому человеку, даже без опыта в технологиях, гарантированно освоить IT-профессию. В данный момент более 1200 студентов в возрасте от 12 до 45 лет изучают здесь программирование, дизайн и английский язык. Филиальная сеть образовательного центра представлена в таких городах, как Бишкек, Ош и Кара-Балта.</p>
              <a href='/aboutUs'>
                <button>
                  Подробнее о нас
                </button>
              </a>
            </div>
            <div className={classes.images}>
              <img src='https://media.notify.moe/images/characters/large/ZKSCbemmg.webp?1524325828' />
              <div className={classes.shadowImg}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.studentGraduates}>
        <div className={classes.mainContainer}>
          <p className={classes.studentTitle}>Наши выпускники</p>
          <div className={classes.infoBlock}>
            {main.items.map(item => (
              <StudentsGraduatesItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className={classes.workGraduates}>
        <WorkSlider slides={main.graduateSlides} />
      </div>
      <div className={classes.studentsReview}>
        <div className={classes.mainContainer}>
          <div>
            <p className={classes.reviewTitle}>Отзывы студентов</p>
          </div>
          <div className={classes.reviewWrapper}>
            <ReviewSlider slides={main.reviewsSlides} />
          </div>
        </div>
      </div>
      <div className={classes.completeTest}>
        <div className={classes.mainContainer}>
          <div className={classes.testWrapper}>
            <div className={classes.testLeft}>
              <p className={classes.testTitle}>Пройдите тест чтобы определиться с направлением</p>
              <a href="" target='_blank'>
                <button color='yellow' className={classes.testLink}>
                  Пройти тест
                  <BlackArrowRight/>
                </button>
              </a>
            </div>
            <div className={classes.testRight}>
              <img src="https://images.squarespace-cdn.com/content/v1/5ace4845e17ba35c9d8eb95e/cd4f95b1-8bd5-4e9b-88ab-92b267c3d5d0/ayanokji+and+hirotika.PNG" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.contactsWrapper}>
        <div className={classes.mainContainer}>
          <div className={classes.contactsContent}>
            <ContactsBox />
            <Mapbox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;