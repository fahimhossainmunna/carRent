"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          
          {/* Brand & Vision */}
          <div className="max-w-xs space-y-6">
            <h2 className="text-3xl font-black text-blue-600 tracking-tighter uppercase">
              CarRent
            </h2>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
            <div className="space-y-6">
              <h4 className="font-black text-gray-900 text-lg">About</h4>
              <ul className="text-gray-400 space-y-4 text-sm font-bold">
                <li className="hover:text-blue-600 cursor-pointer transition">How it works</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Featured</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Partnership</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Business Relation</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-gray-900 text-lg">Community</h4>
              <ul className="text-gray-400 space-y-4 text-sm font-bold">
                <li className="hover:text-blue-600 cursor-pointer transition">Events</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Blog</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Podcast</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Invite a friend</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-black text-gray-900 text-lg">Socials</h4>
              <ul className="text-gray-400 space-y-4 text-sm font-bold">
                <li className="hover:text-blue-600 cursor-pointer transition">Discord</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Instagram</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Twitter</li>
                <li className="hover:text-blue-600 cursor-pointer transition">Facebook</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-900 font-black text-sm">
            ©2026 CARRENT. All rights reserved
          </p>
          <div className="flex gap-10 text-gray-900 font-black text-sm">
            <span className="hover:text-blue-600 cursor-pointer">Privacy & Policy</span>
            <span className="hover:text-blue-600 cursor-pointer">Terms & Condition</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;