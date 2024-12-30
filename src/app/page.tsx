import Image from "next/image";
// import signature from "../../public/images/signature.png";
import aboutMe from "../../public/images/v2.jpeg";
import BootstrapWrapper from "./bootstrap-client";

export default function Home() {
  return (
    <>
      <div className="section sec-intro">
        <div className="v-line"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="content" data-aos="fade-up">
                <div className="v-line"></div>
                <h2 className="heading mb-5">
                  Championing Justice, Sustainability, and Innovation
                </h2>

                <p>
                  Welcome to my official website! As a lawyer specialising in
                  Alternative Dispute Resolution and Arbitration with a passion
                  for green economic transformation, I am dedicated to advancing
                  sustainable development and supporting communities in need.
                </p>

                <p>
                  My work spans international arbitration, investment law,
                  mental health advocacy, and tech-driven solutions. Explore my
                  journey, my projects, and my vision for creating lasting
                  impact.
                </p>

                {/* <Image
                  src={signature}
                  alt="Signature"
                  className="img-fluid signature"
                  width={100}
                  height={100}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section sec-about-me bg-light">
        <div className="box-wrap">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-6 z-2" data-aos="fade-up">
                <span className="subheading">About me</span>
                <h2 className="heading mb-5">
                  Victoria <br /> Paintsil
                </h2>

                <div className="box">
                  <p>
                    I’m Victoria Paintsil, an attorney with a diverse background
                    in law, arbitration, and community advocacy. With experience
                    spanning Ghana, the UK, and beyond, I bring a unique
                    perspective to legal practice, combining international
                    exposure, a commitment to social impact, and innovative
                    thinking.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 z-1">
                <div
                  className="img-wrap"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <div style={{ height: '600px', overflow: 'hidden' }}>
                    <Image
                      src={aboutMe}
                      alt="Image"
                      className="img-fluid"
                      width={751}
                      height={771}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BootstrapWrapper />
    </>
  );
}
