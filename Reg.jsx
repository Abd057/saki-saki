import React, { useState } from 'react';
import './Reg.css';

function Reg() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Sign Up Successful!");
    console.log("Form Data:", formData);
  };

  return (
     <div className='log'>
           
            <form action="">
              <h1>Welcome to CUET Teacher's Association</h1>
                <h2>Complete Your Registration</h2>
                
                <div className="input1">
                    <input type="text"placeholder='USER NAME'/>
                    
                </div>
    
                <div className="input2">
                    <input type="email"placeholder='Your E-Mail'/>
                    
                </div>
               <div className="input3">
                <input type="number"placeholder='Phone Number'/>
               </div>

               <div className="gender-options">
               <label htmlFor="gender">Choose Your Gender</label><br/>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              
            />
            Female
          </label>
  </div>
  <div className='input4'><input type="password" placeholder='Set Password'/></div>
  <div className='input5'><input type="password"placeholder='Confirm Password'/></div>
              <button type="submit">Sign Up</button>
               
            </form>
    
        </div>
  );
}

export default Reg;
