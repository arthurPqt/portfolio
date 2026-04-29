import React from 'react';

interface ExperienceItem {
    year: string;
    title: string;
    company: string;
    duration?: string;
    description: string;
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        year: '2024',
        title: 'Développeur web - Stage',
        company: 'HWJCODE Rouen, France',
        description: 'Réalisation d\'un site immobilier complet en conditions professionnelles. Affichage dynamique des biens depuis une base de données Directus. Filtres de recherche et design responsive.',
        skills: ['Next.js', 'Tailwind CSS', 'Directus', 'JSX']
    },
    {
        year: '2022',
        title: 'Formation Développeur Web & Web Mobile',
        company: 'Studi En Ligne 2022 - 2024',
        description: 'Formation certifiante de niveau Bac+2. Apprentissage des fondamentaux du développement web front-end et back-end, avec réalisation de projets concrets dans BDD de certification.',
        skills: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS']
    }
];

export default function Parcours() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-teal-600 text-sm font-semibold tracking-wide mb-2">03. PARCOURS</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mon expérience</h2>
                </div>

                {/* Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="flex gap-6">
                            {/* Year and line */}
                            <div className="flex flex-col items-center flex-shrink-0">
                                <span className="text-teal-600 font-semibold text-lg">{exp.year}</span>
                                {index !== experiences.length - 1 && (
                                    <div className="w-0.5 h-32 bg-teal-600 mt-4"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="pb-8">
                                <div className="border-l-4 border-teal-600 pl-4">
                                    <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{exp.company}</p>
                                    {exp.duration && <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>}
                                    <p className="text-gray-700 mt-3 text-sm leading-relaxed">{exp.description}</p>
                                    
                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.skills.map((skill, i) => (
                                            <span key={i} className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center mt-12">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded font-semibold flex items-center gap-2 transition">
                        Mon CV <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}