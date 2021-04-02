import React from 'react';
import footer from "../assets/styles/footer.scss"
import { Link } from "react-router-dom";

const Footer = (props) => {
  console.log('footer', props);
  return (
    <footer>
      <div className="footer-block">
        <div className="contact-block">

        </div>
        <div className="footer-menu">
          {
            props.state.footer_menu.map((menu, index) => <Link key={index} to={menu.link}>{menu.title}</Link>)
          }
        </div>
      </div>
    </footer>
  )
}
export default Footer;