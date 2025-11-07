import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b0b12]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for mood */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-20 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.35),transparent_60%)]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start px-6 pt-24 md:px-10 md:pt-28">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20 backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-violet-400" />
          Available for internships & projects
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-left text-4xl font-extrabold tracking-tight text-white drop-shadow md:text-6xl"
        >
          Hi, I'm Sanidh
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Student Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-5 max-w-2xl text-left text-base text-white/80 md:text-lg"
        >
          Passionate about interactive web experiences, 3D graphics, and smooth animations. Completing my B.Tech in 8 months. Built two hands-on projects showcasing strong fundamentals and curiosity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.7 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="cursor-hover inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform hover:scale-[1.03] focus:outline-none"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="cursor-hover inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
