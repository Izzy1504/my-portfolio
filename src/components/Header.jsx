import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import "../styles/style.css"
import profilePic from '../assets/khoii.jpg';

const Header = ({ personal_info }) => {
    return (
        <header className="header">
            <div className="profile-picture">
                <img 
                    src={profilePic} 
                    alt="Profile" 
                    className="profile-picture"
                />
            </div>
            <div className='header-content'>
                <h1>{personal_info.name}</h1>
                <p>{personal_info.major} | {personal_info.location}</p>
                <p>{personal_info.nationality} | {personal_info.languages}</p>
                <div className="social-links">
                    <a href={personal_info.Github} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="icon" /> GitHub
                    </a>
                    <a href={personal_info.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="icon" /> LinkedIn
                    </a>
                    <a href={`mailto:${personal_info.email}`}>
                        <FaEnvelope className="icon" /> Email
                    </a>
                    <a href={`tel:${personal_info.phone}`}>
                        <FaPhone className="icon" /> Phone
                    </a>
                </div>
                <nav className="nav">
                    <ul className="nav-list">
                        <li className='nav-item'>
                            <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="proficiencies" spy={true} smooth={true} offset={-70} duration={500}>Proficiencies</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>Education</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="other-skills" spy={true} smooth={true} offset={-70} duration={500}>Other Skills</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;