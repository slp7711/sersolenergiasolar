import Image from 'next/image';
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.jpg" width={128} height={77} />
            </div>
            <Link href="/"><a>Início</a></Link>
            <Link href="energiaSolar"><a>Energia Solar</a></Link>
            <Link href="kitEnergiaSolar"><a>Kit Energia Solar</a></Link>
            <Link href="predial"><a>Predial</a></Link>
            <Link href="medicaoAgrupada"><a>Medição Agrupada</a></Link>
            <Link href="subestacaoAerea"><a>Subestação Aérea</a></Link>
            <Link href="energiaLivre"><a>Energia Livre</a></Link>
        </nav>
    );
}
 
export default Navbar;