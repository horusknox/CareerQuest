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
      setMessages([
        ...messages,
        { type: 'user', text: message },
        { type: 'bot', text: 'With an MPC background, you can pursue careers as a Data Scientist, Software Engineer, Machine Learning Engineer, Quantitative Analyst, or Research Scientist.' }
      ]);
    }
  };

  const handleCloseChat = () => setShowChat(false);

  return (
    <>
      <button
        onClick={handleToggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          padding: '20px',
          zIndex: 1000,
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          fontSize: '32px',
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
            width: '80vw',
            maxHeight: '70vh',
            border: '1px solid #444',
            borderRadius: '8px',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            backgroundColor: '#222',
            color: '#fff',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div style={{ position: 'relative' }}>
            {/* Close button */}
            <button
              onClick={handleCloseChat}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                color: '#fff',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              ✖
            </button>
          </div>
          <div
            style={{
              flex: 1,
              padding: '15px',
              overflowY: 'auto',
              borderBottom: '1px solid #444',
              height: 'calc(100% - 80px)',
            }}
          >
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: '15px' }}>
                <strong>{msg.type === 'bot' ? 'Chatbot' : 'You'}:</strong>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              padding: '15px',
              borderTop: '1px solid #444',
              backgroundColor: '#333',
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
                padding: '15px',
                border: '1px solid #555',
                borderRadius: '4px',
                backgroundColor: '#333',
                color: '#fff',
              }}
            />
            <button
              onClick={handleSendMessage}
              style={{
                marginLeft: '10px',
                padding: '15px',
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

      <style jsx>{`
        /* Mobile responsiveness */
        @media (max-width: 600px) {
          button {
            padding: 10px;
            font-size: 24px;
            bottom: 10px;
            right: 10px;
          }

          div[style*="width: 80vw"] {
            width: 95vw;
            bottom: 50px;
            right: 10px;
          }

          div[style*="maxHeight: 70vh"] {
            max-height: 60vh;
          }

          input {
            padding: 10px;
          }

          button[style*="padding: 15px"] {
            padding: 10px;
            margin-left: 5px;
          }

          div[style*="padding: 15px"] {
            padding: 10px;
          }
        }

        /* Tablets responsiveness */
        @media (min-width: 601px) and (max-width: 1024px) {
          button {
            padding: 15px;
            font-size: 28px;
            bottom: 20px;
            right: 20px;
          }

          div[style*="width: 80vw"] {
            width: 85vw;
          }

          div[style*="maxHeight: 70vh"] {
            max-height: 65vh;
          }

          input {
            padding: 12px;
          }

          button[style*="padding: 15px"] {
            padding: 12px;
            margin-left: 8px;
          }

          div[style*="padding: 15px"] {
            padding: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default ChatbotOverlay;
