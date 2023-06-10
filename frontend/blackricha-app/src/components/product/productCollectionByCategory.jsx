import { Link } from 'react-router-dom';
import { getProducts, getProductsByCategoryId } from '../../api/productsApi';
import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ModalCart from '../modalCart';
import Skeleton from './skeleton';






function ProductCollection({ categoryId, filters  }) {
    // const { price, sortBy } = filters;
    const [products, setProducts] = useState([]);

    // model 
    const [isModalOpen, setIsModalOpen] = useState(false);
    

    const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
    }
    


    // const handleButtonClick = () => {
    //     setIsModalOpen(true);
    //   };
    // const handleAddToCart = () => {
    //     setIsModalOpen(true);
    //   };


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsData = await getProductsByCategoryId(categoryId);
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, [categoryId]);
      

    // if (!products) {
    //     setLoading(true);
    // }
    const filteredProducts = products
    .filter((product) => {
      // Apply the price filter
      if (filters.priceTo && product.price > parseInt(filters.priceTo)) {
        return false;
      }
      if (filters.priceFrom && product.price < parseInt(filters.priceFrom)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Apply the sorting
      if (filters.sortBy === 'asc') {
        return a.price - b.price;
      } else if (filters.sortBy === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
    // const filteredProducts = products.filter((product) => product.CategoryId === categoryId);

    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
                {filteredProducts.length === 0 && [1,2,3,4].map((n)=><Skeleton key={n}/>)}
                {/* {filteredProducts.length === 0 && <Skeleton />} */}

                    {filteredProducts.map((product) => (
                        <div>
                            <Link to={`/products/${product.id}`}>
                                <li key={product.id} className="flex">
                                    <a href={product.href} className="block overflow-hidden group flex-grow">
                                        <img
                                            src="C:/Users/ambalitaiem/Desktop/blackRicha/frontend/blackricha-app/src/img/img1.jpg"
                                            alt=""
                                            className="h-[300px] w-full object-cover transition duration-500 group-hover:scale-105 "
                                        />

                                        <div className="relative pt-3 bg-white">
                                            <h3 className="text-md text-gray-700 group-hover:underline group-hover:underline-offset-4">
                                                {product.name}
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only">Price</span>
                                                <span className="tracking-wider text-gray-900">{product.price} </span>
                                            </p>
                                        </div>
                                    </a>
                                </li><button
                                onClick={handleOpenModal}

                                type="button"
                                className=" mt-3 group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">

                                <span
                                    className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0">

                                </span>

                                <span className="relative block border border-current bg-white px-8 py-3">
                                    CHOISIR LES OPTIONS {isModalOpen && <ModalCart/>}
                                </span>


                            </button>
                            </Link>
                            
                            
                            
                                
                            
                            
                        </div>
                    ))}
                    
                </ul>

            </div>
        </section>
    )
}

export default ProductCollection