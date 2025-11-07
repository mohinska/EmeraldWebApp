import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import CVMaster from './pages/CVMaster';
import Coach from './pages/Coach';
import Interview from './pages/Interview';
import InterviewDetail from './pages/InterviewDetail';
import InterviewResults from './pages/InterviewResults';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/cv-master" element={<CVMaster />} />
                <Route path="/coach" element={<Coach />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/interview/:id" element={<InterviewDetail />} />
                <Route path="/interview/:id/results" element={<InterviewResults />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </Router>
    );
}
export default App;