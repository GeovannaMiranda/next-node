export default function questao(req, res) {
    const id = req.query.id
    if (req.method === 'GET') {
        res.status(200).json({
            id,
            enunciado: "Qual é  a sua cor preferida?",
            resposta: [
                'Branca', 'Vermelha', 'Amarela', 'Verde'
            ]
        })
    } else {
        res.status(405).send()
    }
}