import React from 'react';
import { motion } from 'framer-motion';
import "../styles/style.css"

const Projects = ({ projects }) => {
    return (
        <motion.section id="projects"
            className="projects"
           initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
        >
            <h2>Projects</h2>
            <div className="project-list">
                {projects.map((project, index) => (
                    <motion.div key={index} className="project-item"
                       initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1}}
                       >
                        <h3>
                            {project.link ? (
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    {project.title}
                                </a>
                            ) : (
                                project.title
                            )}
                        </h3>
                        <p className="project-role">
                        {project.role} - {project.year}
                        </p>
                        <p className='project-description'>{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;