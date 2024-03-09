import React from 'react';
import { Link } from "react-router-dom";
import { NavbarList } from "../../utils/NavbarList";
import "./Header.css"
import Arrow from '../header/ic_arrow_forward_48px.svg'
import Translate from './Translate';
// import { useTranslation } from 'react-i18next';



const Header = () => {

    // const { t } = useTranslation();


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
                            NavbarList.map(item => (
                                <nav key={item.id} >
                                    <Link to={item.route}>
                                        {item.caption}
                                    </Link>
                                </nav>
                            ))
                        }
                        <Translate />
                    </div>
                    {/*}*/}
                    <a className="btn" href="https://geeks.bitrix24site.ru/crm_form_85mqv/">
                        ЗАПИСАТЬСЯ
                        <img src={Arrow} alt="" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;