import React from 'react';
import '../assets/style/AboutUs.css';
import messageImage from '../images/Home/des.jpg';
//import Image from '../images/Home/wed.jpg'; // Ensure you import it if it's custom

function AboutUs() {
  return (
    
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>

      <div className="image-container">
      <img src="/Home/About.jpg" alt="Celebrate" className="image" />
      <div className="overlay-text">Let's Celebrate</div>
    </div>

    {/* Message Section */}
    <div className="message-section">
        <img src={messageImage} alt="Decorative" className="message-image" />
        <h1 className="message-title">Turning Moments Into Memories, Filled With Love and Joy!</h1>
        <p className="message-text">
          Life’s most precious moments deserve to be celebrated in the most extraordinary way. At
          <strong> CelebrateIt</strong>, we believe every event is a story waiting to be
          told—a story of love, laughter, and unforgettable memories.
        </p>
        <p className="message-text">
          Whether it’s the magical union of two souls in an engagement, the vibrant hues of Haldi and
          Mehendi, the grand celebration of a wedding, or the joyous giggles of a birthday, we are
          here to craft a dreamlike setting for your cherished occasions.
        </p>
      </div>


      <div className="half-container">
      <div className="half-image">
        <img src="/Home/about1.jpg" alt="Celebrate" className="image" />
      </div>
      <div className="half-text">
        <h2>Let's Celebrate</h2>
        <p>This is the text content on the other side of the image. Here you can describe the event, its significance, or any relevant details.</p>
      </div>
    </div>

    <div className="half-container">
      
      <div className="half-text">
        <h2>Let's Celebrate</h2>
        <p>This is the text content on the other side of the image. Here you can describe the event, its significance, or any relevant details.</p>
      </div>
      <div className="half-image">
        <img src="/Home/about2.jpg" alt="Celebrate" className="image" />
      </div>
    </div>

    <div className="half-container">
      <div className="half-image">
        <img src="/Home/about3.jpg" alt="Celebrate" className="image" />
      </div>
      <div className="half-text">
        <h2>Let's Celebrate</h2>
        <p>This is the text content on the other side of the image. Here you can describe the event, its significance, or any relevant details.</p>
      </div>
    </div>

    </div>

    
  );
}

export default AboutUs;
