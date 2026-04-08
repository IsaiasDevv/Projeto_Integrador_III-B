import { useNavigate } from "react-router-dom";

// Importando o ícone de sucesso da sua pasta assets
import iconeConcluido from "../assets/concluido.png";

function CadastroSucesso() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#FFD1D1" // Fundo rosa claro/pêssego do Figma
      }}
    >
      <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>

        {/* Ícone de Concluído */}
        <img 
          src={iconeConcluido} 
          alt="Concluído" 
          style={{ width: "150px", marginBottom: "30px" }} 
        />

        <h2 style={{ fontSize: "48px", fontWeight: "normal", margin: "0 0 30px 0", color: "#000" }}>
          Sucesso!
        </h2>

        <p style={{ fontSize: "24px", fontWeight: "500", margin: "0 0 60px 0", color: "#000" }}>
          Cadastro foi realizado com sucesso.
        </p>

        <button 
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#FFFFFF", // Botão branco
            color: "#000",              // Texto preto
            border: "none",
            borderRadius: "15px",       // Cantos arredondados
            padding: "15px 80px",       // Botão mais largo
            fontSize: "22px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)" // Sombra leve para destacar
          }}
        >
          OK
        </button>

      </div>
    </div>
  );
}

export default CadastroSucesso;