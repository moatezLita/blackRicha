import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

// This is just an example. You'd fetch these from your API.
const products = [{
    id: 1,
    name: "Product 1",
    description: "This is product 1",
    image: "product1.png"
}, {
    id: 2,
    name: "Product 2",
    description: "This is product 2",
    image: "product2.png"
}];

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="grid grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
