import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = ({ summary }) => {
    return (
         <motion.section id="about"
            className="about-me"
             initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
         >
             <h2>About Me</h2>
            <p>{summary}</p>
        </motion.section>
    );
};

export default AboutMe;