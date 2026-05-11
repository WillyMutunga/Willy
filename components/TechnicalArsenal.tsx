'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Globe,
  Cpu,
  Lock,
  Database,
  Layout,
  Server,
  Cloud
} from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, delay }: { icon: any, title: string, skills: string[], delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bento-card group"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const TechnicalArsenal = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            icon={Code}
            title="Programming"
            skills={['Go', 'Node.js', 'Python', 'TypeScript', 'C++', 'C', 'Java', 'HTML', 'CSS', 'JavaScript']}
            delay={0.1}
          />
          <SkillCard
            icon={Layout}
            title="Frontend"
            skills={['React', 'Next.js', 'Tailwind CSS', 'Framer Motion',]}
            delay={0.2}
          />
          <SkillCard
            icon={Server}
            title="Backend"
            skills={['PostgreSQL', 'Redis', 'Docker', 'GraphQL', 'Express', 'MongoDB', 'Firebase', 'Git', 'GitKraken', 'GitHub', 'GitLab', 'Bitbucket']}
            delay={0.3}
          />
          <SkillCard
            icon={Globe}
            title="Networking"
            skills={['BGP', 'Cisco IOS', 'OSPF', 'Subnetting', 'CCNP', 'CCNA', 'Network Defense']}
            delay={0.4}
          />
          <SkillCard
            icon={Lock}
            title="Cybersecurity"
            skills={['Network Defense', 'Pen-Testing', 'IDS/IPS', 'Firewalls', 'Wireshark', 'Kali Linux', 'Nmap', 'Metasploit', 'Burp Suite', 'SQL Injection', 'Cross-Site Scripting', 'Password Cracking', 'Vulnerability Assessment', 'Security Audits', 'SIEM', 'Intrusion Detection Systems', 'Endpoint Detection and Response', 'Security Information and Event Management']}
            delay={0.5}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 bento-card bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none flex flex-col justify-center items-center text-center p-8"
          >
            <Cpu size={48} className="mb-6 opacity-80" />
            <h3 className="text-2xl font-bold mb-2">Systems Architect</h3>
            <p className="text-blue-100 text-sm">
              Designing end-to-end solutions from hardware selection to cloud deployment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Internal Import for icons
const Code = ({ size, className }: { size: number, className?: string }) => <Terminal size={size} className={className} />;

export default TechnicalArsenal;
