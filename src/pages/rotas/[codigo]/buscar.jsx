import { useRouter } from "next/router"

export default function buscar(){
    const router = useRouter()
    const codigo = router.query.codigo

    return(
        <div>
            <h1>Rotas/ {codigo} / Buscas</h1>
        </div>
    )
}

//rota dinamica
