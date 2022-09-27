import { Link } from "react-router-dom"
import styled from "styled-components"

const StyleMenu = styled.nav `
    background-color: #999;
    height: 15vh;
    display: flex;
    justify-content: center;

    ul {
        display: flex;
        justify-content: space-evenly;
    }

    ul li {
        list-style: none;
    }

    ul li a {
        padding: 20px;
        display: inline-block;
        text-decoration: none;
        color: white;
        font-size: 1.5em;
    }
`

function Menu() {
    return(
        <>
            <StyleMenu>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/lista-tarefas"}>Tarefas</Link></li>
                </ul>
            </StyleMenu>
        </>
    )
}

export default Menu