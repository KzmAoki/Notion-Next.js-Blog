import React from "react";
import { Navbar } from "./Navbar/Navbar";

interface MyComponentProps {
  children: React.ReactNode;
  // add other prop types here
}

export const Layout = ({ children }: MyComponentProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}