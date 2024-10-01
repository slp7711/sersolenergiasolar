import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    },[router])

    return (
        <div className="not-found">
            <h1>Ooooops.....</h1>
            <h2>Página solicitada não existe..</h2>
            <p>Retorne para o <Link href="/"><a>Página Inicial</a></Link></p>
        </div>
    );
}
 
export default NotFound;