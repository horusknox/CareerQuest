import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Resources = () => {
  const videos = [
    'https://www.youtube.com/embed/ueEOngDY268?si=cuF_tW8FdtPgQDmN',
    'https://www.youtube.com/embed/zhpcgpqWc1Q?si=tDulvTbj-d1sPCRL',
    'https://www.youtube.com/embed/a2p732cyayQ?si=9krGdtOAmIPGSaLu',
    'https://www.youtube.com/embed/h-NjW4Wupzs?si=o4yKPd0xvVF4Xu4a',
    'https://www.youtube.com/embed/4e6KSaCxcHs?si=IN3qgdBvAHJCWCiu',
    'https://www.youtube.com/embed/HWh-i2B_3LU?si=Vvb5GSCPtVumnuM9',
    'https://www.youtube.com/embed/qi4sgAVPAyc?si=h10S8vPByabIiMWK',
    'https://www.youtube.com/embed/6wUGPF7mFPU?si=m8CXSTq_AM1_0KtV',
    'https://www.youtube.com/embed/X717VLJ7mBU?si=RIR4Zq9QEMQKXbz_',
  ];

  return (
    <Container className="text-light" fluid style={{ backgroundColor: '#181818' }}>
      <Row className="justify-content-center">
        {videos.map((url, index) => (
          <Col md={4} className="mb-4" key={index}>
            <div className="ratio ratio-16x9">
              <iframe
                src={url}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Resources;
