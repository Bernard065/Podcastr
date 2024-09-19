import Leftsidebar from "@/components/Leftsidebar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative flex bg-black-3">
      <Leftsidebar />
      {children}
      <p className="text-white-1">RIGHTSIDEBAR</p>
    </main>
  );
}
