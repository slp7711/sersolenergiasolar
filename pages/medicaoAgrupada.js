import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/MedicaoAgrupada.module.css';

const MedicaoAgrupada = () => {
    return (
        <>
            <Head>
            <title>Medição Agrupada</title>
            <meta name="keywords" content="Energia Solar" />
            <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
            <link rel="icon" href="/logo.jpg" />
            </Head>
            <div className={styles.container}>
                <h1>Projetos de Medição Agrupada</h1>
                <div className={styles.container_items}>
                    <div>
                        <Image src="/medicao-agrupada.jpeg" width={400} height={300}/>
                    </div>
                    <div className={styles.description}>
                        <p>Quando um único ramal de entrada energia irá atender diversas unidades consumidoreas, precisamos projetar um sistema de medição agrupada, para análise e aprovação da conssecionária.</p>
                        <p>O projeto tem por objetivo o correto dimencionamento de todos os componentes do sistema de alimentação elétrica do empreendimento, seja ele comercial ou residencial, garantindo o adequado funcionamento dos mesmos, bem como a segurança das pessoas.</p>
                        <p>Ao decidir empreender e construir um condomínio comercial ou residencial, consulte um engenheiro eletricista ou eletrotécnico para planejar desde cedo a parte elétrica do projeto. Isso irá lhe proporcionar economia e qualidade final na obra</p>
                        <p>Porque é importante pensar no projeto elétrico já no início do empreendimento?  A resposta é economia, tando de materiais quanto de serviços de ajustes e adaptações posteriores.</p>
                        <p>Como exemplo, se planejada junto com o projeto arquitetônico, as fundações do empreendimento podem ser usadas como sistema de aterramento, evitando gastos futuros para instalação de um sistema de SPDA - Sistema de Proteção de Descargas Atmosféricas.</p>
                        <p>A Sersol Energia Solar pode lhe ajudar nesse aspecto. Entre em contato conosco.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default MedicaoAgrupada;