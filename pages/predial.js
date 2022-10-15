import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Predial.module.css';

const Predial = () => {
    return (
        <>
            <Head>
            <title>Predial</title>
            <meta name="keywords" content="Energia Solar" />
            <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
            <link rel="icon" href="/logo.jpg" />
            </Head>
            <div className={styles.container}>
                <div>
                <Image src="/projeto-eletrico-residencial.jpeg" width={400} height={300}/>
            </div>
                <div>
                    <h1>Instalações Elétricas Prediais</h1>
                    <p>Hoje é praticamente impossível vivermos sem energia elétrica, e quase tudo depende direta ou inderetamente dela para funcionar. Você consegue imaginar sua casa sem energia elétrica?</p>
                    <p>Assim como é de grande valia para o homem, a energia é perigosa e precisa ser manuseada de forma adequada, visando o conforto e qualidade de vida.</p>
                    <p>Um projeto de instalação elétrica visa tirar o maior proveito possível desse recurso, para satisfazer as necessinades humanas, com otimização de recursos e garantindo segurança de pessoas e animais.</p>
                    <p>A importância de um projeto adequado de instalação elétrica reside no grande potencial que a energia elétrica tem para tornar a vida humana mais confortável, mas também no perigo que representa, se manejada de forma inadequada</p>
                    <p>Ao dar o primeiro passo na realização do sonho da casa própria, já pense a respeito do projeto elétrico. Converse com um engenheiro eletricista ou eletrotécnico e aproveite ao máximo o que energia elétrica pode nos proporcionar, conciliando economia e segurança.</p>
                    <p>A Sersol Energia Solar devenvolve seu projeto de forma personalizada, atendimento rápido (7 dias) e acompanhamento pós venda, até aprovação na concessionária e execução da obra.</p>
                    <p></p>
                    <p></p>
                </div>
            </div>
        </>
    );
}
 
export default Predial;