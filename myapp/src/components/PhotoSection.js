import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Form, Button, Card, Alert } from "react-bootstrap"; 

import birthImage from '../images/Home/photo1.jpg';
import birthImage1 from '../images/Home/photo2.jpg';
import haldiImage from '../images/Home/photo3.jpg';
import messageImage from '../images/Home/des.jpg';
import weddingImg from '../images/Home/photo1.jpg';
import engagementImg from '../images/Home/photo2.jpg';
import birthdayImg from '../images/Home/photo3.jpg';
import photographyImg from '../images/Home/photo7.jpg';
import cateringImg from '../images/Home/photo5.jpg';
import haldiImg from '../images/Home/photo8.jpg';
import PhotographerList from './PhotographerList';

import '../assets/style/PhotoSection.css';

function PhotoSection() {
  const today = new Date();
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);
  const dayAfterTomorrowDate = dayAfterTomorrow.toISOString().split("T")[0];

  const [formData, setFormData] = useState({ fromDate: '', toDate: '' });
  const [validated, setValidated] = useState(false);
  const [dateError, setDateError] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false || new Date(formData.toDate) < new Date(formData.fromDate)) {
      // event.preventDefault();
      event.stopPropagation();
      if (new Date(formData.toDate) < new Date(formData.fromDate)) {
        setDateError('The "To" date must be later than or same as "From" date.');
      }
      //  else {
      //   setDateError('Date error');
      // }
    } 
    else {
      // setDateError('"To" date must be later than or same as "From" date');
      // Handle form submission
      console.log('Form submitted successfully', formData);
      setShowResult(true); // Show the hidden component
    }
    setValidated(true);
  };

  const wedding = [
    {
      title: 'Maternity Photoshoot',
      image: weddingImg,
      link: '#wedding',
      description: 'From lavish wedding themes to intimate , we bring your dream wedding to life with unmatched elegance.',
      // price: '$10000',
      // rating: '★★★★☆'
    },
    {
      title: 'Wedding',
      image: engagementImg,
      link: '#engagement',
      description: 'Celebrate the beginning of forever with stunning engagement decor and memorable setups.',
      // price: '$10000',
      // rating: '★★★★☆'
    },
    {
      title: 'Grand Wedding',
      image: birthdayImg,
      link: '#birthday',
      description: 'Throw unforgettable birthday parties with vibrant themes and creative decorations.',
      // price: '$15000',
      // rating: '★★★★★'
    },
    {
      title: 'Engegement',
      image: photographyImg,
      link: '#photography',
      description: 'Capture your most cherished moments with our professional photography and videography services.',
      // price: '$12000',
      // rating: '★★★★☆'
    },
    {
      title: 'Traditional Wedding',
      image: cateringImg,
      link: '#catering',
      description: 'Treat your guests to a culinary experience with our world-class catering services tailored to your event.',
      // price: '$8000',
      // rating: '★★★☆☆'
    },
    {
      title: 'Birthday',
      image: haldiImg,
      link: '#haldi',
      description: 'Immerse yourself in the joyous Haldi ceremony with vibrant decor and traditional vibes.',
      // price: '$10000',
      // rating: '★★★★★'
    }
  ];

  return (
    <div>
      {/* Message Section */}
      <div className="message-section">
        <img src={messageImage} alt="Decorative" className="message-image" />
        <h1 className="message-title">Photography & Videography Services!</h1>
        <p className="message-text">
          Capture your most cherished moments with the expertise of our professional photographers. Whether it's a wedding, birthday, corporate event, or family gathering, we ensure every special moment is preserved beautifully.
        </p>
        <p className="message-text">
          Bring your memories to life with our skilled videographers. We capture not just the visuals but the emotions of every event, creating cinematic films you’ll treasure forever.
        </p>
      </div>

      <div className="marquee-containerr">
        <div className="marquee-content">
          {/* Images in a continuous loop */}
          <img src={birthImage} alt="birth1" className="marquee-image" />
          <img src={birthImage1} alt="birth2" className="marquee-image" />
          <img src={haldiImage} alt="haldi1" className="marquee-image" />
          {/* Duplicated images for seamless looping */}
          <img src={birthImage} alt="birth3" className="marquee-image" />
          <img src={birthImage1} alt="birth4" className="marquee-image" />
          <img src={haldiImage} alt="haldi3" className="marquee-image" />
        </div>
      </div>

      <div className="marquee-containerr">
        <div className="marquee-content">
          {/* Images in a continuous loop */}
          <img src={birthImage} alt="birth1" className="marquee-image" />
          <img src={haldiImage} alt="haldi1" className="marquee-image" />
          <img src={birthImage1} alt="birth2" className="marquee-image" />
          {/* Duplicated images for seamless looping */}
          <img src={haldiImage} alt="haldi3" className="marquee-image" />
          <img src={birthImage} alt="birth3" className="marquee-image" />
          <img src={birthImage1} alt="birth4" className="marquee-image" />
        </div>
      </div>

      <div className="wedding-section">
        <h2>Photography & Video Section</h2>
        <div className="wedding-section">
          {wedding.map((wedding, index) => (
            <div
              key={index}
              className="wedding-card"
              onClick={() => (window.location.href = wedding.link)}
            >
              <img src={wedding.image} alt={wedding.title} className="wedding-image" />
              <h4 className="wedding-title">{wedding.title}</h4>
              <p className="wedding-description">{wedding.description}</p>
              <p className="wedding-price">{wedding.price}</p>
              <p className="wedding-rating">{wedding.rating}</p>

              {/* <Link to="/photodetails">
                <button className="wedding-button">Book Now</button>
              </Link> */}
            </div>
          ))}
        </div>
      </div>

      <div className='searchdiv'>
        <Card>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group>
                <Card.Title>Search by date</Card.Title>
                <Form.Label>From</Form.Label>
                <Form.Control
                  type="date"
                  name="fromDate"
                  placeholder="Search"
                  min={dayAfterTomorrowDate}
                  className="mr-sm-2"
                  required
                  value={formData.fromDate}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please select a valid start date.
                </Form.Control.Feedback>

                <Form.Label>To</Form.Label>
                <Form.Control
                  type="date"
                  name="toDate"
                  placeholder="Search"
                  min={dayAfterTomorrowDate}
                  className="mr-sm-2"
                  required
                  value={formData.toDate}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please select a valid end date.
                </Form.Control.Feedback>
                {dateError && (
                  <Alert variant="danger" className="mt-2">
                    {dateError}
                  </Alert>
                )}
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>

            {/* {showResult && (<PhotographerList />)} */}
          </Card.Body>
        </Card>

        <div>
        {showResult && (<PhotographerList />)}
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
