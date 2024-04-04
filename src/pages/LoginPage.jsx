
import '../styles/LoginPage.css';
import React, { useState, useEffect } from 'react';

const LoginPage = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (

        <div className='container'>
            <div id='imgContainer'>
                <div id='clock'>
                    {time.toLocaleTimeString()}
                </div>
            </div>
            <div id='loginContainer'>
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Login</button>
                <br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/registration'>If you don't have an account, Register</a>
            </div>
        </div>

    );
}
export default LoginPage;