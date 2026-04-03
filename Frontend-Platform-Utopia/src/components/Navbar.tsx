import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const Navbar: React.FC = () => {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-4">
            {/* Logo Placeholder */}
            <div className="w-10 h-10 bg-primary rounded-full"></div>
            <span className="font-bold text-lg">IEEE CS CHAPTER SESAME SB</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#career-intelligence" className="hover:text-primary">AI-Powered Career Intelligence</a>
            <a href="#features" className="hover:text-primary">Powerful Features</a>
            <a href="#command-center" className="hover:text-primary">Your Career Command Center</a>
            <a href="#offer" className="hover:text-primary">Limited Time Offer</a>
          </div>
          <div className="flex items-center space-x-4">
            <DarkModeToggle />
            <Link to="/signin" className="flex items-center space-x-2 px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <User size={20} />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
