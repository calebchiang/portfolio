import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Project from './components/Project.js';
import Resume from './components/Resume.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
    return (
        <Router>
            <div>
                {/* Your navigation bar and other components that should
            be visible on all pages can go here */}
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App;
