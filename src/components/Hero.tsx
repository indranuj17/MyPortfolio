import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import Photo from "/public/myPhoto.jpg"

const Hero: React.FC = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects (unchanged) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-900" />
      <div className="absolute inset-0 dark:bg-dark-mesh dark:animate-gradient-shift opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-primary-500/20 to-transparent dark:from-primary-400/30 dark:to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-secondary-500/20 to-transparent dark:from-secondary-400/30 dark:to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-accent-500/20 to-transparent dark:from-accent-400/30 dark:to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.02%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />

      {/* Main content layout */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-2/3 text-left"
        >
          <motion.p
            className="text-lg md:text-xl text-primary-600 dark:text-primary-300 font-medium mb-4 relative"
          >
            <span className="relative z-10">Hello, I'm</span>
          </motion.p>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 dark:from-cyan-300 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent animate-shimmer bg-[length:250%_100%] font-extrabold">
              Indranuj Dev
            </span>
          </motion.h1>

          <motion.h2
            className="text-2xl md:text-4xl text-gray-800 dark:text-gray-100 font-bold tracking-tight mb-8"
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

          <motion.p className="text-lg text-gray-500 dark:text-gray-300 max-w-2xl mb-12 leading-relaxed">
            Passionate developer skilled in C++, Full-Stack web development, and machine learning. Strong in DSA, with a focus on building impactful projects and currently exploring deep learning and AI deployment.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-500 dark:to-secondary-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center space-x-2">
                <Mail size={20} />
                <span>Get In Touch</span>
              </span>
            </motion.button>

            <a
              href="https://drive.google.com/file/d/1ZeNOGNRqEHconrQ-PdIFfEOlXUHUoPSc/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button className="px-8 py-4 border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 font-semibold rounded-full hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-dark-900 transition-all duration-300">
                <span className="flex items-center space-x-2">
                  <Download size={20} />
                  <span>Download CV</span>
                </span>
              </motion.button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            {[ 
              { icon: Github, href: 'https://github.com/indranuj17' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/indranuj-dev-b45366202/' },
              { icon: Mail, href: 'mailto:indranujdev015@gmail.com' },
            ].map(({ icon: Icon, href }, index) => (
              <a
                key={index}
                href={href}
                className="p-3 rounded-full bg-white/10 dark:bg-dark-800/50 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-white/20 dark:hover:bg-dark-700/50 transition duration-300 border border-gray-200/20 dark:border-gray-700/30"
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>



        {/* Right Side: Profile Photo */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="w-full md:w-2/3 lg:w-1/2 flex justify-center relative"
  style={{ perspective: "1500px" }} // stronger 3D depth
>
  {/* Enhanced 3D Container */}
  <div style={{ perspective: '1500px' }} className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden z-10 bg-gradient-to-br from-slate-100 to-slate-300 dark:from-slate-800 dark:to-slate-900 border-4 border-white dark:border-slate-700 transform hover:rotate-x-6 hover:rotate-y-6 transition-transform duration-[800ms] ease-[cubic-bezier(.25,.8,.25,1)] shadow-[0_10px_40px_rgba(0,0,0,0.3),inset_0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),inset_0_0_30px_rgba(255,255,255,0.2)]">
    <img
      src="/myPhoto.jpg"
      alt="Indranuj Dev"
      className="w-full h-full object-cover rounded-full scale-110 transition-transform duration-700 hover:scale-[1.15]"
    />

    {/* Inner border ring for extra depth */}
    <div className="absolute inset-2 rounded-full border-2 border-white/20 dark:border-slate-600 pointer-events-none" />
  </div>
</motion.div>




      </div>

      {/* Scroll Down Indicator */}
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
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
