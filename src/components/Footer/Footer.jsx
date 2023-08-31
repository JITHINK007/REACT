import "./Footer.css";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <div class="footer-content">
        <h3>Health Assistant</h3>
        <p>
          We're here to improve your experience with your personalized health assistant.
          Contact us for any queries.
        </p>
        <ul class="socials">
          <li>
          <FaInstagram className="social-icons"/>
          </li>
          <li>
              <FaFacebookF className="social-icons"/>
          </li>
          <li>
            <FaYoutube className="social-icons"/>
          </li>
          <li>
            <FaLinkedinIn className="social-icons"/>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          copyright &copy; Health Assistant{" "}
        </p>
      </div>
    </footer>
  );
};
