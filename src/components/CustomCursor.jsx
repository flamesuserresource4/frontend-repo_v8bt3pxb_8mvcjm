import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener('mousemove', move);
    // treat interactive elements as hover targets
    const selectors = 'a, button, [role="button"], .cursor-hover';
    const addHoverListeners = () => {
      document.querySelectorAll(selectors).forEach((el) => {
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', move);
      document.querySelectorAll(selectors).forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className={`pointer-events-none fixed z-50 hidden md:block mix-blend-difference transition-transform duration-150 ease-out`}
        style={{
          left: 0,
          top: 0,
          transform: `translate(${pos.x - 12}px, ${pos.y - 12}px)`,
        }}
      >
        <div
          className={`rounded-full border ${hovering ? 'w-10 h-10 border-white/90' : 'w-6 h-6 border-white/70'} transition-all duration-150`}
        />
      </div>
      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed z-50 hidden md:block mix-blend-difference`}
        style={{
          left: 0,
          top: 0,
          transform: `translate(${pos.x - 2}px, ${pos.y - 2}px)`,
        }}
      >
        <div className={`rounded-full ${hovering ? 'w-1.5 h-1.5 bg-white/90' : 'w-1 h-1 bg-white/80'} transition-all`} />
      </div>
    </>
  );
}
