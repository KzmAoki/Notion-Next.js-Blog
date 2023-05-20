import React from "react";
import { Navbar } from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

interface MyComponentProps {
  children: React.ReactNode;
  // add other prop types here
}

export const Layout = ({ children }: MyComponentProps) => {
  return (
    <div className="dark:bg-black dark:text-white transition-colors duration-500">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}