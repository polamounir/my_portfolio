import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    // Simulate form submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Message received! This is a demo version without a backend.',
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-theme">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gradient-theme mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--gradient-start)] via-[var(--gradient-middle)] to-[var(--gradient-end)] mx-auto rounded-full mb-8" />
          <p className="text-lg text-theme-secondary max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="card-theme p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gradient-theme mb-4">
                Contact Information
              </h3>
              {portfolioData.contact.email && (
                <div className="flex items-center space-x-3 text-theme-secondary">
                  <span>✉️</span>
                  <a 
                    href={`mailto:${portfolioData.contact.email}`} 
                    className="hover-text-theme transition-all duration-200 hover:translate-x-1"
                  >
                    {portfolioData.contact.email}
                  </a>
                </div>
              )}
              {portfolioData.contact.location && (
                <div className="flex items-center space-x-3 text-theme-secondary mt-2">
                  <span>📍</span>
                  <span>{portfolioData.contact.location}</span>
                </div>
              )}
            </div>

            <div className="card-theme p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gradient-theme mb-4">
                Social Links
              </h3>
              <div className="flex space-x-6">
                {portfolioData.contact.github && (
                  <a
                    href={portfolioData.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-secondary hover-text-theme transition-all duration-200 hover:translate-y-[-2px]"
                  >
                    GitHub
                  </a>
                )}
                {portfolioData.contact.linkedin && (
                  <a
                    href={portfolioData.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-secondary hover-text-theme transition-all duration-200 hover:translate-y-[-2px]"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-theme p-6 rounded-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-theme-secondary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-theme w-full px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-theme-secondary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-theme w-full px-4 py-2 rounded-lg"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-theme-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="input-theme w-full px-4 py-2 rounded-lg resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="button-theme w-full px-6 py-3 font-medium rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200'
                      : 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 