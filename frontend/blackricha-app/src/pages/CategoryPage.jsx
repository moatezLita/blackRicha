import React from 'react';
import ProductCollectionByCategory from '../components/product/productCollectionByCategory';
import { useParams } from 'react-router-dom';



const CategoryPage =() =>{
        const   {categoryId}  = useParams();
        // console.log(id);
        

    return(
    <div>
        <ProductCollectionByCategory categoryId={categoryId} />
    </div>
    )
}
export default CategoryPage;