import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/EnergiaLivre.module.css';

const EnergiaLivre = () => {
    return (
        <>
        <Head>
            <title>Energia Livre</title>
            <meta name="keywords" content="Energia Solar" />
            <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
            <link rel="icon" href="/logo.jpg" />
        </Head>
        <div className={styles.container}>
            <h1>Mercado Livre de Energia</h1>
            <div className={styles.container_items}>
                <div>
                    <Image src="/mercado-livre-energia.jpeg" width={400} height={300}/>
                </div>
                <div className={styles.description}>
                    <p>Hoje já é possível negociar a compra de energia elétrica diretamente da geradora. Apesar de ainda não contemplar a totalidade do mercado, muitas empresas já podem usufruir desta possibilidade e adquirir energia mais barata e de fontes renováveis, como eólica e fotovoltaica.</p>
                    <p>Ano a ano as barreiras para acesso ao mercado de energia livre tem sido reduzidas, ampliando o público alvo com possibiidade de acesso.</p>
                    <p>Atualmente somente quem tem demanda contratada junto a concessionária superior a 500 KW pode aderir ao mercado livre de energia.</p>
                    <p>Entretanto, algumas empresas dedicadas ao comércio de energia desenvolveram produtos que possibilitam atender  connsumidores empresariais com demanda contratada menor que 500 KW, sendo necessário desenvolver um estudo de viabilidade financeira para isso. Em muitos casos é perfeitamente viável a inclusão desses clientes no mercado livre de energia.</p>
                    <p>A Sersol Energia Solar é especializada em consultoria e migração para o mercado livre de energia. </p>
                    <p>Entre em contato conosco e solicite uma consultoria sem compromisso, sem custos para sua empresa. Teremos o maior prazer em lhe ajudar nessa questão.</p>
                </div>
            </div>
        </div>
        </>
    );
}
 
export default EnergiaLivre;