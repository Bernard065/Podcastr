import Image from "next/image";
import React from "react";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/assets/images/bg-img.png"
          alt="background"
          fill
          className="size-full"
        />
      </div>
      <div className="flex min-h-screen items-center justify-center">
        {children}
      </div>
    </main>
  );
}
