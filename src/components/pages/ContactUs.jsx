import React from 'react';
import '../../assets/styles/pages/contact-us.scss';
import {
    handleNameChangeActionCreator,
    handleEmailChangeActionCreator,
    handleMessageChangeActionCreator
} from '../../redux/contactReducers';

const ContactUs = (props) => {

    const handleName = (newName) => {
        props.dispatch(handleNameChangeActionCreator(newName.target.value))
        console.log(newName)
    }
    const handleEmail = (newEmail) => {
        props.dispatch(handleEmailChangeActionCreator(newEmail.target.value))
    }
    const handleMessage = (newMessage) => {
        props.dispatch(handleMessageChangeActionCreator(newMessage.target.value))
    }

    return (
        <section id="contact-us">
            <div className="layout">
                <div className="contact-img" style={{ backgroundImage: `url('/images/pages/contact/contact.jpg')` }}>
                </div>
                <span className='contact-info'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum provident, quas eaque molestiae <br/>
                    quasi odio, repellat delectus error rerum explicabo earum pariatur dignissimos minima labore? <br/>
                    Molestias quaerat alias saepe nostrum!
                </span>
                <form action="POST" className="contact-block">
                    <input onChange={handleName} id="name-contact" type="text" placeholder="Name" />
                    <input onChange={handleEmail} id="mail-contact" type="email" placeholder="Email" />
                    <textarea onChange={handleMessage} id="message-contact" placeholder="Message"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </section>
    )
}
export default ContactUs;