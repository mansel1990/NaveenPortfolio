import React from "react";

const Footer = ({ theme }) => {
  return (
    <div className="container my-1">
      <footer className={`text-center footer ${theme}`}>
        <div className="container p-2 pb-0">
          <section>
            <a className="m-1" href="#!" role="button">
              <i className="fab fa-facebook-f"></i>
            </a>

            <a className="m-1" href="#!" role="button">
              <i className="fab fa-twitter"></i>
            </a>

            <a className="m-1" href="#!" role="button">
              <i className="fab fa-google"></i>
            </a>

            <a className="m-1" href="#!" role="button">
              <i className="fab fa-instagram"></i>
            </a>

            <a className="m-1" href="#!" role="button">
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a className="m-1" href="#!" role="button">
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
