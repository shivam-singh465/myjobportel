import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 to-purple-200 text-gray-600 py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-2xl font-bold text-gray-800">JobPortal</h1>
          <p className="text-sm mt-2">Your Dream Job Awaits 🚀</p>
        </div>

        {/* Center Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6 md:mb-0">
          <Link to="/" className="text-sm hover:text-purple-700 transition">Home</Link>
          <Link to="about" className="text-sm hover:text-purple-700 transition">About</Link>
          <Link to="Job" className="text-sm hover:text-purple-700 transition">Job</Link>
          <Link to="blog" className="text-sm hover:text-purple-700 transition">Blog</Link>
        </div>

        {/* Right Side - Social Media */}
        <div className="flex space-x-6">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-700 transition text-2xl">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-700 transition text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-700 transition text-2xl">
            <FaTwitter />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-700 transition text-2xl">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-xs text-gray-400 mt-6">
        &copy; 2025 JobPortal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
