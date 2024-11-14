import React from "react";
import Link from "next/link";

interface HeaderProps {
  type?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <Link href="/" className="logo m-0 float-left">
              victoria<span className="text-primary">.</span>
            </Link>

            <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
              <li className="active">
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className="has-children">
                <Link href="/projects" className="">
                  Projects
                </Link>
                <ul className="dropdown">
                    <li>
                      <a href="#">Menu One</a>
                    </li>
                    <li>
                      <a href="#">Menu Two</a>
                    </li>
                    <li className="has-children">
                      <a href="#">Dropdown</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Sub Menu One</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu Two</a>
                        </li>
                        <li>
                          <a href="#">Sub Menu Three</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
              </li>
              <li>
                <Link href="/services" className="">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="">
                  Contact
                </Link>
              </li>
            </ul>

            <a
              href="#"
              className="burger ms-auto float-end site-menu-toggle js-menu-toggle d-inline-block light d-lg-none"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
