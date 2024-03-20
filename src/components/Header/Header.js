"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons
import { FaRegUserCircle, FaRegHeart } from "react-icons/fa";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
// Logo
import logo from "/public/img/logo.webp";
import CartCanvas from "./CartCanvas";

// Menu
const menu = [
    {
        id: 1,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        title: "Organic Oil",
        link: "/organic-oil",
    },
    {
        id: 3,
        title: "Honey",
        link: "/honey",
    },
    { id: 4, title: "Nuts & Seeds", link: "/nuts-seeds" },
    {
        id: 5,
        title: "Ramadan Corner",
        link: "/ramadan-corner",
    },
    {
        id: 6,
        title: "Local Maghi Sarisha Oil",
        link: "/local-maghi-sarisha-oil",
    },
];

const Header = () => {
    const [isCartCanvasOpen, setIsCartCanvasOpen] = useState(false);

    const handleCartCanvas = () => {
        setIsCartCanvasOpen(!isCartCanvasOpen);
    };

    return (
        <header>
            <div className="top__nav">
                <Link href="/">
                    <Image src={logo} alt="logo" width={120} height={40} />
                </Link>

                <div class="relative w-full max-w-xl mx-auto bg-white hidden md:inline-flex">
                    <input
                        placeholder="Search your products here"
                        class="w-full h-12 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 hover:outline-none focus:ring-primary focus:border-primary text-gray-500"
                        type="text"
                        name="query"
                        id="query"
                    />
                    <button
                        type="button"
                        class="absolute inline-flex items-center h-8 px-3 text-white outline-none right-3 top-2 bg-primary"
                    >
                        <FiSearch size={20} />
                    </button>
                </div>
                <div className="topbar__action">
                    <div className="md:hidden">
                        <FiSearch size={24} />
                    </div>
                    <div className="cursor-pointer">
                        <FaRegUserCircle size={24} />
                    </div>
                    <div className="relative cursor-pointer">
                        <FaRegHeart size={24} />
                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-white text-xs font-semibold rounded-full flex items-center justify-center">
                            2
                        </span>
                    </div>
                    <div className="relative cursor-pointer" onClick={handleCartCanvas}>
                        <FiShoppingBag size={24} />
                        <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-white text-xs font-semibold rounded-full flex items-center justify-center">
                            2
                        </span>
                    </div>
                </div>
            </div>
            <nav className="main__menu">
                <ul className="menu__list">
                    {menu.map((item) => (
                        <li key={item.id}>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <CartCanvas isCartCanvasOpen={isCartCanvasOpen} setIsCartCanvasOpen={setIsCartCanvasOpen} />
        </header>
    );
};

export default Header;
