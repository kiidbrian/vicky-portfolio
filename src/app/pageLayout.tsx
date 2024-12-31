"use client";
import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const PageLayout = ({children}: {children: React.ReactNode}) => {
  const pathname = usePathname();

  // Array of paths where hero should be shown
  const showHeroOnPaths = ["/", "/contact"];

  return (
    <div>
      <Header />
      {showHeroOnPaths.includes(pathname) && (
        <div
          className="hero overlay"
          style={{backgroundImage: "url('/images/backgg.jpg')"}}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-7 relative">
                <h1
                  className="heading mb-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Legal Expertise <br /> Global Impact <br /> Community
                  Empowerment
                </h1>
                <span className="subheading text-white" data-aos="fade-up">
                  Bridging the gap between law, technology, and sustainable
                  development for a better future.
                </span>
                <p data-aos="fade-up" data-aos-delay="300" className="mt-5">
                  <Link
                    href="/projects"
                    className="btn btn-outline-primary bg_dark"
                  >
                    Explore My Work
                  </Link>
                </p>

                <div className="v-line"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
