import React from 'react';
import {Link} from "react-router-dom";
import {NavbarList} from "../../utils/NavbarList";
import "./Header.css"

const Header = () => {
    return (
        <div>
            <div className="container">
                <div className="navbar">
                    <ul>
                        {
                            NavbarList.map(item => (
                                <li key={item.id} >
                                    <Link to={item.route}>
                                        {item.caption}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;