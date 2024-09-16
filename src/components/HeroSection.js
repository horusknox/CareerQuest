import React from 'react';
import CareerQuestLogo from './CareerQuestLogo.jpg'; // Corrected typo in logo filename

function HeroSection() {
  return (
    <div className="py-5 pb-10 text-center bg-dark text-light" style={{ minHeight: '100vh' }}>
      <img 
        className="d-block mx-auto mb-4" 
        src={CareerQuestLogo} 
        alt="CareerQuest Logo" 
        width="350" 
        height="350" 
      />
      <h1 className="display-5 fw-bold">Empower Your Future🔥</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Explore and customize your career path with CareerQuest, a comprehensive platform designed to guide students through various career options. Featuring interactive quizzes, resources, and mentorship opportunities, CareerQuest helps students make informed decisions about their future, offering tools and advice from industry professionals to ensure they achieve their career goals.
        </p>
        <p className="lead mb-4">
          I am...
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href="/quiz" className="btn btn-primary btn-lg px-4 gap-3">Student</a>
          <a href="/mentordashboard" className="btn btn-outline-secondary btn-lg px-4">Mentor</a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
