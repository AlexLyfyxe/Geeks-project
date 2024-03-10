import React from 'react';
import { Link } from "react-router-dom";
import { NavbarList } from "../../utils/NavbarList";
import "./Header.css"
import Arrow from '../header/ic_arrow_forward_48px.svg'
import Translate from './Translate';
import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';


const Header = () => {

    const { t } = useTranslation();


    return (
        <header>
            <div className="container">
                <div className="contents">
                    <Link to={'/'}>
                        <img src="https://geeks.kg/static/media/Logo.857f888619bb2c8fbecc9c3a4c3e4a5f.svg" alt="" />
                    </Link>
                    {/*{*/}
                    <div className="navigation_nav">
                        {
                            NavbarList.map((item, index) => (
                                <nav key={item.id} >
                                    <Link to={item.route}>
                                        {/* {item.caption} */}
                                        <Trans i18nKey={`header.text_${index + 1}`}>{t(`header.${item.caption})`)}</Trans>
                                    </Link>
                                </nav>
                            ))
                        }
                        <Translate />
                    </div>
                    {/*}*/}
                    <a className="btn" href="https://geeks.bitrix24site.ru/crm_form_85mqv/">
                        {t("sign_up")}
                        <img src={Arrow} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;