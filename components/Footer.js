import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';
import GoogleTag from './Google-tag';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <GoogleTag></GoogleTag>
            <Link href="https://wa.me/message/NBSFTXZSDQ55B1">
                <a target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp-image.jpeg" width={200} height={100} alt="whatsapp icon image"/>
                </a>
            </Link>
            <p>Entre em contato conosco - WhatsApp 47-98808.3599</p>
            <p>CNPJ - 45.645.007/0001-07</p>
            <p>Blumenau SC</p>
        </div>
    );
}
 
export default Footer;