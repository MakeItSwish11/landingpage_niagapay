import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const menus = ['Home', 'Pricing', 'Contact']; // Array containing menu items
  const activeMenu = 'Home';

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav
      data-aos="fade-left"
      className="flex justify-between items-center py-8 px-6 mx-auto max-w-screen-xl md:px-12 lg:px-16 xl:px-24"
    >
      <a href="/" className="text-3xl md:text-4xl font-bold tracking-wide">
        Niaga<span className="text-green">pay</span>
      </a>
      <div
        className={`inset-0 transition-all bg-white/70 backdrop-blur-xl z-20 md:static md:bg-transparent md:flex items-center justify-center space-y-8 md:space-y-0 md:space-x-8 flex-col md:flex-row lg:space-x-14 ${
          sidebarOpen ? 'fixed flex' : 'hidden'
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 lg:md:-x-8">
          {menus.map((menu) => (
            <li
              key={menu}
              className={`text-lg md:text-base lg:text-lg font-medium group ${
                activeMenu === menu ? 'text-green' : ''
              }`}
            >
              <a href={`#${menu}`}>{menu}</a>
              <div className="h-0.5 bg-green scale-x-0 group-hover:scale-100 transition-transform origin-left rounded-full duration-300 ease-out" />
            </li>
          ))}
        </ul>
        <Link
          href="https://portal.niagapay.click/login"
          className="flex justify-center items-center h-13 px-7 font-medium text-white bg-green rounded-xl hover:shadow-primary transition-shadow duration-300 whitespace-nowrap"
        >
          Sign In
        </Link>
      </div>
      <button onClick={toggleSidebar} className="block md:hidden relative z-30">
        <Menu className="w-8 h-8 fill-current text-gray-900" />
      </button>
    </nav>
  );
}

export default Header;
