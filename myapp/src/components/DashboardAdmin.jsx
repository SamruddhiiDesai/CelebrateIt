import {Container,Row,Col,Image} from 'react-bootstrap';

function DashBoardAdmin(){

    return(
        <>
            <div>
                <Container>
                <Row>
                    <Col>
                    <Image src="../Home/user.png" rounded />
                    </Col>
                    <Col></Col>
                </Row>
                </Container>
            </div>
        </>
    );
}

export default DashBoardAdmin;