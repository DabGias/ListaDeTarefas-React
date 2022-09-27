import styled from "styled-components"
import { FaTrashAlt as X } from "react-icons/fa"

const StyleTarefa = styled.div `
    background-color: #ffff90;
    border: 2px solid #333;
    box-shadow: 5px 5px 5px #333;
    padding: 20px;
    text-align: center;
    width: 350px;
    height: 200px;
    margin: 10px;

    h2, p {
        font-family: cursive;
        padding-bottom: 10px;
    }

    button {
        cursor: pointer;
        padding: 10px;
        background-color: #ff4d4d;
        border-radius: 10px;
    }
`

function Tarefa(props) {
    return(
        <StyleTarefa>
            <h2>{props.titulo}</h2>
            <p>Para: {props.setor}</p>
            <p>Descrição: {props.desc}</p>
            <button onClick={props.remov}><X/></button>
        </StyleTarefa>
    )
}

export default Tarefa