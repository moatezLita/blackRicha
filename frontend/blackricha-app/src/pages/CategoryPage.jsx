import React from 'react';
import ProductCollectionByCategory from '../components/product/productCollectionByCategory';
import { useParams } from 'react-router-dom';
import CategoryFilterCategory from '../components/product/categoryFilterCategory';



const CategoryPage =() =>{
        const   {categoryId}  = useParams();
        // console.log(id);
        

    return(
    <div>
        <CategoryFilterCategory/>
    </div>
    )
}
export default CategoryPage;