import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';






const Login = () => {
  const navigate = useNavigate();
  const [formdata, setformdata] = useState({
    email: '',
    password: '',
    name: ''
  });

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      });
      if (response.ok) {
        navigate('/home')
      } else {
        alert("user Not found")
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };


  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your email"
            value={formdata.email}
            onChange={handlechange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
            value={formdata.password}
            onChange={handlechange}
            required
          />
          <button type="submit" className="btn btn-primary btn-block btn-large">
            Login
          </button>
        </form>
        <p style={{ color: 'white' }}>if you don't have account </p>
        <p>Click hear</p>
        <Link to={'/signup'}>signup</Link>
      </div>
    </>
  );
};

export default Login;
