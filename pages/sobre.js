import Link from "next/link";
import { useState } from "react"

function Sobre(){
    return <div>
        <h1>Sobre</h1>
        <Link href="/">
            <a>Voltar para página de Home</a>
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


export default Sobre