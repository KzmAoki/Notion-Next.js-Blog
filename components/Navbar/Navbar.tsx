import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { motion } from "framer-motion"; // アニメーションライブラリ
import { // アイコンコンポーネント
  TwitterIcon,
  GithubIcon,
  SunIcon,
  MoonIcon,
} from "../Icons/Icons";
import useThemeSwitcher from "../hooks/useThemeSwitcher";

type CustomLinkProps = {
  href: string;
  title: string;
  className: string;
}

type CustomMobileLinkProps = {
  href: string;
  title: string;
  className: string;
  toggle: () => void;
}

const CustomLink = ({ href, title, className = ""}: CustomLinkProps) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span className={`
        h-[1px] inline-block bg-gray-400
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-white
      `}>
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }: CustomMobileLinkProps) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group my-2 text-white dark:text-black`}
      onClick={handleClick}
    >
      {title}
      <span className={`
        h-[1px] inline-block bg-gray-400
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        dark:bg-black
      `}>
        &nbsp;
      </span>
    </button>
  );
};

export const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header id="header" className="w-full px-8 py-8 font-medium flex items-center justify-between
    relative z-10 md:px-12
    ">

      <button className="flex-col justify-center items-center lg:hidden" onClick={handleClick}>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}></span>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
          isOpen ? "opacity-0" : "opacity-100"
        }`}></span>
        <span className={`bg-black dark:bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}></span>
      </button>
      
      <div className="w-full justify-between items-center lg:flex hidden">
        <nav className="flex items-cneter justify-center">
          <CustomLink href="/" title="Home" className="mr-4"></CustomLink>
          <CustomLink href="/About" title="About" className="mx-4"></CustomLink>
          <CustomLink href="/Projects" title="Projects" className="mx-4"></CustomLink>
          <CustomLink href="/Blog" title="Blog" className="ml-4"></CustomLink>
        </nav>

        <nav className="flex items-cneter justify-center">

          <motion.a
            href="https://twitter.com/KzmAoki"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3" // aタグに対してwidth: 24px;指定 svgの最大幅になる(w-full)
          >
            <TwitterIcon />
          </motion.a>

          <motion.a
            href="https://github.com/KzmAoki"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
          >
            <GithubIcon />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`w-8 h-8 ml-5 rounded-full p-1 ease ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}`}
          >
            {mode === "light" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className="fill-dark" />
            )}
          </button>

        </nav>
      </div>
      
      {/* // レスポンシブニュー */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }} 
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[90vw] sm:min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 bg-black/80 dark:bg-white/70 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-cneter flex-col justify-center mb-3">
            <CustomMobileLink href="/" title="Home" className="" toggle={handleClick} />
            <CustomMobileLink href="/About" title="About" className="" toggle={handleClick} />
            <CustomMobileLink href="/Projects" title="Projects" className="" toggle={handleClick} />
            <CustomMobileLink href="/Blog" title="Blog" className="" toggle={handleClick} />
          </nav>

          <nav className="flex items-cneter justify-center flex-wrap mt-2">

            <motion.a
              href="https://twitter.com/KzmAoki"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3" // aタグに対してwidth: 24px;指定 svgの最大幅になる(w-full)
            >
              <TwitterIcon />
            </motion.a>

            <motion.a
              href="https://github.com/KzmAoki"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-3 bg-black rounded-full"
            >
              <GithubIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`w-8 h-8 ml-5 rounded-full p-1 ease ${mode === "light" ? "bg-black text-white" : "bg-white text-black"}`}
            >
              {mode === "light" ? (
                <SunIcon className={"fill-dark"} />
              ) : (
                <MoonIcon className="fill-dark" />
              )}
            </button>

          </nav>
        </motion.div>
      ) : null}

    </header>
  );
}