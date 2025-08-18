import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const accommodationTypes = ["Rooms", "Mansion", "Countryside", "Villa", "Apartment"];

  return (
    <header className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-center gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">StayFinder</Link>
      </div>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        className="border rounded px-4 py-2 w-full md:w-64"
      />

      {/* Auth buttons */}
      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded hover:bg-gray-100">Sign In</button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Sign Up
        </button>
      </div>

      {/* Accommodation types */}
      <nav className="flex gap-4 mt-2 md:mt-0">
        {accommodationTypes.map((type, index) => (
          <Link key={index} href={`/${type.toLowerCase()}`}>
            {type}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
