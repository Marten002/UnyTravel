import React from 'react';

function SliderButtonPrev(props) {

    const { onClick } = props;

    return (
        <div className="slide__button slide__button--left" onClick={onClick}>
            <img src="https://svgshare.com/i/Fqg.svg" alt="sliderButtonPrev" className="img--fluid img--small"/>
        </div>
    );
};

export default SliderButtonPrev;