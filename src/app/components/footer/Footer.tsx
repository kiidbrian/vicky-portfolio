import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="widget">
              <h3 className="widget-heading">About Me</h3>
              <p>
                An attorney with global experience in law, arbitration, and
                community advocacy, driven by innovation and social impact.
              </p>
              <p className="mb-0">
                <Link
                  href="/about"
                  className="btn btn-primary btn-primary-hover-outline"
                >
                  Learn more
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pl-lg-5">
            <div className="widget">
              <h3 className="widget-heading">Navigation</h3>
              <ul className="list-unstyled float-start me-5">
                <li>
                  <Link href="/">Overview</Link>
                </li>
                <li>
                  <Link href="/about">About me</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
              <ul className="list-unstyled float-start">
                <li>
                  <Link href="/projects">Projects</Link>
                </li>
                <li>
                  <Link href="#">Portfolio</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
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
              <ul className="list-unstyled footer-blog-entry">
                <li>
                  <span className="d-block date">June 16, 2025</span>
                  <Link href="/blog/a-new-era-for-peaceful-adr">
                    A New Era for Peaceful Dispute Resolution: Inside the
                    International Organization for Mediation (IOMed)
                  </Link>
                </li>
                {/* <li>
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
                </li> */}
              </ul>
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
                href="https://paapa.dev"
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
