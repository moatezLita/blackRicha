import React from 'react';
import '../App.css'
// import Header from '../components/common/Header';
import ProductListing from '../components/home/productListing';
import HeroSection from '../components/home/heroSection';
import Carousel from '../components/home/carousel';
import Header from '../components/header/Header';
import Album from '../components/home/album';
import CategotyPreview from '../components/home/categoryPreview';
import ProductGrid from '../components/home/productGrid';
import PromoSection from '../components/home/promoSection';
import BottomBanner from '../components/home/bottomBanner';

// This is just an example. You'd fetch these from your API.


const HomePage = () => {
    return (
        <>  
        
            
            <div className="carousel-container">
                <Carousel />
            </div>
            <div className='center hero-section-container'>
                <HeroSection />
            </div>
            <div>
                <CategotyPreview/>
            </div>
            
            <div className="text-center mb-3">
                <h4>Our products</h4>
            </div>
            <div className=" mb-8">
                <ProductListing/>
                {/* <Tab /> */}
            </div>
            {/* <div><Album/></div> */}
            <div className='   mt-20 mb-20' >
                <PromoSection/>
            </div>
            <div><BottomBanner/></div>
            {/* <div><Footer /></div> */}
            
        </>
    );
}
export default HomePage;
