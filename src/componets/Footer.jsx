import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li>
          <Link to="/posts/categories/History">History</Link>
        </li>
        <li>
          <Link to="/posts/categories/Article">Article</Link>
        </li>
        <li>
          <Link to="/posts/categories/Quran">Quran</Link>
        </li>
        <li>
          <Link to="/posts/categories/Hadees">Hadees</Link>
        </li>
        <li>
          <Link to="/posts/categories/Islam">Islam</Link>
        </li>
        <li>
          <Link to="/posts/categories/UpToDate">UpToDate</Link>
        </li>
        <li>
          <Link to="/posts/categories/Fiqh">Fiqh</Link>
        </li>
        <li>
          <Link to="/posts/categories/Humanity">Humanity</Link>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>All Rights Reserved &copy; Copyright, Al Jawahir Magazine</small>
      </div>
    </footer>
  );
};

export default Footer;
