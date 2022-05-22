import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products,setProducts] =  useState([]);
    useEffect(()=>{
        fetch('product.json')
        .then((res)=>res.json())
        .then((products)=>{
            setProducts(products)
        })
    },[])
    return (
        <div className='p-10'>
            <h1 className='text-2xl'>Hand Tool</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:p-10'>
                {
                    products.map((product)=><Product product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;