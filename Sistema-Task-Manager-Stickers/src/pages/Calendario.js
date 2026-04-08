import { useState, useEffect } from "react"; // Adicionamos a memória do React
import { useNavigate } from "react-router-dom";

// IMPORTAÇÕES DA SIDEBAR E FUNDO
import iconeUnha from "../assets/icone-unha.png";
import iconeSair from "../assets/sair.png";
import fundoDashboard from "../assets/fundo-dashboard.jpg";
import iconeVoltar from "../assets/icone-de-voltar.png";

// ÍCONES DO CALENDÁRIO
import iconeVerCalendario from "../assets/icone-ver-calendario.png";
import iconeAtencao from "../assets/icone-atencao.png";

function Calendario() {
  const navigate = useNavigate();

  // 1. Criamos a memória para guardar os dados do projeto
  const [nomeProjeto, setNomeProjeto] = useState("Adesivos para a Fernanda");
  const [prazoProjeto, setPrazoProjeto] = useState("20/04/2026");
  const [diaDestaque, setDiaDestaque] = useState("20"); // Por padrão, destaca o dia 20

  // 2. Assim que a tela abre, busca os dados reais salvos no navegador
  useEffect(() => {
    const nomeSalvo = localStorage.getItem("nomeProjeto");
    const prazoSalvo = localStorage.getItem("prazo"); // Ex: "15/04/2026"

    if (nomeSalvo) {
      setNomeProjeto(nomeSalvo);
    }
    
    if (prazoSalvo) {
      setPrazoProjeto(prazoSalvo);
      // Pega apenas os dois primeiros números da data (o dia) para destacar no calendário
      const dia = prazoSalvo.substring(0, 2);
      setDiaDestaque(dia);
    }
  }, []);

  const diasSemana = ["D", "S", "T", "Q", "Q", "S", "S"];
  
  // Lista de dias (tirei o "destaque: true" fixo daqui para fazermos dinâmico)
  const dias = [
    { num: "01", cinza: false }, { num: "02", cinza: false }, { num: "03", cinza: false }, { num: "04", cinza: false }, { num: "05", cinza: false }, { num: "06", cinza: false }, { num: "07", cinza: false },
    { num: "08", cinza: false }, { num: "09", cinza: false }, { num: "10", cinza: false }, { num: "11", cinza: false }, { num: "12", cinza: false }, { num: "13", cinza: false }, { num: "14", cinza: false },
    { num: "15", cinza: false }, { num: "16", cinza: false }, { num: "17", cinza: false }, { num: "18", cinza: false }, { num: "19", cinza: false }, { num: "20", cinza: false }, { num: "21", cinza: false },
    { num: "22", cinza: false }, { num: "23", cinza: false }, { num: "24", cinza: false }, { num: "25", cinza: false }, { num: "26", cinza: false }, { num: "27", cinza: false }, { num: "28", cinza: false },
    { num: "29", cinza: false }, { num: "30", cinza: false }, { num: "31", cinza: false }, { num: "01", cinza: true }, { num: "02", cinza: true }, { num: "03", cinza: true }, { num: "04", cinza: true }
  ];

  return (
    <div style={{ 
      display: "flex", 
      height: "100vh", 
      width: "100vw", 
      overflow: "hidden", 
      margin: 0, 
      padding: 0 
    }}>

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
          position: "relative",
          flexShrink: 0
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
            padding: 0
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

      {/* ⬜ ÁREA DIREITA */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>

        {/* HEADER */}
        <div
          style={{
            backgroundColor: "#C69BCA",
            padding: "20px 0",
            textAlign: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            zIndex: 1,
            flexShrink: 0
          }}
        >
          <h1 style={{ margin: "0 0 5px 0", fontSize: "32px", color: "#000", fontWeight: "900" }}>
            TASK MANAGER STICKERS
          </h1>
          {/* O nome do projeto muda no cabeçalho também */}
          <h2 style={{ margin: 0, fontSize: "24px", color: "#000", fontWeight: "bold" }}>
            Calendário - {nomeProjeto}
          </h2>
        </div>

        {/* ÁREA CENTRAL */}
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${fundoDashboard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center", 
            padding: "20px",
            overflow: "hidden" 
          }}
        >

          {/* 🔲 CARTÃO DO CALENDÁRIO */}
          <div
            style={{
              backgroundColor: "#FFFFFF",
              padding: "30px",
              borderRadius: "10px",
              border: "2px solid #0078D7",
              width: "100%",
              maxWidth: "480px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              maxHeight: "95%" 
            }}
          >

            <div style={{ border: "2px solid #777", borderRadius: "5px", padding: "15px", width: "100%", textAlign: "center" }}>
              <img src={iconeVerCalendario} alt="Ícone" style={{ width: "30px", marginBottom: "5px" }} />
              
              {/* Extraímos o mês e ano direto do prazo para o título! */}
              <h3 style={{ margin: "0 0 15px 0", fontSize: "18px", fontWeight: "900" }}>
                Prazos do Mês
              </h3>

              <div style={gridDiasStyle}>
                {diasSemana.map((dia, i) => <div key={i}>{dia}</div>)}
              </div>

              <div style={gridDiasStyle}>
                {/* 3. Aqui ele verifica se o número do dia é igual ao dia do prazo. Se for, pinta de azul! */}
                {dias.map((d, i) => {
                  const ehDiaDeEntrega = d.num === diaDestaque && !d.cinza;
                  
                  return (
                    <div 
                      key={i} 
                      style={{ 
                        color: d.cinza ? "#B0B0B0" : "#000", 
                        border: ehDiaDeEntrega ? "3px solid #00A8E8" : "2px solid transparent", 
                        borderRadius: ehDiaDeEntrega ? "50%" : "0px", // Deixa a marcação redondinha
                        padding: "3px 0" 
                      }}
                    >
                      {d.num}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 4. Caixa Laranja dinâmica com os dados do projeto */}
            <div style={{ backgroundColor: "#F8B179", border: "2px solid #555", borderRadius: "5px", padding: "10px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
              <img src={iconeAtencao} alt="Atenção" style={{ width: "30px" }} />
              <p style={{ margin: 0, fontWeight: "900", fontSize: "16px" }}>Entrega: {nomeProjeto}</p>
              <p style={{ margin: 0, fontWeight: "bold", fontSize: "14px" }}>Prazo Final: {prazoProjeto}</p>
            </div>

            <button
              onClick={() => navigate("/tarefas")}
              style={{ backgroundColor: "#FFFFFF", color: "#000", border: "3px solid #555", borderRadius: "10px", padding: "8px 25px", fontWeight: "900", fontSize: "16px", cursor: "pointer" }}
            >
              OK
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

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
  width: "100%"
};

const gridDiasStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gap: "8px",
  fontWeight: "bold",
  fontSize: "14px"
};

export default Calendario;