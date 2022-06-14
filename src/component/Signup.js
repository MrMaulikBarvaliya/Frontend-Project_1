import React, { useState, useEffect } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    },[])

    const signUpData = async () => {
        console.warn(name, email, password);
        let result = await fetch('http://localhost:5000/register', {

            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        result = await result.json();
        console.log(result);
        // localstoreg data save 
        localStorage.setItem("user",JSON.stringify(result));
        navigate('/');
    }

    return (
        <>
            <div className="signUpDiv">
                <h1>Register</h1>
                <input className='inputBox' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' />
                <input className='inputBox' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' />
                <input className='inputBox' type="passwordrd" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Passwordrd' />
                <input className='Submitbtn' type="submit" value="SignUp" onClick={signUpData} />
            </div>
        </>
    )
}

export default Signup;