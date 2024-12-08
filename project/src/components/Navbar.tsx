import React from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-600 cursor-pointer" />
          </div>
          
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-serif text-gray-800">Luxe Jewelry</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <User className="h-6 w-6 text-gray-600 cursor-pointer" />
            <ShoppingCart className="h-6 w-6 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};