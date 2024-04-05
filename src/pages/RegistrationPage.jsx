import {useState} from 'react';
import '../styles/RegistrationPage.css';

const RegistrationPage = () => {
  const [formData, setFormData] = useState ({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData ({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault ();
    // Here you can perform validation and submission logic
    console.log (formData);
  };

  return (
    <div className="registrationContainer">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
      
        <br/>
        <button type="submit">Register</button>

        <br />
        <br/>
        <a href="/login" id="linkRegistration">
            If you have already account please login
        </a>
      </form>
    </div>
  );
};
export default RegistrationPage;
