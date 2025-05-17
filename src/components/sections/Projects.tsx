import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../../data/data';

interface Project {
  name: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  featured?: boolean;
}

const Projects = () => {
  // const [filter, setFilter] = useState<'all' | 'featured'>('all');

  // const filteredProjects = filter === 'all'
  //   ? portfolioData.projects
  //   : portfolioData.projects.filter((project: Project) => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient-theme mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-theme mx-auto rounded-full mb-8" />

          {/* Filter buttons */}
          {/* <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full button-theme-filter ${
                filter === 'all' ? 'active' : ''
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-6 py-2 rounded-full button-theme-filter ${
                filter === 'featured' ? 'active' : ''
              }`}
            >
              Featured
            </button>
          </div> */}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {portfolioData.projects.map((project: Project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="nav-bg-theme backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-theme"
              >
                {/* Project Image */}
                <div className="relative aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                    width={500}
                    height={300}
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-theme text-white text-xs font-medium rounded-full">
                      Featured
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-theme-primary mb-2">
                    {project.name}
                  </h3>
                  <p className="text-theme-secondary mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium text-gradient-theme bg-gradient-theme bg-opacity-10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gradient-theme hover-text-theme transition-colors duration-200"
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects; 