import React from 'react';
import ProductDetails from '../../components/product/ProductDetails';
import { useParams  } from 'react-router-dom';
const ProductDetailsPage = () => {
  const   { id } = useParams();



  return (
    <div>
      <div>
        <ProductDetails id={id }/>
      </div>
    </div>
  );
}

export default ProductDetailsPage