import { portfolioData } from '../../data/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-bg-theme backdrop-blur-sm shadow-lg mt-auto border-t border-theme w-full">
      <div className="w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-theme-secondary text-sm sm:text-base whitespace-nowrap">
            &copy; {currentYear} <span className="text-gradient-theme font-medium">{portfolioData.name}</span>
          </p>
          <p className="text-theme-muted text-sm sm:text-base whitespace-nowrap">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 