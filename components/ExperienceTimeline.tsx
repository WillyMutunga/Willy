'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, ShieldCheck } from 'lucide-react';

const events = [
  {
    date: '2025',
    title: 'Cybersecurity Level 1 Specialization',
    company: 'Cisco Networking Academy',
    description: 'Advanced training in network hardening, threat detection, and response strategies.',
    icon: ShieldCheck,
    type: 'cert',
  },
  {
    date: '2025',
    title: 'Introduction to GenAI',
    company: 'Moringa School',
    description: 'Introduction to Generative AI and its applications in real-world scenarios. ',
    icon: Award,
    type: 'cert',
  },
  {
    date: '2025',
    title: 'Introduction to Python Programming',
    company: 'Cisco Networking Academy',
    description: 'Introduction to Python programming and its applications in real-world scenarios.',
    icon: Award,
    type: 'cert',
  },
  {
    date: '2025',
    title: 'Cisco Certified Network Associate',
    company: 'Cisco Networking Academy',
    description: 'Mastery of routing, switching, and security fundamentals for enterprise networks.',
    icon: Award,
    type: 'cert',
  },
  {
    date: '2024',
    title: 'Introduction to Cybersecurity',
    company: 'Cisco Networking Academy',
    description: 'Mastery of basic essentials of cybersecurity.',
    icon: Award,
    type: 'cert',
  },
  {
    date: '2023',
    title: 'Virtual Assistance',
    company: 'ALX',
    description: 'Mastery of virtual assistance and its applications in real-world scenarios.',
    icon: Award,
    type: 'cert',
  },
  {
    date: '2024',
    title: 'Software Engineering',
    company: 'Premier League of Programmers(PLP)',
    description: 'Mastery of software engineering and its applications in real-world scenarios.',
    icon: Award,
    type: 'cert',
  },
  {
    date: '2023 - 2024',
    title: 'Secretary General',
    company: 'Student Association of Mama Ngina University College',
    description: 'Leading organizational strategy, advocacy for student rights, and community engagement initiatives.',
    icon: Briefcase,
    type: 'leadership',
  },
  {
    date: '2023 - 2024',
    title: 'Logistics Director',
    company: 'Makueni University Student Association',
    description: 'Overseeing the planning, execution, and coordination of all events and activities, ensuring seamless logistical operations and resource management.',
    icon: Briefcase,
    type: 'leadership',
  },
  {
    date: '2022 - 2026',
    title: 'B.S. in Computer Science',
    company: 'Mama Ngina University College',
    description: 'Comprehensive study of theoretical and practical aspects of computer systems, including software development, database management, and network architecture.',
    icon: GraduationCap,
    type: 'edu',
  },
  {
    date: '2018 - 2021',
    title: 'Kenya Certificate of Secondary Education',
    company: 'AIC Nduundune High School',
    description: 'Attained a mean grade of B with strong performance in Sciences and Mathematics.',
    icon: GraduationCap,
    type: 'edu',
  },
  {
    date: '2009 - 2017',
    title: 'Kenya Certificate of Primary Education',
    company: 'Ndwaani Primary School',
    description: 'Attained a mean grade of B with strong performance in Sciences and Mathematics.',
    icon: GraduationCap,
    type: 'edu',
  },
];

const TimelineItem = ({ event, index }: { event: any, index: number }) => {
  const Icon = event.icon;
  return (
    <div className="relative pl-12 pb-12 last:pb-0">
      {/* Timeline Line */}
      <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

      {/* Dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="absolute left-0 top-0 w-10 h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 flex items-center justify-center z-10"
      >
        <Icon size={18} className="text-blue-600" />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <span className="text-sm font-bold text-blue-600 mb-1 block uppercase tracking-wider">{event.date}</span>
        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
        <p className="text-sm font-medium text-slate-500 mb-3">{event.company}</p>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
          {event.description}
        </p>
      </motion.div>
    </div>
  );
};

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Journey <br /> & Impact</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                A timeline of academic foundation, specialized certifications, and leadership roles that define my professional identity.
              </p>
              <div className="p-6 glass rounded-2xl border-blue-100 dark:border-blue-900/30">
                <h4 className="font-bold text-blue-600 mb-2 italic">"Bridging the gap between code and infrastructure is not just a skill—it's a philosophy."</h4>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {events.map((event, index) => (
                <TimelineItem key={index} event={event} index={index} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
