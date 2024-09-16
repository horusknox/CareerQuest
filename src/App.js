import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Resources from './pages/Resources';
import MentorDashboard from './pages/MentorDashboard';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/CareerQuest" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/mentordashboard" element={<MentorDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
