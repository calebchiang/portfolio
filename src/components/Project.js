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
                For more details, please visit our project documentation <a href="https://side-guide-ed7e3.web.app/" target="_blank" rel="noopener noreferrer">here</a>
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
        date:"23-09-01",
        name:"Pomo",
        description:"Productivity Tool, Chrome Extension",
        summary: () => (
            <>
                <strong>Summary:</strong>
                <br />
                <br />
                The Pomodoro Technique is a renowned time management method that has
                helped countless individuals boost their productivity. As a firm believer
                in its effectiveness, I developed the "Pomo" Chrome extension to enhance my
                study sessions and subsequently decided to share it with the world.
                <br/>
                <br/>
                The Pomodoro Technique, created by Francesco Cirillo,
                is simple yet powerful: work for 25 minutes with intense focus
                (a "Pomodoro"), followed by a 5-minute break. This cycle repeats,
                promoting optimal concentration and preventing burnout during extended
                study or work periods.
                <br/>
                <br/>
                Features:
                <ul>
                    <li>User-Friendly UI: Pomo boasts an intuitive and aesthetically pleasing user interface that makes it easy for users to get started with the Pomodoro Technique. The clean design ensures minimal distractions.</li>
                    <li>Timer Functionality: The core feature of Pomo is the timer. With the click of a button, you can start a 25-minute work session. During this time, Pomo will count down, displaying the remaining minutes and notifying you when your Pomodoro is complete.</li>
                    <li>Cooldown State: After each Pomodoro, Pomo automatically enters a 5-minute cooldown state, allowing you to relax and recharge before the next session. This cycle continues until you decide to stop.</li>
                    <li>React for Web Development: Pomo is built using React, a popular JavaScript library for building user interfaces. This choice of technology ensures a responsive and dynamic experience for users.</li>
                    <li>HTML and CSS: The foundation of Pomo's interface is built upon HTML and CSS, making it highly customizable for those who wish to personalize their experience.</li>
                    <li>JavaScript for Functionality: JavaScript is used to manage the timer, handle user interactions, and ensure the Pomodoro Technique is faithfully executed.</li>
                    <li>Version Control: Uses Git for version control.</li>

                </ul>
                <br/>
                <br/>
                <div className="github-icon2">
                    <a href="https://github.com/calebchiang/pomodoro_chrome_extension" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>
                        <FontAwesomeIcon icon={faGithub} style={{ color: 'black' }} />
                    </a>
                </div>



            </>
        ),
        open:false,
        screenshots:[
            '/images/pomo.png',

]



    },

    {
        id:3,
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