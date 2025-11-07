import { motion } from 'framer-motion';

export default function About({ photoUrl }) {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_10%_0%,rgba(139,92,246,0.12),transparent),radial-gradient(800px_400px_at_90%_0%,rgba(34,211,238,0.12),transparent)]" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-2 md:order-1"
        >
          <h2 className="text-3xl font-bold md:text-4xl">About Sanidh</h2>
          <p className="mt-4 text-white/80">
            I'm a B.Tech student focused on modern web development. I love building engaging user interfaces with 3D interactions and micro-animations. Over the last 8 months, I completed two projects that helped me solidify my fundamentals and learn production-ready practices.
          </p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Frontend: React, Tailwind, Framer Motion</li>
            <li>• 3D & Graphics: Spline, Three.js basics</li>
            <li>• Tooling: Git, Vite, REST APIs</li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="order-1 md:order-2"
        >
          <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-2xl ring-1 ring-white/10 md:w-72">
            <img src={photoUrl} alt="Sanidh" className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-cyan-400/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
