import React from 'react';
import { Link } from "react-router-dom";
import "../assets/styles/header.scss"

const Header = (props) => {
    const header_menu = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "Blog",
            link: "/blog"
        },
        {
            title: "About us",
            link: "/about-us"
        },
        {
            title: "Contact Us",
            link: "/contact-us"
        }
    ]
    return (
        <header>
            <div className='layout header-block'>
                <div className="logo-block">
                    <Link to="/">
                        <img src="https://technext.github.io/original/img/core-img/logo.png" alt="" />
                    </Link>
                </div>
                <div className="primary-menu">
                    {
                        header_menu.map((menu, index) => <Link key={index} to={menu.link}>{menu.title}</Link>)
                    }
                </div>
            </div>
        </header>
    )
}
export default Header;