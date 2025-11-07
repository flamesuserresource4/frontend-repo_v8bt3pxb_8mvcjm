import { useCallback } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThreeDPages from './components/ThreeDPages';

function App() {
  const handleResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Sanidh-Resume.html';
    link.download = 'Sanidh-Resume.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  const profilePhoto = '/sanidh-profile.jpg';

  return (
    <div id="top" className="min-h-screen bg-black text-white">
      <Header onResumeClick={handleResume} />
      <main className="pt-20">
        <Hero3D />
        <About photoUrl={profilePhoto} />
        <Projects />
        <ThreeDPages />
        <Contact />
      </main>
    </div>
  );
}

export default App;
