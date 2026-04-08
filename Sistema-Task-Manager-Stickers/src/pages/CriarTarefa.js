import { useState } from "react";
import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES DA SIDEBAR E FUNDO
import iconeUnha from "../assets/icone-unha.png";
import iconeSair from "../assets/sair.png";
import fundoDashboard from "../assets/fundo-dashboard.jpg";
import iconeVoltar from "../assets/icone-de-voltar.png";

// ÍCONES DO FORMULÁRIO 
import iconeNomeProjeto from "../assets/nome-do-projeto.png"; 
import iconeDescricao from "../assets/descricao.png";         
import iconeResponsavel from "../assets/admin.png";           

// NOVO ÍCONE DE STATUS
import iconeStatus from "../assets/status.png";                

function CriarTarefa() {
  const navigate = useNavigate();

  // 1. Criamos a memória para os campos da tarefa
  const [nomeTarefa, setNomeTarefa] = useState("");
  const [descricao, setDescricao] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [status, setStatus] = useState("A fazer"); // Por padrão, começa em "A fazer"

  // 2. Função que salva a tarefa na lista do navegador
  const handleCriarTarefa = () => {
    // Cria um pacote com as informações da tarefa
    const novaTarefa = {
      id: Date.now(), // Cria um número único para não confundir as tarefas
      nome: nomeTarefa,
      descricao: descricao,
      responsavel: responsavel,
      status: status
    };

    // Puxa a lista de tarefas que já existe, ou cria uma lista vazia se for a primeira
    const tarefasSalvas = JSON.parse(localStorage.getItem("listaTarefas") || "[]");
    
    // Adiciona a nova tarefa na lista
    tarefasSalvas.push(novaTarefa);
    
    // Salva a lista atualizada de volta no navegador
    localStorage.setItem("listaTarefas", JSON.stringify(tarefasSalvas));

    // Também salva o nome e status soltos só para mostrar na tela de sucesso
    localStorage.setItem("ultimaTarefaNome", nomeTarefa);
    localStorage.setItem("ultimaTarefaStatus", status);

    navigate("/tarefa-sucesso");
  };

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

      {/* 🟣 MENU LATERAL ESQUERDO */}
      <div
        style={{
          width: "320px",
          background: "linear-gradient(to bottom, #BB5CFF, #E67A88)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 0 30px 0",
          borderRight: "2px solid #333",
          position: "relative"
        }}
      >
        <button
          onClick={() => navigate("/tarefas")}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: 0,
            boxShadow: "none"
          }}
        >
          <img src={iconeVoltar} alt="Voltar" style={{ height: "30px" }} />
        </button>

        <img src={iconeUnha} alt="Logo Mão" style={{ width: "120px", marginBottom: "40px", marginTop: "20px" }} />

        <div style={{ flex: 1 }}></div>

        <button onClick={() => navigate("/")} style={{ ...btnMenuLateral, width: "85%" }}>
          <img src={iconeSair} alt="Sair do Sistema" style={{ width: "35px" }} />
          <span>SAIR DO SISTEMA</span>
        </button>
      </div>

      {/* ⬜ ÁREA DIREITA (Header + Fundo) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        <div
          style={{
            backgroundColor: "#C69BCA",
            padding: "20px 0",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            zIndex: 1
          }}
        >
          <h1 style={{ margin: "0 0 5px 0", fontSize: "32px", color: "#000", fontWeight: "900" }}>
            TASK MANAGER STICKERS
          </h1>
          <h2 style={{ margin: 0, fontSize: "24px", color: "#000", fontWeight: "bold" }}>
            Criar Tarefa
          </h2>
        </div>

        <div
          style={{
            flex: 1,
            backgroundImage: `url(${fundoDashboard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "30px",
            overflowY: "auto"
          }}
        >

          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "40px",
              borderRadius: "15px",
              width: "100%",
              maxWidth: "650px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              marginTop: "20px"
            }}
          >

            {/* CAMPO: Nome da Tarefa */}
            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeNomeProjeto} alt="Ícone Nome" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Nome da Tarefa</label>
              </div>
              <input 
                style={inputVerdeStyle} 
                placeholder="Ex: Fazer adesivos da Fernanda"
                value={nomeTarefa}
                onChange={(e) => setNomeTarefa(e.target.value)}
              />
            </div>

            {/* CAMPO: Descrição */}
            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeDescricao} alt="Ícone Descrição" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Descrição</label>
              </div>
              <input 
                style={inputVerdeStyle} 
                placeholder="Ex: Separar materiais do pedido"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            {/* CAMPO: Responsável */}
            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeResponsavel} alt="Ícone Responsável" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Responsável</label>
              </div>
              <input 
                style={inputVerdeStyle} 
                placeholder="Ex: Lúcia Administradora"
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </div>

            {/* 🔲 CAIXA DE STATUS COM BOTÕES FUNCIONANDO */}
            <div
              style={{
                backgroundColor: "#D9D9D9", 
                border: "2px solid #000",   
                borderRadius: "8px",
                padding: "20px",
                marginTop: "30px",
                marginBottom: "30px"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "15px" }}>
                <img src={iconeStatus} alt="Ícone Status" style={{ width: "25px", marginRight: "10px" }} />
                <h3 style={{ margin: 0, fontSize: "18px", fontWeight: "bold", color: "#000" }}>
                  Status
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginLeft: "10px" }}>
                <label style={radioLabelStyle}>
                  <input 
                    type="radio" 
                    name="status" 
                    value="A fazer"
                    checked={status === "A fazer"}
                    onChange={(e) => setStatus(e.target.value)}
                    style={radioInputStyle} 
                  />
                  - A fazer
                </label>
                <label style={radioLabelStyle}>
                  <input 
                    type="radio" 
                    name="status" 
                    value="Em andamento"
                    checked={status === "Em andamento"}
                    onChange={(e) => setStatus(e.target.value)}
                    style={radioInputStyle} 
                  />
                  - Em andamento
                </label>
                <label style={radioLabelStyle}>
                  <input 
                    type="radio" 
                    name="status" 
                    value="Concluído"
                    checked={status === "Concluído"}
                    onChange={(e) => setStatus(e.target.value)}
                    style={radioInputStyle} 
                  />
                  - Concluído
                </label>
              </div>
            </div>

            <div style={{ textAlign: "center" }}>
              <button
                onClick={handleCriarTarefa}
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#000",
                  border: "3px solid #000", 
                  borderRadius: "50px",     
                  padding: "10px 30px",
                  fontWeight: "900",
                  fontSize: "16px",
                  cursor: "pointer",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                }}
              >
                CRIAR TAREFA
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// --- ESTILOS REUTILIZÁVEIS ---

const btnMenuLateral = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  backgroundColor: "#FFFFFF",
  border: "3px solid #000000",
  borderRadius: "8px",
  padding: "10px 15px",
  cursor: "pointer",
  color: "#000000",
  fontWeight: "bold",
  fontSize: "16px",
  textAlign: "left",
  width: "100%",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};

const rowStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px"
};

const labelContainerStyle = {
  display: "flex",
  alignItems: "center",
  width: "220px"
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: "18px",
  color: "#000"
};

const inputVerdeStyle = {
  flex: 1,
  border: "3px solid #00FF00", 
  borderRadius: "0px",
  padding: "8px 12px",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#000",
  backgroundColor: "#FFF",
  boxSizing: "border-box",
  textAlign: "center" 
};

const radioLabelStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
  cursor: "pointer"
};

const radioInputStyle = {
  marginRight: "8px",
  cursor: "pointer",
  width: "16px",
  height: "16px",
  accentColor: "#000" 
};

export default CriarTarefa;