import { motion } from 'framer-motion';
import { portfolioData } from '../../data/data';

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 bg-gradient-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-theme-primary mb-4">
            Experience
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] mx-auto rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden sm:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-[var(--border-color)]" />

          {/* Experience items */}
          <div className="space-y-8 sm:space-y-12">
            {portfolioData.experience.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 
                    ? 'sm:justify-start justify-center' 
                    : 'sm:justify-end justify-center'
                }`}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)]" />

                {/* Content */}
                <div
                  className={`w-full sm:w-5/12 ${
                    index % 2 === 0 
                      ? 'sm:pr-8 sm:text-right px-4' 
                      : 'sm:pl-8 px-4'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-theme">
                    <h3 className="text-lg sm:text-xl font-semibold text-theme-primary mb-2">
                      {experience.title}
                    </h3>
                    <h4 className="text-base sm:text-lg text-[var(--primary-500)] mb-2">
                      {experience.company}
                    </h4>
                    <p className="text-xs sm:text-sm text-theme-muted mb-3 sm:mb-4">
                      {experience.date}
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2 mb-2 sm:mb-4">
                      {experience.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-theme-secondary text-xs sm:text-sm"
                        >
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 