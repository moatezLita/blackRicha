import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // import Link component for navigation
import { searchProducts } from '../../api/productsApi';

const SearchBar = ({ getProducts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  // function that filters products based on search term
  const handleSearchChange = async (event) => {
    try {
      const value = event.target.value.toLowerCase();
      setSearchTerm(value);
      if (value === '') {
        setFilteredProducts([]);
        return;
      }
      // fetch filtered results from API
      const results = await searchProducts(value);
     setFilteredProducts(results);
   } catch (error) {
       console.error('Error searching for products:', error.message);
       throw new Error('Failed to search for products');
    }
   };
   return (
       <div className=' '> 
           <input type="text" className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm  "
              placeholder="Search for a product..." value={searchTerm} onChange={handleSearchChange}
            />
             {/* display filtered results */}
             {filteredProducts.length >0 && (
                 <ul className='absolute top-[40px] left-0 bg-white w-full shadow-lg'>
                    {filteredProducts.map((product) => (
                        <li key={product.id}>
                          {/* Add link tag around each item */}
                          <Link to={`/products/${product.id}`} className='block hover:bg-gray-100 px-4 py-3'>
                            {product.name}
                          </Link>
                        </li>
                     ))}
                  </ul> 
            )}
       </div>
   )
};
export default SearchBar;