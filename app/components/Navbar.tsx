import Logo from "@/public/Logo";
import {
  CartIcon,
  Alert,
  Heart,
  Search,
  NavMenu,
  CloseIcon,
} from "@/public/Icons";
import Link from "next/link";
import React, { Key, useState } from "react";

const Navbar = () => {
  type linksProps = {
    href: string;
    link: string;
    key: Key | undefined | null;
  }[];

  const links: linksProps = [
    {
      href: "/",
      link: "Home",
      key: 1,
    },
    {
      href: "/services",
      link: "Services",
      key: 2,
    },
    {
      href: "https://shop.mysmartarena.com/",
      link: "Shop",
      key: 3,
    },
    {
      href: "/",
      link: "About Us",
      key: 4,
    },
    {
      href: "/#contact",
      link: "Contact Us",
      key: 5,
    },
  ];

  const [openNav, setOpenNav] = useState(false);

  return (
    <nav className="bg-dark-blue py-4 px-6 flex justify-between text-white h-auto items-center max-w-7xl mx-auto ">
      <Link href={"/"}>
        <Logo className="relative bottom-2 cursor-pointer" />
      </Link>

      <div className="text-white lg:flex justify-between items-center space-x-14 h-auto hidden">
        {links.map(({ href, link, key }) => (
          <>
            <h1
              className="cursor-pointer hover:scale-125 duration-200 active:scale-90"
              key={key}
            >
              <Link href={href}>{link}</Link>
            </h1>
          </>
        ))}
      </div>

      <div className="text-white h-auto lg:flex items-center space-x-14 hidden">
        <Alert className="scale-150 cursor-pointer" />
        <Search className="scale-125 cursor-pointer" />
        <Heart className="scale-75 cursor-pointer" />
        <CartIcon className="scale-125 cursor-pointer" />
      </div>

      {/* Mobile Nav */}
      <div className="lg:hidden block">
        <Link href={""}>
          <NavMenu
            className="active:scale-90 duration-300"
            onClick={() => setOpenNav(!openNav)}
          />
        </Link>
      </div>

      <nav
        className={`lg:hidden block ${
          openNav ? `w-full  py-4 px-6` : `w-0 py-4`
        } bg-dark-blue/100 fixed top-0 bottom-0 right-0 duration-500 `}
      >
        <div className="flex justify-between">
          <Link href={"/"}>
            <Logo className="relative bottom-2 cursor-pointer" />
          </Link>

          <CloseIcon
            className="active:scale-90 duration-300 w-8 cursor-pointer"
            onClick={() => setOpenNav(!openNav)}
          />
        </div>

        <nav className="pt-20 space-y-10 p-8">
          {links.map(({ href, link, key }) => (
            <>
              <h1
                key={key}
                className={`cursor-pointer duration-200 ${
                  openNav ? `` : `duration-700`
                }`}
              >
                <Link href={href} onClick={() => setOpenNav(!openNav)}>
                  {link}
                </Link>
              </h1>
            </>
          ))}
        </nav>
      </nav>
    </nav>
  );
};

export default Navbar;
