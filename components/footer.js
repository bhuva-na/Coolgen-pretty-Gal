import styles from '../styles/Footer.module.css';
import { FaFacebook, FaInstagram, FaYoutube, FaPhoneAlt, FaEnvelope, FaGlobe, FaWhatsapp, FaTelegram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.brand}>
                        <img src="/logodw.png" alt="Pretty Gal" className={styles.logo} />
                        <p className={styles.text}>
                        Step into a world of elegance and trend with our curated collection of dresses, bags, and ornaments — designed to let your style shine and your confidence soar.
                        </p>
                    </div>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
                    </div>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.heading}>QUICK LINKS</h3>
                    <ul className={styles.list}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/product">Product</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.heading}>SUPPORT</h3>
                    <ul className={styles.list}>
                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                        <li><a href="/refund-policy">Refund and Returns Policy</a></li>
                        <li><a href="/shipping-policy">Shipping Policy</a></li>
                        <li><a href="/terms-conditions">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3 className={styles.heading}>CONTACT US</h3>
                    <p className={styles.text}>S L Nivas, 1st floor,<br />
                    Marthandam<br />
                       Kanyakumari, Tamilnadu </p>
                    <p className={styles.text}><FaEnvelope /> hello@coolgentech.com</p>
                    <p className={styles.text}><FaGlobe /> www.coolgentech.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;