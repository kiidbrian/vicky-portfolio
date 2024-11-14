import Image from "next/image";
import signature from "../../public/images/signature.png";
import aboutMe from "../../public/images/about_me.jpg";
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
                  My promise to every client is to work tirelessly to obtain a
                  just result.
                </h2>

                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>

                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>

                <Image
                  src={signature}
                  alt="Signature"
                  className="img-fluid signature"
                  width={100}
                  height={100}
                />
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
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 z-1">
                <div
                  className="img-wrap"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
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
      <BootstrapWrapper />
    </>
  );
}
