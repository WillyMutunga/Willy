'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faInstagram, 
  faYoutube,
  faDiscord,
  faMedium,
  faStackOverflow
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faGlobe, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const SocialLink = ({ icon, name, url, color, delay }: { icon: any, name: string, url: string, color: string, delay: number }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="group bento-card flex items-center justify-between p-4 hover:scale-[1.02] active:scale-[0.98] transition-all border-blue-100 dark:border-blue-900/30"
  >
    <div className="flex items-center space-x-4">
      <div className={`p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm group-hover:shadow-md transition-shadow text-2xl ${color}`}>
        <FontAwesomeIcon icon={icon} width={24} />
      </div>
      <div>
        <h3 className="font-bold text-lg group-hover:text-blue-600 transition-colors">{name}</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400">Connect on {name}</p>
      </div>
    </div>
    <div className="text-slate-300 group-hover:text-blue-500 transition-colors">
      <FontAwesomeIcon icon={faGlobe} size="sm" />
    </div>
  </motion.a>
);

const SocialsPage = () => {
  const socials = [
    { name: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/in/willy-mutunga/', color: 'text-[#0077B5]', delay: 0.1 },
    { name: 'GitHub', icon: faGithub, url: 'https://github.com/Willy-Mutunga', color: 'text-[#333]', delay: 0.2 },
    { name: 'Twitter / X', icon: faTwitter, url: '#', color: 'text-[#1DA1F2]', delay: 0.3 },
    { name: 'Instagram', icon: faInstagram, url: '#', color: 'text-[#E4405F]', delay: 0.4 },
    { name: 'YouTube', icon: faYoutube, url: '#', color: 'text-[#FF0000]', delay: 0.5 },
    { name: 'Discord', icon: faDiscord, url: '#', color: 'text-[#5865F2]', delay: 0.6 },
    { name: 'Medium', icon: faMedium, url: '#', color: 'text-[#000000] dark:text-white', delay: 0.7 },
    { name: 'Stack Overflow', icon: faStackOverflow, url: '#', color: 'text-[#F48024]', delay: 0.8 },
    { name: 'Email Me', icon: faEnvelope, url: 'mailto:contact@willy.dev', color: 'text-blue-600', delay: 0.9 },
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-12 group"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold shadow-xl shadow-blue-500/20"
          >
            WM
          </motion.div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Connect with Willy</h1>
          <p className="text-slate-600 dark:text-slate-400">Software Developer & Network Engineer. Let's build something amazing together.</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {socials.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </div>

        <footer className="mt-20 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Willy.dev | Stay Connected</p>
        </footer>
      </div>
    </main>
  );
};

export default SocialsPage;
