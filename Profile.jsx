import React, { useState } from 'react';
// Import Link for routing
import './Profile.css';

function Profile ()  {
  const [profilePicture, setProfilePicture] = useState(null);
  const [complaint, setComplaint] = useState('');

  // Handle profile picture change
  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Handle complaint input
  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  // Handle complaint submission (optional)
  const handleComplaintSubmit = () => {
    alert("Complaint Submitted: " + complaint);
    setComplaint('');
  };

  return (
    <div className="profile-page">
      <header className="profile-header">
        <h2>Teacher Profile</h2>
        {/* Home link added to header */}
        <nav>
          <a href="#" className="home-link">Go To Home</a>
        </nav>
      </header>

      <div className="profile-container">
        <div className="profile-picture">
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePictureChange}
            className="file-input"
          />
        </div>

        <div className="profile-info">
          <div className="info-item">
            <strong>Name:</strong> Saki Kowsar
          </div>
          <div className="info-item">
            <strong>Email:</strong> Saki Kowsar@gmail.com
          </div>
          <div className="info-item">
            <strong>Department:</strong> Computer Science and Engineering
          </div>
          <div className="info-item">
            <strong>Teaching Subjects:</strong> Software Engineering, Software Development
          </div>
          <div className="info-item">
            <strong>Years of Experience:</strong> 20 years
          </div>
          <div className="info-item">
            <strong>Research Interests:</strong> Artificial Intelligence, Machine Learning, Networking
          </div>
        </div>
      </div>

      {/* New Section: Complaint Box */}
      <div className="complaint-box">
        <h3>Make a Complaint</h3>
        <textarea
          value={complaint}
          onChange={handleComplaintChange}
          placeholder="Enter your complaint here..."
          rows="5"
          className="complaint-textarea"
        />
        <button onClick={handleComplaintSubmit} className="submit-complaint-btn">
          Submit Complaint
        </button>
      </div>

      {/* New Section: View Attended and Missed Meetings */}
      <div className="meetings-options">
        <h3>Meetings</h3>
        <div className="view-all-section">
          
            <button className="view-all">View All Attended Meetings</button>
          
        </div>
        <div className="view-all-section">
          
            <button className="view-all" >View All Missed Meetings</button>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
