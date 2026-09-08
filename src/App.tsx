import React, { useState, useEffect } from 'react';
import { PageId, Language, Project } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/Pages/HomePage';
import { AboutPage } from './components/Pages/AboutPage';
import { CvPage } from './components/Pages/CvPage';
import { PortfolioPage } from './components/Pages/PortfolioPage';
import { ContactPage } from './components/Pages/ContactPage';
import { ProjectModal } from './components/ProjectModal';
import { PROJECTS } from './data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [language, setLanguage] = useState<Language>('FR');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [targetCategory, setTargetCategory] = useState<string | null>(null);

  // Sync document language attribute and title when language changes
  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const handleNavigate = (page: PageId, categoryId?: string) => {
    if (categoryId) {
      setTargetCategory(categoryId);
    } else {
      setTargetCategory(null);
    }
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(p) => setSelectedProject(p)}
            language={language}
          />
        );
      case 'about':
        return <AboutPage language={language} onNavigate={handleNavigate} />;
      case 'cv':
        return <CvPage language={language} onNavigate={handleNavigate} />;
      case 'portfolio':
        return (
          <PortfolioPage
            initialCategoryId={targetCategory}
            onSelectProject={(p) => setSelectedProject(p)}
            language={language}
          />
        );
      case 'contact':
        return <ContactPage language={language} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProject={(p) => setSelectedProject(p)}
            language={language}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#EEEAD7] text-[#2D0000] selection:bg-[#6D0808] selection:text-[#EEEAD7] relative selection:font-bold">
      {/* Persistent Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={(lang) => setLanguage(lang)}
      />

      {/* Main Page Area with Page Transitions */}
      <main className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPage}-${language}`}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent Footer */}
      <Footer
        onNavigate={handleNavigate}
        language={language}
        onLanguageChange={(lang) => setLanguage(lang)}
      />

      {/* Detailed Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={PROJECTS}
        language={language}
      />
    </div>
  );
}
