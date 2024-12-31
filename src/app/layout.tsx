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
}: // children,
Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Site under renovation message */}

        {/* Commented out original code */}
        <div className="site-mobile-menu site-navbar-target">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle"></span>
            </div>
          </div>
          <div className="site-mobile-menu-body"></div>
        </div>
        <Preloader />
        <BootstrapWrapper />
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
