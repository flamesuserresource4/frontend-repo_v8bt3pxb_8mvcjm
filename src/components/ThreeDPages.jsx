import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const tabs = [
  { key: 'explore', label: 'Explore' },
  { key: 'interact', label: 'Interact' },
  { key: 'details', label: 'Details' },
];

export default function ThreeDPages() {
  const [active, setActive] = useState('explore');

  return (
    <section id="pages3d" className="relative w-full bg-black py-16 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">3D Pages</h2>
            <p className="mt-1 text-sm text-white/70 md:text-base">Switch between pages to experience smooth, immersive 3D scenes.</p>
          </div>
          <div className="inline-flex rounded-full bg-white/10 p-1 ring-1 ring-white/10 backdrop-blur">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  active === t.key ? 'bg-white text-black' : 'text-white/80 hover:text-white'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b12]">
          <AnimatePresence mode="wait">
            {active === 'explore' && (
              <motion.div
                key="explore"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Spline
                  scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/60" />
              </motion.div>
            )}

            {active === 'interact' && (
              <motion.div
                key="interact"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Spline
                  scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),transparent_60%)]" />
              </motion.div>
            )}

            {active === 'details' && (
              <motion.div
                key="details"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Spline
                  scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mx-auto mt-6 max-w-3xl text-center text-sm text-white/80 md:text-base">
          {active === 'explore' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              Explore a dark, futuristic space with an astronaut interacting with an iridescent ribbon inside a 3D browser window.
            </motion.p>
          )}
          {active === 'interact' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              Move around and interact with the scene elements. The glowing spheres and cyber lines respond as you navigate.
            </motion.p>
          )}
          {active === 'details' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
              A surreal, cyberpunk aesthetic blending retro vibes with modern interactivity, showcased in an immersive canvas.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
