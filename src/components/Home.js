import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
function Home(){
    let navigate = useNavigate();

    return (
        <div className = "home-container">

            <div className = "left-content">
            <h1 className = "main-title">Software Developer. </h1>
            <p className = "description">Solving complex problems with innovate and user-focused technology solutions </p>
            </div>
            <div className = "right-content">
                <img src = "/images/pfp.jpg" alt = "Caleb Chiang" className="profile-pic" />
                <div className = "button-container">
                <button onClick={() => navigate('/projects')} className="btn btn-primary">Projects</button>
                    <button onClick={() => window.open('/resume.pdf')} className="btn btn-secondary">Resume</button>

                </div>
            </div>
            <div className="footer-content">
                <p className="personal-info">Caleb Chiang | Computer Systems Technology at the British Columbia Institute of Technology</p>
            </div>
        </div>
    );
}

export default Home;