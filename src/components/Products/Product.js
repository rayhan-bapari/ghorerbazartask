"use client";
import Image from "next/image";
import React from "react";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Zoom, toast } from "react-toastify";
import Link from "next/link";

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
        <div class="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <div class="relative flex h-60 overflow-hidden">
                <Image class="object-cover" src={thumbnail} alt={title} width={300} height={300} />
                <span class="absolute top-0 left-0 m-2 rounded-full bg-primary px-2 text-center text-sm font-medium text-white">
                    sale
                </span>
            </div>
            <div class="mt-4 px-5 pb-5">
                <Link href="#">
                    <h5 class="text-xl tracking-tight text-slate-900 line-clamp-1">{title}</h5>
                </Link>
                <div class="mt-2 mb-5 flex flex-col gap-2">
                    <p class="text-sm font-medium text-gray-500">{category}</p>
                    <p>
                        <span class="text-xl font-bold text-slate-900">${price}</span>
                    </p>
                </div>
                <button
                    class="flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-center text-sm font-medium text-white w-full"
                    onClick={() => hadleAddToCart()}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-2 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
