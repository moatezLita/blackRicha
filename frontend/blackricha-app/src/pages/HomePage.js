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

            {/* <div className="mt-20">
                <CarouselEx/>

            </div> */}
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
                        t-shirt pour homme
                    </h2>

                    
                </header>
                <ProductCollectionByCategory categoryId={2} filters={filters} />
            </div>
            <div>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Colletion pour Femmes
                    </h2>

                    <p className="max-w-md mx-auto mt-4 text-gray-500">
                    
                    </p>
                </header>
                <ProductCollectionByCategory categoryId={3} filters={filters}/>
            </div>
            <div>
                <header className="text-center">
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Accessoires
                    </h2>

                    {/* <p className="max-w-md mx-auto mt-4 text-gray-500">
                    Expérience de sommeil exceptionnelle garantie avec nos matelas haut de gamme.
                     Choisissez le confort parfait pour des nuits reposantes.
                    </p> */}
                </header>
                <ProductCollectionByCategory categoryId={6} filters={filters}/>
            </div>

            
         
            <div><BottomBanner /></div>
           
        </>
    );
}
export default HomePage;
