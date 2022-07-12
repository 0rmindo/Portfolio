import Link from "next/link";
import { useState } from "react"

function Home(){
    return <div>
        <h1>Home</h1>
        <Link href="/sobre">
            <a>Ir para página de Sobre</a>
        </Link>
        <Contador />
    </div>
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1); 
    }
    return (
        <>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </>
    )
}


export default Home