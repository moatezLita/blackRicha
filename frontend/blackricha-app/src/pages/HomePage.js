import React, { useState } from 'react';
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
import Album from '../components/home/album';


// This is just an example. You'd fetch these from your API.


const HomePage = () => {
    const [filters, setFilters] = useState({
        priceTo: '',
        priceFrom:'',
        sortBy: '',
      });
    
    return (
        <>

            <div className="mt-20">
                <CarouselEx/>

            </div>
            <div className="mt-10 mb-10">
                <h2 className="text-2xl font-bold text-center mb-4">Découvrez de nouveaux produits</h2>
                <p className="text-gray-600 text-center">Explorez notre dernière collection et trouvez quelque chose que vous allez adorer.</p>
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
            <div className='mt-10'>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Cadre de lit
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                    Découvrez notre collection de cadres de lit 
                    haut de gamme pour créer une chambre à coucher élégante et confortable. 
                    </p>
                </header>
                <ProductCollectionByCategory categoryId={1} filters={filters} />
            </div>
            <div>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Lit coffre
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                    Confort et rangement réunis pour une chambre pratique et stylée.
                     Découvrez notre sélection pour maximiser l'espace de votre chambre avec élégance.
                    </p>
                </header>
                <ProductCollectionByCategory categoryId={3} filters={filters}/>
            </div>
            <div>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Matelas
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                    Expérience de sommeil exceptionnelle garantie avec nos matelas haut de gamme.
                     Choisissez le confort parfait pour des nuits reposantes.
                    </p>
                </header>
                <ProductCollectionByCategory categoryId={3} filters={filters}/>
            </div>

            <div className="text-center mb-3">
                {/* <h4>Our products</h4> */}
            </div>
            {/* <div className=" mb-8"> */}
                {/* <ProductListing /> */}
                {/* <Tab /> */}
                {/* <ProductListing /> */}
            {/* </div> */}
            {/* <div><Album categoryId={4}/></div> */}
            <div className='   mt-20 mb-20' >
                {/* <PromoSection /> */}
            </div>
            <div><BottomBanner /></div>
            {/* <div><Footer /></div> */}
        </>
    );
}
export default HomePage;
