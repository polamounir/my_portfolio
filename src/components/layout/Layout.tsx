import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../../styles/theme.css';

const Layout = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Get initial theme from localStorage, default to user's system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    
    // Update document class for global theme styling
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen w-full text-theme-primary">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <motion.main 
        className="flex-grow w-full pt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full">
          <div className="w-full">
            <Outlet />
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout; 