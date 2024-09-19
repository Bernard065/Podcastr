import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <p className="text-white-1">LEFTSIDEBAR</p>
      {children}
      <p className="text-white-1">RIGHTSIDEBAR</p>
    </main>
  );
}
