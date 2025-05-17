import { motion } from 'framer-motion';
import { useCallback } from 'react';

import { portfolioData } from '../../data/data';

const Hero = () => {
  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex items-center justify-center relative overflow-hidden py-50 lg:min-h-screen" id="home">
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-theme mb-6"
        >
          {portfolioData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl text-theme-secondary mb-8 max-w-2xl mx-auto"
        >
          {portfolioData.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, '#contact')}
            className="button-theme w-full sm:w-auto px-8 py-3 rounded-lg font-medium"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, '#projects')}
            className="button-theme-secondary w-full sm:w-auto px-8 py-3 rounded-lg font-medium"
          >
            View Projects
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
          onClick={scrollToAbout}
        >
          👇
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/4 -left-12 w-64 h-64 rounded-full filter blur-3xl bg-gradient-theme"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute bottom-1/4 -right-12 w-64 h-64 rounded-full filter blur-3xl bg-gradient-theme"
      />
    </section>
  );
};

export default Hero; 