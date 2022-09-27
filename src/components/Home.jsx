import styled from "styled-components"

const StyleHome =styled.div `
    width: 100%;
    height: 85vh;
    background-color: #bbf;
    border-radius: 20px;

    h1, p {
        width: 70%;
        margin: auto;
        padding: 20px;
        text-align: center;
    }
`

function Home() {
    return(
        <StyleHome>
            <h1>Página Principal do Projeto</h1>
            <p>Projeto de controle de Tarefas</p>
        </StyleHome>
    )
}

export default Home