import React from "react";

interface FooterProps {
  // Define props here
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="widget">
              <h3 className="widget-heading">About Me</h3>
              <p>
                There live the blind texts. Separated they live in
                Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </p>
              <p className="mb-0">
                <a
                  href="#"
                  className="btn btn-primary btn-primary-hover-outline"
                >
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5">
            <div className="widget">
              <h3 className="widget-heading">Navigation</h3>
              <ul className="list-unstyled float-start me-5">
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Clients</a>
                </li>
                <li>
                  <a href="#">Find Us</a>
                </li>
                <li>
                  <a href="#">Webinars</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul className="list-unstyled float-start">
                <li>
                  <a href="#">Overview</a>
                </li>
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                </li>
                <li>
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5">
            <div className="widget">
              <h3 className="widget-heading">Follow me</h3>
              <ul className="list-unstyled social-icons">
                <li>
                  <a
                    href="https://www.instagram.com/cherub_vicky/"
                    target="_blank"
                  >
                    <span className="icon-instagram"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/victoria-paintsil-7b906593/"
                    target="_blank"
                  >
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="widget">
              <div className="footer-subscribe">
                <h3 className="widget-heading">Subscribe</h3>
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <button type="submit" className="btn">
                    <span className="icon-keyboard_backspace"></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5">
            <div className="widget">
              <h3 className="widget-heading">Recent Posts</h3>
              {/* <ul className="list-unstyled footer-blog-entry">
                <li>
                  <span className="d-block date">May 3, 2020</span>
                  <a href="#">There live the Blind Texts</a>
                </li>
                <li>
                  <span className="d-block date">May 3, 2020</span>
                  <a href="#">Separated they live in Bookmarksgrove right</a>
                </li>
                <li>
                  <span className="d-block date">May 3, 2020</span>
                  <a href="#">The Coast of the Semantics</a>
                </li>
                <li>
                  <span className="d-block date">May 3, 2020</span>
                  <a href="#">Large Language Ocean</a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="row copyright">
          <div className="col-lg-12 text-center ">
            <p className="mb-0">
              Copyright &copy; {new Date().getFullYear()} All rights reserved |
              Built with{" "}
              <i className="icon-heart text-danger" aria-hidden="true"></i> by{" "}
              <a
                href="https://kiidbrian.github.io"
                target="_blank"
                rel="nofollow noopener"
              >
                Braen
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
