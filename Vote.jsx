import React, { useState } from 'react';
import './Vote.css';
import { IoIosHome } from "react-icons/io";

function Vote() {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: '3rd General Meeting of CUET Teachers Association held at CUET',
      date: 'January 17, 2025',
      description: 'A meeting has been held by CUET Teachers Association Excutive Board',
      hasVoted: false,
      willAttend: null
    },
    {
      id: 2,
      title: '2025 International Conference on Electrical, Computer and Communication Engineering (ECCE)',
      date: '12-14 February 2025',
      description: ' The conference will bring together researchers, scholars, and academic scientists.',
      hasVoted: false,
      willAttend: null
    },
    {
      id: 3,
      title: 'Faculty Meet & Greet',
      date: '2024-12-15',
      description: 'Informal meeting to discuss teaching strategies and exchange ideas.',
      hasVoted: false,
      willAttend: null
    }
  ]);

  const handleVote = (meetingId, vote) => {
    setMeetings((prevMeetings) =>
      prevMeetings.map((meeting) =>
        meeting.id === meetingId ? { ...meeting, hasVoted: true, willAttend: vote } : meeting
      )
    );
  };

  return (
    <div className="association-page">
      <header className="header">
             <div className="logo"></div>
             <div className="events"><h1>Upcoming events</h1> </div>
             <div className="header-links">
              <IoIosHome />
               <a href="#Home">Go To Home</a>
             </div>
           </header>

      <div className="meetings-list">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="meeting-card">
            <h3>{meeting.title}</h3>
            <p><strong>Date:</strong> {meeting.date}</p>
            <p>{meeting.description}</p>

            {!meeting.hasVoted ? (
              <div className="vote-options">
                <button
                  onClick={() => handleVote(meeting.id, true)}
                  className="vote-btn attend"
                >
                  Will Attend
                </button>
                <button
                  onClick={() => handleVote(meeting.id, false)}
                  className="vote-btn not-attend"
                >
                  Will Not Attend
                </button>
              </div>
            ) : (
              <p>
                <strong>Attendance Status: </strong>
                {meeting.willAttend ? 'Attending' : 'Not Attending'}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vote;
