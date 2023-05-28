import { getProducts } from '../../api/productsApi';
import React, { useState, useEffect } from 'react';






function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, []);
  
  if (!products) {
    return <div>Loading...</div>;
  }
  const randomIndex = Math.floor(Math.random() * (products.length - 3 + 1)); // Generate random starting index

  
  return (
    <div className='productListing'
    style={{fontSize: '0.70rem',
    lineHeight: '0.90rem',
    borderRadius: '2px'}}>
   
    
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />
    
    
    <div class="flex flex-row items-center justify-center mt-10 space-x-4">
      

        {products.slice(randomIndex, randomIndex + 3).map((product) => (
            <div key={product.id} href={product.href} className="group">
            <div class="flex flex-row items-center justify-center mt-32 shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300 space-x-4">
                       <div class="inline relative group h-48">
                
                        <img class="absolute rounded-t object-cover h-full w-full"
                            src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?auto=format&fit=crop&w=1170&q=80"
                            alt="Product Preview" />
    
                    
            </div>
    
                    <div class="flex flex-col bg-white rounded-b p-3">
                             <div class="text-sm font-semibold text-gray-900 hover:underline truncate">
                    <a>{product.name}</a>
                </div>
    
                {product.description}
                <div class="text-xxs text-gray-400 truncate mt-1">
                    by
    
                                      <a class="font-semibold hover:underline"> EgoistDeveloper </a>
    
                    in
                                        <a class="font-semibold hover:underline"> e-commerce </a>
                </div>
    
                             <div class="text-sm text-gray-600 font-bold mt-4 mb-1">
                    $23
                </div>
    
                            <div class="flex flex-row mt-2">
                    
                    <div class="flex flex-col flex-auto">
                                              <div class="flex flex-row group">
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Worst"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Bad"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Not Bad"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200" 
                                title="Good"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Awesome"></i>
    
                            <div class="text-xxs text-gray-400 ml-1 hover:underline">
                                (45)
                            </div>
                        </div>
    
                        
                        <div class="text-xxs text-gray-400 mt-1" title="34k Downlaods in this year">
                            34k Downloads
                        </div>
                    </div>
    
                    
                    <div class="flex flex-row flex-auto justify-end">
                        
                        
                        <a class="flex text-xs border px-3 my-auto py-2 mr-2
                            border-amber-500 group hover:bg-amber-500 
                            rounded-xss
                            transition-all duration-200">
                            
                            
                            <i class="mdi mdi-cart-outline text-amber-700
                                group-hover:text-white delay-100"></i>
                        </a>
    
                        
                        <a class="flex text-xs border px-3 my-auto py-2 
                            border-amber-500 group hover:bg-amber-500 
                            rounded-xss
                            transition-all duration-200">
                            
                           
                            <i class="mdi mdi-eye-outline text-amber-700
                                group-hover:text-white delay-100"></i>
    
                           
                            <div class="text-xxs text-amber-700 font-semibold ml-2
                                group-hover:text-white delay-100">
                                Live Preview
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> </div>))}
       
    
             
    </div>
    <div class="flex flex-row items-center justify-center mt-10 space-x-4">
      

        {products.slice(randomIndex, randomIndex + 3).map((product) => (
            <div key={product.id} href={product.href} className="group">
            <div class="flex flex-row items-center justify-center mt-32 shadow-md cursor-pointer w-96 hover:-translate-y-1 duration-300 space-x-4">
                       <div class="inline relative group h-48">
                
                        <img class="absolute rounded-t object-cover h-full w-full"
                            src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?auto=format&fit=crop&w=1170&q=80"
                            alt="Product Preview" />
    
                    
            </div>
    
                    <div class="flex flex-col bg-white rounded-b p-3">
                             <div class="text-sm font-semibold text-gray-900 hover:underline truncate">
                    <a>{product.name}</a>
                </div>
    
                {product.description}
                <div class="text-xxs text-gray-400 truncate mt-1">
                    by
    
                                      <a class="font-semibold hover:underline"> EgoistDeveloper </a>
    
                    in
                                        <a class="font-semibold hover:underline"> e-commerce </a>
                </div>
    
                             <div class="text-sm text-gray-600 font-bold mt-4 mb-1">
                    $23
                </div>
    
                            <div class="flex flex-row mt-2">
                    
                    <div class="flex flex-col flex-auto">
                                              <div class="flex flex-row group">
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Worst"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Bad"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Not Bad"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200" 
                                title="Good"></i>
    
                            <i class="mdi mdi-star text-xs text-amber-400 
                                hover:text-amber-500 transition-all duration-200"
                                title="Awesome"></i>
    
                            <div class="text-xxs text-gray-400 ml-1 hover:underline">
                                (45)
                            </div>
                        </div>
    
                        
                        <div class="text-xxs text-gray-400 mt-1" title="34k Downlaods in this year">
                            34k Downloads
                        </div>
                    </div>
    
                    
                    <div class="flex flex-row flex-auto justify-end">
                        
                        
                        <a class="flex text-xs border px-3 my-auto py-2 mr-2
                            border-amber-500 group hover:bg-amber-500 
                            rounded-xss
                            transition-all duration-200">
                            
                            
                            <i class="mdi mdi-cart-outline text-amber-700
                                group-hover:text-white delay-100"></i>
                        </a>
    
                        
                        <a class="flex text-xs border px-3 my-auto py-2 
                            border-amber-500 group hover:bg-amber-500 
                            rounded-xss
                            transition-all duration-200">
                            
                           
                            <i class="mdi mdi-eye-outline text-amber-700
                                group-hover:text-white delay-100"></i>
    
                           
                            <div class="text-xxs text-amber-700 font-semibold ml-2
                                group-hover:text-white delay-100">
                                Live Preview
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div> </div>))}
       
    
             
    </div>
    </div>
  )
}

export default ProductListing;