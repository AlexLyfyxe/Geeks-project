import React, { useState } from 'react';
import classes from "./GeeksPro.module.css";
import geeksWorker from '../img/geeksPro/worker.png'
import NumberCounter from './GeeksProStatistics';
import GeeksResumePage from "../geeksResume/GeeksResumePage";
import { useTranslation } from 'react-i18next';
function MainGeeksPro() {
    const Btn = ({ action, text }) => {
        return (
            <button className={classes.enter_btn} onClick={action}>{text}</button>
        );
    }
    const { t } = useTranslation();

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const counters = [
        { start: 0, end: 51, text: t("geeks_pro_text_post_number_1") },
        { start: 0, end: 68, text: t("geeks_pro_text_post_number_2") },
        { start: 0, end: 320, text: t("geeks_pro_text_post_number_3") },
        { start: 0, end: 22, text: t("geeks_pro_text_post_number_4") },
    ];


    return (
        <section className={classes.MainGeeksPro}>
            <div className={classes.container}>
                <div className={classes.geeks_content}>
                    <div className={classes.geeks_text}>
                        <h1 className={classes.main_title}>GEEKS PRO</h1>
                        <p className={classes.main_p}>
                            <p className={classes.first_p}>{t("geeks_pro_title")}</p>
                            <p className={classes.second_p}>
                                {t("geeks_pro_post_title")}
                                <span> 70 </span>
                                {t("geeks_pro_post_title_num")}
                            </p>
                        </p>
                        <a href>
                            <button>
                                {
                                    show &&
                                    <GeeksResumePage
                                        handleShow={handleShow}
                                    >
                                    </GeeksResumePage>
                                }
                                <Btn action={handleShow} text={t("geeks_pro_btn")} >{t("geeks_pro_btn")}</Btn>
                            </button>
                        </a>
                    </div>
                    <div className={classes.geeks_img}>
                        <img src={geeksWorker} alt="GeeksPro" />
                    </div>
                </div>
                <div className={classes.container}>
                    <div className={classes.geeks_statistics}>
                        <ul className={classes.main_list}>
                            {counters.map((counter, index) => (
                                <li key={index} className={classes.stat_list}>
                                    <NumberCounter start={counter.start} end={counter.end} text={counter.text} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainGeeksPro;




