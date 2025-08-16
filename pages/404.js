import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Custom404() {
  return (
    <Layout headerStyle={3} footerStyle={1}>
      <section className="error-section">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="error-content text-center">
                <div className="error-image">
                  <img src="/images/resource/404.jpg" alt="404 Error" />
                </div>
                <h1 className="error-title">404</h1>
                <h2 className="error-subtitle">Page Not Found</h2>
                <p className="error-text">
                  Sorry, the page you are looking for doesn't exist or has been moved.
                </p>
                <div className="btn-box">
                  <Link href="/" className="theme-btn btn-style-one">
                    <span className="btn-title">Back to Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

