import React, { useState } from "react";
import "../assets/style/AdminDashboard.css";

function AdminDashboard() {
  const [weddingServices, setWeddingServices] = useState([]);
  const [newService, setNewService] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    discount: "",
    image: "",
    features: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleServiceInputChange = (e) => {
    const { name, value } = e.target;
    setNewService({ ...newService, [name]: value });
  };

  const handleAddService = () => {
    const updatedServices = [
      ...weddingServices,
      { ...newService, id: Date.now(), likes: 0 },
    ];
    setWeddingServices(updatedServices);
    alert("Wedding service added successfully!");
    setNewService({
      title: "",
      description: "",
      price: "",
      rating: "",
      discount: "",
      image: "",
      features: "",
    });
    setIsFormVisible(false); // Hide form after adding service
  };

  const handleDeleteService = (id) => {
    const updatedServices = weddingServices.filter((service) => service.id !== id);
    setWeddingServices(updatedServices);
  };

  const handleEditService = (id) => {
    const service = weddingServices.find((service) => service.id === id);
    setNewService({ ...service });
    handleDeleteService(id);
    setIsFormVisible(true); // Show form for editing
  };


  // -----------birthday-------------
  const [weddingServices1, setWeddingServices1] = useState([]);
  const [newService1, setNewService1] = useState({
    title: "",
    description: "",
    price: "",
    rating: "",
    discount: "",
    image: "",
    features: "",
  });
  const [isFormVisible1, setIsFormVisible1] = useState(false);

  const handleServiceInputChange1 = (e) => {
    const { name, value } = e.target;
    setNewService1({ ...newService1, [name]: value });
  };

  const handleAddService1 = () => {
    const updatedServices1 = [
      ...weddingServices1,
      { ...newService1, id: Date.now(), likes: 0 },
    ];
    setWeddingServices1(updatedServices1);
    alert("Wedding service added successfully!");
    setNewService1({
      title: "",
      description: "",
      price: "",
      rating: "",
      discount: "",
      image: "",
      features: "",
    });
    setIsFormVisible1(false); // Hide form after adding service
  };

  const handleDeleteService1 = (id) => {
    const updatedServices1 = weddingServices1.filter((service1) => service1.id !== id);
    setWeddingServices1(updatedServices1);
  };

  const handleEditService1 = (id) => {
    const service1= weddingServices1.find((service1) => service1.id === id);
    setNewService1({ ...service1 });
    handleDeleteService1(id);
    setIsFormVisible1(true); // Show form for editing
  };


  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      {/* Button to Show Form */}
      {!isFormVisible && (
        <button
          onClick={() => setIsFormVisible(true)}
          className="add-service-btn"
          style={{ marginBottom: "20px" }}
        >
          Add Wedding Decoration
        </button>
      )}
       {/* Button to Show Form
       {!isFormVisible && (
        <button
          onClick={() => setIsFormVisible(true)}
          className="add-service-btn"
          style={{ marginBottom: "20px",marginLeft:"5px" }}
        >
          Add Birthday Decoration
        </button>
      )} */}

      {/* Add Wedding Service Form */}
      {isFormVisible && (
        <div className="add-service-form">
          <h2>{newService.id ? "Edit" : "Add"} Wedding Service</h2>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newService.title}
              onChange={handleServiceInputChange}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={newService.description}
              onChange={handleServiceInputChange}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={newService.price}
              onChange={handleServiceInputChange}
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input
              type="text"
              name="rating"
              value={newService.rating}
              onChange={handleServiceInputChange}
            />
          </div>
          <div className="form-group">
            <label>Discount:</label>
            <input
              type="text"
              name="discount"
              value={newService.discount}
              onChange={handleServiceInputChange}
            />
          </div>
          <div className="form-group">
            <label>Features:</label>
            <textarea
              name="features"
              value={newService.features}
              onChange={handleServiceInputChange}
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={newService.image}
              onChange={handleServiceInputChange}
            />
          </div>
          <button onClick={handleAddService} className="add-service-btn">
            {newService.id ? "Update" : "Add"} Wedding Service
          </button>
          <button
            onClick={() => setIsFormVisible(false)}
            className="add-service-btn"
            style={{
              backgroundColor: "#6c757d",
              marginLeft: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Display Wedding Services */}
      <div className="services-container">
        <h2>Wedding Services</h2>
        <div className="services-grid">
          {weddingServices.map((service) => (
            <div key={service.id} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
              <h3>{service.title}</h3>
              <p><strong>Description:</strong> {service.description}</p>
              <p><strong>Price:</strong> ₹{service.price}</p>
              <p><strong>Rating:</strong> {service.rating} / 5</p>
              <p><strong>Discount:</strong> {service.discount}%</p>
              <p><strong>Features:</strong> {service.features}</p>
              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEditService(service.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteService(service.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* --------BIRTHDAY--------- */}
      {/* Button to Show Form */}
      {!isFormVisible1 && (
        <button
          onClick={() => setIsFormVisible1(true)}
          className="add-service-btn"
          style={{ marginBottom: "20px" }}
        >
          Add Birthday Decoration
        </button>
      )}
      

      {/* Add Birthday Service Form */}
      {isFormVisible1 && (
        <div className="add-service-form">
          <h2>{newService1.id ? "Edit" : "Add"} Birthday Service</h2>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={newService1.title}
              onChange={handleServiceInputChange1}
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={newService1.description}
              onChange={handleServiceInputChange1}
            />
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input
              type="text"
              name="price"
              value={newService1.price}
              onChange={handleServiceInputChange1}
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <input
              type="text"
              name="rating"
              value={newService1.rating}
              onChange={handleServiceInputChange1}
            />
          </div>
          <div className="form-group">
            <label>Discount:</label>
            <input
              type="text"
              name="discount"
              value={newService1.discount}
              onChange={handleServiceInputChange1}
            />
          </div>
          <div className="form-group">
            <label>Features:</label>
            <textarea
              name="features"
              value={newService1.features}
              onChange={handleServiceInputChange1}
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={newService1.image}
              onChange={handleServiceInputChange1}
            />
          </div>
          <button onClick={handleAddService1} className="add-service-btn">
            {newService1.id ? "Update" : "Add"} Wedding Service
          </button>
          <button
            onClick={() => setIsFormVisible1(false)}
            className="add-service-btn"
            style={{
              backgroundColor: "#6c757d",
              marginLeft: "10px",
            }}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Display Wedding Services */}
      <div className="services-container">
        <h2>Birthday Services</h2>
        <div className="services-grid">
          {weddingServices1.map((service1) => (
            <div key={service1.id} className="service-card">
              <img src={service1.image} alt={service1.title} className="service-image" />
              <h3>{service1.title}</h3>
              <p><strong>Description:</strong> {service1.description}</p>
              <p><strong>Price:</strong> ₹{service1.price}</p>
              <p><strong>Rating:</strong> {service1.rating} / 5</p>
              <p><strong>Discount:</strong> {service1.discount}%</p>
              <p><strong>Features:</strong> {service1.features}</p>
              <div className="card-actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEditService1(service1.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteService1(service1.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isFormVisible && (
        <button
          onClick={() => setIsFormVisible1(true)}
          className="add-service-btn"
          style={{ marginBottom: "20px" }}
        >
          Add Engagement Decoration
        </button>
      )}
      <h2>{newService1.id ? "Edit" : "Add"} Engagement Service</h2>

    </div>
  );
}

export default AdminDashboard;
