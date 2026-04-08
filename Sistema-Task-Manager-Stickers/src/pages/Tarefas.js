import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES DA SIDEBAR E FUNDO 
import iconeUnha from "../assets/icone-unha.png";
import iconeSair from "../assets/sair.png";
import fundoDashboard from "../assets/fundo-dashboard.jpg";
import iconeVoltar from "../assets/icone-de-voltar.png";

// NOVOS ÍCONES DE TAREFAS E CALENDÁRIO
import iconeNovaTarefa from "../assets/nova-tarefa.png";
import iconeVerCalendario from "../assets/icone-ver-calendario.png";

function Tarefas() {
  const navigate = useNavigate();

  // 1. Memória para guardar a lista de tarefas e o NOME DO PROJETO
  const [tarefas, setTarefas] = useState([]);
  const [nomeProjeto, setNomeProjeto] = useState("Adesivos para a Fernanda");

  // 2. Busca os dados salvos no navegador ao abrir a tela
  useEffect(() => {
    // Puxa as tarefas
    const tarefasSalvas = JSON.parse(localStorage.getItem("listaTarefas") || "[]");
    setTarefas(tarefasSalvas);

    // Puxa o nome do projeto
    const nomeSalvo = localStorage.getItem("nomeProjeto");
    if (nomeSalvo) {
      setNomeProjeto(nomeSalvo);
    }
  }, []);

  // --- FUNÇÕES DO CRUD (ATUALIZAR E DELETAR) ---

  const excluirTarefa = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta tarefa?")) {
      const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id);
      setTarefas(novasTarefas); 
      localStorage.setItem("listaTarefas", JSON.stringify(novasTarefas)); 
    }
  };

  const moverTarefa = (id, statusAtual) => {
    let novoStatus = "";
    
    if (statusAtual === "A fazer") {
      novoStatus = "Em andamento";
    } else if (statusAtual === "Em andamento") {
      novoStatus = "Concluído";
    }

    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, status: novoStatus };
      }
      return tarefa;
    });

    setTarefas(novasTarefas); 
    localStorage.setItem("listaTarefas", JSON.stringify(novasTarefas)); 
  };

  // --------------------------------------------------

  // 3. Separação das tarefas pelas colunas do Kanban
  const tarefasAFazer = tarefas.filter(t => t.status === "A fazer");
  const tarefasEmAndamento = tarefas.filter(t => t.status === "Em andamento");
  const tarefasConcluidas = tarefas.filter(t => t.status === "Concluído");

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
          onClick={() => navigate("/dashboard")}
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

        <div style={{ width: "85%", display: "flex", flexDirection: "column", gap: "20px" }}>
          <button onClick={() => navigate("/criar-tarefa")} style={btnMenuLateral}>
            <img src={iconeNovaTarefa} alt="Nova Tarefa" style={{ width: "35px" }} />
            <span>+ NOVA TAREFA</span>
          </button>
          <button onClick={() => navigate("/calendario")} style={btnMenuLateral}>
            <img src={iconeVerCalendario} alt="Ver Calendário" style={{ width: "35px" }} />
            <span>VER CALENDÁRIO</span>
          </button>
        </div>

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
          {/* AQUI ESTÁ A MÁGICA: O TÍTULO AGORA LÊ A VARIÁVEL */}
          <h2 style={{ margin: 0, fontSize: "24px", color: "#000", fontWeight: "bold" }}>
            Quadro Kanban - {nomeProjeto}
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
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
            overflowY: "auto" 
          }}
        >

          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "20px",
              border: "1px solid #CCC", 
              width: "100%",
              maxWidth: "850px", 
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              minHeight: "500px"
            }}
          >

            {/* COLUNA: A FAZER */}
            <div style={colunaStyle}>
              <div style={{ ...headerStyle, backgroundColor: "#00E5FF" }}>A fazer</div>
              {tarefasAFazer.map((tarefa) => (
                <div key={tarefa.id} style={{ marginTop: "15px" }}>
                  <Card 
                    cor="#00E5FF" 
                    texto={tarefa.nome} 
                    onExcluir={() => excluirTarefa(tarefa.id)}
                    onMover={() => moverTarefa(tarefa.id, "A fazer")}
                    mostrarMover={true} 
                  />
                </div>
              ))}
            </div>

            {/* COLUNA: EM ANDAMENTO */}
            <div style={colunaStyle}>
              <div style={{ ...headerStyle, backgroundColor: "#FFD54F" }}>Em andamento</div>
              {tarefasEmAndamento.map((tarefa) => (
                <div key={tarefa.id} style={{ marginTop: "15px" }}>
                  <Card 
                    cor="#FFD54F" 
                    texto={tarefa.nome} 
                    onExcluir={() => excluirTarefa(tarefa.id)}
                    onMover={() => moverTarefa(tarefa.id, "Em andamento")}
                    mostrarMover={true} 
                  />
                </div>
              ))}
            </div>

            {/* COLUNA: CONCLUÍDO */}
            <div style={colunaStyle}>
              <div style={{ ...headerStyle, backgroundColor: "#00E676" }}>Concluído</div>
              {tarefasConcluidas.map((tarefa) => (
                <div key={tarefa.id} style={{ marginTop: "15px" }}>
                  <Card 
                    cor="#00E676" 
                    texto={tarefa.nome} 
                    onExcluir={() => excluirTarefa(tarefa.id)}
                    onMover={null}
                    mostrarMover={false} 
                  />
                </div>
              ))}
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

const colunaStyle = {
  flex: 1,
  border: "3px solid #000000", 
  backgroundColor: "#FFFFFF",
  padding: "10px",
  display: "flex",
  flexDirection: "column"
};

const headerStyle = {
  textAlign: "center",
  padding: "10px",
  fontWeight: "bold",
  fontSize: "16px",
  color: "#000",
  border: "3px solid #000000", 
};

/* COMPONENTE VISUAL DO CARD ATUALIZADO */
function Card({ cor, texto, onExcluir, onMover, mostrarMover }) {
  return (
    <div
      style={{
        border: "3px solid #000000", 
        backgroundColor: "#E6E6E6",  
        display: "flex",
        flexDirection: "column",
        height: "90px" 
      }}
    >
      <div
        style={{
          backgroundColor: cor,
          borderBottom: "3px solid #000000",
          height: "20px"
        }}
      ></div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", 
          padding: "5px",
        }}
      >
        <span style={{ color: "#000", fontWeight: "bold", fontSize: "13px", textAlign: "center" }}>
          {texto}
        </span>
        
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2px" }}>
          <button 
            onClick={onExcluir} 
            style={{ background: "none", border: "none", color: "#D32F2F", fontSize: "11px", fontWeight: "900", cursor: "pointer", padding: 0 }}
          >
            Excluir
          </button>
          
          {mostrarMover && (
            <button 
              onClick={onMover} 
              style={{ background: "none", border: "none", color: "#0078D7", fontSize: "11px", fontWeight: "900", cursor: "pointer", padding: 0 }}
            >
              Mover ➡️
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Tarefas;