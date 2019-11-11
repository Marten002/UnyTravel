import React, { Component } from 'react';
import './Carousel.css';
import './Carousel'
import Slider from 'react-slick';
import SliderButtonNext from '../SliderButtonNext/SliderButtonNext';
import SliderButtonPrev from '../SliderButtonPrev/SliderButtonPrev';

class Carousel extends Component {
    constructor() {
        super();

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);

    }

    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
  
    render() {

        const settings = {
            dots: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 10000,
            cssEase: "linear",
            infinite: true,
            fade: true,
            pauseOnHover: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SliderButtonNext/>,
            prevArrow: <SliderButtonPrev/>
        };

        let countryName = this.props.countryName;
        let countryImage = this.props.countryImage;
        
        return (
            <Slider {...settings}>
                {Object.keys(countryName).map((elem, index) => {
                    return <div key={index} data-image={index} className={`slide slide${index + 1}`}>
                                <div className="content__location location location--left" >
                                    <div className="location__img">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" className="img--fluid img--small" viewBox="0 0 15 15">
                                            <path d="M7.50009 0C4.78959 0 2.58447 2.20368 2.58447 4.91241C2.58447 7.51567 7.05171 14.5597 7.24188 14.8583C7.29808 14.9466 7.39546 15 7.50009 15C7.60472 15 7.7021 14.9466 7.75827 14.8583C7.94844 14.5597 12.4156 7.51564 12.4156 4.91241C12.4156 2.20368 10.2105 0 7.50009 0ZM7.50009 14.1161C7.0958 13.4622 6.27533 12.1084 5.46288 10.6083C3.98036 7.87105 3.19675 5.90146 3.19675 4.91241C3.19672 2.54128 5.12722 0.612245 7.50009 0.612245C9.87297 0.612245 11.8034 2.54128 11.8034 4.91241C11.8034 5.90146 11.0198 7.87105 9.53727 10.6083C8.72482 12.1083 7.90436 13.4622 7.50009 14.1161Z" fill="white"/>
                                            <path d="M7.50008 2.32874C6.21792 2.32874 5.1748 3.3435 5.1748 4.5908C5.1748 5.83806 6.21792 6.85277 7.50008 6.85277C8.78224 6.85277 9.82536 5.83806 9.82536 4.5908C9.82536 3.3435 8.78224 2.32874 7.50008 2.32874ZM7.50008 6.24049C6.55554 6.24049 5.78705 5.50044 5.78705 4.59077C5.78705 3.68106 6.55554 2.94095 7.50008 2.94095C8.44462 2.94095 9.21311 3.68106 9.21311 4.59077C9.21311 5.50044 8.44465 6.24049 7.50008 6.24049Z" fill="white"/>
                                        </svg>
                                    </div>
                                    <div className="location__count">
                                        <span>{countryName[elem]}</span>
                                    </div>
                                </div>
                            </div>
                })}
            </Slider>
        );
    }
  }
  
  export default Carousel;