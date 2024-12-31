import Link from "next/link";

export default function Projects() {
  return (
    <div className="section sec-intro">
      <div className="v-line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="content" data-aos="fade-up">
              <div className="v-line"></div>
              <h2 className="heading mb-5">Projects & Initiatives</h2>

              <p>
                As a lawyer specialising in Alternative Dispute Resolution and
                Arbitration with a passion for green economic transformation, I
                am dedicated to advancing sustainable development and supporting
                communities in need.
              </p>

              <p>
                My work spans international arbitration, investment law, mental
                health advocacy, and tech-driven solutions. Explore my journey,
                my projects, and my vision for creating lasting impact.
              </p>

              <div className="projects-grid mt-5">
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <Link href="#" className="project-card">
                      <div className="card-content">
                        <h3>The LawPrep Project</h3>
                        <p>
                          Through the LawPrep Project, I aim to empower aspiring
                          lawyers, especially girls, with guidance and training
                          to navigate their career journeys. LawPrep offers
                          virtual and in-person sessions for young people,
                          providing insight into the legal profession and
                          helping them identify areas of specialization suited
                          to their capabilities. This initiative is my way of
                          addressing the lack of career mentorship I wished I
                          had during my own journey into law.
                        </p>
                        <span className="read-more">Learn More →</span>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Link href="#" className="project-card">
                      <div className="card-content">
                        <h3>Harmony Haven Foundation</h3>
                        <p>
                          As the founder of Harmony Haven Foundation, I am
                          dedicated to supporting mental health in marginalised
                          communities. We provide resources and organise events
                          focused on self-care, nutrition, and mental well-being
                          for individuals facing addiction, homelessness, and
                          other challenges. Our inaugural event in Tema brought
                          together vulnerable individuals for a day of games,
                          nutritious meals, and empowerment.
                        </p>
                        <span className="read-more">Learn More →</span>
                      </div>
                    </Link>
                  </div>

                  <div className="col-md-6 mb-4">
                    <Link href="#" className="project-card">
                      <div className="card-content">
                        <h3>Young Diplomats of Ghana (YDG) Leadership.</h3>
                        <p>
                          As a delegate for YDG Cohort V, I have engaged in
                          international relations and governance discussions,
                          bringing a focus on women in governance worldwide. I
                          was selected to present at the upcoming training
                          session, discussing ‘Women in Governance Across the
                          Globe’ with a spotlight on Ghana’s achievements.
                        </p>
                        <span className="read-more">Learn More →</span>
                      </div>
                    </Link>
                  </div>

                  {/* <div className="col-md-6 mb-4">
                    <Link
                      href="/projects/sustainable-development"
                      className="project-card"
                    >
                      <div className="card-content">
                        <h3>Sustainable Development</h3>
                        <p>
                          Green economic transformation and community
                          empowerment projects
                        </p>
                        <span className="read-more">Learn More →</span>
                      </div>
                    </Link>
                  </div> */}
                </div>
              </div>

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
  );
}
