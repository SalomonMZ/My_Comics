import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <h2>Made with ♥ by: Salomon Moreno</h2>
      <div className="Footer--social">
        <img
          src="https://www.seekpng.com/png/detail/30-301979_logo-for-website-linkedin-logo-vector-free-download.png"
          alt="Logo_LinkedIn"
        />
        <a
          href="http://www.linkedin.com/in/salomonmz-848637162"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
