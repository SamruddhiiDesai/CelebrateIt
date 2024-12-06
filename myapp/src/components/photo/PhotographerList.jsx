import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

import '../assessts/liststyle.css';

export function PhotographerList(){
    return(
        <>

        <div>

        <Container>
      <Row>
        {/* col 1 */}
        <Col className='cheap'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/photography/photographer.jpg" />
      <Card.Body>
        <Card.Title>Mira's Studio</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Mira Suchdeva</ListGroup.Item>
        <ListGroup.Item>6 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1200 per day</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* col 2 */}
        <Col className='cheap'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/photography/event_photography_tips.jpg" />
      <Card.Body>
        <Card.Title>Naresh Photo Studio</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Naresh Photo Studio</ListGroup.Item>
        <ListGroup.Item>7 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2000 per day</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* col 3 */}
        <Col className='expensive'> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/photography/Event-Photography.jpg" />
      <Card.Body>
        <Card.Title>MohanLal's</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Mohanlal Tripude</ListGroup.Item>
        <ListGroup.Item>15(yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2500 per day</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
        </Card>
        </Col>
      </Row>


      <Row>

        {/* row 2 col 1 */}
        <Col className='cheap'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/photography/photographer_1.jpg" />
      <Card.Body>
        <Card.Title>Nair Studio</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Kiran Nair</ListGroup.Item>
        <ListGroup.Item>4 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1100 per day</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
        </Card>  
        </Col>
        
        {/* row 2 col 2 */}
        <Col className='expensive'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/photography/photographer_2.jpg" />
      <Card.Body>
        <Card.Title>Flash Photography</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Lalit Govind</ListGroup.Item>
        <ListGroup.Item>6 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2500 per day</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* row 2 col 3 */}
        <Col className='cheap'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/photography/photographer_3.jpg" />
      <Card.Body>
        <Card.Title>Smita's</Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Smita </ListGroup.Item>
        <ListGroup.Item>6 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1200 per day</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        
        </Col>
      </Row>
    </Container>
    

    </div>
        </>

    )
}

 