import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
    <footer className="footer-container">
      <div className="footer-content">
        <Image src="/assets/logo-footer.png" alt="Logo SoftOwn Solutions" width={200} height={150} />
        <p>©<strong> SoftOwn 2024.</strong> Todos os direitos reservados.</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>
    </footer>
  );
  }

  