import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/SubestacaoAerea.module.css'

const SubestacaoAerea = () => {
    return (
        <>
            <Head>
            <title>Subestação Aérea</title>
            <meta name="keywords" content="Energia Solar" />
            <meta name="description" content="Sersol Energia Solar empresa de energia fotovoltaica" />
            <link rel="icon" href="/logo.jpg" />
            </Head>
            <div className={styles.container}>
                 <h1>Projetos de Subestação Aérea</h1>
                <div className={styles.container_items}>
                    <div>
                        <Image src="/subestacao-aerea.jpeg" width={400} height={300}/>
                    </div>
                    <div className={styles.description}>
                        <p>Quando a carga instalada na unidade consumidora ultrapassar 75 KWA será necessário a instalação de uma substação de entrada de energia em média ou alta tensão, que podem ser aéreas ou abrigadas, sendo a primeira a mais comum.</p>
                        <p>Essas subestações consistem basicamente na instalação de um transformador de energia, corretamente dimensionado, com os seus sistemas de proteção. Parece complicado, mas realmente não é, porém requer muito cuidado na hora de projetar.</p>
                        <p>Porque é importante eu instalar uma subestação no meu comércio ou indústria?  Por  ser uma exigência das concessionárias, quando a carga instalada ultrapassar o montante citado anteriormente, mas também porque isso irá proporcionar economia na conta de energia, pois normalmente o valor cobrado pelo KW será menor quando se tem uma substação de energia.</p>
                        <p>Consulte um engenheiro eletricista ou eletrotécnico e avalie se é interessante para o seu caso específico.</p>
                        <p>A Sersol Energia Solar está a sua disposição para esclarecer as suas dúvidas. Entre em contato conosco.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SubestacaoAerea;