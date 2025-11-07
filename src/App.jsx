import { useCallback, useEffect } from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Hide default cursor for custom one
    document.documentElement.style.cursor = 'none';
    document.body.style.cursor = 'none';
    return () => {
      document.documentElement.style.cursor = '';
      document.body.style.cursor = '';
    };
  }, []);

  const handleResume = useCallback(() => {
    // Create a hidden link to trigger download/open of resume file
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
        <Contact />
      </main>
      <CustomCursor />
    </div>
  );
}

export default App;
