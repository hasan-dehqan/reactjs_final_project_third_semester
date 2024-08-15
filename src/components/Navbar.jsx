import React from 'react';
import { links, socials } from "../data";
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        {links.map(link => (
          <li key={link.id}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <ul className="nav-socials">
        {socials.map(social => (
          <li key={social.id}>
            <Link href={social.url}>{social.icon}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
