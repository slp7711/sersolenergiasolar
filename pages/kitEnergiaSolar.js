import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/KitEnergiaSolar.module.css';

const KitEnergiaSolar = () => {
    return (
        <>
            <Head>
                <title>Kit Energia Solar</title>
                <meta name="keywords" content="Energia Solar" />
                <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <div className={styles.container}>
                <div className={styles.motivos}>
                    <h1>Motivos para investir um uma usina solar</h1>
                    <div className={styles.motivos_items}>
                        <h3>Para se livrar da fatura de energia elétrica</h3>
                        <p>Com uma usina solar instalada em sua casa, você reduz a fatura mensal em até 95%. É uma despesa a menos todo mês. Diga <q>Adeus</q> a bandeira amarela, bandeira vermelha.</p>
                    </div>
                    <div className={styles.motivos_items}>
                        <h3>Fonte de energia limpa e inesgotável</h3>
                        <p>Usina solar aproveita a irradiação solar para gerar energia. 25 anos de geração de energia de forma sustentável.</p>
                    </div>
                    <div className={styles.motivos_items}>
                        <h3>Evitar o corte de árvores</h3>
                        <p>Com energia solar você evita o corte de árvores ou a queima de combustíveis fósseis, preservando o meio ambiente.</p>
                    </div>
                    <div className={styles.motivos_items}>
                        <h3>Investimento seguro</h3>
                        <p>Com a <b>Serso Energia Solar</b> você pode negociar o pagamento da sua usina após a instalação e habilitação pela concessionária.</p>
                    </div>
                    <div className={styles.motivos_items}>
                        <h3>Valorização do seu imóvel</h3>
                        <p>A instalação de uma usina solar em sua casa promove a valorização do imóvel.</p>
                    </div>
                    <div className={styles.motivos_items}>
                        <h3>Investimento com retorno rápido</h3>
                        <p>O tempo médio de retorno do investimento em uma suina solar é de 4,5 anos. Ou seja, você rapidamente recupera o valor investido.</p>
                    </div>
                </div>
                <div className={styles.kit}>
                    <h1>Kit Energia Solar - Promoção especial</h1>
                    <div className={styles.kit_description}>
                        <div className={styles.kit_image}>
                            <Image src="/kit.jpg" width={400} height={300} alt="imagem kit de energia solar"/>
                        </div>
                        <div className={styles.kit_resumo}>
                            <p>Potência: 2,38Kwp</p>
                            <p>Energia produzida: até 280 Kh/mês</p>
                            <p>Paineis: 4 x 595 Wp Luxen</p>
                            <p>Microinversor: 1 x SUN2000 Deye</p>
                            <p>Estrutura de fixação: inclusa -  de acordo com o tipo de telhado</p>
                            <p>Projeto:  incluso - elaboração e aprovação junto a concessionária</p>
                            <p>Instalação: Kit instalado e liberado para conecção a rede da concessionária</p>
                            <p>Promoção especial: R$ 9.628,00</p>
                            <p>Sua usina funcionando em 30 dias</p>
                            <p>Entre em contato conosco agora mesmo e garanta a sua usina solar com as melhores condições do mercado.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default KitEnergiaSolar;