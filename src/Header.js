import React from "react";

function Header (props) {
  return (
    <header className="border-b border-gray-200 shadow-xl bg-white">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          <span className="text-indigo-500">Fashion</span> Haven
        </h1>

        <nav>
          <ul className="flex space-x-8 text-lg font-medium text-gray-700">
          {props.links.map(x=>{
            return (
              <li>
              <a
                href="#home"
                className="relative group"
              >
                <span className="absolute inset-x-0 -bottom-1 h-1 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                {x}
              </a>
            </li>
            )
          })}


          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
