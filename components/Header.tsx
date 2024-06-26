/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import { useScrollPosition } from "@/hook/index";
import Link from "next/link";

const Header = () => {
  const scrollPosition = useScrollPosition();
  return (
    <header
      className={`sticky top-0 z-50 transition-shadow bg-slate-900 ${scrollPosition > 0
          ? "shadow bg-opacity-70 backdrop-blur-lg backdrop-filter"
          : "shadow-none"
        }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <span className="ml-3 text-2xl">blocks</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center ">
          <div className="hidden  xl:hidden ">
            <a className="mr-5 hover:text-gray-900">First Link</a>
            <a className="mr-5 hover:text-gray-900">Second Link</a>
            <a className="mr-5 hover:text-gray-900">Third Link</a>
            <a className="mr-5 hover:text-gray-900">Fourth Link</a>
          </div>
        </nav>
        <button className="inline-flex items-center bg-rose-700 border-0 py-1 px-3 
         focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hover:text-gray-600 text-white">
          Button
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;