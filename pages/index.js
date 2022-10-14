import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sersol Energia Solar</title>
        <meta name="keywords" content="Energia Solar" />
        <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div>
        <h1 className={styles.title}>Sersol Energia Solar Home page</h1>
        <h3 className={styles.title}>Quem somos</h3>
        <p className={ styles.text}>A Sersol Energia Solar possui sede no município de Blumenau-SC. É uma empresa especializada em desenvolver, viabiliar e implantar soluções em energia solar fotovoltaica, agregando valor aos seus clientes e contribuindo com a preservação do meio ambiente.</p>
        <p className={ styles.text}>Nossa atuação busca a sustentabilidade, implantando usinas solares que geram energia limpa e renovável, contribuindo para a redução da emissão de gás carbônico e preservando nossas florestas. Essa atitude responsável pode ser certificada, proporcionando economia financeira para os clientes e atraindo novos parceiros de negócios.</p>
      </div>
      <div className={styles.links}>
        <Link href="/energiaSolar">
          <a>
            <Image src="/energia-solar.jpeg" width={200} height={100}/>
            <p>Projetos de Energia Solar</p>
          </a>
        </Link>
        <Link href="/kitEnergiaSolar">
          <a>
            <Image src="/kit.jpg" width={200} height={100}/>
            <p>Kits de Energia Solar</p>
          </a>
        </Link>
        <Link href="predial">
          <a>
            <Image src="/projeto-eletrico-residencial.jpeg" width={200} height={100}/>
            <p>Projetos Elétricos Residenciais</p>
          </a>
        </Link>
        <Link href="medicaoAgrupada">
          <a>
            <Image src="/medicao-agrupada.jpeg" width={200} height={100}/>
            <p>Projetos de Medição Agrupada</p>
          </a>
        </Link>
        <Link href="subestacaoAerea">
          <a>
            <Image src="/subestacao-aerea.jpeg" width={200} height={100}/>
            <p>Projetos de Subestações Aéreas</p>
          </a>
        </Link>
        <Link href="/energiaLivre">
          <a>
            <Image src="/mercado-livre-energia.jpeg" width={200} height={100}/>
            <p>Mercado Livre de Energia</p>
         </a>
        </Link>
      </div>
        
    </>
  )
}
