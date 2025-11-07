import React, { useRef } from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Experience from './components/Experience';
import Footer from './components/Footer';

const App = () => {
  const resumeRef = useRef(null);

  const handleDownload = () => {
    // Approach: We ship a hidden PDF asset in the public folder path 
    // and programmatically trigger a download for better cross-browser support.
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Alex_Johnson_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50 text-gray-900">
      <Header onDownload={handleDownload} />

      <main>
        <ProfileCard />
        <Experience />

        {/* Hidden note for users without a PDF present */}
        <div className="mx-auto max-w-5xl px-4">
          <div className="rounded-xl border border-dashed border-indigo-200 bg-indigo-50/40 p-4 text-sm text-indigo-700">
            <p>
              Tip: Place your resume file at the project root under <code>public/resume.pdf</code> to enable the download button.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
