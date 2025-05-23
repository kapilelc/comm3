import React from 'react';

interface Product {
    id: number;
    name: string;
    price: number;
}

declare const ProductList: React.FC<{
    products: Product[];
}>;

export { Product, ProductList };
