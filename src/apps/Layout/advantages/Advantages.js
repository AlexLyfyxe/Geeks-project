import React from 'react';
import { useTranslation } from 'react-i18next';


const Advantages = () => {

    const { t } = useTranslation();

    return (
        <div>
            <h1>{t("content.advantages.text_h1")}</h1>
        </div>
    );
};

export default Advantages;