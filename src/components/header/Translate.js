import React from 'react'
import { useTranslation } from 'react-i18next';
import "./Header.css"


const Translate = () => {

    const { i18n } = useTranslation();


    const changeLanguage = (event) => {
        const selectLenguage = event.target.value
        i18n.changeLanguage(selectLenguage);
    };
    return (
        <>
            <div class="custom-select">
                <select className='TranslateSelect' onChange={changeLanguage}>
                    <option className='TranslateOption' value="ru" >RUS </option>
                    <option className='TranslateOption' value="en" >ENG </option>
                </select>
            </div>

        </>
    )
}

export default Translate