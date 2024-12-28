import React from 'react';
import './Home.css';
import { FaRegUserCircle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaRegistered } from "react-icons/fa6";
const Home = () => {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <div className="logo">
          
          
        </div>
        <div className= "events1"><h1>CUET Teacher's Assosiation</h1></div>
        <div className="header-links">
          <FaRegUserCircle />
          <a href="#profile">Profile</a>
          <FaRegistered />

          <a href="#register">Register</a>
          <CiLogout />
          <a href="#logout">Log Out</a>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-container">
        {/* Options (Now Vertical) */}
        <div className="options-container">
          <div className="option-card">
            <h3>Meeting Schedule</h3>
            <p>View upcoming meetings and events</p>
          </div>
          <div className="option-card">
            <h3>Cast Your Vote</h3>
            <p>Participate in ongoing polls</p>
          </div>
          <div className="option-card">
            <h3>Poll Results</h3>
            <p>View results of previous votes</p>
          </div>
        </div>

        {/* Announcements */}
        <div className="announcements">
          <div className="announcement-header">
            <h2>Recent Archives</h2>
            <a href="#view-all">View All</a>
          </div>
          <div className="announcement-card">
            <h4>3rd General Meeting of CUET Teachers Association held at CUET</h4>
            <p>চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয় (চুয়েট)-এর শিক্ষক সমিতি কার্যনির্বাহী পরিষদ (২০২৪-২০২৫) ইং খ্রি: এর ৩য় সাধারণ সভা আজ ১৭ই সেপ্টেম্বর (মঙ্গলবার) ২০২৪ খ্রি: অনুষ্ঠিত হয়েছে</p>
            <span> September 17, 2024</span>
          </div>
          <div className="announcement-card">
            <h4>57nd syndicate meeting</h4>
            <p>The 57nd syndicate meeting has been hosted by the VC DR. Rofiqul Alam</p>
            <span> August 27, 2024</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
