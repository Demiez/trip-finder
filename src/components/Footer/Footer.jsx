import React from 'react';

import './Footer.scss';

const footer = () => (
  <footer className="footer">
    {/* <Link to="/" style={{ textDecoration: 'none' }}><span>ALEXCAR</span></Link> */}
    <div className="container">
      <span>Follow Us: </span>
      <a className="footer__link" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook-f" />
      </a>
      <a className="footer__link" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter" />
      </a>
      <a className="footer__link" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin-in" />
      </a>
      <a className="footer__link" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-youtube" />
      </a>
    </div>
  </footer>
);

export default footer;
