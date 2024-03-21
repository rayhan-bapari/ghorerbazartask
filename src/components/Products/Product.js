"use client";
import Image from "next/image";
import React from "react";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Zoom, toast } from "react-toastify";

const Product = ({ product }) => {
    const dispatch = useDispatch();
    const { title, price, thumbnail, category } = product;

    function hadleAddToCart() {
        dispatch(addToCart(product));
        toast.success("Product Added", {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
        });
    }

    return (
        <article className="relative flex flex-col overflow-hidden rounded-lg border">
            <div className="aspect-square overflow-hidden">
                <Image
                    className="object-cover transition-all duration-300 group-hover:scale-125"
                    src={thumbnail}
                    alt={title}
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
                <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{title}</h2>
                <p className="mb-2 text-sm text-gray-400">{category}</p>
                <p className="mr-3 text-sm font-semibold mb-2">${price}</p>
            </div>
            <button
                className="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600"
                onClick={() => hadleAddToCart()}
            >
                <div className="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">
                    Add to cart
                </div>
            </button>
        </article>
    );
};

export default Product;
