'use client';

import React from 'react';
import Link from 'next/link';
import { Code as Github, Globe as Linkedin, Share2 as Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
              Willy Mutunga
            </h2>
            <p className="text-slate-500 text-sm">
              Software Developer & Network Engineer
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="p-3 rounded-full glass hover:text-blue-600 transition-all shadow-sm">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/willy-mutunga/" target="_blank" rel="noreferrer" className="p-3 rounded-full glass hover:text-blue-600 transition-all shadow-sm">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-full glass hover:text-blue-600 transition-all shadow-sm">
              <Twitter size={20} />
            </a>
            <a href="mailto:[]" className="p-3 rounded-full glass hover:text-blue-600 transition-all shadow-sm">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 pt-8 border-t border-slate-100 dark:border-slate-900">
          <p>© {new Date().getFullYear()} Willy Mutunga. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <Link href="/socials" className="hover:text-blue-600 transition-colors font-medium">My Socials</Link>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
