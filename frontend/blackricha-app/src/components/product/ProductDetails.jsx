/*
  This component uses @tailwindcss/forms and @tailwindcss/typography

  yarn add @tailwindcss/forms @tailwindcss/typography
  npm install @tailwindcss/forms @tailwindcss/typography

  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')]

  @layer components {
    .no-spinner {
      -moz-appearance: textfield;
    }

    .no-spinner::-webkit-outer-spin-button,
    .no-spinner::-webkit-inner-spin-button {
      margin: 0;
      -webkit-appearance: none;
    }
  }
*/


import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
// import { HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { getProductById } from '../../api/productsApi';
import { useParams  } from 'react-router-dom';
import { ShoppingCartContext } from '../../context/CartContext';



const ProductDetails = ({id}) => {
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const { addItemToCart } = useContext(ShoppingCartContext);

  useEffect(() => {
      const fetchProduct = async () => {
      try {
          const productData = await getProductById(id);
          setProduct(productData);

      } catch (error) {
          console.error('Error fetching product:', error);
      }
      };

      fetchProduct();
  }, [id]);

  const handleAddToCart = (itemId,itemName,itemDescription, itemPrice,itemQuantity,) => {
    addItemToCart({ id: itemId, 
      description:itemDescription, 
      name: itemName, 
      price: itemPrice,
      quantity:itemQuantity})
  };


  if (!product) {
      return <div>Loading...</div>;
  }

  const rating = 5

  const starsNumber = Math.floor(rating)
  const isHalfStar = !Number.isInteger(rating)
  const emptyStars = 5 - Math.ceil(rating)


  return (
    <div className="mx-auto px-4 w-full max-w-7xl bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row">

        {/* :PICTURES CONTAINER */}
        <div className="py-8 w-full lg:w-1/2 flex flex-col items-center">
          {/* ::Like Button */}
          <span className="self-start ml-10">
            <button className="text-gray-300 hover:text-red-500">
              {/* <HeartIcon className="w-10 h-10" /> */}
            </button>
          </span>
          <div className='w-auto h-96 overflow-y-auto'>
          <div className="">
            <img src={product.picture_path} alt="" />
          </div>
          </div>
          {/* ::Gallery */}
          <div className="mt-6 mx-auto">
            {/* <ul className="grid grid-flow-col auto-cols-fr gap-4">
              {product.pictures
                .slice(0,4) // Here you can manage the number of pictures displayed
                .map((picture, index) => (
                <li key={picture.alt} className={`col-span-1 p-1 w-16 rounded border-2 ${index === mainPicture ? "border-yellow-600" : "border-transparent"}`}>
                  <button type="button" className="block h-full rounded overflow-hidden" onClick={() => setMainPicture(index)}>
                    <img src={picture.src} alt={picture.alt} className="object-contain" />
                  </button>
                </li>
              ))
              }
            </ul> */}
          </div>
        </div>



        <div className="lg:py-8 w-full lg:w-1/2 flex flex-col lg:border-l-2 border-gray-200">

          <div className="order-3 lg:order-1 pb-5 sm:px-6 lg:border-b-2 border-gray-200">
            <h1 className=" lg:block text-4xl text-gray-700 font-light tracking-wide">{product.name}</h1>
            <p className="mt-10 text-base text-gray-500">{product.description}</p>
            {/* <ul className="my-5 flex flex-col space-y-2">
              {product.features.map(feature => (
                <li key={feature.name} className="inline-flex items-center space-x-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">{feature.name}:</span>
                  <span className="text-sm font-normal">{feature.details}</span>
                </li>
              ))
              }
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-600" />
                  <span className="text-sm font-semibold">meow</span>
                  <span className="text-sm font-normal">Kess</span>
            </ul> */}
          </div>

          <div className="order-1 lg:order-2 py-8 sm:px-6 border-b-2 border-gray-200">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <label htmlFor="quantity" className="sr-only">Select the quantity</label>
              <input type="number"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
                className="form-input py-1 pl-2 w-20 rounded border-2 border-gray-300 bg-gray-100 focus:border-yellow-600 focus:ring-0" />

              <label htmlFor="color" className="sr-only">Select your color</label>
              <select name="color" id="color" className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0">
                <option value="">Color</option>
                
                <option >red</option>
                <option >black</option>

                <option >blue</option>

                <option >white</option>

              </select>
              {/* :::Size */}
              <label htmlFor="size" className="sr-only">Select your size</label>
              <select name="size" id="size" className="form-select py-1 pl-2 w-full max-w-xs rounded border-2 border-gray-300 bg-gray-100 text-gray-500 focus:border-yellow-600 focus:ring-0">
                <option value="">Size</option>
                
                <option> XS </option>
                <option> S </option>
                <option> M </option>
                <option> L </option>

              </select>
            </div>
          </div>

          {/* ::Actions Container */} 
          <div className="order-2 lg:order-3 pt-8 sm:px-6 flex flex-wrap lg:flex-nowrap justify-around items-center border-b-2 lg:border-none border-gray-200">
            {/* :::Price */}
            <span className="m-2.5 text-4xl text-gray-500 font-extrabold">
              <span className="font-normal">$</span>
              {product.price}
            </span>
            {/* :::Add to cart button */}
            <button onClick={() =>   addItemToCart ({ id: product.id, 
              description:product.description, 
              name: product.name, 
              price: product.price, 
              quantity: quantity })} 
              
              className="m-2.5 py-1.5 px-5 inline-flex items-center rounded-md bg-yellow-500 text-base text-white font-semibold uppercase whitespace-nowrap hover:bg-yellow-600">
              {/* <ShoppingBagIcon className="mr-3 w-6 h-6" /> */}
              Add to cart
            </button>
            {/* :::Reviews */}
              <div className="flex items-center space-x-1">
                {/* full stars */}
                {[...Array(starsNumber)].map((star, index) =>(
                  <span key={index} className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  </span>
                ))
               
                }
                 
                {/* half star */}
                {/* {isHalfStar &&
                  <span className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                  </span>
                } */}
                {/* empty stars */}
                {/* {[...Array(emptyStars)].map((star, index) =>(
                  <span key={index} className="flex-shrink-0">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/>
                    </svg>
                  </span>
                ))
                } */}
              </div>
              {/* ::::all reviews */}
              {/* <a href={product.hrefReviews} className="ml-2 text-sm text-sky-400 font-medium tracking-wide hover:text-sky-500 hover:underline">{`${product.reviews} reviews`}</a> */}
            </div>

        </div>

      </div>
    </div>
  )
}

export default ProductDetails;



  
  
