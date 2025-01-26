import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ education }) => {
    return (
         <motion.section id="education"
            className="education"
           initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
        >
            <h2>Education</h2>
            <div className='education-item'>
                  <h3>{education.degree}</h3>
                    <p>
                      {education.school} - {education.duration}
                    </p>
            </div>
        </motion.section>
    );
};

export default Education;