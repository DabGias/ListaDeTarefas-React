import { useState } from "react"
import styled from "styled-components"
import FormTarefa from "./FormTarefa"
import Tarefa from "./Tarefa"

const StyleLista = styled.div `
    width: 80%;
    margin: auto;
    border-radius: 20px;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

function ListaTarefas() {
    const [tarefa, setTarefa] = useState([])

    const [nTarefa, setNTarefa] = useState({
        "titulo": "",
        "setor": "",
        "desc": ""
    })

    function captura(e) {
        setNTarefa({...nTarefa, [e.target.name]: e.target.value})
    }

    function addTarefa(e) {
        e.preventDefault()

        setTarefa([...tarefa, nTarefa])
    }

    function removTarefa(tar) {
        let lista = tarefa.filter((t) => t !== tar)

        setTarefa(lista)
    }

    return(
        <StyleLista>
            <FormTarefa addTarefa={addTarefa} tarefa={tarefa} digit={captura}/>

            {
                tarefa.map((tar, index) => <Tarefa
                    key = {index}
                    titulo = {tar.titulo}
                    setor = {tar.setor}
                    desc = {tar.desc}
                    remov = {removTarefa.bind(this, tar)}
                />)
            }
        </StyleLista>
    )
}

export default ListaTarefas