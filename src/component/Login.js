import React, { useEffect, useState } from 'react'
import '../App.css';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(()=>{

        const auth = localStorage.getItem("user");
        if (auth) {
            navigate('/');
        }
    },[]);

    const handleLogin = async () =>{

        console.log(email,password);

        let result = await fetch('http://localhost:5000/login',{

        method:"post",
        body: JSON.stringify({email,password}),
        headers:{
            'Content-Type':'application/json'
        }
        });
        result = await result.json();
        console.log(result);
        if (result.name) {
            localStorage.setItem("user",JSON.stringify(result));
            navigate('/');
        } else {
            alert("Please enter Valid Email and Password");   
        }
    }

    return (
        <>
            <div className="loginDiv">
            <h1>LogIn</h1>
                <input type="email" className="inputBox" placeholder='name@gmail.com' onChange={(e)=>setEmail(e.target.value)}  />
                <input type="password" className="inputBox" placeholder='password' onChange={(e)=>setPassword(e.target.value)} />
                <button type="button" className="Submitbtn" onClick={handleLogin}>LogIn</button>
            </div>
        </>
    )
}
export default Login;