import React from "react";
import { Link } from "react-router-dom";

function Navigation(){
    return  (
        <nav className="flex justify-center bg-white py-4">
            <ul className="flex space-x-4 text-red-700 font-semibold">
                <li className="hover:text-red-900">
                     <Link to="/" className="active">Home</Link>
                </li>
                <li className="hover:text-red-900">
                     <Link to="/peta">Peta</Link>
                </li>
                <li className="hover:text-red-900">
                    <Link to="/artikel">Artikel</Link>
                </li>
                <li className="hover:text-red-900">
                    <Link to="/dokumentasi">Dokumentasi</Link>
                </li>
                <li className="hover:text-red-900">
                    <Link to="/about">About Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;