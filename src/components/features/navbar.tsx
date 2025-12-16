'use client';

import { useLayoutEffect, useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const ITEMS = [
  {
    title: 'Blog',
    path: 'blog',
  },
  {
    title: 'Experiences',
    path: 'experience',
  },
  {
    title: 'About Me',
    path: 'about-me',
  },
  {
    title: 'Connect',
    path: 'connect',
  },
];

const Navbar = () => {
  const currentPath = usePathname();
  const [currentPathHash, setCurrentPathHash] = useState(() =>
    typeof window !== 'undefined' ? window.location.hash.slice(1) : ''
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentImageNumber, setCurrentImageNumber] = useState('01');
  const shuffledImagesRef = useRef<string[]>([]);
  const currentIndexRef = useRef(0);

  console.log(currentImageNumber);

  const isHomePage = currentPath === '/';

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array: string[]): string[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Initialize shuffled array on mount
  useEffect(() => {
    // Create array of image numbers 01-20
    const imageNumbers = Array.from({ length: 18 }, (_, i) => String(i + 1).padStart(2, '0'));
    shuffledImagesRef.current = shuffleArray(imageNumbers);
    setCurrentImageNumber(shuffledImagesRef.current[0]);
  }, []);

  // Cycle through shuffled images every 5 seconds
  useEffect(() => {
    if (shuffledImagesRef.current.length === 0) return;

    const interval = setInterval(() => {
      currentIndexRef.current = (currentIndexRef.current + 1) % shuffledImagesRef.current.length;

      // If we've cycled through all images, reshuffle
      if (currentIndexRef.current === 0) {
        shuffledImagesRef.current = shuffleArray(shuffledImagesRef.current);
      }

      setCurrentImageNumber(shuffledImagesRef.current[currentIndexRef.current]);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const imageSrc = `/images/logos/${currentImageNumber}.png`;

  function generateHrefForLink(path: string) {
    if (currentPath === '/') {
      return `#${path}`;
    } else return `/#${path}`;
  }

  function checkCurrentActiveLink(itemPath: string) {
    if (currentPathHash === itemPath && currentPath.length <= 1) return true;
    else if (currentPath.slice(1).startsWith(itemPath)) return true;
    else return false;
  }

  const handleLinkClick = (path: string) => {
    setCurrentPathHash(path);
    setIsMobileMenuOpen(false);
  };

  useLayoutEffect(
    function disableYScroll() {
      if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
    [isMobileMenuOpen]
  );

  return (
    <>
      <nav
        className={`w-full fixed flex items-center justify-center top-0 left-0 z-999999 transition-all duration-300 ease-in-out ${
          isHomePage ? 'h-20' : 'h-14'
        }`}
      >
        {/* Desktop Navbar */}
        <div
          className={`hidden xl:flex mt-8 w-fit items-center gap-x-6 bg-[#000000bf] backdrop-blur-xs rounded-full transition-all duration-300 ease-in-out ${
            isHomePage ? 'p-3 px-5' : 'p-2 px-4'
          }`}
        >
          <Link href="/" className="flex items-center mr-6 justify-center size-12 group">
            <Image
              key={currentImageNumber}
              src={imageSrc}
              className="fixed group-hover:scale-110 transition-all duration-100 ease-in-out"
              alt="logo"
              width={120}
              height={120}
            />
          </Link>
          {ITEMS.map((item, i) => (
            <Link href={generateHrefForLink(item.path)} onClick={() => setCurrentPathHash(item.path)} key={i}>
              <span
                className={`transition-all duration-300 ease-in-out hover:text-white ${
                  isHomePage ? 'text-base' : 'text-sm'
                } ${
                  currentPathHash || currentPath.length > 1
                    ? checkCurrentActiveLink(item.path)
                      ? 'text-white'
                      : 'text-neutral-400'
                    : 'text-neutral-100'
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Globe Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`xl:hidden fixed top-5 right-6 z-1000000 flex justify-center items-center size-14 transition-all duration-300 ease-in-out`}
          aria-label="Toggle menu"
        >
          <Image
            key={currentImageNumber}
            src={imageSrc}
            className="fixed transition-all duration-100 ease-in-out"
            alt="logo"
            width={100}
            height={100}
          />
        </button>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-999998 bg-[#000000ef] backdrop-blur-xl:transition-all duration-500 ease-in-out xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`flex flex-col items-center justify-center h-full w-full gap-8 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {ITEMS.map((item, i) => (
            <Link
              href={generateHrefForLink(item.path)}
              onClick={() => handleLinkClick(item.path)}
              key={i}
              className="transition-transform duration-300 hover:scale-110"
            >
              <span
                className={`text-3xl font-medium transition-all duration-300 ease-in-out ${
                  currentPathHash || currentPath.length > 1
                    ? checkCurrentActiveLink(item.path)
                      ? 'text-white'
                      : 'text-neutral-400'
                    : 'text-neutral-100'
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const GlobeIcon = () => (
  <svg
    className="fill-neutral-200 size-16 transition-all duration-300 ease-in-out hover:fill-primary"
    xmlns="http://www.w3.org/2000/svg"
    id="Filled"
    viewBox="0 0 24 24"
    width="512"
    height="512"
  >
    <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm3.222,7H8.778A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7Zm.8,2a10.211,10.211,0,0,1,.476,3,10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2,12a9.986,9.986,0,0,1,.461-3H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461A9.986,9.986,0,0,1,2,12Zm1.353,5H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm5.425,0h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm5.827,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM22,12a9.986,9.986,0,0,1-.461,3H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437A9.986,9.986,0,0,1,22,12ZM17.426,7a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7Z" />
  </svg>
);

export default Navbar;
