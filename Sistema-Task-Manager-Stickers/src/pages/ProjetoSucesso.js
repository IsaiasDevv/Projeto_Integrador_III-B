import { useState, useEffect } from "react"; // Adicionamos as ferramentas de memória do React
import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES DA SIDEBAR E FUNDO 
import iconeUnha from "../assets/icone-unha.png";
import iconeCriar from "../assets/icone-de-criar.png";
import iconeSair from "../assets/sair.png";
import fundoDashboard from "../assets/fundo-dashboard.jpg";

// ÍCONE DE SUCESSO DO PROJETO
import iconeProjetoSucesso from "../assets/projeto-criado-com-sucesso.png";

function ProjetoSucesso() {
  const navigate = useNavigate();

  // 1. Criamos as variáveis vazias que vão receber os dados da "gaveta"
  const [nomeSalvo, setNomeSalvo] = useState("");
  const [dataSalva, setDataSalva] = useState("");
  const [prazoSalvo, setPrazoSalvo] = useState("");

  // 2. Assim que a tela abre, ele busca as informações salvas no navegador
  useEffect(() => {
    // Tenta pegar o que salvamos. Se não tiver nada, mostra o texto padrão.
    setNomeSalvo(localStorage.getItem("nomeProjeto") || "Adesivos para a Fernanda");
    setDataSalva(localStorage.getItem("dataInicio") || "20/05/1965");
    setPrazoSalvo(localStorage.getItem("prazo") || "31/05/1965");
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>

      {/* 🟣 MENU LATERAL ESQUERDO (Aba rosa/roxa) */}
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
        {/* Ícone do Topo */}
        <img src={iconeUnha} alt="Logo Mão" style={{ width: "120px", marginBottom: "40px", marginTop: "20px" }} />

        {/* BOTÃO DO MENU ATIVO */}
        <div style={{ width: "85%" }}>
          <button 
            onClick={() => navigate("/criar-projeto")} 
            style={btnMenuLateral}
          >
            <img src={iconeCriar} alt="Criar Projeto" style={{ width: "35px" }} />
            <span>Criar Projeto</span>
          </button>
        </div>

        {/* Espaçador flexível */}
        <div style={{ flex: 1 }}></div>

        {/* BOTÃO SAIR DO SISTEMA */}
        <button onClick={() => navigate("/")} style={{ ...btnMenuLateral, width: "85%" }}>
          <img src={iconeSair} alt="Sair do Sistema" style={{ width: "35px" }} />
          <span>SAIR DO SISTEMA</span>
        </button>
      </div>

      {/* ⬜ ÁREA DIREITA (Header + Fundo) */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        {/* HEADER SUPERIOR LILÁS */}
        <div
          style={{
            backgroundColor: "#C69BCA", 
            padding: "30px 0", 
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            zIndex: 1 
          }}
        >
          <h1 style={{ margin: "0", fontSize: "36px", color: "#000", fontWeight: "900" }}>
            TASK MANAGER STICKERS
          </h1>
        </div>

        {/* ÁREA CENTRAL COM FUNDO ONDULADO */}
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
            justifyContent: "center", 
            padding: "30px",
            overflowY: "auto" 
          }}
        >

          {/* 🔲 CARTÃO BRANCO DE SUCESSO */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "50px 40px",
              borderRadius: "8px", 
              border: "2px solid #0078D7", 
              width: "100%",
              maxWidth: "600px", 
              textAlign: "center",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
            }}
          >
            
            {/* Ícone de Sucesso */}
            <img 
              src={iconeProjetoSucesso} 
              alt="Projeto Criado com Sucesso" 
              style={{ width: "90px", marginBottom: "20px" }} 
            />

            <h2 style={{ color: "#000", fontSize: "24px", fontWeight: "900", marginBottom: "30px" }}>
              Projeto criado com sucesso!
            </h2>

            {/* 3. AQUI SUBSTITUÍMOS O TEXTO FIXO PELAS VARIÁVEIS COM OS DADOS */}
            <p style={textoCard}>
              Nome: {nomeSalvo}
            </p>
            
            <p style={textoCard}>
              Data de início: {dataSalva}.
            </p>
            
            <p style={{ ...textoCard, marginBottom: "50px" }}>
              Prazo: {prazoSalvo}.
            </p>

            {/* BOTÃO VER TAREFAS */}
            <button
              onClick={() => navigate("/tarefas")}
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "3px solid #000", 
                borderRadius: "50px",     
                padding: "10px 25px",
                fontWeight: "900",        
                fontSize: "16px",
                cursor: "pointer",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
              }}
            >
              VER TAREFAS DO PROJETO
            </button>

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

const textoCard = {
  color: "#000",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "10px 0"
};

export default ProjetoSucesso;