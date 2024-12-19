import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="justify-center px-4 py-4 flex gap-4 text-[20px] items-center sm:px-300 md:px-600">
      <Link href="/">
        <img
          className="w-12 md:w-[150px] md:h-[150px]"
          src="/img/large.png"
          alt="Tracos Logo"
        />
      </Link>
      <div className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/teams">Teams</Link>
      </div>
      <div className="flex md:hidden">
        <img />
      </div>
    </div>
  );
}

export default Navbar;
