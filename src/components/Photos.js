import React, { useState, useEffect, useMemo } from 'react';
import room1 from '../assets/img/room-5.jpg';
import room2 from '../assets/img/room-4.jpg';
import Wrapper from '../assets/wrappers/Photos';
import { Link } from 'react-router-dom';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Photos() {
    const titles = useMemo(() => ['creativity', 'functionality', 'details'], []);
    const [title, setTitle] = useState(titles[0]);
    const [index, setIndex] = useState(0);

    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((index + 1) % 3);
            setTitle(titles[index]);
        }, 4000);

        return () => clearInterval(interval);
    }, [titles, index]);

    return (
        <Wrapper>
            <div className="main-container">
                {windowSize.width > 800 ? (
                    <ReactCompareSlider
                        boundsPadding={20}
                        itemOne={<ReactCompareSliderImage alt="Image one" src={room1} />}
                        itemTwo={
                            <ReactCompareSliderImage
                                alt="Image two"
                                src={room2}
                                style={{ transform: 'scale(1.125)' }}
                            />
                        }
                        position={90}
                        style={{
                            height: '70vh',
                            width: '100%',
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            objectFit: 'cover',
                            opacity: '1'
                        }}
                    />
                ) : (
                    <img src={room1} className="slide-1" alt="" />
                )}
                <div className="title-container">
                    <div className="main-title">
                        <h2>
                            I always care about <span className="title">{title}</span>
                        </h2>
                        <h2>combining art with practical approach...</h2>
                        <div className="line"></div>
                        <Link to="/contact" className="btn btn-contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default Photos;
