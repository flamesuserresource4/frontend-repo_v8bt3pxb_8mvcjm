import React from 'react';
import { Download } from 'lucide-react';

const Header = ({ onDownload }) => {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <div>
            <p className="text-sm text-gray-500">Portfolio</p>
            <h1 className="text-lg font-semibold tracking-tight">Resume</h1>
          </div>
        </div>
        <button
          onClick={onDownload}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>
    </header>
  );
};

export default Header;
