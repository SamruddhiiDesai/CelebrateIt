import React, { useState } from 'react';
import '../assets/style/ContactUs.css'; // Link to your CSS file

const ContactUs = () => {
  // State to hold form data and errors
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form fields
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation (should not be empty and should not contain numbers)
    const nameRegex = /^[A-Za-z\s]+$/;  // Only allows letters and spaces
    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      isValid = false;
    } else if (!nameRegex.test(formData.name)) {
      formErrors.name = 'Name should only contain letters and spaces';
      isValid = false;
    }

    // Email validation (should be a valid email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Message validation (should not be empty)
    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate before submitting
    if (validateForm()) {
      // Here you can handle form submission, for example, sending the data to an API
      console.log('Form Submitted:', formData);

      // Reset form and errors after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    

    <div className="contact-container">
 <h2 className="contact-title">Plan Your Events With Us</h2>

      <h2 className="contact-title">Contact Us</h2>

      <div className="half-containerr">
    <div className="half-imagee">
      <img src="/Home/haldi1.jpg" alt="Celebrate" className="image" />
    </div>
    <div className="half-textt">
    <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>
        
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  </div>

      
    </div>
  );
};

export default ContactUs;
