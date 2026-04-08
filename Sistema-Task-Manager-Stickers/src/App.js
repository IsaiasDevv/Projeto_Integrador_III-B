import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/theme.css";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import CadastroSucesso from "./pages/CadastroSucesso";
import Dashboard from "./pages/Dashboard";
import CriarProjeto from "./pages/CriarProjeto";
import ProjetoSucesso from "./pages/ProjetoSucesso";
import Tarefas from "./pages/Tarefas";
import CriarTarefa from "./pages/CriarTarefa";
import TarefaSucesso from "./pages/TarefaSucesso";
import Calendario from "./pages/Calendario";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-sucesso" element={<CadastroSucesso />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/criar-projeto" element={<CriarProjeto />} />
        <Route path="/projeto-sucesso" element={<ProjetoSucesso />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/criar-tarefa" element={<CriarTarefa />} />
        <Route path="/tarefa-sucesso" element={<TarefaSucesso />} />
        <Route path="/calendario" element={<Calendario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;