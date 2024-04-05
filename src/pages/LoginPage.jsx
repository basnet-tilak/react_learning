import {useState, useEffect} from 'react';
import '../styles/LoginPage.css';

const LoginPage = () => {
  const [username, setUsername] = useState ('');
  const [password, setPassword] = useState ('');
  const [time, setTime] = useState (new Date ());

  const handleSubmit = e => {
    e.preventDefault ();
    alert (`Username: ${username}, Password: ${password}`);
    // Here you can perform any further actions like sending the data to a server for authentication
  };

  useEffect (() => {
    const interval = setInterval (() => {
      setTime (new Date ());
    }, 1000);

    return () => clearInterval (interval);
  }, []);

  return (
    <div className="container">
      <div id="imgContainer">
        <div id="clock">
          {time.toLocaleTimeString ()}
        </div>
      </div>
      <div id="loginContainer">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername (e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword (e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <br />
          <a href="/registration" id="linkRegistration">
            If you do not have an account create an account{' '}
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
