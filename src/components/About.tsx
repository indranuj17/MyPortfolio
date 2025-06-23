import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with modern best practices'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Crafting beautiful interfaces with attention to detail'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and user experience'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Building solutions that users love to interact with'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Enhanced Dark Theme Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-dark-950 dark:via-dark-900 dark:to-dark-850" />
      <div className="absolute inset-0 dark:bg-dark-mesh dark:animate-gradient-shift opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 relative">
            About <span className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-300 dark:to-secondary-300 bg-clip-text text-transparent">Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 dark:from-primary-400/20 dark:to-secondary-400/20 blur-2xl rounded-lg animate-pulse" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer with a Design Eye
            </h3>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Passionate and driven full-stack developer with strong skills in C++, JavaScript, React, and Node.js. Experienced in building scalable web apps and deploying machine learning models. Solid foundation in data structures and algorithms. Actively exploring deep learning and Gen AI. Eager to solve real-world problems through impactful tech solutions.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I believe in the power of collaboration and continuous learning. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open-source projects.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {['React', 'MERN','Python', 'Machine Learning', 'AI'].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200/50 dark:border-primary-700/50 hover:bg-primary-200 dark:hover:bg-primary-800/40 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-400/10 dark:to-secondary-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-400 dark:to-secondary-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Enhanced Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-200 dark:border-gray-700/50"
        >
          {[
            // { number: '7+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Experience' },
            { number: '100%', label: 'Learning Rate' },
            {number:'7+',label:'Peojects Completed'},
            {number:'12+',label:'Skills Gained'},
          ].map((stat, index) => (
            <div key={stat.label} className="text-center group">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index, type: 'spring' }}
                viewport={{ once: true }}
                className="relative text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400 mb-2"
              >
                <span className="relative z-10">{stat.number}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-400/30 dark:to-secondary-400/30 blur-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;