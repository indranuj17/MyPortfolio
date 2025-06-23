import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-600/20 dark:bg-primary-400/20 z-50"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400"
        style={{ width: `${scrollProgress}%` }}
        transition={{ ease: "easeOut" }}
      />
    </motion.div>
  );
};

export default ScrollProgress;