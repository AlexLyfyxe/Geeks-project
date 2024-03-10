import React from 'react';
import classes from "./GeeksResume.module.css";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const GeeksResumePage = ({ handleShow }) => {
    const CloseBtn = ({ action, text }) => {
        return (
            <button className={classes.close_btn} onClick={action}>{text}</button>
        );
    }

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const { t } = useTranslation();

    return (
        <>
            <div className={classes.container}>
                <div className={classes.signIn_wrap}>
                    <h1 className={classes.signIn_title}>{t("geeks_pro_modal_title")}</h1>
                    <form className={classes.signIn_form}>
                        <input
                            type="text"
                            placeholder={t("login")}
                            name="login"
                            className={classes.signIn_input}
                        />
                        <input
                            type="password"
                            placeholder={t("password")}
                            name="password"
                            className={classes.signIn_input}
                        />
                        <button className={classes.btn_enter}>
                            <span
                                className={classes.signIn_enter}>{t("enter")}

                            </span>
                        </button>
                    </form>
                    <CloseBtn text={'Закрыть'} action={handleShow} />
                </div>
            </div>

        </>
    );
};

export default GeeksResumePage;




