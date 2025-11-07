import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-bold md:text-4xl">Let’s Connect</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            Interested in internships, collaborations, or just want to say hi? Reach out and I’ll get back to you.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <motion.a whileHover={{ y: -2 }} href="mailto:sanidh@example.com" className="rounded-xl border border-white/10 bg-white/10 p-4 text-center text-white/90">Email</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="rounded-xl border border-white/10 bg-white/10 p-4 text-center text-white/90">LinkedIn</motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="rounded-xl border border-white/10 bg-white/10 p-4 text-center text-white/90">GitHub</motion.a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Sanidh. All rights reserved.</p>
      </div>
    </section>
  );
}
