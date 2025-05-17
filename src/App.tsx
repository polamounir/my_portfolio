import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";

import { motion } from 'framer-motion';
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {


  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem('theme');

    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {

    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    

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
            <Home />
          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App
