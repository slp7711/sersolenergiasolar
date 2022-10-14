import Head from "next/head";
import Image from "next/image";

const EnergiaSolar = () => {
    return (
        <>
            <Head>
                <title>Energia Livre</title>
                <meta name="keywords" content="Energia Solar" />
                <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
                <link rel="icon" href="/logo.jpg" />
            </Head>
            <div>
               <Image src="/energia-solar.jpeg" width={400} height={300}/>
             </div>
            <div>
                <h1>Projetos de Energia Solar</h1>
                <p>Energia solar é tendência e não moda. Cada vez mais sentimos necessidade de melhor usar os recursos do nosso planeta e também evitar o alto custo da energia elétrica.</p>
                <p>Quem investe em energia solar, melhora a qualidade de vida, não prejudica o meio ambiente e economiza dinheiro, pois reduz a fatura de energia a taxa mínima da concessionária.</p>
                <p>É um investimento com retorno rápido, normalmente entre 4 e 5 anos.</p>
                <p>Se você tem dinheiro guardado na poupança e continua pagamento todo mês a conta de energia, está jogando dinheiro fora, pois a aplicação rende muito, mas muito menos que o investimento em energia solar.</p>
                <p>Para aqueles quem não dispõe de recursos próprios, hoje existem diversas formas de financiamento, com prazos e taxas bem atrativas.</p>
                <p>Consulte um engenheiro eletricista ou eletrotécnico e peça orientação.</p>
                <p>A Sersol Energia Solar é especializada na elaboração de projetos de energia solar fotovoltaica, desde o adequado dimencionamento da usina, aprovação na concessionária, até a execução da obra e acompamento da produção.</p>
                <p>Já tem a usina instalada e gostaria apenas de aprovar na concessionária? Fale conosco.</p>
            </div>
        </>
    );
}
 
export default EnergiaSolar;