import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
    return (
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
