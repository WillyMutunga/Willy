'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code as Github, Zap as Sparkles, Leaf as Sprout, Home as Building2 } from 'lucide-react';

const projects = [
  {
    title: 'AI-Driven Student Support',
    description: 'An intelligent platform utilizing LLMs to provide real-time academic assistance and resource recommendations for university students.',
    tags: ['Next.js', 'Python', 'OpenAI', 'PostgreSQL'],
    icon: Sparkles,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Agro-Market Forecasting',
    description: 'A data-driven platform that predicts agricultural market trends and crop prices using machine learning to help farmers optimize their sales.',
    tags: ['React', 'Node.js', 'TensorFlow', 'D3.js'],
    icon: Sprout,
    color: 'from-emerald-500 to-teal-400',
  },
  {
    title: 'Academic ERP System',
    description: 'A comprehensive Enterprise Resource Planning system for academic management, streamlining student records, grading, and administrative workflows.',
    tags: ['Go', 'React', 'Docker', 'Redis'],
    icon: Building2,
    color: 'from-indigo-600 to-purple-500',
  },
  {
    title: 'Automobile Management System',
    description: 'A comprehensive automobile management platform built to streamline vehicle listings, inventory tracking, customer interactions, and sales workflows. The system enables efficient management of automobile data, enhances user experience for buyers, and provides administrative tools for monitoring and controlling operations in real time.',
    tags: ['Laravel', 'MySQL', 'Blade', 'Bootstrap'],
    icon: Building2,
    color: 'from-indigo-600 to-purple-500',
  },
  {
    title: 'AgriLink Platform',
    description: 'A comprehensive agricultural marketplace platform designed to connect farmers directly with buyers, streamline product listings, and optimize supply chain processes. The system enables efficient management of agricultural products, enhances market accessibility for farmers, and provides administrative tools for monitoring transactions and ensuring transparency in real time.',
    tags: ['Laravel', 'MySQL', 'Blade', 'Bootstrap'],
    icon: Building2,
    color: 'from-green-600 to-emerald-500',
  }
];

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="bento-card h-full flex flex-col p-8 overflow-hidden">
        {/* Hover Background Effect */}
        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl -mr-10 -mt-10`}></div>

        <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white w-fit mb-6 shadow-lg shadow-blue-500/20`}>
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors">{project.title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-6 pt-4 border-t border-slate-100 dark:border-slate-800">
          <a href="#" className="inline-flex items-center text-sm font-bold text-blue-600 hover:underline">
            View Live <ExternalLink size={14} className="ml-1" />
          </a>
          <a href="#" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200">
            Source Code <Github size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              A selection of projects that bridge engineering complexity with intuitive user experiences.
            </p>
          </div>
          <a href="#" className="text-blue-600 font-bold flex items-center hover:translate-x-1 transition-transform">
            View All Projects <ExternalLink size={20} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
