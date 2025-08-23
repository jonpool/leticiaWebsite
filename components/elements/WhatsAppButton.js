import Link from "next/link"

export default function WhatsAppButton() {
    const phoneNumber = "18578886973" // Phone number in international format without + or spaces
    const message = "Hello! I'm interested in your services." // Default message
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

    return (
        <>
            <div className="whatsapp-button">
                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <div className="whatsapp-icon">
                        <svg 
                            width="30" 
                            height="30" 
                            viewBox="0 0 24 24" 
                            fill="white"
                        >
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.130.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.125.549 4.119 1.515 5.85l-1.497 5.448 5.609-1.471c1.677.896 3.578 1.406 5.573 1.406 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        </>
    )
}

