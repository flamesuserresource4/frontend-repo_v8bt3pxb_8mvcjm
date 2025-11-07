import React from 'react';

const experiences = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Pixel Labs',
    period: '2022 — Present',
    points: [
      'Led the migration to Vite + React, improving build times by 60%.',
      'Built accessible component library and established design tokens.',
      'Collaborated with backend teams to deliver real-time dashboards.',
    ],
  },
  {
    role: 'Frontend Engineer',
    company: 'Nimbus Cloud',
    period: '2020 — 2022',
    points: [
      'Developed high-traffic marketing pages with A/B testing.',
      'Introduced performance budgets, cutting LCP by 35%.',
      'Mentored junior engineers in modern React patterns.',
    ],
  },
];

const Experience = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-10">
      <h3 className="text-xl font-semibold tracking-tight mb-4">Experience</h3>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <div key={exp.role} className="rounded-xl border border-gray-200 bg-white/70 backdrop-blur p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <p className="text-sm text-gray-500">{exp.company}</p>
                <h4 className="text-lg font-medium">{exp.role}</h4>
              </div>
              <span className="text-sm text-gray-600">{exp.period}</span>
            </div>
            <ul className="mt-4 list-disc pl-5 text-gray-700 space-y-1">
              {exp.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
