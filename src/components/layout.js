import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import './layout.css';

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>My Portfolio</title>
      <meta name="description" content="Welcome to my portfolio website where I showcase my projects and skills." />
      <meta name="keywords" content="portfolio, developer, projects, skills" />
      <meta name="author" content="Your Name" />
    </Helmet>
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>© {new Date().getFullYear()} My Portfolio</footer>
  </div>
);

export default Layout;
