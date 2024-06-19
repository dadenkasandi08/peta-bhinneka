import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-[#8F1118] text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">PetaBhineka</h1>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Explore</h1>
          <nav className="flex flex-col gap-2">
          <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/peta"
            >
              Peta
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/artikel"
            >
              Artikel
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/galeri"
            >
              Dokumentasi
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Bantuan</h1>
          <nav className="flex flex-col gap-2">
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              FAQ
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Kontak Kami
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Kontak</h1>
          <nav className="flex flex-col gap-2">
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              petabhineka@gmail.com
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              085858501169
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/"
            >
              Social media
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          PetaBhinneka © 2024 -
          <span> dicoding capstone</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
