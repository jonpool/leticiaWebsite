import Link from "next/link"
const Pricing8 = () => {
    return (
        <>
        <section className="pricing-section-three pull-up">
          <div className="outer-box">
            <div className="container pb-0 pt-0">
              <div className="sec-title text-center">
                <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
                <span className="sub-title">Price</span>
                <h2 className="words-slide-up text-split">Brows By Leticia <br/>Services & Pricing</h2>
              </div>
              <div className="row">
                <div className="pricing-block-three col-lg-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price3-1.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">EYEBROW DESIGN (WAXING)</Link></h4>
                        <div className="text">Professional eyebrow shaping with wax</div>
                      </div>
                      <span className="price">$35.00</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-three col-lg-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price3-2.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">EYEBROW DESIGN + (HENNA OR TINT)</Link></h4>
                        <div className="text">Eyebrow shaping with color enhancement</div>
                      </div>
                      <span className="price">$50.00</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-three col-lg-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price3-3.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">BROW LAMINATION</Link></h4>
                        <div className="text">Transform your brows with lamination treatment</div>
                      </div>
                      <span className="price">$75.00</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-three col-lg-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price3-4.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">BROW LAMINATION + TINT</Link></h4>
                        <div className="text">Lamination with color enhancement</div>
                      </div>
                      <span className="price">$95.00</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-three col-lg-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price3-5.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">HIDRAGLOSS 💋</Link></h4>
                        <div className="text">Luxurious lip hydration and glossing treatment</div>
                      </div>
                      <span className="price">$70.00</span>
                    </div>
                  </div>
                </div>
                <div className="pricing-block-three col-lg-6">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image overlay-anim mb-0">
                        <Link href="page-pricing"><img src="images/resource/price3-6.png" alt="Image"/></Link>
                      </figure>
                    </div>
                    <div className="content-box">
                      <div className="inner">
                        <h4 className="title"><Link href="page-pricing">FULL FACE WAXING</Link></h4>
                        <div className="text">Complete facial hair removal service</div>
                      </div>
                      <span className="price">$25.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
};
export default Pricing8