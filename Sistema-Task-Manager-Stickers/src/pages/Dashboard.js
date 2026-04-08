import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES CORRIGIDAS COM OS NOMES EXATOS DOS SEUS ARQUIVOS
import iconeUnha from "../assets/icone-unha.png";
import iconeCriar from "../assets/icone-de-criar.png";
import iconePedidos from "../assets/pedidos.png";
import iconeProducao from "../assets/producao.png";
import iconeSair from "../assets/sair.png";
import fundoDashboard from "../assets/fundo-dashboard.jpg";

function Dashboard() {
  const navigate = useNavigate();

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
          borderRight: "2px solid #333" 
        }}
      >
        {/* Ícone do Topo */}
        <img 
          src={iconeUnha} 
          alt="Logo Mão" 
          style={{ width: "120px", marginBottom: "40px" }} 
        />

        {/* BOTÕES DO MENU */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "85%" }}>
          <button
            onClick={() => navigate("/criar-projeto")}
            style={btnMenuLateral}
          >
            <img src={iconeCriar} alt="Criar Projeto" style={{ width: "35px" }} />
            <span>Criar Projeto</span>
          </button>

          <button
            onClick={() => navigate("/tarefas")}
            style={btnMenuLateral}
          >
            <img src={iconePedidos} alt="Pedidos da Semana" style={{ width: "35px" }} />
            <span>Pedidos da Semana</span>
          </button>

          <button
            onClick={() => navigate("/tarefas")}
            style={btnMenuLateral}
          >
            <img src={iconeProducao} alt="Produção de Adesivos" style={{ width: "35px" }} />
            <span>Produção de Adesivos</span>
          </button>
        </div>

        {/* Espaçador flexível para empurrar o botão Sair para o fundo da tela */}
        <div style={{ flex: 1 }}></div>

        {/* BOTÃO SAIR DO SISTEMA */}
        <button
          onClick={() => navigate("/")}
          style={{ ...btnMenuLateral, width: "85%" }}
        >
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
          <h1 style={{ margin: "0 0 10px 0", fontSize: "36px", color: "#000", fontWeight: "900" }}>
            TASK MANAGER STICKERS
          </h1>
          <h2 style={{ margin: 0, fontSize: "28px", color: "#000", fontWeight: "bold" }}>
            Dashboard
          </h2>
        </div>

        {/* FUNDO ONDULADO (ÁREA CENTRAL) */}
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${fundoDashboard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* O fundo está aplicado aqui! */}
        </div>

      </div>

    </div>
  );
}

// --- ESTILO PADRONIZADO PARA OS BOTÕES DO MENU ---
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
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};

export default Dashboard;