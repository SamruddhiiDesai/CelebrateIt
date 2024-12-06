import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assessts/bookingstyle.css';


function BookService(){
    return(
        <>

        <div className='form-div'
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >

         <div class="form-inner">
    <Form>
    
    {/* occassion Input */}
    <Form.Group>
    <Form.Label>Occassion</Form.Label>
     <Form.Control type="text" placeholder="Ex.Birthday, Wedding, Corporate Event, etc" />
     </Form.Group>

     {/* Photographer */}
     <div className="d-flex">
            {['Photographer', 'Videographer'].map((label, index) => (
        <div key={`default-${label}-${index}`} className="mb-3">
            <Form.Check
            type="checkbox"
            id={`${label}-${index}`}
            label={label}
            defaultChecked={index === 0}
            />
        </div>
        ))}
        </div>


     <Form.Group>
     <Form.Label>Booking Duration</Form.Label>
      <Form.Control
                type="date"
                placeholder="Search"
                className=" mr-sm-2 "
              />
              <h5>To</h5>
      <Form.Control
                type="date"
                placeholder="Search"
                className=" mr-sm-2 "
              />
      </Form.Group>
       
       {/* Email input */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

    

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

    </div>
        </>
    );
}

export default BookService;