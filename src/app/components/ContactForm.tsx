"use client";

import {useState} from "react";
import {trackContactForm} from "@/lib/gtag";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const formData = new FormData(e.currentTarget);
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      // Track form submission in analytics
      trackContactForm();

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

      setSubmitStatus("success");

      // Reset form after successful submission
      setTimeout(() => {
        (e.target as HTMLFormElement).reset();
        setSubmitStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-4">
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="col-md-6 mb-4">
            <input
              name="email"
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
              disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-4">
          <textarea
            name="message"
            className="form-control"
            rows={5}
            placeholder="Your Message"
            required
            disabled={isSubmitting}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="alert alert-success mt-3" role="alert">
          <i className="icon-check-circle me-2"></i>
          Thank you! Your message has been sent successfully. You should see
          your email client open shortly.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="alert alert-danger mt-3" role="alert">
          <i className="icon-alert-circle me-2"></i>
          Sorry, there was an error sending your message. Please try again or
          contact us directly at vpaintsilc@gmail.com
        </div>
      )}
    </div>
  );
}
