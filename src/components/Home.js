import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


function Home() {
    let navigate = useNavigate();

    return (

        <div className="home-container">
            <div className="github-icon roboto-condensed">
                <a href="https://github.com/calebchiang" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                    <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} /> GitHub
                </a>
            </div>

            <div className="left-content">
                <h1 className="main-title">Caleb Chiang.</h1>
                <p className="description roboto-condensed">Full Stack Software Developer 👋🏼</p>
            </div>
            <div className="right-content">
                <img src="/images/pfp.jpg" alt="Caleb Chiang" className="profile-pic" />
                <div className="button-container roboto-condensed">
                    <button onClick={() => navigate('/projects')} className="btn btn-primary roboto-condensed">Projects</button>
                    <button onClick={() => window.open('/resume.pdf')} className="btn btn-secondary roboto-condensed">Resume</button>
                </div>
            </div>

            {/* Spacer to push the About Me section down */}
            <div className="spacer"></div>

            <div className="about-me-section">
                <div className="about-me-content roboto-condensed">
                    <h2>About Me</h2>
                    <p className="personal-info roboto-light">Hello! </p>
                     <p className="personal-info roboto-light">My name is Caleb, and I am a  full time Computer Systems Technology
                         student at the British Columbia Institute of Technology.</p>
                    <p className ="personal-info roboto-light"> In my journey thus far, I have participated in multiple hackathons that allowed me to apply my skills in
                        real-world scenarios. Additionally, I've contributed to multiple group projects,
                        including the development of a full-stack web application designed as a pedestrian hazard alert system.
                        Beyond group endeavors, I have undertaken personal projects encompassing full-stack web
                        applications and game development. </p>
                    <p className="personal-info roboto-light">Currently, one of my goals is to
                        gain professional experience in software development and focus on accumulating
                        practical experience and enhancing my learning. I prioritize hands-on experience
                        and continual skill development, embodying a growth mindset that drives me to seek
                        out new challenges and learning opportunities. </p>
                    <p className="personal-info roboto-light"> In my free time, I enjoy playing basketball with my friends and spending
                        time with my family. Growing up in a beautiful city like Vancouver, I have fully taken advantage of the views by going
                    on hikes and enjoying outdoor activities like snowboarding and swimming.</p>
                    <p className="personal-info roboto-light">Feel free to check out my projects <Link to="/projects">here</Link>.</p>

                </div>

                <div className="photos-and-technologies">
                {/* Personal photos container */}
                <div className="personal-photos-container">
                    {/* Personal photos */}
                    <img src="/images/beach.JPG" alt="Personal" className="personal-photo1" />
                    <img src="/images/basketball.JPG" alt="Personal" className="personal-photo2" />
                    <img src="/images/hike.jpg" alt="Personal" className="personal-photo3" />
                    <img src="/images/family.JPG" alt="Personal" className="personal-photo4" />
                    <img src="/images/volleyball.JPG" alt="Personal" className="personal-photo5" />
                    <img src="/images/bcit.jpg" alt="Personal" className="personal-photo6" />
                </div>

                {/* Technologies container added right after the personal photos container */}
                <div className="technologies-container roboto-condensed">
                    <h3>Technologies I Have Been Experimenting With:</h3>
                    <ul className="technology-list">
                        <li>React</li>
                        <li>Node.js with Express</li>
                        <li>MongoDB</li>
                        <li>Unity</li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
}
export default Home;
