import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const FormComponent: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save data to localStorage
    localStorage.setItem('userData', JSON.stringify(formData));
    navigate('/second-page'); // Use navigate function to navigate
  };

  return (
    <div className="form-container">
      <h2>Enter your information</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="text"
          className="input"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          placeholder="Phone Number"
        />
        <input
          type="email"
          className="input"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
