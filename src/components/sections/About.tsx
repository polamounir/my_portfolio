import { motion } from 'framer-motion';
import { portfolioData } from '../../data/data';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient-theme mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-theme mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-5 flex justify-center items-center lg:justify-start">
              <img
                src={portfolioData.photoUrl}
                alt={portfolioData.name}
                className="object-cover rounded-lg shadow-lg w-full h-full"
                loading="lazy"
                decoding="async"
                fetchPriority="high"
                width={500}
                height={300}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 photo-border rounded-lg -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-theme-primary mb-4">
              {portfolioData.title}
            </h3>
            <p className="text-theme-secondary mb-6 leading-relaxed">
              {portfolioData.summary}
            </p>

            {/* Location and Contact */}
            <div className="space-y-2 mb-8">
              {portfolioData.contact.location && (
                <p className="text-theme-secondary">
                  📍 {portfolioData.contact.location}
                </p>
              )}
              {portfolioData.contact.email && (
                <p className="text-theme-secondary">
                  ✉️ {portfolioData.contact.email}
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {portfolioData.contact.github && (
                <a
                  href={portfolioData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover-text-theme transition-colors duration-200"
                >
                  GitHub
                </a>
              )}
              {portfolioData.contact.linkedin && (
                <a
                  href={portfolioData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-theme-secondary hover-text-theme transition-colors duration-200"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <div className="flex gap-4">
              <a href="./pola_mounir.pdf" target="_blank" rel="noopener noreferrer" className="text-theme-secondary hover-text-theme transition-colors duration-200">
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 