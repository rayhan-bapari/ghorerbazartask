import Image from "next/image";
import React from "react";

const Product = ({ product }) => {
    const { name, basePrice, thumbnailImage, productCategory } = product;
    return (
        <article className="relative flex flex-col overflow-hidden rounded-lg border">
            <div className="aspect-square overflow-hidden">
                <Image
                    className="object-cover transition-all duration-300 group-hover:scale-125"
                    src={thumbnailImage}
                    alt={name}
                    width={300}
                    height={300}
                />
            </div>
            <div className="absolute top-0 m-2 rounded-full bg-white">
                <p className="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">
                    Sale
                </p>
            </div>
            <div className="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{name}</h2>
                <p className="mb-2 text-sm text-gray-400">{productCategory}</p>
                <p className="mr-3 text-sm font-semibold mb-2">${basePrice}</p>
            </div>
            <button className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Add
                </div>
            </button>
        </article>
    );
};

export default Product;
