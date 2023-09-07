import React from 'react';
import Wrapper from '../assets/wrappers/Contact';
import Logo from '../components/Logo';
import SmallMenu from '../components/SmallMenu';

function Contact() {
    return (
        <Wrapper>
            <SmallMenu />
            <div className="contact-container">
                <Logo />
                <div className="line"></div>
                <div className="contact-wrapper">
                    <form className="contact-form">
                        <h2>CONTACT FORM</h2>
                        <h3>
                            I will gladly answer <span>your</span> questions
                        </h3>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="E-mail" />
                        <textarea placeholder="Message..."></textarea>
                        <div className="agreement">
                            <label className="form-control">
                                <input type="checkbox" id="checkbox" name="checkbox" />
                                <p>
                                    I consent to the processing of my personal data in accordance with the Personal Data
                                    Protection Act in connection with the implementation of the application, Privacy Policy.
                                </p>
                            </label>
                        </div>
                        <button className="btn" type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default Contact;
