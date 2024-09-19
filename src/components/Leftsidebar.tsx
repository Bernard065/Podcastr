"use client";

import { SidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Leftsidebar = () => {
  const pathname = usePathname();

  return (
    <section className="left_sidebar h-[calc(100vh-5px)]">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
        >
          <Image
            src="/assets/icons/logo.svg"
            width={23}
            height={27}
            alt="logo"
          />
          <h1
            className="text-24 font-extrabold
          text-white-1 max-lg:hidden"
          >
            Podcastr
          </h1>
        </Link>

        {/* SidebarLinks */}
        {SidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              key={link.label}
              href={link.route}
              className={`${
                isActive ? "border-r-4 border-orange-1 bg-nav-focus " : " "
              } flex items-center justify-start gap-4 py-4 max-lg:px-4`}
            >
              <Image
                src={link.imgURL}
                width={24}
                height={24}
                alt={link.label}
              />
              <p className="text-16 font-semibold text-white-1">{link.label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Leftsidebar;
