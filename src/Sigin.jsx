import React, { useContext, useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from './providers/AuthProviders';

function SignIn() {
  const [error, setError] = useState('');
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate()
  // Define 'errors' and 'formData' state variables
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setError('');
    const name = e.target.name;
    const value = e.target.value;
  
    if (name === 'password' && value.length < 6) {
      // Update the 'errors' state for the 'password' field
      setErrors({ ...errors, password: 'At least 6 characters' });
    } else {
      // Clear the 'password' error if the input is valid
      setErrors({ ...errors, password: '' });
    }
  
    // Update formData here
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

  
    const validationErrors = {};
    

    setErrors(validationErrors); // Update the errors state

    if (Object.keys(validationErrors).length === 0) {
      // If there are no validation errors, proceed with sign-in
      createUser(formData.email, formData.password)
        .then((result) => {
          const createUser = result.user;
          console.log(createUser);
          navigate("/")
        })
        .catch((error) => {
          console.log(error.message);
          // setError(error.message);
        });
    }
  }
  
  return (
    <div>
      <section>
      <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span>
        <div className="signin">
          <div className="content">
            <h2>SignIn</h2>
            <form className="form" onSubmit={handleSubmit}>
              <div className="inputBox">
                <label>
                  Name
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </label>
                {errors.name && <span>{errors.name}</span>}
              </div>
              <div className="inputBox">
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </label>
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="inputBox">
                <label>
                  Password
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </label>
                {errors.password && <span>{errors.password}</span>}
              </div>
              <div className="links">
                <Link to="/">Login</Link>
              </div>
              <div className="inputBox">
                <input type="submit" value="SignIn" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
