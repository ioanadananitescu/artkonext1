'use client'
import Link from 'next/link';
import { useState } from 'react';

const Navedit = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute   w-screen z-40">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
        
                  <div className="hidden lg:block translate-y-16">
            <div className="absolute w-full justify-center flex items-baseline space-x-4">
              <Link href="/paintings"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Paintings
              </Link>
              <Link href="/drawings"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Drawings
              </Link>
              <Link href="/sculpture"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sculpture
              </Link>
              <Link href="/digital-art"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Digital Art
              </Link>
              <Link href="/art-advisory"className="text-marron-oscuro border-2 border-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Art Advisory
              </Link>
            </div>
          </div>
          <div className="flex px-4 translate-y-2.5 lg:hidden">
            <button
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-marron-clarisimo focus:outline-none  focus:ring-offset-gray-800 focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-9 w-9"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
      
     
      {isMenuOpen && (
        <div className="lg:hidden bg-marron-clarisimo/70">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-50">
            <Link href="/paintings"className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Paintings
            </Link>
            <Link href="/drawings" className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Drawings
            </Link>
            <Link href="/sculpture"className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sculpture
            </Link>
            <Link href="/digital-art"className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Digital Art
            </Link>
            <Link href="/art-advisory"className="text-marron-oscuro hover:bg-marron-muyclaro/60 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Art Advisory
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
