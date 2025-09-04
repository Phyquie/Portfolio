'use client'
import { FaEye } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useHeaderContext } from "@/context/headerContext";
import Link from "next/link";

type HeaderOption = 'home' | 'about' | 'projects' | 'resume' | 'contact';

const navOptions: { label: string; value: HeaderOption; href: string }[] = [
  { label: 'Home', value: 'home', href: '/' },
  { label: 'About Me', value: 'about', href: '/about' },
  { label: 'Projects', value: 'projects', href: '/projects' },
  { label: 'Resume', value: 'resume', href: '/resume' },
  { label: 'Contact', value: 'contact', href: '/contact' },
];

const Header = () => {
  const { selected, setSelected } = useHeaderContext();
  const handleNavClick = (option: HeaderOption) => {
    setSelected(option);
  };
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center px-4 pt-4 select-none gap-4 md:gap-0">
      {/* Stats Bar - Hidden on small screens */}
      <div className="hidden md:flex flex-row items-center gap-2 bg-black bg-opacity-70 border-2 border-white rounded-2xl px-4 py-1 shadow-md" style={{ minWidth: 180 }}>
        <div className="flex items-center gap-1 text-white text-base">
          <FaEye size={20} color="#fff" />
          <span className="font-semibold">69 Views</span>
        </div>
        <div className="w-px h-5 bg-white mx-2 opacity-30" />
        <div className="flex items-center gap-1 text-white text-base">
          <FaGithub size={20} color="#fff" />
          <a href="https://github.com/phyquie" target="_blank" className="font-semibold">Github</a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="flex flex-wrap items-center justify-center gap-1 md:gap-2 bg-black bg-opacity-70 border-2 border-white rounded-2xl px-2 md:px-4 py-1 shadow-md w-full md:w-auto">
        {navOptions.map((option) => (
          <Link
            key={option.value}
            href={option.href}
            className={`text-sm md:text-lg font-semibold px-2 md:px-3 py-1 rounded-xl transition-all duration-150
              ${selected === option.value ? 'bg-white text-black' : 'text-white hover:bg-white hover:bg-opacity-10 hover:text-black'}`}
            onClick={() => handleNavClick(option.value)}
          >
            {option.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
export default Header;