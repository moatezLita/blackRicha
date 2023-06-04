import React from 'react';
// import Header from '../components/common/Header';
import ProductListing from '../components/home/productListing';
import HeroSection from '../components/home/heroSection';
import Carousel from '../components/home/carousel';
import CategotyPreview from '../components/home/categoryPreview';
import PromoSection from '../components/home/promoSection';
import BottomBanner from '../components/home/bottomBanner';
import ProductCollection from '../components/home/productCollection';
import CarouselEx from '../components/home/carousel';
import ProductCollectionByCategory from '../components/product/productCollectionByCategory';

// This is just an example. You'd fetch these from your API.


const HomePage = () => {
    return (
        <>

            <div className="">
                <CarouselEx/>

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
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>
                <ProductCollectionByCategory categoryId={1} />
            </div>
            <div>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
                        natus?
                    </p>
                </header>
                <ProductCollectionByCategory categoryId={3} />
            </div>

            <div className="text-center mb-3">
                <h4>Our products</h4>
            </div>
            {/* <div className=" mb-8"> */}
                {/* <ProductListing /> */}
                {/* <Tab /> */}
                {/* <ProductListing /> */}
            {/* </div> */}
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
