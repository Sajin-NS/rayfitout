import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-9xl mx-auto px-global_x py-8 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-4xl text-white font-bold">Rayfitout</h1>
        </div>
        <nav className="hidden md:flex space-x-8 text-small font-mont tracking-wide uppercase">
          {[
            "Projects",
            "Services",
            "Systems",
            "Products",
            "About",
            "Contact",
          ].map((item) => (
            <Link key={item} href="#">
              <span className="hover:underline hover:underline-offset-8 transition duration-200 cursor-pointer text-white text-[16px]">
                {item}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
