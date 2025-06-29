// components/layout/Header.tsx

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const accommodationTypes = [
    "Rooms",
    "Mansion",
    "Countryside",
    "Apartments",
    "Villas",
  ];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link href="/" className="flex items-center">

            <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto mr-2" />
            <Image src="/logo.png" alt="Logo" width={32} height={32} className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold text-gray-800">YourBrand</span>

          </Link>
        </div>

        {/* Accommodation Types */}
        <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
          {accommodationTypes.map((type) => (
            <Link
              key={type}
              href={`/accommodations/${type.toLowerCase()}`}
              className="mx-2 text-gray-700 hover:text-gray-900 text-sm font-medium">

              {type}

            </Link>
          ))}
        </nav>

        {/* Search Bar & Auth Buttons */}
        <div className="flex items-center space-x-4 w-full md:w-auto">
          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              🔍
            </button>
          </div>

          {/* Sign In */}
          <Link href="/signin" className="text-sm text-gray-700 hover:text-gray-900">
            Sign In
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="text-sm bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            
              Sign Up
            
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
