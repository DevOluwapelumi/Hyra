"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Our Teachings", link: "/teachings" },
    { name: "About Us", link: "/about" },
    { name: "Login", link: "/login" },
    { name: "Sign Up", link: "/register" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden">
        <NavbarBrand className="flex items-center justify-end">
          <p className="font-bold text-inherit text-primary-200">Hydra</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand className="mr-96">
          <p className="font-bold text-inherit text-primary-200">Hydra</p>
        </NavbarBrand>
        <NavbarItem className="ml-24" isActive>
          <Link
            color="foreground"
            href="/"
            className="font-semibold text-primary-200"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/teachings" aria-current="page" className="font-semibold">
            Our Teachings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/about" className="font-semibold">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end" className="hidden md:flex">
        <NavbarItem>
          <Link href="/register">
            <button className="h-10 font-bold border rounded-md w-28 text-primary-200 border-primary-200 bg-none">
              Sign Up
            </button>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/login">
            <button className="h-10 font-bold text-white rounded-md w-28 bg-primary-200 bg-none">
              Login
            </button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 0
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.link}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
