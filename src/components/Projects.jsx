import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description:
      'A Spline-powered hero with smooth scroll and micro-interactions. Focus on performance and accessibility.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Student Task Tracker',
    description:
      'A responsive app to plan study tasks with delightful UI feedback and dark theme first.',
    tags: ['React', 'Tailwind', 'REST'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-[#0b0b12] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-3xl font-bold md:text-4xl">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-white/70">Two recent builds I’m proud of. I’m constantly learning and iterating to push my craft.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all hover:translate-y-[-2px] hover:bg-white/10"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-xs text-white/60">Case Study</span>
              </div>
              <p className="mt-3 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 ring-1 ring-white/10">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
