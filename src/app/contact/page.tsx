import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="row">
          {/* Contact Form Column */}
          <div className="col-lg-7">
            <div className="contact-form-wrap" data-aos="fade-up">
              <h3 className="heading3 mb-4">Get In Touch</h3>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="col-lg-4 offset-lg-1">
            <div
              className="contact-info"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="heading3 mb-4">Contact Information</h3>

              <div className="contact-info-item mb-4">
                <h4>Email</h4>
                <a href="mailto:vpaintsilc@gmail.com" className="contact-link">
                  vpaintsilc@gmail.com
                </a>
              </div>

              <div className="contact-info-item mb-4">
                <h4>Location</h4>
                <p>Ghana, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
