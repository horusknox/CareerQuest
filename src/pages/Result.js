import React from 'react';
import { Container } from 'react-bootstrap';
import { ForceGraph2D } from 'react-force-graph';
import { useLocation } from 'react-router-dom';

const getCareerPath = (choice) => {
  switch (choice) {
    case 'Computer':
      return {
        nodes: [
          { id: '10th Grade', color: '#FF6347', label: '10th Grade' },
          { id: '12th Grade', color: '#4682B4', label: '12th Grade' },
          { id: 'Bachelor\'s Degree in Computer Science', color: '#32CD32', label: 'Bachelor\'s in CS' },
          { id: 'Master\'s Degree in Computer Science', color: '#FFD700', label: 'Master\'s in CS' },
          { id: 'Software Engineer', color: '#FF4500', label: 'Software Engineer' },
          { id: 'Senior Software Engineer', color: '#8A2BE2', label: 'Senior Software Engineer' },
          { id: 'Lead Engineer', color: '#00BFFF', label: 'Lead Engineer' }
        ],
        links: [
          { source: '10th Grade', target: '12th Grade' },
          { source: '12th Grade', target: 'Bachelor\'s Degree in Computer Science' },
          { source: 'Bachelor\'s Degree in Computer Science', target: 'Master\'s Degree in Computer Science' },
          { source: 'Master\'s Degree in Computer Science', target: 'Software Engineer' },
          { source: 'Software Engineer', target: 'Senior Software Engineer' },
          { source: 'Senior Software Engineer', target: 'Lead Engineer' }
        ]
      };
    case 'Negotiating':
      return {
        nodes: [
          { id: '10th Grade', color: '#FF6347', label: '10th Grade' },
          { id: '12th Grade', color: '#4682B4', label: '12th Grade' },
          { id: 'Bachelor\'s Degree in Business', color: '#32CD32', label: 'Bachelor\'s in Business' },
          { id: 'Master\'s Degree in Negotiation', color: '#FFD700', label: 'Master\'s in Negotiation' },
          { id: 'Negotiation Specialist', color: '#FF4500', label: 'Negotiation Specialist' },
          { id: 'Senior Negotiator', color: '#8A2BE2', label: 'Senior Negotiator' },
          { id: 'Negotiation Consultant', color: '#00BFFF', label: 'Negotiation Consultant' }
        ],
        links: [
          { source: '10th Grade', target: '12th Grade' },
          { source: '12th Grade', target: 'Bachelor\'s Degree in Business' },
          { source: 'Bachelor\'s Degree in Business', target: 'Master\'s Degree in Negotiation' },
          { source: 'Master\'s Degree in Negotiation', target: 'Negotiation Specialist' },
          { source: 'Negotiation Specialist', target: 'Senior Negotiator' },
          { source: 'Senior Negotiator', target: 'Negotiation Consultant' }
        ]
      };
    case 'Physics':
      return {
        nodes: [
          { id: '10th Grade', color: '#FF6347', label: '10th Grade' },
          { id: '12th Grade', color: '#4682B4', label: '12th Grade' },
          { id: 'Bachelor\'s Degree in Physics', color: '#32CD32', label: 'Bachelor\'s in Physics' },
          { id: 'Master\'s Degree in Physics', color: '#FFD700', label: 'Master\'s in Physics' },
          { id: 'Research Scientist', color: '#FF4500', label: 'Research Scientist' },
          { id: 'Senior Research Scientist', color: '#8A2BE2', label: 'Senior Research Scientist' },
          { id: 'Physics Professor', color: '#00BFFF', label: 'Physics Professor' }
        ],
        links: [
          { source: '10th Grade', target: '12th Grade' },
          { source: '12th Grade', target: 'Bachelor\'s Degree in Physics' },
          { source: 'Bachelor\'s Degree in Physics', target: 'Master\'s Degree in Physics' },
          { source: 'Master\'s Degree in Physics', target: 'Research Scientist' },
          { source: 'Research Scientist', target: 'Senior Research Scientist' },
          { source: 'Senior Research Scientist', target: 'Physics Professor' }
        ]
      };
    case 'Helping People':
      return {
        nodes: [
          { id: '10th Grade', color: '#FF6347', label: '10th Grade' },
          { id: '12th Grade', color: '#4682B4', label: '12th Grade' },
          { id: 'Bachelor\'s Degree in Social Work', color: '#32CD32', label: 'Bachelor\'s in Social Work' },
          { id: 'Master\'s Degree in Social Work', color: '#FFD700', label: 'Master\'s in Social Work' },
          { id: 'Social Worker', color: '#FF4500', label: 'Social Worker' },
          { id: 'Senior Social Worker', color: '#8A2BE2', label: 'Senior Social Worker' },
          { id: 'Social Work Director', color: '#00BFFF', label: 'Social Work Director' }
        ],
        links: [
          { source: '10th Grade', target: '12th Grade' },
          { source: '12th Grade', target: 'Bachelor\'s Degree in Social Work' },
          { source: 'Bachelor\'s Degree in Social Work', target: 'Master\'s Degree in Social Work' },
          { source: 'Master\'s Degree in Social Work', target: 'Social Worker' },
          { source: 'Social Worker', target: 'Senior Social Worker' },
          { source: 'Senior Social Worker', target: 'Social Work Director' }
        ]
      };
    default:
      return { nodes: [], links: [] };
  }
};

const Results = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const choice = queryParams.get('choice');

  const careerPathData = getCareerPath(choice);

  // Determine the suitable career path title
  let careerTitle = 'Career';
  switch (choice) {
    case 'Computer':
      careerTitle = 'Computer Science Engineer';
      break;
    case 'Negotiating':
      careerTitle = 'Negotiation Consultant';
      break;
    case 'Physics':
      careerTitle = 'Physics Professor';
      break;
    case 'Helping People':
      careerTitle = 'Social Work Director';
      break;
    default:
      careerTitle = 'Career Path';
      break;
  }

  return (
    <Container fluid className="d-flex flex-column align-items-center min-vh-100" style={{ backgroundColor: '#121212', color: 'white' }}>
      <h1 style={{ marginTop: '20px', marginBottom: '20px', color: 'white' }}>
        You're suitable for being a {careerTitle}
      </h1>
      <div style={{ width: '100%', height: '80vh' }}>
        <ForceGraph2D
          graphData={careerPathData}
          nodeAutoColorBy="color"
          nodeRelSize={40}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.id;
            const fontSize = 24 / globalScale;
            ctx.beginPath();
            ctx.arc(node.x, node.y, 70 / globalScale, 0, 2 * Math.PI, false); // Increased node size
            ctx.fillStyle = node.color;
            ctx.fill();
            ctx.strokeStyle = 'white';
            ctx.stroke();
            ctx.fillStyle = 'white';
            ctx.font = `${fontSize}px Arial`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(label, node.x, node.y);
          }}
          linkColor={() => '#888'}
          linkWidth={() => 2}
        />
      </div>
    </Container>
  );
};

export default Results;
