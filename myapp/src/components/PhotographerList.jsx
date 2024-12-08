import React, { useState } from 'react';
import {Button,ListGroup,Card,Col,Row,Container,Form, CardBody, CardTitle} from 'react-bootstrap';

import '../assets/style/photographerList.css';

 function PhotographerList(){
    return (
        <>

            <Container>
      <Row>
        {/* col 1 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer.jpg" />
     
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Mira Suchdeva</ListGroup.Item>
        <ListGroup.Item>6 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1200 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* col 2 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_4.jpg" />
     
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Naresh Photo Studio</ListGroup.Item>
        <ListGroup.Item>7 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2000 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* col 3 */}
        <Col> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_5.jpg" />
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Mohanlal Tripude</ListGroup.Item>
        <ListGroup.Item>15(yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2500 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
        </Card>
        </Col>

        {/* col 4 */}
        <Col> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_8.webp" />
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Shreyash Banayat</ListGroup.Item>
        <ListGroup.Item>15(yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2500 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
        </Card>
        </Col>
      </Row>


      <Row>

        {/* row 2 col 1 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_1.jpg" />
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Kiran Nair</ListGroup.Item>
        <ListGroup.Item>4 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1100 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
        </Card>  
        </Col>
        
        {/* row 2 col 2 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_2.jpg" />
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Lalit Govind</ListGroup.Item>
        <ListGroup.Item>6 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 2500 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* row 2 col 3 */}
        <Col>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_3.jpg" />
       
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Smita </ListGroup.Item>
        <ListGroup.Item>6 (yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1200 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
    </Card>
        </Col>

        {/* col 4 */}
        <Col> 
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/Home/photographer_7.webp" />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Neeraj Fernadis</ListGroup.Item>
        <ListGroup.Item>7.5(yrs of ex)</ListGroup.Item>
        <ListGroup.Item>Rs. 1800 per day</ListGroup.Item>
        <ListGroup.Item>Discount 8%</ListGroup.Item>
        {/* <ListGroup.Item>Rs. 1200 per day</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button variant="primary">Book</Button>
      </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    
        </>
    );
}

export default PhotographerList;
