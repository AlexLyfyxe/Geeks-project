import React, { useEffect } from 'react';
import classes from "./GeeksQuestions.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import GeeksQuestionsData from './GeeksQuestions.json';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';

const GeeksQuestions = () => {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    const { t } = useTranslation();

    const { main_block } = GeeksQuestionsData.geeksQuestions;
    const { questions } = main_block;

    return (
        <section className={classes.GeeksQuestions}>
            <div className={classes.container}>
                <div className={classes.geeks_questions}>
                    <div className={classes.main_block} data-aos="fade-up" data-aos-duration="800" data-aos-once="true">
                        {questions.map((question, index) => (
                            <div key={index} className={classes.ques_block}>
                                <p className={classes.first_p}><Trans i18nKey={`geeks_pro_${index + 1}.first_p`}>{t(`geeks_pro_${index + 1}.${question.first_p})`)}</Trans></p>
                                <p className={classes.second_p}><Trans i18nKey={`geeks_pro_${index + 1}.second_p`}>{t(`geeks_pro_${index + 1}.${question.second_p})`)}</Trans></p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GeeksQuestions;