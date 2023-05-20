import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-black font-medium text-lg dark:border-white sm:text-base">
      <div className="flex justify-center items-center py-8">
        <span>{new Date().getFullYear()} KzmAoki &copy; All Right Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;