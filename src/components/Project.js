import React, { useState } from 'react';
import './Project.css'; // Link to your CSS file for styling
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Your projects data
const projectsData = [
    {
        id:1,
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
        id:2,
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
        id:3,
        date:"24-01-01",
        name: "Quick Define",
        description: "Chrome Extension, Study Tool",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                Quick Define is a Chrome extension designed to streamline your reading and
                web browsing experience by offering instant word definitions with a simple highlight.
                Ideal for students who use their laptops for readings, this lightweight tool fetches
                definitions from reputable sources and displays them in a convenient tooltip right on
                your current webpage. With Quick Define, you no longer need to navigate away from your
                page or disrupt your flow of reading to understand new vocabulary. It embodies the perfect
                blend of simplicity, efficiency, and utility, making it an essential tool for enhancing
                your web browsing and learning experience.
                <br />
                <br />
                Technical Features:
                <ul>
                    <li>Content Scripts: Core functionality resides in the content script that interact directly with the content of web pages.</li>
                    <li>Background Script: A background script handles API calls to fetch definition.</li>
                    <li>External Dictionary: The extension leverages an external dictionary API (e.g., DictionaryAPI.dev) to fetch definitions, ensuring that users receive accurate and comprehensive explanations for selected words. </li>
                </ul>
                <br/>
                <br/>

                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/quick_define" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open: false,
        screenshots: [
            '/images/quick_define.png',
            '/images/quick_define2.png'

        ]
    },

    {
        id:4,
        date:"23-09-01",
        name:"JavaScript Chess",
        description:"Game Development, JavaScript, React",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                This project is a dynamic chess game built with React, leveraging its powerful
                state management capabilities to create an engaging and responsive user interface.
                By combining React with traditional web technologies like JavaScript, HTML, and CSS,
                the game offers a modern web application experience, allowing two players to engage
                in chess matches directly from their browsers.
                <br/>
                <br/>
                Features:
                <ul>
                    <li>React Powered Interface: Utilizes React's component-based architecture for efficient updates and renderings.</li>
                    <li>Rule Enforcement: Enforces all standard chess rules, including pawn promotion and check/checkmate logic.</li>
                    <li>Move Validation: Automatically checks and highlights legal moves for pieces to assist players and prevent illegal actions.</li>
                    <li>Object-Oriented Design: Implements OOP principles to manage chess pieces, encapsulating each piece's properties and behaviors within classes. This approach simplifies code maintenance, scalability, and reusability.</li>
                    <li>Version Control: Uses Git for version control.</li>
                </ul>
                <br/>
                <br/>
                Check it out <a href="https://calebchess.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/chess" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>



            </>
        ),
        open:false,
        screenshots:[


]



    },

    {
        id:5,
        date:"23-10-01",
        name: "Stock Market Analysis",
        description: "Full Stack Web Application, ",
        summary: () => (
            <>
            <strong>Summary:</strong>
            <br />
            <br />
                This stock analysis web application is an innovative solution
                designed for investors and financial enthusiasts seeking a comprehensive
                tool to enhance their market analysis and investment strategies. Developed
                with a modern tech stack, the application combines the reactive capabilities
                of React.js for the frontend with the robustness of Node.js and Express.js in the
                backend, seamlessly integrated with a MongoDB database for secure data storage.
            <br/>
            <br/>
                The platform stands out for its real-time stock data fetching,
                facilitated through integration with the Alpha Vantage API, offering
                users access to a wealth of stock information at their fingertips. A
                standout feature is the application's advanced sorting mechanism, powered
                by the quicksort algorithm, allowing users to organize stocks based on various
                filters such as market capitalization and yield. This feature is invaluable for
                users aiming to tailor their investment portfolios according to specific metrics
                and performance indicators.
                <br/>
            <br/>
            Features:
            <ul>
                <li>Technology: Node.js with Express.js framework for backend and React.js for front end.</li>
                <li>Routing: React Router for navigating between different components and pages.</li>
                <li>Database: MongoDB, utilized for storing user data and watchlists.</li>
                <li>Password Handling: Uses bcrypt for hashing user passwords securely.</li>
                <li>User Authentication: Handles user registration and login and stores in MongoDB database</li>
                <li>API Integration: Communicates with the Alpha Vantage API to fetch stock data.</li>
                <li>CORS Configuration: Set up to allow requests from the frontend, especially during development with different origins for frontend and backend.</li>
                <li>Version Control: Uses Git for version control.</li>
            </ul>
            <br/>
            <br/>

                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/stock_market_analysis" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open:false,
        screenshots:[


        ]
    },
    {
        id:6,
        date:"23-12-25",
        name: "Etch-a-Sketch",
        description: "JavaScript",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                Fun drawing tool developed using basic JavaScript. Just enter grid size and start drawing!
                <br/>
                <br/>
                Try it out <a href="https://sketchaetch.netlify.app/" target="_blank" rel="noopener noreferrer">here</a>
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/etch_a_sketch" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>

            </>
        ),
        open:false,
        screenshots:[


        ]
    },
];

function Project() {
    // This state will manage which project details are shown
    const [projects, setProjects] = useState(projectsData);

    // Function to toggle the open state of a project
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
                <p>projects</p>
                {projects.map(project => (
                    <li key={project.id} className="project-list-item">
                        <span className="project-date">{project.date}</span>
                        <button className="project-title" onClick={() => toggleDetails(project.id)}>
                            {project.name}
                        </button>
                        <div className={`project-details ${project.open ? 'open' : ''}`}>
                            {/* This div will now have an 'open' class when project.open is true */}
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
                                    {/* Add more details or links as needed */}
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