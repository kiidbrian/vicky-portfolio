import type {Metadata} from "next";
// import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "./../../public/fonts/icomoon/style.css";
import "./../../public/fonts/flaticon/font/flaticon.css";
import "./../../public/css/tiny-slider.css";
import "./../../public/css/aos.css";
import "./../../public/css/style.css";

import "./globals.css";
import BootstrapWrapper from "./bootstrap-client";
import PageLayout from "./pageLayout";
import Preloader from "./components/preloader/Preloader";

export const metadata: Metadata = {
  title: "Victoria Paintsil",
  description:
    "Victoria Paintsil - Experienced Assistant State Attorney at the Government of Ghana | Expert in Legal Representation, International Law & Arbitration | Providing Professional Legal Services and Consultation",
  keywords: [
    "Victoria Paintsil",
    "Assistant State Attorney",
    "Legal Representation",
    "Legal Services",
    "Legal Advice",
    "Legal Consultation",
    "Arbitration",
    "International Law",
    "State Attorney",
  ],
  openGraph: {
    title: "Victoria Paintsil",
    description: "Assistant State Attorney for the Government of Ghana",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Site under renovation message */}
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: '#2d3436'
          }}>
            🚧 Website Under Renovation 🚧
          </h1>
          <p style={{
            fontSize: '1.2rem',
            maxWidth: '600px',
            lineHeight: '1.6',
            color: '#636e72'
          }}>
            We're currently updating our website to serve you better. 
            Please check back soon for an enhanced experience.
          </p>
          <div style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: '#2d3436',
            color: 'white',
            borderRadius: '30px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            Coming Soon
          </div>
        </div>
        {/* Commented out original code
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <PageLayout>{children}</PageLayout>
        <Preloader />
        <BootstrapWrapper />
        */}
      </body>
    </html>
  );
}
