import styled from "styled-components"

const StyleForm = styled.div `
    width: 100%;
    padding: 20px;
    background-color: #993;
    border-radius: 20px;

    form {
        width: 50%;
        margin: 20px auto;
    }

    form input, form textarea {
        padding: 10px;
        width: 80%;
        margin: 20px;
        border-radius: 5px;
    }

    form textarea {
        height: 80px;
    }

    form button {
        font-weight: bold;
        cursor: pointer;
        background-color: #22c722;
        color: black;
        border: 2px solid black;
        padding: 10px;
        border-radius: 10px;
    }
`

function FormTarefa(props) {
    return(
        <StyleForm>
            <form onSubmit={props.addTarefa}>
                <input type="text" name="titulo" placeholder="Título da Tarefa" value={props.tarefa.titulo} onChange={props.digit}/>
                <input type="text" name="setor" placeholder="Setor da Tarefa" value={props.tarefa.setor} onChange={props.digit}/>
                <textarea name="desc" placeholder="Desc. da Tarefa" value={props.tarefa.desc} onChange={props.digit}/>
                <button type="submit">Adcionar</button>
            </form>
        </StyleForm>
    )
}

export default FormTarefa