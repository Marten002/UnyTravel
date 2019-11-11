import React from 'react';

function SliderButtonNext(props) {

    const { onClick } = props;

    return (
        <div className="slide__button slide__button--left" onClick={onClick}>
            <img src="https://svgshare.com/i/Fq0.svg" alt="sliderButtonNext" className="img--fluid img--small"/>
        </div>
    );
};

export default SliderButtonNext;