"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
