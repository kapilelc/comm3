import React from 'react';
import type { Product } from '../types/product';

export const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <><p>Product List</p><ul>
          {products.map((product) => (
              <li key={product.id}>
                  {product.name} - ${product.price}
              </li>
          ))}
      </ul></>
  );
};