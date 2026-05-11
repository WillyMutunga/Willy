'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Server, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Main Headline Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 bento-card flex flex-col justify-center bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-slate-950"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>OPEN FOR COLLABORATION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Software Developer <br />
              <span className="text-blue-600">&</span> Network Engineer
            </h1>
            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mb-8 leading-relaxed">
              I am a multidisciplinary technologist focused on designing and building secure, scalable systems that seamlessly integrate software and network infrastructure. With a deep understanding of both development and networking principles, I bridge the gap between code and the environments it runs in—ensuring reliability, performance, and security at every layer.
              My expertise lies in architecting robust digital foundations for modern web applications, from backend systems and APIs to network configurations and deployment pipelines. I approach every project with a systems-thinking mindset, enabling me to create solutions that are not only functional but resilient, efficient, and future-ready.
              Driven by continuous learning and innovation, I aim to develop technology that is both impactful and sustainable—empowering users while maintaining strong technical integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center group">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="glass px-8 py-4 rounded-xl font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                Let's Talk
              </button>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bento-card bg-blue-600 text-white border-none"
            >
              <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
                <Code size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">DevOps Mindset</h3>
              <p className="text-white/90 text-sm font-medium">
                Integrating security and performance at the core of the development lifecycle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bento-card"
            >
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-fit mb-4 text-blue-600">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Network Defense</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                Hardening infrastructure with enterprise-grade BGP and Cisco configurations.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
