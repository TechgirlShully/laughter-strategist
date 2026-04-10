"use client";
import "./globals.css";
import Navbar from "./components/Navbar";
import { SessionProvider } from "next-auth/react";
import Footer from "./components/Footer";

<a
  href="https://wa.me/2347017838958"
  className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
>
  💬
</a>


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
