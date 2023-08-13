import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "../constants";
import AuthProvider from "./AuthProvider";
import AuthProviders from "./AuthProvider";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween  navbar">
      <div className="  flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="logo.svg" width={115} height={43} alt="flexible" />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      {session ? (
        <>
          User photo
          <Link href={"/create-work"}>Share work</Link>
        </>
      ) : (
        <AuthProviders />
      )}
    </nav>
  );
};

export default Navbar;
