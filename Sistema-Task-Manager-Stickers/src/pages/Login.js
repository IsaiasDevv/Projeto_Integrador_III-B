import { useState } from "react"; // Adicionado para a memória
import { useNavigate } from "react-router-dom";

// IMPORTAÇÃO DOS ASSETS
import iconeUnha from "../assets/icone-unha.png";
import fotoPlanoDeFundo from "../assets/plano-de-fundo.jpg";
import iconeUsuario from "../assets/usuario.png"; 
import iconeSenha from "../assets/senha.png";      

function Login() {
  const navigate = useNavigate();

  // 1. Variáveis para guardar o que a pessoa está digitando agora
  const [emailDigitado, setEmailDigitado] = useState("");
  const [senhaDigitada, setSenhaDigitada] = useState("");

  // Estilo base para garantir a fonte Roboto em tudo
  const estiloGlobal = { fontFamily: "'Roboto', sans-serif" };

  // 2. Função que confere se o login está correto
  const handleEntrar = () => {
    // Busca os dados que foram salvos lá na tela de Cadastro
    const emailSalvo = localStorage.getItem("usuarioEmail");
    const senhaSalva = localStorage.getItem("usuarioSenha");

    // Compara o que foi digitado com o que está salvo
    if (emailDigitado === emailSalvo && senhaDigitada === senhaSalva && emailDigitado !== "") {
      navigate("/dashboard"); // Se for igual, entra no sistema!
    } else {
      alert("E-mail ou senha incorretos! Verifique os dados ou faça o cadastro.");
    }
  };

  return (
    <div style={{ 
      ...estiloGlobal,
      display: "flex", 
      flexDirection: "column", 
      height: "100vh", 
      width: "100vw",
      overflow: "hidden", 
      margin: 0,
      padding: 0,
      backgroundColor: "#9A0353" 
    }}>

      {/* 🔳 HEADER (IGUAL AO FIGMA) */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#E6E6E6",
          padding: "0 30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px", 
          fontWeight: "900", 
          fontSize: "36px",  
          color: "#000",
          height: "100px",   
          boxSizing: "border-box",
          flexShrink: 0
        }}
      >
        Task Manager Stickers
        <img src={iconeUnha} alt="Ícone Unhas" style={{ height: "60px" }} />
      </div>

      {/* 🧱 CONTEÚDO PRINCIPAL */}
      <div style={{ display: "flex", flex: 1, width: "100%", overflow: "hidden" }}>

        {/* 📷 LADO ESQUERDO */}
        <div
          style={{
            width: "50%",
            backgroundColor: "#9A0353", 
            display: "flex",
            justifyContent: "center", 
            alignItems: "center",
            padding: "20px"
          }}
        >
          <img
            src={fotoPlanoDeFundo}
            alt="Plano de Fundo"
            style={{
              width: "auto",
              height: "auto",
              maxHeight: "85%", 
              maxWidth: "90%",
              borderRadius: "40px",
              border: "12px solid white", 
              objectFit: "contain",
              boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
            }}
          />
        </div>

        {/* 🧾 LADO DIREITO */}
        <div
          style={{
            width: "50%",
            background: "linear-gradient(to bottom, #C674B2, #996969)", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
            padding: "20px"
          }}
        >
          <h2 style={{ marginBottom: "30px", color: "#000", fontWeight: "900", fontSize: "28px" }}>
            ENTRAR NO SISTEMA
          </h2>

          {/* 🖼️ MOLDURA EXTERNA (BORDA DE 6PX) */}
          <div style={{
              backgroundColor: "#E5E5E5", 
              border: "6px solid #444", 
              borderRadius: "26px",
              padding: "4px", 
              boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              width: "100%",
              maxWidth: "430px", 
              boxSizing: "border-box"
          }}>
              {/* 🔲 RETÂNGULO INTERNO */}
              <div
                style={{
                  backgroundColor: "#E5E5E5",
                  padding: "50px 40px",
                  borderRadius: "18px",
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  boxSizing: "border-box"
                }}
              >
                {/* INPUT EMAIL */}
                <div style={inputBoxStyle}>
                  <img src={iconeUsuario} alt="Usuário" style={{ height: "22px" }} />
                  <input 
                    type="email"
                    placeholder="EMAIL:" 
                    style={inputFieldStyle} 
                    value={emailDigitado}
                    onChange={(e) => setEmailDigitado(e.target.value)}
                  />
                </div>

                {/* INPUT SENHA */}
                <div style={inputBoxStyle}>
                  <img src={iconeSenha} alt="Senha" style={{ height: "22px" }} />
                  <input 
                    type="password" 
                    placeholder="SENHA:" 
                    style={inputFieldStyle} 
                    value={senhaDigitada}
                    onChange={(e) => setSenhaDigitada(e.target.value)}
                  />
                </div>

                {/* BOTÃO ENTRAR */}
                <button 
                  style={btnStyle} 
                  onClick={handleEntrar} // Conectado à nossa função
                >
                  ENTRAR
                </button>

                <p style={{ margin: "20px 0", fontWeight: "900", fontSize: "16px", color: "#000" }}>OU</p>

                {/* BOTÃO CADASTRAR */}
                <button 
                  style={btnStyle} 
                  onClick={() => navigate("/cadastro")}
                >
                  CADASTRAR CONTA
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- ESTILOS AUXILIARES ---

const inputBoxStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#E5E5E5",
  border: "3px solid #777", 
  borderRadius: "10px",
  width: "100%",
  marginBottom: "20px",
  padding: "0 15px",
  boxSizing: "border-box"
};

const inputFieldStyle = {
  flex: 1, 
  border: "none",
  backgroundColor: "transparent",
  padding: "15px 0",
  fontWeight: "bold",
  color: "#000",
  outline: "none",
  textAlign: "center",
  fontSize: "16px",
  fontFamily: "'Roboto', sans-serif" 
};

const btnStyle = {
  backgroundColor: "#2cd462", 
  color: "white",
  border: "3px solid #555", 
  borderRadius: "50px", 
  padding: "12px 0",
  fontWeight: "bold",
  fontSize: "16px",
  cursor: "pointer",
  width: "100%",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  fontFamily: "'Roboto', sans-serif" 
};

export default Login;