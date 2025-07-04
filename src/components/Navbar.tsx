
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-heidigital-blue">Heidigital</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-heidigital-blue transition-colors">
              Home
            </Link>
            
            <Link to="/services" className="text-gray-700 hover:text-heidigital-blue transition-colors">
              Services
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-heidigital-blue transition-colors">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link to="/solutions/free-resources" className="w-full">Free Resources</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/solutions/ai-tools" className="w-full">Marketing Tools</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/portfolio" className="text-gray-700 hover:text-heidigital-blue transition-colors">
              Portfolio
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-heidigital-blue transition-colors">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-heidigital-blue transition-colors">
              About Us
            </Link>
          </div>

          <div className="hidden md:block">
            <Button asChild className="bg-heidigital-blue hover:bg-heidigital-blue/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-heidigital-blue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-heidigital-blue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <div className="py-2">
                <div className="font-medium mb-2">Solutions</div>
                <div className="ml-4 space-y-2">
                  <Link
                    to="/solutions/free-resources"
                    className="block text-gray-600 hover:text-heidigital-blue py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Free Resources
                  </Link>
                  <Link
                    to="/solutions/ai-tools"
                    className="block text-gray-600 hover:text-heidigital-blue py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Marketing Tools
                  </Link>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="text-gray-700 hover:text-heidigital-blue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-heidigital-blue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-heidigital-blue py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Button 
                asChild
                className="bg-heidigital-blue hover:bg-heidigital-blue/90 w-full"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
