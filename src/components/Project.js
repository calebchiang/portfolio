import React, { useState } from 'react';
import './Project.css'; // Link to your CSS file for styling
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const projectsData = [
    {
        id:1,
        date:"23-01-01",
        name: "RSS Reader",
        description: "Full Stack Web Application",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                The RSS Reader project is a full-stack web application
                designed to offer users a personalized news aggregation experience.
                By subscribing to various RSS feeds, users can access a curated list
                of articles and updates from their preferred news sources,
                all consolidated into one easy-to-navigate platform.
                <br />
                <br />
                <ul>
                <li>Frontend: Developed with React, the application features a responsive, user-friendly interface that updates dynamically to display the latest news articles fetched from subscribed RSS feeds. Utilizes Tailwind CSS for styling to create an intuitive and accessible user experience. </li>
               <li>Backend: Built on Node.js and Express, the backend architecture supports user authentication, subscription management, and RSS feed parsing. It interfaces with MongoDB to store user data, including profiles, subscriptions, and cached articles for offline viewing. </li>
               <li>Database: MongoDB is used to efficiently manage data, with schemas designed for users and subscriptions that ensure fast retrieval and scalability.</li>
                </ul>
                <br />
                <br />
                Features:
                <ul>
                    <li>User Authentication: Secure signup and login processes enable personalized user experiences and subscription management.</li>
                    <li>Subscription Management: Users can add, manage, and remove RSS feed subscriptions, tailoring the content to their interests.</li>
                    <li>Content Aggregation: The application fetches, parses, and displays articles from subscribed RSS feeds, providing users with a consolidated view of news and updates.</li>
                    <li>MVC Pattern: Embraced the Model-View-Controller (MVC) architecture to structure the backend,
                        enhancing maintainability and scalability. This separation of concerns allowed for modular
                        development, where models define data structures, controllers handle business logic, and
                        views (in conjunction with React) manage user interface updates.</li>
                    <li>CRUD Functionality: Developed comprehensive CRUD operations for managing user profiles and RSS feed subscriptions. Users can create accounts, subscribe to or unsubscribe from feeds, offering full control over their data and personalization of the content.</li>
                </ul>
                <br/>
                <br/>
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/rss_reader" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open: false,
        screenshots: [
            '/rssreader2.png',
            '/rssreader3.png',
        ]
    },
    {
        id:2,
        date:"23-01-01",
        name: "Side Guide",
        description: "Full Stack Web Application",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                This group project was developed as part of my project course at school focusing on the
                development of mobile-friendly, small-scale web applications. The course theme,
                'Living with Extreme Weather,' presented us with the unique challenge of designing
                applications aimed at mitigating issues associated with severe weather conditions.
                Our team's response to this challenge was the creation of an innovative application
                designed to enhance pedestrian safety. This application enables users to report potential
                hazards encountered on sidewalks, thereby informing and safeguarding other community members
                about to commence their journeys. This initiative not only addressed a real-world problem
                but also demonstrated our ability to transform conceptual ideas into practical solutions.
                <br />
                <br />
                Following the UX process, we conducted:
                <ul>
                    <li>Surveys and interviews</li>
                    <li>Created user stories and personas</li>
                    <li>Designed wireframes</li>
                    <li>Performed user tests that is based on the UX design process</li>
                    <li>Used the Agile methodology to manage the software process</li>
                    <li>Using Git from the command line for version control basics in a collaborative workflow</li>
                    <li>Applied web technologies such as JavaScript, CSS, and HTML</li>
                </ul>
                <br/>
                <br/>
                Check out the app <a href="https://side-guide-ed7e3.web.app/" target="_blank" rel="noopener noreferrer">here</a>!
                <br/>
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/1800_202310_BBY20" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                      <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open: false,
        screenshots: [
            '/images/sideguide1.png',
            '/images/sideguide2.png'

        ]
    },

    {
        id:3,
        date:"23-12-01",
        name: "Sudoku",
        description: "React, Game Development",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                This Sudoku web app, crafted using React, showcases a streamlined single-page application
                (SPA) design for a seamless user experience.  At its core, the app employs a backtracking algorithm based
                on depth-first search principles to dynamically generate puzzles of varying difficulties and solve them.
                <br />
                <br />
                Technical Features:
                <ul>
                    <li>React's State Management: The app efficiently updates the game board in real-time and validates solutions instantaneously </li>
                    <li>Styled With CSS: For a responsive layout, it ensures compatibility across devices </li>
                    <li>Deployed on Netlify: this project exemplifies modern web development practices and CI/CD deployment strategies</li>
                </ul>
                <br/>
                <br/>
                Try out the game <a href="https://calebchiangsudoku.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>!
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/sudoku" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open: false,
        screenshots: [


        ]
    },
    {
        id:4,
        date:"24-01-01",
        name: "Pokemon Matching Game",
        description: "React, Game Development",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                Simple Pokemon matching game developed in JavaScript using React.
                <br/>
                <br/>
                Try out the game <a href="https://matchthepokemon.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>!
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/pokemon" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open: false,
        screenshots: [


        ]
    },
];

function Project() {

    const [projects, setProjects] = useState(projectsData);


    const toggleDetails = (id) => {
        const updatedProjects = projects.map(project => {
            if (project.id === id) {
                return { ...project, open: !project.open };
            }
            return project;
        });
        setProjects(updatedProjects);
    };

    return (
        <div className="projects-list-container">
            <ul className="projects-list">
                <h4 style={{ fontWeight: 'bold' }}>Projects</h4>
                <p> Click on a project to learn more. All code is uploaded on GitHub.</p>
                {projects.map(project => (
                    <li key={project.id} className="project-list-item">
                        <span className="project-date">{project.date}</span>
                        <button className="project-title" onClick={() => toggleDetails(project.id)}>
                            {project.name}
                        </button>
                        <div className={`project-details ${project.open ? 'open' : ''}`}>
                            {project.open && (
                                <>
                                    <p><em>{project.description}</em></p>
                                    <p>{project.summary()}</p>
                                    {project.screenshots.map((screenshot, index) => (
                                        <img
                                            key={index}
                                            src={screenshot}
                                            alt={`Screenshot ${index + 1} of ${project.name}`}
                                            className="project-screenshot"
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Project;