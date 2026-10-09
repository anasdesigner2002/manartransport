import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faEnvelope, faLocationDot, faMessage } from "@fortawesome/free-solid-svg-icons";
import { Link } from "wouter";
import { contact } from "@/data/siteData";
import { buildWhatsAppContactUrl } from "@/utils/whatsapp";

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-main container">
      <div className="footer-brand-col">
        <Link href="/" className="brand-lockup brand-lockup--footer"><img className="brand-logo brand-logo--footer" src="/images/logo.png" alt="" /><span className="brand-copy"><strong>MANAR</strong><small>TRANSPORT</small></span></Link>
        <p>Considered transportation for Saudi journeys, airport transfers, and Hajj &amp; Umrah travel planning.</p>
        <nav className="footer-socials" aria-label="Social media">
          <a href="http://tiktok.com/@manar.transport" target="_blank" rel="noopener noreferrer" aria-label="TikTok" title="TikTok"><FontAwesomeIcon icon={faTiktok} /></a>
          <a href="https://www.youtube.com/@ManarTransport" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="https://www.instagram.com/manartransport" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.facebook.com/profile.php?id=61594710671023" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
        </nav>
        <a className="footer-whatsapp" href={buildWhatsAppContactUrl()} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMessage} /> WhatsApp the team <FontAwesomeIcon icon={faArrowRight} /></a>
      </div>
      <div><span className="footer-label">Navigate</span><div className="footer-links"><Link href="/services">Services</Link><Link href="/fleet">Fleet</Link><Link href="/about">About</Link><Link href="/info">Information</Link><Link href="/contact">Contact</Link></div></div>
      <div><span className="footer-label">Company</span><div className="footer-links"><Link href="/policies/privacy">Privacy Policy</Link><Link href="/policies/terms">Terms &amp; Conditions</Link><Link href="/policies/refund">Refund Policy</Link></div></div>
      <div className="footer-contact"><span className="footer-label">Contact</span><a href={buildWhatsAppContactUrl()} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faMessage} /> {contact.whatsapp}</a><a href={`mailto:${contact.email}`}><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</a><span><FontAwesomeIcon icon={faLocationDot} /> {contact.address}</span></div>
    </div>
    <div className="footer-bottom container"><span>© <a href="https://aximuscodecom.vercel.app/" target="_blank" rel="noopener noreferrer" className="footer-year-link">{new Date().getFullYear()}</a> Manar Transport. All rights reserved.</span><span>Built for safe, comfortable movement.</span></div>
  </footer>;
}
