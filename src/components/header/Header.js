import React from 'react';
import { Link } from "react-router-dom";
import { NavbarList } from "../../utils/NavbarList";
import "./Header.css"
import Translate from './Translate';
// import { useTranslation } from 'react-i18next';
import { Trans } from 'react-i18next';


const Header = () => {

    // const { t } = useTranslation();


    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <Trans i8nKey="header">
                        <ul i18nIsDynamicList>
                            {
                                NavbarList.map(item => (

                                    <li key={item.id} >
                                        <Link to={item.route}>
                                            {item.caption}
                                        </Link>

                                    </li>
                                ))
                            }
                            < Translate />
                        </ul>
                    </Trans>

                </div>
            </div>
        </div>
    );
};

export default Header;