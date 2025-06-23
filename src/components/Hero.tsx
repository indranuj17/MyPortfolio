import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';


const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-850" />
      
      {/* Dynamic Dark Theme Background */}
      <div className="absolute inset-0 dark:bg-dark-mesh dark:animate-gradient-shift opacity-30" />
      
      {/* Animated Gradient Orbs - Dark Theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 to-transparent dark:from-primary-400/30 dark:to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-secondary-500/20 to-transparent dark:from-secondary-400/30 dark:to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-accent-500/20 to-transparent dark:from-accent-400/30 dark:to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-600 dark:text-primary-300 font-medium mb-4 relative"
          >
            <span className="relative z-10">Hello, I'm</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-400/30 dark:to-secondary-400/30 blur-xl rounded-full animate-pulse" />
          </motion.p>

          {/* Name with Enhanced Dark Theme */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 relative"
          >
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 dark:from-primary-300 dark:via-secondary-300 dark:to-accent-300 bg-clip-text text-transparent relative z-10 animate-shimmer bg-[length:200%_100%]">
              Indranuj Dev
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-400/20 dark:to-secondary-400/20 blur-2xl rounded-lg animate-glow" />
          </motion.h1>

          {/* Title */}
         <motion.h2
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  className="text-xl md:text-3xl text-gray-700 dark:text-gray-200 font-medium mb-8"
>
  <Typewriter
    words={['Full-Stack Developer.', 'AI/ML Enthusiast.', 'Tech Explorer.']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={2000}
  />
</motion.h2>


          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
           Passionate developer skilled in C++, Full-Stack web development, and machine learning. Strong in DSA, with a focus on building impactful projects and currently exploring deep learning and AI deployment.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 dark:from-primary-400 dark:to-secondary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-white/20 dark:bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
              <span className="relative flex items-center space-x-2 z-10">
                <Mail size={20} />
                <span>Get In Touch</span>
              </span>
            </motion.button>

            <a href="https://drive.google.com/file/d/1ZeNOGNRqEHconrQ-PdIFfEOlXUHUoPSc/view?usp=drive_link" download target="_blank" rel="noopener noreferrer">
  <motion.button
    className="group relative px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 transition-all duration-300 overflow-hidden"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-0 bg-primary-600 dark:bg-primary-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    
    <span className="relative flex items-center space-x-2 z-10">
      <Download size={20} />
      <span>Download CV</span>
    </span>
  </motion.button>
</a>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: 'https://github.com/indranuj17', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/indranuj-dev-b45366202/', label: 'LinkedIn' },
              { icon: Mail, href: 'indranujdev015@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="group relative p-3 rounded-full bg-white/10 dark:bg-dark-800/50 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/20 dark:hover:bg-dark-700/50 transition-all duration-300 border border-gray-200/20 dark:border-gray-700/30"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-400/30 dark:to-secondary-400/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <Icon size={24} className="relative z-10" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="relative">
              <ChevronDown size={24} className="relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-secondary-500/30 dark:from-primary-400/40 dark:to-secondary-400/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm scale-150" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;