import Link from "next/link"
import router from 'next/router'


export default function rotas() {
    function navegacaoSimples(url){
        router.push(url)
    }

    function navegacaoComParams(){
        router.push({
            pathname: "/rotas/params",
            query: {
                id: 123,
                nome: 'Ana Silva'
            }
        })
    }

    return (
        <div>
            <h1>Rotas</h1>

            <ul>
                <Link href="/rotas/params?id=123&nome=Ana">
                    <li>Params</li>
                </Link>
                <Link href="/rotas/123/buscar">
                    <li>Buscar</li>
                </Link>
                <Link href="/rotas/123/Daniel">
                    <li>Daniel</li>
                </Link>

                <div>
                    <button onClick={navegacaoComParams} >Params</button>
                    <button onClick={() => router.push("/rotas/123/buscar")} >Buscar</button>
                    <button onClick={() => navegacaoSimples("/rotas/123/Daniel")} >Daniel</button>
                </div>

            </ul>
        </div>
    )
}