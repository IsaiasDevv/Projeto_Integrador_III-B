import { useState } from "react"; 
import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES DA SIDEBAR E FUNDO 
import iconeUnha from "../assets/icone-unha.png";
import iconeCriar from "../assets/icone-de-criar.png";
import iconeSair from "../assets/sair.png";
import fundoDashboard from "../assets/fundo-dashboard.jpg";

// ÍCONE DE VOLTAR 
import iconeVoltar from "../assets/icone-de-voltar.png";

// NOVAS IMPORTAÇÕES DOS ÍCONES DO FORMULÁRIO
import iconeNomeProjeto from "../assets/nome-do-projeto.png";
import iconeDescricao from "../assets/descricao.png";
import iconeDataInicio from "../assets/data-de-inicio.png";
import iconePrazo from "../assets/prazo.png";
import iconeResponsavel from "../assets/admin.png";

function CriarProjeto() {
  const navigate = useNavigate();

  // Deixei as datas vazias inicialmente para o calendário aparecer limpo
  const [nomeProjeto, setNomeProjeto] = useState("Adesivos para a Fernanda");
  const [descricao, setDescricao] = useState("Criação de projeto de adesivos de unha para ser entregue em prazo");
  const [dataInicio, setDataInicio] = useState(""); 
  const [prazo, setPrazo] = useState(""); 
  const [responsavel, setResponsavel] = useState("Administradora");

  // Função rápida para transformar de AAAA-MM-DD (do calendário) para DD/MM/AAAA
  const formatarData = (data) => {
    if (!data) return "";
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const handleCriarProjeto = () => {
    localStorage.setItem("nomeProjeto", nomeProjeto);
    // Aqui ele salva a data já formatada bonitinha para o padrão brasileiro
    localStorage.setItem("dataInicio", formatarData(dataInicio));
    localStorage.setItem("prazo", formatarData(prazo));
    navigate("/projeto-sucesso"); 
  };

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

        <div style={{ width: "85%" }}>
          <button style={btnMenuLateral}>
            <img src={iconeCriar} alt="Criar Projeto" style={{ width: "35px" }} />
            <span>Criar Projeto</span>
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
          <h2 style={{ margin: 0, fontSize: "24px", color: "#000", fontWeight: "bold" }}>
            Criar Projeto
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
              marginTop: "50px" 
            }}
          >
            
            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeNomeProjeto} alt="Ícone Nome do Projeto" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Nome do Projeto</label>
              </div>
              <input 
                style={inputStyle} 
                value={nomeProjeto}
                onChange={(e) => setNomeProjeto(e.target.value)}
              />
            </div>

            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeDescricao} alt="Ícone Descrição" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Descrição</label>
              </div>
              <input 
                style={inputStyle} 
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </div>

            {/* CAMPO: Data de Início - ADICIONADO type="date" */}
            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeDataInicio} alt="Ícone Data de Início" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Data de Início</label>
              </div>
              <input 
                type="date"
                style={{...inputStyle, width: "150px", flex: "none"}} 
                value={dataInicio}
                onChange={(e) => setDataInicio(e.target.value)}
              />
            </div>

            {/* CAMPO: Prazo - ADICIONADO type="date" */}
            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconePrazo} alt="Ícone Prazo" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Prazo</label>
              </div>
              <input 
                type="date"
                style={{...inputStyle, width: "150px", flex: "none"}} 
                value={prazo}
                onChange={(e) => setPrazo(e.target.value)}
              />
            </div>

            <div style={rowStyle}>
              <div style={labelContainerStyle}>
                <img src={iconeResponsavel} alt="Ícone Responsável" style={{ width: "25px", marginRight: "10px" }} />
                <label style={labelStyle}>Responsável</label>
              </div>
              <input 
                style={{...inputStyle, width: "180px", flex: "none"}} 
                value={responsavel}
                onChange={(e) => setResponsavel(e.target.value)}
              />
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <button
                onClick={handleCriarProjeto} 
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
                CRIAR PROJETO
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

const inputStyle = {
  flex: 1,
  border: "2px solid #0078D7", 
  borderRadius: "0px",          
  padding: "8px 12px",
  fontSize: "14px",
  fontWeight: "bold",
  color: "#000",
  backgroundColor: "#FFF",
  boxSizing: "border-box"
};

export default CriarProjeto;