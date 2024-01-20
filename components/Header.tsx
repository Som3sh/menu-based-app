import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

function Header() {
  return (
    <header className="flex items-center justify-between h-12 ">
      <Link href="/" className="flex items-center space-x-2">
        <h1 className=" font-bold text-xl pl-12 pt-2">Home</h1>
      </Link>
      <div className="flex flex-row items-center space-x-14 pt-2">
        <Link href="/Array " className=" font-bold text-sm">
          ARRAY
        </Link>
        <Link href="/Linked-List" className=" font-bold text-sm">
          LINKED LIST
        </Link>
      </div>
      <div className="px-5 flex space-x-2 items-center">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
