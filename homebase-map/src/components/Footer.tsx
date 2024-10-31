import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-600 hover:text-red-600">About HomeBase</a></li>
              <li><a href="/careers" className="text-gray-600 hover:text-red-600">Careers</a></li>
              <li><a href="/press" className="text-gray-600 hover:text-red-600">Press</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-600">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Real Estate News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get the App</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-600">iOS</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Android</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-red-600">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          © 2023 HomeBase. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
export {};
