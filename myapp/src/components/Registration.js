import React, { useState } from 'react';
import '../assets/style/Registration.css';

function Registration() {
  // State to store form data and error messages
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
    termsAccepted: ''
  });

  // Handle input changes and update form data
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Validate the form fields
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Validate Full Name (only letters and spaces allowed)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!formData.fullName.trim()) {
      formErrors.fullName = 'Full Name is required';
      isValid = false;
    } else if (!nameRegex.test(formData.fullName)) {
      formErrors.fullName = 'Full Name should only contain letters and spaces';
      isValid = false;
    }

    // Validate Email (must follow a valid email format)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Validate Mobile Number (only numbers and 10 digits)
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.mobileNumber.trim()) {
      formErrors.mobileNumber = 'Mobile Number is required';
      isValid = false;
    } else if (!mobileRegex.test(formData.mobileNumber)) {
      formErrors.mobileNumber = 'Mobile Number must be 10 digits';
      isValid = false;
    }

    // Validate Password (must be at least 6 characters long)
    if (!formData.password.trim()) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    // Validate Confirm Password (must match the password)
    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (formData.confirmPassword !== formData.password) {
      formErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Validate Terms and Conditions acceptance
    if (!formData.termsAccepted) {
      formErrors.termsAccepted = 'You must agree to the Terms and Conditions';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate before submitting
    if (validateForm()) {
      // Here you can handle form submission, e.g., sending data to an API
      console.log('Form Submitted:', formData);

      // Reset form data after successful submission
      setFormData({
        fullName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        termsAccepted: false
      });
      setErrors({});
    }
  };

  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        {/* Full Name */}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        {/* Mobile Number */}
        <input
          type="text"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
        {errors.mobileNumber && <span className="error-message">{errors.mobileNumber}</span>}

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span className="error-message">{errors.password}</span>}

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}

        {/* Terms and Conditions */}
        <label>
          <input
            type="checkbox"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          I agree to the Terms and Conditions
        </label>
        {errors.termsAccepted && <span className="error-message">{errors.termsAccepted}</span>}

        {/* Submit Button */}
        <button type="submit" style={{color:"black"}}>Register</button>
      </form>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
}

export default Registration;
