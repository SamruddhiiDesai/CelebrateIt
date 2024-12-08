import React, { useState } from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import '../assets/style/formStyle.css';

 function AddPhotographer() {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        chargePerDay: '',
        experience: '',
        location: '',
        contact: '',
        review: '', // Added review to the formData state
        image:null
    });

    const [imageError, setImageError] = useState('');
    const handleChange = (event) => { 
        const { name, value, files } = event.target;
        if (name === "image") { 
            const file = files[0];
            if (file && file.type.startsWith('images/') && file.size <= 5 * 1024 * 1024) { // 5MB limit 
                setFormData({ ...formData, image: file });
                 setImageError('Limit is 5mb'); 
                }else {
                setImageError('Please upload a valid image file (max 5MB).');
             } 
            } else { 
                setFormData({ ...formData, [name]: value }); 
            }
         };

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData({ ...formData, [name]: value });
    // };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            // Handle form submission
            console.log('Form submitted successfully', formData);
        }
        setValidated(true);
    };

    return (
        <div className='formdiv'>
            <Card>
                <Card.Body>
                    <Card.Title>Add Photographer</Card.Title>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter here"
                                minLength="2"
                                maxLength="100"
                                required
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid full name.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Charge Per Day (in INR)</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Amount (in INR)"
                                min="1000"
                                required
                                name="chargePerDay"
                                value={formData.chargePerDay}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid amount.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Years Of Experience</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter here"
                                min="3"
                                required
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter valid years of experience.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Based On Location</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter here"
                                minLength="2"
                                required
                                name="location"
                                value={formData.location}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid location.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="tel"
                                pattern="[0-9]{10}"
                                placeholder="Enter without country code"
                                required
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid 10-digit contact number.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Review</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter here"
                                min="0"
                                max="5"
                                step="0.1"
                                required
                                name="review"
                                value={formData.review}
                                onChange={handleChange}
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid review score between 0 and 5, with one digit after the decimal point.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                             <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" accept="images/*" 
                            required name="image" 
                            onChange={handleChange} /> 
                            {imageError && ( 
                                <Alert variant="danger" className="mt-2"> 
                                {imageError} 
                                </Alert> )} 
                            <Form.Control.Feedback type="invalid"> Please upload a valid image file. </Form.Control.Feedback> 
                            </Form.Group>

                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}
export default AddPhotographer;