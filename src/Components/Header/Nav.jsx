import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About Us
        </Link>
      </li>

      <li className="menu-item-has-children">
        <Link to="#" onClick={() => setMobileToggle(false)}>
          Products
        </Link>
        <DropDown>
          <ul>
            <li>
              <a href="https://www.gymalyze.com" target="_blank" rel="noopener noreferrer">
                GymAlyze
              </a>
            </li>
            <li>
              <Link to="/project2" onClick={() => setMobileToggle(false)}>
                ZettAI
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/team" onClick={() => setMobileToggle(false)}>
          Our Team
        </Link>
      </li>

      <li>
        <Link to="/careers" onClick={() => setMobileToggle(false)}>
          Careers
        </Link>
      </li>

      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Support
        </Link>
      </li>
    </ul>
  );
}
