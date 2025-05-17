import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/data';

interface SkillItem {
  name: string;
  icon: string;
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(portfolioData.skills[0].category);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold  mb-4">
            Skills
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {portfolioData.skills.map((skillCategory) => (
            <button
              key={skillCategory.category}
              onClick={() => setActiveCategory(skillCategory.category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                activeCategory === skillCategory.category
                  ? 'bg-theme-primary text-theme-secondary '
                  : ' dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600'
              }`}
            >
              {skillCategory.category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {portfolioData.skills
            .find((s) => s.category === activeCategory)
            ?.items.map((skill: SkillItem, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-theme-primary text-theme-secondary dark:bg-gray-700 rounded-lg p-6 flex flex-col items-center gap-3 hover:transform hover:scale-105 transition-transform duration-200"
              >
                {skill.icon ? (
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain has-shadow"
                    loading="lazy"
                    width={50}
                  />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center text-2xl">
                    {skill.name === "Problem Solving" && "🧩"}
                    {skill.name === "Team Collaboration" && "👥"}
                    {skill.name === "Communication" && "💬"}
                    {skill.name === "Time Management" && "⏰"}
                    {skill.name === "Attention to Detail" && "🔍"}
                  </div>
                )}
                <span className="zfont-medium text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 