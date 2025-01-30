"use client";
import {usePathname} from "next/navigation";
import Link from "next/link";
export default function PostLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname();
  const isBlogPage = pathname.endsWith("/blog");
  return (
    <div className="section sec-intro">
      <div className="v-line"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto">
            <div className="content" data-aos="fade-up">
              <div className="v-line"></div>

              {children}

              {!isBlogPage && (
                <Link href="/blog" className="read-more">
                  ← Back to Blog
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
