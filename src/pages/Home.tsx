import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import '../assets/styles/theme.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const renderSection = (Component: React.ComponentType, delay: number) => (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="section"
    >
      <Component />
    </motion.section>
  );

  return (
    <div className="overflow-hidden">
      {renderSection(Hero, 0)}
      {renderSection(About, 0.2)}
      {renderSection(Experience, 0.3)}
      {renderSection(Projects, 0.4)}
      {renderSection(Skills, 0.5)}
      {renderSection(Contact, 0.6)}
    </div>
  );
};

export default Home; 