import React from "react";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import { FaMapMarked } from 'react-icons/fa';

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

function Navbar() {
  const router = useRouter();
  const [hamburger, setHamburger] = React.useState(false);
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
      behavior: "smooth", // Enable smooth scrolling
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
        <div className="btn hidden lg:flex gap-6">

        </div>
        <div className="lg:hidden flex" onClick={() => {
          setHamburger(!hamburger)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20 text-primary-10 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      {hamburger && (
        <div className="fixed top-32 z-40 bg-white h-full w-full">
          <div className="flex flex-col gap-10 items-center justify-center py-24">
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
                    ? " text-5xl cursor-pointer text-primary-10 px-6 py-4 ease-out duration-300 rounded-md font-semibold"
                    : " text-5xl cursor-pointer text-primary-10 px-6 py-4 ease-out duration-300 rounded-md"
                }
              >
                {link.text}
              </div>
            ))}
            <div className="btn flex flex-col gap-10">

            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
