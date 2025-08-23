import Link from "next/link"

export default function Menu() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            <ul className="navigation">
                <li className="current">
                    <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                </li>
                <li>
                    <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
                </li>
                <li>
                    <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a>
                </li>
                <li>
                    <a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a>
                </li>
                <li>
                    <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a>
                </li>

            </ul>
        </>
    )
}
