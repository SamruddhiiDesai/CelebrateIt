import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/style/DetailsPage.css";
import img1 from "../assets/images/BollywoodTheme/Bollywood1.jpg";
import portfolio1 from "../assets/images/BollywoodTheme/BollywoodTheme5.jpg";
import portfolio2 from "../assets/images/BollywoodTheme/BollywoodTheme4.jpg";
import portfolio3 from "../assets/images/EngagImg3.jpg";
import portfolio4 from "../assets/images/EngagImg4.jpeg";
import portfolio5 from "../assets/images/BollywoodTheme/BollywoodTheme3.avif";
import portfolio6 from "../assets/images/EngagImg6.jfif";
import portfolio7 from "../assets/images/BollywoodTheme/BollywoodTheme2.jpg";
import portfolio8 from "../assets/images/EngagImg8.jpg";
import portfolio9 from "../assets/images/EngagImg9.jpg";
import portfolio10 from "../assets/images/BollywoodTheme/Bollywood1.jpg";
import portfolio11 from "../assets/images/EngagImg11.jpeg";
import portfolio12 from "../assets/images/EngagImg12.jfif";

// Updated portfolio images array
const portfolioImages = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
  portfolio12,
];

const DetailsPageFive = () => {

  const defaultRating = "4.9/5";
  const defaultPromotion = "10% ";
  const defaultPrice = "₹ 1,50,000";

  const [rating] = useState(defaultRating);
  const [promotion] = useState(defaultPromotion);
  const [price] = useState(defaultPrice);
  const [paymentFormVisible, setPaymentFormVisible] = useState(false);
  const [bookingInfo, setBookingInfo] = useState({
    name: "",
    price: defaultPrice,
  });

  const todayDate = new Date().toISOString().split("T")[0];

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements["name"].value;

    setBookingInfo({ ...bookingInfo, name });
    setPaymentFormVisible(true); // Show the payment form
    
  };

  const handlePayment = (event) => {
    event.preventDefault();
    toast.success("🎉 Booking successfully completed!", {
      position: "top-right",
      autoClose: 2000,
    });
    setTimeout(() => {
      window.location.reload(); // Reload the page after payment
    }, 2000);
  };


  return (
    <div className="details-page">
      <header className="details-header">
        <h1>CELEBRATEIT</h1>
        <p className="sub-header">Transforming your dreams into reality</p>
      </header>

      <div className="details-container">
        {/* Left Section */}
        <div className="details-left">
          <img src={img1} alt="Indian Theme" className="details-image" />
          <h2>Bollywood Theme</h2>

          <div className="navigation-links">
            <a href="#images">Projects</a>
            <a href="#about">About</a>
            <a href="#review">Reviews</a>
          </div><br></br><div className="details-left">


            {/* Rating and Promotion Section */}
            <div className="theme-info">
              {/* Rating */}
              <div className="rating">
                <span>⭐⭐⭐⭐☆</span>
                <p>4.9/5 (200 reviews)</p>
              </div>

              {/* Promotion */}
              <div className="promotion">
                <span className="promo-badge">Limited Time Offer</span>
                <p>10% Off on bookings this month!</p>
              </div>
            </div>
            <br />
          </div>
          <div>
            <h2 id="about">About Bollywood Theme</h2>
            <p>
            For an uber fun and crowd-pleasing engagement party theme, a Bollywood theme is the way to go. 
            Great music, dancing, and colourful costumes – nothing screams “fabulous” more than Bollywood! 
            Have your guests dress up as their favourite celebrity and play great Bollywood music for an 
            engagement party no one will forget. Glam up the engagement ring plate to match your party dress 
            for the final touch.
            </p>
            <p>
            The venue can be adorned with vibrant drapes, fairy lights, and colorful decor 
            inspired by iconic Bollywood movies. Guests can embrace the theme by dressing as their
             favorite Bollywood stars, adding a star-studded charm to the event
            </p>
          </div>

          {/* Portfolio Images */}
          <div className="portfolio-grid" id="images">
            {portfolioImages.map((image, index) => (
              <div key={index} className="portfolio-item">
                <img src={image} alt={`Portfolio ${index + 1}`} />
              </div>
            ))}
          </div>
          
        </div>

        {/*Right Section form */}
        <div className="details-right">
          <div className="pricing">
            <h3>Starting Price</h3>
            <p>{price}</p>
            <span>Price (Planning Fee)</span>
          </div><br></br>
          {/**Form details */}
          <form className="contact-form" onSubmit={handleBooking}>
            <h4>
              CelebrateIt
              <br /> Booking Information
            </h4>
            <input type="text" name="name" placeholder="Full name*" required />
            <div className="contact-details">
              <select>
                <option value="+91">+91</option>
                <option value="+1">+1</option>
              </select>
              <input
                type="tel"
                placeholder="Phone number*"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Email address*"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              required
            />
            <input
              type="date"
              placeholder="Function date*"
              min={todayDate}
              required
            />
            <input type="text" placeholder="Location" required />
            <textarea placeholder="Details about Event"></textarea>

            {/* Read-only text fields for Rating, Promotion, and Price */}
            <label>Rating</label>
            <input type="text" value={`${rating}`} readOnly />
            <label>Promotion</label>
            <input type="text" value={`${promotion}`} readOnly />
            <label>Price</label>
            <input type="text" value={`${price}`} readOnly />


            <button type="submit" className="send-message">
              Book Now
            </button>
          </form>

          {/* Payment Form */}
          {paymentFormVisible && (
            <form className="payment-form" onSubmit={handlePayment}>
              <h4>Payment Form</h4>
              <p>
                <strong>Name:</strong> {bookingInfo.name}
              </p>
              <p>
                <strong>Amount Due:</strong> {bookingInfo.price}
              </p>
              <div className="payment-methods">
                <label>
                  <input type="radio" name="paymentMethod" value="creditCard" required />
                  Credit Card
                </label>
                <label>
                  <input type="radio" name="paymentMethod" value="bankTransfer" required />
                  Bank Transfer
                </label>
                <label>
                  <input type="radio" name="paymentMethod" value="paypal" required />
                  PayPal
                </label>
              </div>
              <div className="credit-card-details">
                <input
                  type="text"
                  placeholder="Card Number"
                  id="cardNumber"
                  maxLength={16}
                  pattern="[0-9]{16}"
                  title="Please enter a valid 16-digit Card number"
                  required
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  pattern="(0[1-9]|1[0-2])\/\d{2}"
                  id="expiryDate"
                  maxLength="5"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  id="cvc"
                  maxLength="3"
                  required
                />
              </div>
              <label>
                <input type="checkbox" required /> I agree with the{" "}
                <a href="#">Terms and Conditions</a>
              </label>
              <button type="submit" className="pay-now">
                Pay Now
              </button>
            </form>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};


export default DetailsPageFive;
