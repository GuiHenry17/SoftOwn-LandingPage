import Image from "next/image";

export default function Header() {
  function descerpagina() {
    document
      .getElementsByClassName("plans-container")[0]
      .scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="defaultbg">
      <div className="top-container">
        <Image
          src="/assets/logo-white.png"
          alt="Logo"
          width={250}
          height={70}
          id="logo-top"
        />
        <Image
          src="/assets/dot.png"
          alt=""
          className="overlay-image"
          width={300}
          height={200}
        />

        <button>
          Acessar o <strong>Sistema</strong>
        </button>
      </div>

      <div className="text-container">
        <h2>
          Eleve sua experiência com a gestão inteligente
          <br />
          de processos.
        </h2>

        <h3>Diga adeus às planilhas e papéis!</h3>

        <h4>
          Nosso sistema transforma a forma como você gerencia seus casos. <br />
          Automatize tarefas, centralize informações e ganhe mais tempo para{" "}
          <br />
          focar no que realmente importa: <strong>seus clientes.</strong>
        </h4>
      </div>

      <div className="buttons-row">
        <button>Conheça nossa ferramenta</button>
        <button id="bt-dif" onClick={descerpagina}>
          Conheça nossos planos
        </button>
      </div>
    </div>
  );
}
