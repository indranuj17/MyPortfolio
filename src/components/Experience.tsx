import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of enterprise-level web applications using modern technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led a team of 5 developers in building a scalable e-commerce platform',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple web applications from concept to deployment. Collaborated with design and product teams to deliver user-centric solutions.',
      achievements: [
        'Built 3 successful web applications serving 10k+ users',
        'Reduced bug reports by 50% through comprehensive testing',
        'Mentored 2 junior developers and conducted code reviews'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Design Studio Pro',
      location: 'New York, NY',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Specialized in creating responsive and interactive user interfaces. Collaborated closely with designers to bring creative visions to life.',
      achievements: [
        'Converted 15+ design mockups into pixel-perfect web interfaces',
        'Improved website loading speed by 35% through optimization',
        'Implemented modern CSS frameworks and animations'
      ],
      technologies: ['React', 'JavaScript', 'Sass', 'Webpack', 'Figma']
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'WebDev Agency',
      location: 'Austin, TX',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey building websites for small businesses and learning modern web development practices.',
      achievements: [
        'Developed 20+ responsive websites for various clients',
        'Learned modern JavaScript frameworks and best practices',
        'Contributed to open-source projects and community forums'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-600 to-secondary-600"></div>
              )}

              <div className="flex items-start space-x-8 mb-12">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {experience.title}
                      </h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {experience.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col md:items-end mt-2 md:mt-0 space-y-1">
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm font-medium">{experience.period}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300">
                        <MapPin size={16} className="mr-2" />
                        <span className="text-sm">{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          viewport={{ once: true }}
                          className="flex items-start text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;