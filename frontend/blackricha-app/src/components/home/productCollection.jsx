import { getProducts } from '../../api/productsApi';
import React, { useState, useEffect } from 'react';






function ProductCollection() {
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
    return(
<section>
  <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
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

    <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
  {products.map((product) => (
    <li key={product.id} className="flex">
      <a href={product.href} className="block overflow-hidden group flex-grow">
        <img
          src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
        />

        <div className="relative pt-3 bg-white">
          <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
            {product.name}
          </h3>

          <p className="mt-2">
            <span className="sr-only">Price</span>
            <span className="tracking-wider text-gray-900">{product.price}</span>
          </p>
        </div>
      </a>
    </li>
  ))}
</ul>

  </div>
</section>
    )}

export default ProductCollection