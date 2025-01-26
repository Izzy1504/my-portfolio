import React from 'react';
import { motion } from 'framer-motion';

const OtherSkills = ({ other_skills }) => {
    return (
         <motion.section id="other-skills"
            className="other-skills"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
        >
            <h2>Other Skills</h2>
           <div className='other-skills-list'>
           {other_skills.map((skill, index) =>
               <motion.li key={index}
                   initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.4, delay: index * 0.1 }}
                 >
                {skill}
               </motion.li>
            )}
            </div>
        </motion.section>
    );
};

export default OtherSkills;