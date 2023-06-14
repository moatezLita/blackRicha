import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
export default function CarouselExt() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://picsum.photos/id/47/600/90" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/47/600/40" />
                </div>
                <div>
                    <img src="https://picsum.photos/id/47/600/40" />
                </div>
            </Carousel>
        </div>
    );
}
