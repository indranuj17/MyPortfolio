import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Star, Eye, GitFork, Search, Filter, Heart, Share2 } from 'lucide-react';
import { projects, categories, Project } from '../data/projects';
import ProjectModal from './ProjectModal';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [likedProjects, setLikedProjects] = useState<number[]>([]);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Initialize view counts
  useEffect(() => {
    const initialCounts = projects.reduce((acc, project) => {
      acc[project.id] = Math.floor(Math.random() * 1000) + 100;
      return acc;
    }, {} as Record<number, number>);
    setViewCounts(initialCounts);
  }, []);

  const filteredProjects = projects
    .filter(project => 
      (activeCategory === 'All' || project.category === activeCategory) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
       project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          return b.featured ? 1 : -1;
        case 'recent':
          return b.id - a.id;
        case 'popular':
          return (viewCounts[b.id] || 0) - (viewCounts[a.id] || 0);
        default:
          return 0;
      }
    });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Increment view count
    setViewCounts(prev => ({
      ...prev,
      [project.id]: (prev[project.id] || 0) + 1
    }));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const toggleLike = (projectId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedProjects(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    );
  };

  const shareProject = (project: Project, e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: project.liveUrl,
      });
    } else {
      navigator.clipboard.writeText(project.liveUrl);
      // You could add a toast notification here
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            
            className="text-4xl md:text-5xl font-bold mb-6 text-primary-600 dark:text-primary-400"
            whileHover={{ scale: 1.05 }}
          > <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"></div>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto ">
            A collection of projects that showcase my skills and passion for creating 
            innovative solutions across various technologies.
          </p>
        </motion.div>

        {/* Search and Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-12 space-y-6"
        >
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              >
                <option value="featured">Featured First</option>
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory + searchTerm + sortBy}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 cursor-pointer"
                onClick={() => openModal(project)}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay with actions */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-2">
                      <motion.button
                        onClick={(e) => toggleLike(project.id, e)}
                        className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                          likedProjects.includes(project.id)
                            ? 'bg-red-500/80 text-white'
                            : 'bg-gray-800/80 text-gray-300 hover:text-red-400'
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Heart className={`w-4 h-4 ${likedProjects.includes(project.id) ? 'fill-current' : ''}`} />
                      </motion.button>
                      <motion.button
                        onClick={(e) => shareProject(project, e)}
                        className="p-2 rounded-full bg-gray-800/80 text-gray-300 hover:text-blue-400 backdrop-blur-sm transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <motion.div 
                        className="flex items-center gap-1 px-3 py-1 bg-yellow-500/20 backdrop-blur-sm rounded-full text-yellow-400 text-sm"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Star className="w-4 h-4 fill-current" />
                        Featured
                      </motion.div>
                    )}
                  </div>

                  {/* View count */}
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-300 text-xs">
                      <Eye className="w-3 h-3" />
                      {viewCounts[project.id] || 0}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600 text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                      onClick={(e) => e.stopPropagation()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </motion.a>
                    <motion.button
                      className="flex-1 px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Details
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found matching your criteria.</p>
          </motion.div>
        )}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;