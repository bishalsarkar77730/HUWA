import React from 'react'
import "./Home.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} All Right Reserved by(Huwa).</p>
        </div>
      </footer>
    </>
  );
}

export default Footer