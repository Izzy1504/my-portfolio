import React from 'react';
import { motion } from 'framer-motion';

const TechnicalProficiencies = ({ technical_proficiencies }) => {
    return (
          <motion.section id="proficiencies"
            className="technical-proficiencies"
           initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
        >
            <h2>Technical Proficiencies</h2>
            <div className="proficiency-list">
                {Object.entries(technical_proficiencies).map(([category, items], index) => (
                     <motion.div key={index} className="proficiency-item"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                         >
                        <div className='proficiency-category'>{category}</div>
                        <div className='proficiency-item-list'>
                          {items.join(", ")}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default TechnicalProficiencies;