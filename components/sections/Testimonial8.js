import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
  pagination: true,
	autoplay: {
		delay: 25000,
		disableOnInteraction: false,
	},
	loop: true
};
const Testimonial8 = () => {
	return (
	<>
  <section className="testimonial-section style-three">
    <div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-testimonial1.png)' }}></div>
    <div className="instagram1-7 bounce-y"></div>
    <div className="testimonial-pattrn1-2 bounce-x"></div>
    <div className="auto-container">
      <div className="sec-title text-center">
        <figure className="image"><img src="images/icons/icon1.png" alt="Image"/></figure>
        <span className="sub-title">Testimonial</span>
        <h2 className="words-slide-up text-split">What they say?</h2>
      </div>
      <div className="carousel-outer col-lg-8 offset-lg-2">
            <Swiper {...swiperOptions} className="testimonial-carousel-three owl-carousel owl-theme default-dots">
              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                    </div>
                    <div className="text">"Leticia is amazing! I’ve never trusted anyone with my brows before, but she made me feel comfortable from the start. She takes her time mapping everything perfectly and explains the process. My brows look so natural and clean—exactly what I wanted. I left her studio feeling more confident than ever."</div>
                    <div className="info-box">
                      <h4 className="name"></h4>
                      <span className="designation"></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
      
              <SwiperSlide className="slide-item">
                <div className="testimonial-block">
                  <div className="inner-box text-center">
                    <div className="rating">
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                      <i className="icon fa fa-star"></i>
                    </div>
                    <div className="text">"Leticia goes above and beyond! She doesn’t just shape your brows—she customizes the look to fit your face. She listened to my concerns and created the exact style I had in mind. On top of that, she’s super sweet and makes the whole appointment enjoyable. I finally found my go-to brow artist!"</div>
                    <div className="info-box">
                      <h4 className="name"></h4>
                      <span className="designation"></span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
      </div>
    </div>
  </section>
	</>
	);
};
export default Testimonial8
