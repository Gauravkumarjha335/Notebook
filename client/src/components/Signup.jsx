import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
const Signup = () => {
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
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const fetchdata = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formdata), // Pass the form data in the request body
            })
            if (fetchdata.ok) {
                alert("User Created"),
                    navigate('/')
            } else {
                alert("User Not Created")
            }

        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="login">
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="name"
                    name="name"
                    placeholder="Enter Your name"
                    value={formdata.name}
                    onChange={handlechange}
                    required
                />
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
                    Signup
                </button>
                <button type="submit" className="btn btn-primary btn-block btn-large gap-2 mt-3">
                <span>   <span>Login with Google        </span><GoogleOutlined /></span>


            </button>
            </form>
            <p style={{ color: 'white' }}>if you have account </p>
            <p>Click hear</p>
            <Link to={'/'}>login</Link>
          
        </div>
    );
};

export default Signup;
