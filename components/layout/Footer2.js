import Link from "next/link"

export default function Footer2() {
    return (
        <>
        <footer className="main-footer footer-style-two">
		<div className="bg bg-image" style={{ backgroundImage: 'url(/images/background/bg-footer1.jpg)' }}></div>

		<div className="widgets-section">
			<div className="footer1-1 bounce-x"></div>
			<div className="footer-pattrn1 bounce-y"></div>
			<div className="auto-container">
				<div className="row">

					<div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
						<div className="footer-widget about-widget">
							<div className="logo"><Link href="/"><img src="images/logo-2.png" alt=""/></Link></div>
							<div className="text">Proin efficitur, mauris vel condimentum pulvinar, velit orci consectetur ligul. </div>
							<div className="subscribe-form">
								<form method="post" action="#">
									<div className="form-group">
										<input type="email" name="email" className="email" defaultValue="" placeholder="Enter Your E-mail" required=""/>
										<button type="button" className="theme-btn"><span className="btn-title"><i className="fa-sharp fa-thin fa-paper-plane"></i></span></button>
									</div>
								</form>
							</div>
							<ul className="social-icon">
								<li><Link href="https://instagram.com/browsbyleticia" target="_blank"><i className="icon fab fa-instagram"></i></Link></li>
								<li><Link href="#"><i className="icon fab fa-facebook-f"></i></Link></li>
								<li><Link href="#"><i className="icon fab fa-pinterest-p"></i></Link></li>
								<li><Link href="#"><i className="icon fab fa-vimeo-v"></i></Link></li>
							</ul>
						</div>
					</div>

					<div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
						<div className="footer-widget links-widget">
							<h3 className="widget-title">Links</h3>
							<ul className="user-links">
								<li><Link href="#">About</Link></li>
								<li><Link href="#">Pricing</Link></li>
								<li><Link href="#">Shop</Link></li>
								<li><Link href="#">Contact</Link></li>
							</ul>
						</div>
					</div>

					<div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
						<div className="footer-widget timetable-widget">
							<h3 className="widget-title">Business Hours</h3>
							<ul className="timetable">
								<li>Tuesday to Wednesday : <span>8:00 AM – 7:00 PM</span></li>
								<li>Thursday: <span>8:00 AM – 6:00 PM</span></li>
								<li>Friday to Saturday: <span>8:00 AM – 5:00 PM</span></li>
								<li>Sunday to Monday: <span>Closed</span></li>
							</ul>
						</div>
					</div>

					<div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
						<div className="footer-widget contacts-widget">
							<h3 className="widget-title">Contact</h3>
							<div className="text">527 Main Street, 2nd Floor, Room 8 <br/> Melrose, MA 02176</div>
							<ul className="contact-info">
								<li><Link className="text-style-two" href="tel:857-888-6973">(857) 888-6973</Link></li>
								<li><Link className="text-style-one" href="mailto:lp.designmakeup@gmail.com">lp.designmakeup@gmail.com</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div className="footer-bottom">
			<div className="auto-container">
				<div className="inner-container">
					<div className="copyright-text">&copy; Purerelax, <Link href="/">Reserved By Kodesolution</Link></div>
				</div>
			</div>
		</div>
        </footer>

        </>
    )
}
