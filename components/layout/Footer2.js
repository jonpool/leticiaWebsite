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
							<div className="text">Book online or send a message through Instagram. Leticia personally handles all appointments and messages to ensure every client gets the best attention.</div>
							
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
							<h3 className="widget-title"></h3>
							<ul className="user-links">
								<li><Link href="#"></Link></li>
								<li><Link href="#"></Link></li>
								<li><Link href="#"></Link></li>
								<li><Link href="#"></Link></li>
							</ul>
						</div>
					</div>



					<div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
						<div className="footer-widget timetable-widget">
							<h3 className="widget-title">Business Hours</h3>
							<ul className="timetable">
								<li>Tue to Thu:  10:00 AM – 7:00 PM</li>
								<li>Friday: 10:00 AM – 6:00 PM</li>
								<li>Fri: 10:00 AM – 6:00 PM</li>
								<li>Sat: 9:00 AM – 3:00 PM</li>
								<li>Sun to Mon: Closed</li>
							</ul>
						</div>
					</div>

					<div className="footer-column col-xl-3  col-lg-6 col-md-6 col-sm-6">
						<div className="footer-widget contacts-widget">
							<h3 className="widget-title">Contact</h3>
							<div className="text">527 Main Street, 2nd Floor, Room 8 <br/> Melrose, MA 02176</div>
							<ul className="contact-info">
								<li><Link className="text-style-two" href="tel:+18578886973">(857) 888-6973</Link></li>
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
					<div className="copyright-text">&copy; Brows by Leticia <Link href="/"> All rights reserved</Link></div>
				</div>
			</div>
		</div>
        </footer>

        </>
    )
}
