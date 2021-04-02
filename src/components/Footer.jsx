import React from 'react';
import footer from "../assets/styles/footer.scss"
import { Link } from "react-router-dom";

const Footer = (props) => {
  console.log('footer', props);
  return (
    <footer id = "footer">
      <div className="layout footer-block">
        <div className = "logo-block">
          <div className = "footer-logo" style = {{backgroundImage:`url(https://technext.github.io/original/img/core-img/logo.png)`}}></div>
        </div>
        <div className="contact-block">
            <h4>Contact Us</h4>
            <div>
              <span>Phone: +37465411651</span>
              </div>
            <div>
              <span>Email: einvoco@mail.org</span>
            </div>
            <div>
              <span>Github: github@github</span>
            </div>           
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