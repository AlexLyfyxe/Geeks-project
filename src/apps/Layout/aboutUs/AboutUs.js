import React from 'react';
import { useTranslation } from 'react-i18next';


const AboutUs = () => {

    const { t } = useTranslation();

    return (
        <div>

            <h1>{t("header.about_us")}</h1>
        </div>
    );
};

export default AboutUs;