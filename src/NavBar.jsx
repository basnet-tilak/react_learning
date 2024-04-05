import {Link} from 'react-router-dom';

import './styles/NavBar.css';

const NavBar = () => {
  return (
    <div id="topnav">
      <nav>
        <ul id="nav-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/article">Articles</Link>
          </li>
          <li>
            <div id="login-id">
              <Link to="/login">Log-In</Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
