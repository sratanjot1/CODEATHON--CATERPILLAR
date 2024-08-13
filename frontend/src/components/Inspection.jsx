import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Inspection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    truckSerialNumber: "",
    truckModel: "",
    inspectionID: 1,
    inspectorName: "",
    inspectorEmployeeID: "",
    dateTime: "",
    location: "",
    geoCoordinates: "",
    serviceMeterHours: "",
    inspectorSignature: "",
    customerName: "",
    catCustomerID: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Inspection Form Data:", formData);
  };

  const styles = {
    formContainer: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "8px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Roboto', sans-serif",
    },
    formGroup: {
      marginBottom: "15px",
    },
    label: {
      display: "block",
      marginBottom: "5px",
      fontWeight: "bold",
      fontSize: "18px", 
    },
    input: {
      width: "100%",
      padding: "12px", 
      borderRadius: "4px",
      border: "1px solid #ccc",
      fontSize: "16px",
      fontFamily: "'Roboto', sans-serif",
    },
    button: {
      width: "100%",
      padding: "12px", 
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "18px", 
      fontFamily: "'Roboto', sans-serif",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#FFEA00",
      color: "#000",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      fontSize: "24px", 
      fontFamily: "'Roboto', sans-serif",
    },
  };
  

  return (
    <div style={styles.formContainer}>
      <h2 style={styles.title}>Truck Inspection Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Truck Serial Number</label>
          <input
            type="text"
            name="truckSerialNumber"
            value={formData.truckSerialNumber}
            onChange={handleChange}
            style={styles.input}
            placeholder="Example: 7301234, 730EJ73245"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Truck Model</label>
          <input
            type="text"
            name="truckModel"
            value={formData.truckModel}
            onChange={handleChange}
            style={styles.input}
            placeholder="Example: 730, 730 EJ, 735"
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Inspection ID</label>
          <input
            type="number"
            name="inspectionID"
            value={formData.inspectionID}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Inspector Name</label>
          <input
            type="text"
            name="inspectorName"
            value={formData.inspectorName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Inspector Employee ID</label>
          <input
            type="text"
            name="inspectorEmployeeID"
            value={formData.inspectorEmployeeID}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Date & Time of Inspection</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Location of Inspection</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Geo Coordinates of Inspection (optional)
          </label>
          <input
            type="text"
            name="geoCoordinates"
            value={formData.geoCoordinates}
            onChange={handleChange}
            style={styles.input}
            placeholder="Example: 34.0522° N, 118.2437° W"
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Service Meter Hours (Odometer reading)
          </label>
          <input
            type="number"
            name="serviceMeterHours"
            value={formData.serviceMeterHours}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Inspector Signature</label>
          <input
            type="text"
            name="inspectorSignature"
            value={formData.inspectorSignature}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Customer Name / Company Name</label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>CAT Customer ID</label>
          <input
            type="text"
            name="catCustomerID"
            value={formData.catCustomerID}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>

        <button
          type="submit"
          style={{ ...styles.button }}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              styles.buttonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = styles.button.backgroundColor)
          }
          onClick={() => navigate("/testing")}
        >
          Start Inspection Voice Assited
        </button>
      </form>
    </div>
  );
};
