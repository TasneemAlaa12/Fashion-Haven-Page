import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-gray-900 text-gray-200 py-12">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Fashion Haven</h2>
            <p className="text-gray-400 text-sm">
              Discover the latest fashion trends and essentials for your wardrobe. 
              Your satisfaction is our priority.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline hover:text-indigo-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-indigo-400">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-indigo-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.36 5.64a9 9 0 11-12.72 12.72 9 9 0 0112.72-12.72z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 15l4-4 4 4m-4-4v12"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="p-3 bg-gray-800 rounded-full hover:bg-indigo-500 transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h3m0 0V7a4 4 0 014-4h1a4 4 0 014 4v3h3m-3 0v4a4 4 0 01-4 4h-1a4 4 0 01-4-4v-4m-6 0h6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © 2025 YourStore. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
