import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Alex Johnson. Built with React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
