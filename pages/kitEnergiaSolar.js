import Head from "next/head";
import Image from "next/image";

const KitEnergiaSolar = () => {
    return (
        <>
            <Head>
                <title>Kit Energia Solar</title>
                <meta name="keywords" content="Energia Solar" />
                <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <div>
              <Image src="/kit.jpg" width={400} height={300}/>
            </div>
            <div>
                <h1>Kit Energia Solar</h1>
                <p>Potência: 2,38Kwp</p>
                <p>Energia produzida: até 280 Kh/mês</p>
                <p>Paineis: 4 x 595 Wp Luxen</p>
                <p>Microinversor: 1 x SUN2000 Deye</p>
                <p>Estrutura de fixação: inclusa -  de acordo com o tipo de telhado</p>
                <p>Projeto:  incluso - elaboração e aprovação junto a concessionária</p>
                <p>Instalação: Kit instalado e liberado para conecção a rede da concessionária</p>
                <p>Promoção especial: R$ 9.628,00</p>
                <p>Entre em contato conosco agora mesmo e garanta a sua usina solar com as melhores condições do mercado.</p>
            </div>
        </>
    );
}
 
export default KitEnergiaSolar;