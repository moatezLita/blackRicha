import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselExt() {
    return (
        <div className="">
        <div className="carousel-wrapper "style={{ maxWidth: '800px', margin: '0 auto' }}>
            <Carousel infiniteLoop useKeyboardArrows autoPlay  >
                <div>
                    <img src="/images/litcloute/108A4391.jpg" />
                </div>
                <div>
                    <img src="/images/litcloute/108A4470.jpg" />
                </div>
                <div>
                    <img src="/images/litcloute/108A4468.jpg" />
                </div>
            </Carousel>
        </div>
        </div>
    );
}
