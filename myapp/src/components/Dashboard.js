import React, { useState } from 'react';
import '../assets/style/Dashboard.css';

function Dashboard() {  
  const [user] = useState({
    name: 'Samruddhi Desai',
    email: 'samruddhi@example.com',
    phone: '9876543210',
  });

  const [bookings, setBookings] = useState([
    {
      id: 1,
      event: 'Wedding',
      date: '2024-12-10',
      status: 'Confirmed',
      price: '₹1,00,000',
      theme: 'Royal Wedding',
      image: '/Home/wedding1.jpg',
    },
    {
      id: 2,
      event: 'Birthday',
      date: '2024-11-25',
      status: 'Completed',
      price: '₹1,00,000',
      theme: 'Colorful Celebration',
      image: '/Home/birth1.jpg',
    },
    {
      id: 3,
      event: 'Haldi',
      date: '2025-01-15',
      status: 'Pending',
      price: '₹70,000',
      theme: 'light Setup',
      image: '/Home/haldi1.jpg',
    },
  ]);

  const handleEditBooking = (id) => {
    alert(`Edit booking ID: ${id}`);
    // Logic to navigate to edit booking page
  };

  const handleDeleteBooking = (id) => {
    const updatedBookings = bookings.filter((booking) => booking.id !== id);
    setBookings(updatedBookings);
    alert(`Booking ID ${id} has been deleted.`);
  };

  return (
    <div className="dashboard-container">
      {/* User Profile Section */}
      <div className="user-profile">
        <h2>User Profile</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      {/* Event Bookings Section */}
      <div className="bookings-section">
        <h2>Your Bookings</h2>
        <div className="bookings-cards">
          {bookings.map((booking) => (
            <div className="booking-card" key={booking.id}>
              <img src={booking.image} alt={booking.event} className="booking-image" />
              <div className="booking-details">
                <h3>{booking.event}</h3>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>Status:</strong> {booking.status}
                </p>
                <p>
                  <strong>Price:</strong> {booking.price}
                </p>
                <p>
                  <strong>Theme:</strong> {booking.theme}
                </p>
                <div className="card-actions">
                  {/* <button className="edit-btn" onClick={() => handleEditBooking(booking.id)}>
                    Edit
                  </button> */}
                  <button className="delete-btn" onClick={() => handleDeleteBooking(booking.id)}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 
