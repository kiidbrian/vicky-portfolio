"use client";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Construct email body
    const emailBody = `
      Name: ${name}
      From: ${email}
      
      ${message}
    `;

    // Open default mail client
    window.location.href = `mailto:vpaintsilc@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(emailBody)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6 mb-4">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-6 mb-4">
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          name="subject"
          type="text"
          className="form-control"
          placeholder="Subject"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          className="form-control"
          rows={5}
          placeholder="Your Message"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Send
      </button>
    </form>
  );
}
