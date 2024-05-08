'use client';
import { useState } from 'react';

const NavBar = () => {
  const links = [
    {name: "About", link: '/about'},
    {name: "Blog", link: '/blog'},
  ];

  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto  md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <a href="/">
                <h2 className="text-2xl text-cyan-600 font-bold ">
                <img
                  src="/logo.png"
                  alt="logo"
                  className="focus:border-none active:border-nonew-8 h-8"
                />
                </h2>
              </a>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                  {navbar ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                {links.map((item, index)=>
                  <li key={index}
                    className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                    <a href={item.link} onClick={() => setNavbar(!navbar)}>
                      {item.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;