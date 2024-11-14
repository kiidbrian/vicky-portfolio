import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const PageLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Header />
      <div
        className="hero overlay"
        style={{backgroundImage: "url('/images/hero_1.jpg')"}}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 relative">
              <span className="subheading d-block" data-aos="fade-up">
                Welcome
              </span>
              <h1
                className="heading mb-5"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Need a legal help?
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                <a href="#" className="btn btn-outline-primary bg_dark">
                  Practice Area
                </a>
              </p>

              <div className="v-line"></div>
            </div>
          </div>
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;
