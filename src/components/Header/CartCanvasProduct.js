"use client";
import React from "react";
import Image from "next/image";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { decrementQty, incrementQty, removeFromCart } from "@/redux/slices/cartSlice";
import { Zoom, toast } from "react-toastify";

const CartCanvasProduct = ({ item }) => {
    const { id, name, price, category, qty } = item;
    const { thumbnail } = item.image;
    const dispatch = useDispatch();
    const handleRemoveproduct = (cartId) => {
        dispatch(removeFromCart(cartId));
        toast("🗑 product removed", {
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
    };

    const handleQtyIncrement = (cartId) => {
        dispatch(incrementQty(cartId));
    };

    const handleQtyDecrement = (cartId) => {
        dispatch(decrementQty(cartId));
    };

    return (
        <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                <Image
                    src={thumbnail}
                    alt={name}
                    className="h-full w-full object-cover object-center"
                    width={96}
                    height={96}
                />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
                <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>{name}</h3>
                        <p className="ml-4">${Math.round(price * qty * 100) / 100}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{category}</p>
                </div>
                <div className="flex flex-1 items-end justify-between text-sm">
                    <div class="flex items-center rounded border border-gray-200 px-4">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center text-gray-600"
                            onClick={() => handleQtyDecrement(item.id)}
                        >
                            <FiMinus />
                        </button>

                        <span class="h-8 w-12 inline-flex items-center justify-center text-gray-600 ">{qty}</span>

                        <button
                            type="button"
                            class="inline-flex items-center justify-center text-gray-600"
                            onClick={() => handleQtyIncrement(item.id)}
                        >
                            <FiPlus />
                        </button>
                    </div>

                    <div className="flex">
                        <button
                            type="button"
                            className="font-medium text-primary "
                            onClick={() => handleRemoveproduct(item.id)}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default CartCanvasProduct;
