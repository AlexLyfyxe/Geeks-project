import React from 'react'
import { useTranslation } from 'react-i18next';

const Translate = () => {

    const { i18n } = useTranslation();


    const changeLanguage = (event) => {
        const selectLenguage = event.target.value
        i18n.changeLanguage(selectLenguage);
    };
    return (
        <>
            <select onChange={changeLanguage}>
                <option value="ru" >RU</option>
                <option value="en" >EN</option>

            </select>


        </>
    )
}

export default Translate