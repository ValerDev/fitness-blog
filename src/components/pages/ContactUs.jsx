import React from 'react';
import '../../assets/styles/pages/contact-us.scss';

const ContactUs = (props) => {
    return (
        <section id="contact-us">
            <div className="layout">
                <div className = "contact-img" style = {{backgroundImage:`url('/images/pages/contact/contact.jpg')`}}>
                </div>
                <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum provident, quas eaque molestiae quasi odio, repellat delectus error rerum explicabo earum pariatur dignissimos minima labore? Molestias quaerat alias saepe nostrum!    
                </span>
                <form action="POST" className = "contact-block">
                    <input id="name-contact" type="text" placeholder="Name" />
                    <input id="mail-contact" type="email" placeholder="Email" />
                    <textarea id="message-contact" placeholder="Message"></textarea>
                </form>
            </div>
        </section>
    )
}
export default ContactUs;