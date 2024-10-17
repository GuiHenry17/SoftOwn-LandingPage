import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
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
            Nosso sistema transforma a forma como você gerencia seus
            casos. <br />
            Automatize tarefas, centralize informações e ganhe mais
            tempo para <br />
            focar no que realmente importa: <strong>seus clientes.</strong>
          </h4>
        </div>
        <div className="buttons-row">
          <button>Conheça nossa ferramenta</button>
          <button id="br-dif">Conheça nossos planos</button>
        </div>
      </div>
      <div className="app-example-image">
        <Image
          src="/assets/first.png"
          alt="Imagem do aplicativo"
          width={1500}
          height={800}
        />
      </div>
      <div className="process-description">
        <div className="process-image">
          <Image
            src="/assets/third.png"
            alt="Imagem dos processos"
            width={900}
            height={700}
            className="process-image"
          />
        </div>
        <div className="process-text-container">
          <h2>Foco na otimização de processos</h2>
          <div className="process-text">
            {[
              {
                text: "Organize seus casos:",
                description: "Tenha todos os seus processos em um só lugar, com informações completas e atualizadas"
              },
              {
                text: "Automatize tarefas:",
                description: "Elimine tarefas repetitivas e ganhe mais tempo para atender seus clientes"
              },
              {
                text: "Melhore a comunicação:",
                description: "Facilite a comunicação com seus clientes e equipe, agilizando o processo."
              },
              {
                text: "Gere relatórios personalizados:",
                description: "Tenha insights valiosos sobre o desempenho do seu escritório."
              }
            ].map((item, index) => (
              <div className="sec-1" key={index}>
                <Image
                  src="/assets/check.png"
                  alt='Imagem de um "Check"'
                  width={20}
                  height={20}
                />
                <h3>
                  <strong>{item.text}</strong> {item.description}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
