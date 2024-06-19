import React from "react";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { FaMapMarked } from "react-icons/fa";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function Navbar() {
  const router = useRouter();
  const navLinks = [
    { text: "Beranda", path: "/" },
    { text: "Peta", path: "/peta" },
    { text: "Artikel", path: "/artikel" },
    { text: "Galeri", path: "/galeri" },
    { text: "Tentang Kami", path: "/tentang" },
  ];

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav className="fixed w-full top-0 bg-white px-10 lg:px-24 py-8 lg:py-1 flex items-center justify-between shadow-md z-50">
        <div className="logo">
          <div
            className="cursor-pointer w-72 lg:w-36"
            onClick={
              router.pathname == "/"
                ? scrollUp
                : () => {
                    router.push("/");
                  }
            }
          >
            <div className=" flex flex-row items-center cursor-pointer">
              <span className="mr-2">
                <FaMapMarked size={32} />
              </span>
              <h1 className=" text-xl font-semibold">PetaBhineka</h1>
            </div>
          </div>
        </div>
        <div className={`hidden lg:flex ${poppins.className}`}>
          {navLinks.map((link, index) => (
            <div
              key={index}
              onClick={
                router.pathname == link.path
                  ? scrollUp
                  : () => {
                      router.push(link.path);
                    }
              }
              className={
                router.pathname == link.path
                  ? " text-xl cursor-pointer px-6 py-4 text-primary-10 ease-out duration-300 rounded-md font-semibold"
                  : " text-xl cursor-pointer px-6 py-4 ease-out duration-300 rounded-md"
              }
            >
              {link.text}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
