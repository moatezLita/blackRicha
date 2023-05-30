import React from 'react';
import '../App.css'
// import Header from '../components/common/Header';
import ProductListing from '../components/home/productListing';
import HeroSection from '../components/home/heroSection';
import Carousel from '../components/home/carousel';
import CategotyPreview from '../components/home/categoryPreview';
import PromoSection from '../components/home/promoSection';
import BottomBanner from '../components/home/bottomBanner';
import ProductCollection from '../components/home/productCollection';

// This is just an example. You'd fetch these from your API.


const HomePage = () => {
    return (
        <>


            <div className="carousel-container">
                <Carousel />

            </div>
            <div className="mt-10 mb-10">
                <h2 className="text-2xl font-bold text-center mb-4">Discover New Products</h2>
                <p className="text-gray-600 text-center">Explore our latest collection and find something you'll love.</p>
            </div>
            <div className=" ">
                <div>
                    <CategotyPreview />
                </div>
                {/* <ProductListing /> */}
                {/* <Tab /> */}
            </div>
            {/* <div className='center hero-section-container'>
                <HeroSection />
                <ProductGrid/>
            </div> */}
            
            <div>
                <ProductCollection />

            </div>

            <div className="text-center mb-3">
                <h4>Our products</h4>
            </div>
            <div className=" mb-8">
                <ProductListing />
                {/* <Tab /> */}
                <ProductListing />
            </div>
            {/* <div><Album/></div> */}
            <div className='   mt-20 mb-20' >
                <PromoSection />
            </div>
            <div><BottomBanner /></div>
            {/* <div><Footer /></div> */}

        </>
    );
}
export default HomePage;
