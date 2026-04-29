"use client";
import Link from "next/link";
import { motion } from "framer-motion";


interface Technology {
    name: string;
    icon: string;
    category: 'frontend' | 'backend' | 'tools';
}

const technologies: Technology[] = [
    // Frontend
    { name: 'Next.js', icon: '▲', category: 'frontend' },
    { name: 'React', icon: '⚛', category: 'frontend' },
    { name: 'Tailwind', icon: '🎨', category: 'frontend' },
    
    // Backend
    { name: 'PHP', icon: '🐘', category: 'backend' },
    { name: 'Node.js', icon: '💚', category: 'backend' },
    { name: 'MySQL', icon: '🗄', category: 'backend' },
    { name: 'Directus', icon: '📊', category: 'backend' },
    
    // Tools
    { name: 'GitHub', icon: '🐙', category: 'tools' },
    { name: 'VS Code', icon: '💻', category: 'tools' },
    { name: 'Figma', icon: '✏️', category: 'tools' },
];

export default function Stack() {
    const categories = {
        frontend: technologies.filter(t => t.category === 'frontend'),
        backend: technologies.filter(t => t.category === 'backend'),
        tools: technologies.filter(t => t.category === 'tools'),
    };

    return (
        <section className="py-0 md:py-20 px-6 sm:px-12 justify-center md:px-16 lg:px-24">
            
        <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-syne font-extrabold text-6xl md:text-8xl text-dark leading-none  mb-4"
      >
            <p className="text-center text-sm font-semibold  mb-4">
                01 . STACK TECHNIQUE
            </p>
            </motion.h1>
            <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-syne font-semibold text-2xl md:text-3xl text-dark/50 mb-6"
      >
            <p className="text-center text-3xl font-bold mb-12">
                Les technologies que j'utilise au quotidien
            </p></motion.h2>
<motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4"
      >
            <div className="space-y-8 flex flex-row justify-center  gap-32 flex-wrap">
                {Object.entries(categories).map(([category, items]) => (
                    <div key={category} className="text-center">
                        <h4 className="text-teal-600 font-semibold mb-6 capitalize">
                            {category === 'frontend' && 'Front-end'}
                            {category === 'backend' && 'Back-end'}
                            {category === 'tools' && 'Outils'}
                        </h4>
                        <div className="flex justify-center gap-8 flex-wrap">
                            {items.map(tech => (
                                <div key={tech.name} className="flex flex-col items-center gap-2">
                                    <div className="text-4xl">{tech.icon}</div>
                                    <span className="text-sm text-gray-600">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div></motion.div>
           
        </section>
    );
}