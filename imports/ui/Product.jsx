import React from 'react';

export const Product = ({ product }) =>{
    return <li>{product.name} - {product.description} - {product.price} - {product.stock}</li>
};