import React from 'react';
import Wrapper from '../assets/wrappers/Services';
import services from '../utils/services';

function Services() {
    return (
        <Wrapper>
            <div className="services-container">
                <div className="services-title">
                    <div className="line"></div>
                    <h1 className="title">HOW IS THE IMPLEMENTATION OF THE SERVICE?</h1>
                    <div className="line"></div>
                </div>

                {services.map(({ id, img, alt, circle1, circle2, title, description }) => {
                    return (
                        <div key={id} className="service">
                            <div className="img-bg-container">
                                <div className="img-container">
                                    <img src={img} className="service-img" alt={alt} />
                                </div>
                                <div className={circle1}></div>
                                <div className={circle2}></div>
                            </div>
                            <div className="service-description service-1">
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    );
                })}

                <h4 className="services-description">
                Interior design is a process where your voice and <span>preferences are crucial</span>. My knowledge combined with your vision will allow you to create an interior that will reflect your personality and functional needs.<br />
                    <span>
                    I look forward to working with you and creating an interior that will exceed your expectations.
                    </span>
                </h4>
            </div>
        </Wrapper>
    );
}

export default Services;
