import { useState } from "react"; // Adicionado para a memória
import { useNavigate } from "react-router-dom";

// Importações dos seus ícones reais da pasta assets
import iconeUsuarioCadastrar from "../assets/icone-usuario-cadastrar.png";
import iconeEmail from "../assets/email.png";
import iconeSenha from "../assets/icone-senha.png";

function Cadastro() {
  const navigate = useNavigate();

  // 1. Variáveis de memória para os campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  // 2. Função que salva os dados e valida as senhas
  const handleCadastro = () => {
    // Verifica se preencheu tudo
    if (!nome || !email || !senha) {
      alert("Por favor, preencha todos os campos!");
      return; // Para a função aqui
    }

    // Verifica se as senhas combinam
    if (senha !== confirmarSenha) {
      alert("As senhas não combinam! Digite novamente.");
      return; // Para a função aqui
    }

    // Se estiver tudo certo, salva no navegador
    localStorage.setItem("usuarioNome", nome);
    localStorage.setItem("usuarioEmail", email);
    localStorage.setItem("usuarioSenha", senha);

    // Vai para a tela de sucesso
    navigate("/cadastro-sucesso");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to bottom, #FADBD8, #D9A5A5)"
      }}
    >
      {/* 🔲 CARTÃO BRANCO */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "40px 30px",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "350px",
          boxShadow: "0 4px 17px rgba(0,0,0,0.1)",
          boxSizing: "border-box"
        }}
      >
        <h2 style={{ textAlign: "center", fontWeight: "900", marginBottom: "25px", color: "#000" }}>
          CADASTRAR
        </h2>

        {/* CAMPO NOME */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", color: "#000", fontSize: "16px" }}>Nome</label>
          <div style={inputWrapperStyle}>
            <img src={iconeUsuarioCadastrar} alt="Ícone Usuário" style={{ height: "20px", marginRight: "10px" }} />
            <input 
              style={inputStyle} 
              placeholder="Digite o seu nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
        </div>

        {/* CAMPO E-MAIL */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", color: "#000", fontSize: "16px" }}>E-mail</label>
          <div style={inputWrapperStyle}>
            <img src={iconeEmail} alt="Ícone E-mail" style={{ height: "20px", marginRight: "10px" }} />
            <input 
              style={inputStyle} 
              type="email"
              placeholder="Digite o seu email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        {/* CAMPO SENHA */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ fontWeight: "bold", color: "#000", fontSize: "16px" }}>Senha</label>
          <div style={inputWrapperStyle}>
            <img src={iconeSenha} alt="Ícone Senha" style={{ height: "20px", marginRight: "10px" }} />
            <input 
              style={inputStyle} 
              type="password" 
              placeholder="Digite a sua senha" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
        </div>

        {/* CAMPO CONFIRMAR SENHA */}
        <div style={{ marginBottom: "25px" }}>
          <label style={{ fontWeight: "bold", color: "#000", fontSize: "16px" }}>Confirmar Senha</label>
          <div style={inputWrapperStyle}>
            <img src={iconeSenha} alt="Ícone Confirmar Senha" style={{ height: "20px", marginRight: "10px" }} />
            <input 
              style={inputStyle} 
              type="password" 
              placeholder="Confirme a sua senha" 
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </div>
        </div>

        {/* BOTÃO CADASTRAR */}
        <div style={{ textAlign: "center" }}>
          <button
            onClick={handleCadastro} // Conectado à nossa função
            style={{
              background: "linear-gradient(to right, #F07A38, #D85D19)", 
              color: "white",
              border: "2px solid #555", 
              borderRadius: "50px", 
              padding: "12px 40px",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
            }}
          >
            CADASTRAR
          </button>
        </div>

      </div>
    </div>
  );
}

// --- ESTILOS REUTILIZÁVEIS PARA OS INPUTS ---
const inputWrapperStyle = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#D9D9D9", 
  border: "2px solid #555",   
  borderRadius: "50px",        
  padding: "8px 15px",
  marginTop: "5px"
};

const inputStyle = {
  flex: 1,
  border: "none",
  backgroundColor: "transparent",
  outline: "none",
  width: "100%",
  color: "#D35400", 
  fontWeight: "bold",
  fontSize: "14px"
};

export default Cadastro;