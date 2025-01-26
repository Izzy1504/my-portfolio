import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ technical_skills }) => {
    return (
        <motion.section id="skills"
            className="skills"
             initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
        >
            <h2>Technical Skills</h2>
            <div className="skill-list">
                {Object.entries(technical_skills).map(([skill, level], index) => (
                    <motion.div key={index} className="skill-item"
                         initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                        <div className='skill-name'>{skill}</div>
                        <div className="skill-bar">
                            <div className="skill-level" style={{ width: `${level * 10}%` }} />
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Skills;