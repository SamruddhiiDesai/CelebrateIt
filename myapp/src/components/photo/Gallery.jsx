import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import bride1 from '../public/bride1.jpg'

import "../assessts/Gallery.css"

function Gallery() {
  return (

    <>
    <div className='gallerydiv'>
        <Container>
      <Row 
      
      style={{
        height:"600px"
      }}
      >
        <Col>
        <img 
        src="/photography/couple3.jpg"
        alt='image not found'
        height="80%"
        width="100%"
        />
        </Col>
        <Col><img 
        src="/photography/bride1.jpg"
        alt='image not found'
        height="80%"
        width="100%"
        />
        </Col>
      </Row>
      <Row>
        <Col><img 
        src="/photography/baby_shower2.jpg"
        alt='image not found'
        height="*80%"
        width="100%"
        />
        </Col>
        <Col><img 
        src="/photography/couple11.jpg"
        alt='image not found'
        height="80%"
        width="100%"
        />
        </Col>
        <Col>
        <img 
        src="/photography/baby_shower.jpg"
        alt='image not found'
        height="80%"
        width="100%"
        />
        </Col>

      </Row>
    </Container>
    </div>

</>
  );
}



export default Gallery;