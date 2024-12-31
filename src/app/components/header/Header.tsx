'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  type?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "active" : "";
  };

  return (
    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <Link href="/" className="logo m-0 float-left">
              victoria<span className="text-primary">.</span>
            </Link>

            <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
              <li className={isActive("/")}>
                <Link href="/" className="">
                  Home
                </Link>
              </li>
              <li className={isActive("/about")}>
                <Link href="/about" className="">
                  About
                </Link>
              </li>
              <li className={`has-children ${isActive("/projects")}`}>
                <Link href="/projects" className="">
                  Projects
                </Link>
                <ul className="dropdown">
                  <li>
                    <a href="#">Harmony Haven Foundation</a>
                  </li>
                  <li>
                    <a href="#">Young Diplomats of Ghana (YDG) Leadership</a>
                  </li>
                  <li>
                    <a href="#">The LawPrep</a>
                  </li>
                  {/* <li className="has-children">
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
                    </li> */}
                </ul>
              </li>
              {/* <li>
                <Link href="/services" className="">
                  Services
                </Link>
              </li> */}
              <li className={isActive("/contact")}>
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
