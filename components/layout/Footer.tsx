import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  const accommodationTypes = [
    { name: "Rooms", href: "/accommodations/rooms" },
    { name: "Mansion", href: "/accommodations/mansion" },
    { name: "Countryside", href: "/accommodations/countryside" },
    { name: "Apartments", href: "/accommodations/apartments" },
    { name: "Villas", href: "/accommodations/villas" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Logo */}
        <div className="flex flex-col space-y-2">
          <Link href="/" className="flex items-center">

            <img src="/logo.png" alt="Logo" className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold">YourBrand</span>

          </Link>
          <p className="text-sm">
            Bringing you the finest accommodations—from cozy rooms to luxury villas.
          </p>
        </div>

        {/* Accommodations Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Accommodations</h3>
          <ul className="space-y-1 text-sm">
            {accommodationTypes.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="hover:text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-md font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:text-gray-900">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-900">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-900">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-md font-semibold mb-2">Connect With Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              {/* Replace with appropriate icon */}
              <span className="sr-only">Facebook</span>📘
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Twitter</span>🐦
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
              <span className="sr-only">Instagram</span>📸
            </a>
          </div>
          <div className="text-sm">
            <p>Email: <a href="mailto:info@yourbrand.com" className="hover:text-gray-900">info@yourbrand.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:text-gray-900">+1 (234) 567-890</a></p>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
