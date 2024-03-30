import Products from "@/components/Products/Products";
import React from "react";

export default async function Home() {
    const products = await getproducts();
    return (
        <section className="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-md text-center">
                    <h2 className="text-2xl font-bold sm:text-3xl">Trending Products</h2>
                </div>
                <Products products={products} />
            </div>
        </section>
    );
}

async function getproducts() {
    const res = await fetch("https://grocery-api-xhr9.onrender.com/api/products");

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
