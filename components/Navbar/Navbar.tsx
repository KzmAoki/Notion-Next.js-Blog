import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="container mx-auto lg:px-2 px-5 lg:w-2/5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium">
          Notion-Blog
        </Link>
        <div>
          <ul className="flex items-center text-sm py-4">
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-sky-900 transition-all duration-300">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-sky-900 transition-all duration-300">
                Twitter
              </Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:text-sky-900 transition-all duration-300">
                GitHub
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}