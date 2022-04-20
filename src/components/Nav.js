import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul className="nav-ul">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
