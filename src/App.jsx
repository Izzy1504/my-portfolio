import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import TechnicalProficiencies from './components/TechnicalProficiencies';
import Education from './components/Education';
import OtherSkills from './components/OtherSkills';
import './styles/style.css';

const App = () => {
   const personal_info = {
        "name": "Doan Minh Khoi",
        "nationality": "Vietnamese",
         "location":"Ho Chi Minh City",
         "major":"Information Technology",
        "languages":"Vietnamese (Native), English (Proficient)",
        "email": "khoiminhdoan1504@gmail.com",
        "Github": "https://github.com/Izzy1504",
        "phone": "0564695640",
        "linkedin": "https://www.linkedin.com/in/kh%C3%B4i-minh-%C4%91o%C3%A0n-undefined-2a03a52a4/"
    }

    const summary = "A highly motivated and detail-oriented IT student with a strong foundation in database technologies, big data processing, and software development. I am eager to apply my skills in data engineering to contribute to challenging projects.";

    const projects = [
      {
            "title": "Music Website",
            "role": "Full-Stack Developer",
            "year": "2024",
            "description": "Developed a web application for streaming music. Implemented features like search, playlist management, user authentication, and integrate with youtube's api.",
            "link": "https://github.com/Izzy1504/NOTIFY_WEB"
        },
        {
            "title": "Sales Website",
            "role": "Full-Stack Developer",
            "year": "2022",
            "description": "Implemented the front-end user interface using HTML, CSS, Bootstrap, JavaScript. Built back-end functionality with PHP. Managed database using XAMPP and SQL.",
            "link": null
        },
        {
            "title": "Campsite Management System",
            "role": "Full-Stack Developer",
             "year": "2023",
            "description": "Designed the database using ERD and EERD, developed a web application using HTML, CSS, NodeJS, JavaScript (front end) and PHP (back end). Managed the database with SQL Server.",
            "link": "https://github.com/Izzy1504/QUANRANTINE_CAPSITE_19"
        },
        {
            "title": "Cake-shop",
            "role": "Front-End Developer",
            "year":"2024",
            "description": "An e-commerce shop for cakes and desserts. Using ReactJS, NodeJS;. My team and me developed the functions, fixed Ul, create more pages, moreover we test this system with automationtestUl, and whitebox documents.",
            "link": "https://github.com/Izzy1504/CAKE_SHOP"
        },

    ]

    const technical_skills = {
        "SQL": 9,
        "Python": 8,
        "Hadoop": 7,
        "Spark": 6,
        "ReactJS": 7,
        "NodeJS": 6,
        "PHP": 5
    }

    const technical_proficiencies = {
        "Programming Languages": ["Python", "JavaScript", "PHP"],
        "Databases": ["MySQL", "SQL Server (CRUD and procedures or Triggers)"],
        "Big Data Tools": ["Hadoop (HDFS, MapReduce, YARN)", "Spark (Spark Core, Spark SQL)"],
        "Cloud (Optional)": ["Basic Knowledge about AWS, Azure"],
        "Tools": ["Git"],
        "Operating System": ["Linux"]
    }

    const education = {
        "degree": "Bachelor of Information Technology",
        "school": "SAI GON UNIVERSITY",
        "duration": "2021-2026"
    }

    const other_skills = [
        "Problem-solving skills",
        "Good attention to detail",
        "Adaptability and eagerness to learn new things",
        "English lelts band score 6.5"
    ]


    return (
        <div className="app">
            <Header personal_info={personal_info}/>
             <AboutMe summary={summary} />
            <Projects projects={projects} />
            <Skills technical_skills={technical_skills} />
             <TechnicalProficiencies technical_proficiencies={technical_proficiencies}/>
             <Education education={education} />
            <OtherSkills other_skills={other_skills} />
        </div>
    );
};

export default App;