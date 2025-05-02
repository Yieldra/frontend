// components/Header.tsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import YieldraLogo from "../../public/YieldraLogo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black bg-opacity-80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text mr-2">
            <Image src={YieldraLogo} alt="yieldra-logo" width={150} height={150} />
          </div>
          <div className="hidden md:flex space-x-1 items-center">
            <span className="bg-teal-500 px-2 py-0.5 text-xs rounded-full font-semibold">
              HACKATHON
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-300 hover:text-white transition"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-gray-300 hover:text-white transition"
          >
            How It Works
          </a>
          <a
            href="#stats"
            className="text-gray-300 hover:text-white transition"
          >
            Stats
          </a>
          <a href="#faq" className="text-gray-300 hover:text-white transition">
            FAQ
          </a>
          <ConnectButton />
          {/* <a
            href="#launch-app"
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Launch App
          </a> */}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#stats"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Stats
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <ConnectButton />
            {/* <a
              href="#launch-app"
              className="bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-lg font-medium text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Launch App
            </a> */}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
