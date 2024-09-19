import Leftsidebar from "@/components/Leftsidebar";
import MobileNav from "@/components/MobileNav";
import Rightsidebar from "@/components/Rightsidebar";
import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex bg-black-3">
      <Leftsidebar />
      <section className="flex min-h-screen flex-1 flex-col px-4 sm:px-14">
        <div className="mx-auto flex w-full max-w-5xl flex-col max-sm:px-4">
          <div className="flex h-16 items-center justify-between md:hidden">
            <Image
              src="/assets/icons/logo.svg"
              width={30}
              height={30}
              alt="menu-icom"
            />
            <MobileNav />
          </div>
          <div className="flex flex-col md:pb-14">
            Toaster
            {children}
          </div>
        </div>
      </section>
      <Rightsidebar />
    </main>
  );
}
