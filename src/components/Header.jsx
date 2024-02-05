import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../assets/logo1.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full bg-black text-white ">
      <div className="w-11/12 flex justify-between items-center py-2 ">
        <div>
          <img src={logo1} alt="Logo" style={{ width: '150px', height: 'auto' }} />
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li className="hover:border-b hover:border-red-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:border-b hover:border-red-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:border-b hover:border-red-600">
              <Link to="/service">Service</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button  onClick={handleMobileMenuToggle}>
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
          {isMobileMenuOpen && (
            <nav className="absolute top-14 right-0 z-10 bg-black text-white py-2 px-4">
  <ul className="flex flex-col gap-4">
    <li className="hover:border-b hover:border-red-600">
      <Link to="/">Home</Link>
    </li>
    <li className="hover:border-b hover:border-red-600">
      <Link to="/about">About</Link>
    </li>
    <li className="hover:border-b hover:border-red-600">
      <Link to="/service">Service</Link>
    </li>
  </ul>
</nav>
          )}
        </div>
        <button className="hidden md:block border border-white px-2 rounded-bl-xl rounded-tr-xl hover:border-red-500">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;