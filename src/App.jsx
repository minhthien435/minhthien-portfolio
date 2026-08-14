import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/Cursor/CustomCursor';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Timeline from './components/Timeline/Timeline';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import GitHubSection from './components/GitHub/GitHub';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CvModal from './components/CvModal/CvModal';
import SmoothScroll from './components/Common/SmoothScroll';
import PageTransition from './components/Common/PageTransition';

export default function App() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  const handleOpenCv = () => setIsCvOpen(true);
  const handleCloseCv = () => setIsCvOpen(false);

  return (
    <SmoothScroll>
      <PageTransition>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="min-h-screen bg-stone-950 text-stone-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black"
        >
          <CustomCursor />
          <Navbar onOpenCv={handleOpenCv} />
          <main>
            <Hero onOpenCv={handleOpenCv} />
            <About />
            <Skills />
            <Timeline />
            <Projects />
            <Certifications />
            <GitHubSection />
            <Contact onOpenCv={handleOpenCv} />
          </main>
          <Footer />
          <AnimatePresence>
            {isCvOpen && <CvModal isOpen={isCvOpen} onClose={handleCloseCv} />}
          </AnimatePresence>
        </motion.div>
      </PageTransition>
    </SmoothScroll>
  );
}
