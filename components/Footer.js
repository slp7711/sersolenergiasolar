import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer>
            <Link href="https://wa.me/message/NBSFTXZSDQ55B1">
                <a target="_blank" rel="noopener noreferrer">
                <Image src="/whatsapp-image.jpeg" width={200} height={100}/>
                </a>
            </Link>
            <p>Entre em contato conosco - WhatsApp 47-98808.3599</p>
            <p>CNPJ - 45.645.007/0001-07</p>
            <p>Blumenau SC</p>
        </footer>
    );
}
 
export default Footer;