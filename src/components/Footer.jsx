import React from 'react';
import footer from "../assets/styles/footer.scss"
import {Link} from "react-router-dom";

const Footer = (props) => {
    return(
        <footer>
          <div className = "footer-block">
            <div className="contact-block">

            </div>
            <div className="footer-menu">
              {
                props.data.footer_menu.map(
                  (menu,i) => <div><Link key = {i} to = {menu.link}>{menu.title}</Link></div>
                )
              }
            </div>
          </div>
        </footer>
    )
}
export default Footer;