import Image from "next/image";
import Link from "next/link";
import React from "react";
import { NavLinks } from "../constants";
import AuthProvider from "./AuthProvider";
import AuthProviders from "./AuthProvider";
import { getCurrentUser } from "../lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();

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
      {session?.user ? (
        <>
          {session?.user?.image && (
            <Image
              src={session.user.image}
              className="rounded-full"
              width={40}
              height={40}
              alt="flexible"
            />
          )}
          <Link href={"/create-work"}>Share work</Link>
        </>
      ) : (
        <AuthProviders />
      )}
    </nav>
  );
};

export default Navbar;
