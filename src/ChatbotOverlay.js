import React, { useState } from 'react';

const ChatbotOverlay = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleToggleChat = () => setShowChat(!showChat);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { type: 'user', text: message }]);
      setMessage('');
      
      // Dummy response
      setMessages([...messages, { type: 'user', text: message }, { type: 'bot', text: 'With an MPC background, you can pursue careers as a Data Scientist, Software Engineer, Machine Learning Engineer, Quantitative Analyst, or Research Scientist.' }]);
    }
  };
 
  return (
    <>
      <button
        onClick={handleToggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          padding: '40px', // 2 times the previous size
          zIndex: 1000,
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '64px', // 2 times the previous size
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        🤖
      </button>

      {showChat && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '800px', // 2 times the previous width
            maxHeight: '1000px', // 2 times the previous height
            border: '1px solid #444',
            borderRadius: '8px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)', // Increased shadow for better visibility
            backgroundColor: '#222',
            color: '#fff',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              flex: 1,
              padding: '30px', // 2 times the previous padding
              overflowY: 'auto',
              borderBottom: '1px solid #444',
              height: 'calc(100% - 120px)', // Adjusted height to fit the input area
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: '30px' }}> {/* 2 times the previous margin */}
                <strong>{msg.type === 'bot' ? 'Chatbot' : 'You'}:</strong>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              padding: '30px', // 2 times the previous padding
              borderTop: '1px solid #444',
              backgroundColor: '#333', // Darker background for the input area
            }}
          >
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: '30px', // 2 times the previous padding
                border: '1px solid #555',
                borderRadius: '4px',
                backgroundColor: '#333',
                color: '#fff',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                marginLeft: '30px', // 2 times the previous margin
                padding: '30px', // 2 times the previous padding
                backgroundColor: '#444',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotOverlay;
