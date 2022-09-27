import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import ListaTarefas from "./components/ListaTarefas"
import Menu from "./components/Menu"

function App() {
    return(
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/lista-tarefas" element={<ListaTarefas/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App