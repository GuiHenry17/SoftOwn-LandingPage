import Image from "next/image";
import Footer from "../components/Footer";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);

  const [planoSelecionado, setPlanoSelecionado] = useState<number | null>(1);

  function selecionarPlano(plano: number) {
    setPlanoSelecionado(plano);
  }

  function estiloBorda(plano: number) {
    if (planoSelecionado === plano) {
      return { border: "2px solid #0277ee" };
    } else {
      return { border: "2px solid transparent" };
    }
  }

  return (
    <>
      <Head>
        <title>SoftOwn Solutions - Gestão Inteligente de Processos</title>
        <meta
          name="description"
          content="Soluções completas para otimização de processos e gestão de dados com segurança."
        />
        <meta
          name="keywords"
          content="gestão de processos, software, automação de tarefas, segurança de dados"
        />
      </Head>
      <main>
        <div className="defaultbg">
          <div className="top-container">
            <Image
              src="/assets/logo-white.png"
              alt="Logo"
              width={250}
              height={70}
              id="logo-top"
              priority={true}
            />
            <Image
              src="/assets/dot.png"
              alt=""
              className="overlay-image"
              width={300}
              height={200}
              priority={true}
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
              Nosso sistema transforma a forma como você gerencia seus casos.{" "}
              <br />
              Automatize tarefas, centralize informações e ganhe mais tempo para{" "}
              <br />
              focar no que realmente importa: <strong>seus clientes.</strong>
            </h4>
          </div>
          <div className="buttons-row">
            <button>Conheça nossa ferramenta</button>
            <button id="bt-dif">Conheça nossos planos</button>
          </div>
        </div>
        <div className="app-example-image">
          <Image
            src="/assets/first.png"
            alt="Imagem do aplicativo"
            width={1500}
            height={800}
            priority={true}
          />
        </div>
        <div className="description">
          <div className="process-image">
            <Image
              src="/assets/third.png"
              alt="Imagem dos processos"
              width={800}
              height={600}
              className="process-image"
              priority={true}
            />
          </div>
          <div className="desc-text-container">
            <h2>Foco na otimização de processos</h2>
            <div className="text-list">
              {[
                {
                  text: "Organize seus casos:",
                  description:
                    "Tenha todos os seus processos em um só lugar, com informações completas e atualizadas.",
                },
                {
                  text: "Automatize tarefas:",
                  description:
                    "Elimine tarefas repetitivas e ganhe mais tempo para atender seus clientes.",
                },
                {
                  text: "Melhore a comunicação:",
                  description:
                    "Facilite a comunicação com seus clientes e equipe, agilizando o processo.",
                },
                {
                  text: "Gere relatórios personalizados:",
                  description:
                    "Tenha insights valiosos sobre o desempenho do seu escritório.",
                },
              ].map((item, index) => (
                <div className="sec" key={index}>
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
        <div className="data-protect-container">
          <div className="desc-text-container">
            <h2>
              Proteja seus dados e garanta a conformidade com as normas
              jurídicas.
            </h2>
            <div className="text-list">
              {[
                {
                  text: "Segurança de dados:",
                  description:
                    "Proteja os dados dos seus clientes com as mais modernas tecnologias de segurança.",
                },
                {
                  text: "Conformidade legal:",
                  description:
                    "Garanta que seu escritório esteja em conformidade com as normas e regulamentações.",
                },
                {
                  text: "Auditoria:",
                  description:
                    "Gere relatórios detalhados para acompanhar o cumprimento das normas e regulamentações.",
                },
                {
                  text: "Backup:",
                  description:
                    "Tenha a garantia de que seus dados estão seguros com nosso sistema de backup.",
                },
              ].map((item, index) => (
                <div className="sec" key={index}>
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
          <div className="data-image">
            <Image
              src="/assets/four.png"
              alt="Imagem de gerenciamento de usuários e empresas."
              width={800}
              height={600}
              className="data-image"
              priority={true}
            />
          </div>
        </div>
        <div className="data-flux-container">
          <div className="flux-image">
            <Image
              src="/assets/fifth.png"
              alt="Imagem do fluxo de dados."
              width={700}
              height={500}
              className="flux-image"
              priority={true}
            />
          </div>
          <div className="desc-text-container">
            <h2>Agenda e prontuário de seus pacientes.</h2>
            <span id="flux-desc">
              Explica pro Product Onwer que o módulo de recursão paralela
              corrigiu o bug do JSON compilado a partir de proto-buffers.
            </span>
            <div className="text-list">
              {[
                {
                  text: "Transparência total:",
                  description:
                    "A equipe de suporte precisa saber que a compilação final do programa complexificou o merge no parse retroativo do DOM..",
                },
                {
                  text: "Colaboração eficiente:",
                  description:
                    "Dado o fluxo de dados atual, o módulo de recursão paralela causou a race condition do polimorfismo aplicado nas classes..",
                },
              ].map((item, index) => (
                <div className="sec" key={index}>
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
        <div className="paper-container">
          <div className="desc-text-container-paper">
            <h2>Elimine todos os papéis do seu escritório.</h2>
            <div className="text-list">
              {[
                {
                  text: "Agilidade nos processos:",
                  description:
                    "Como a digitalização acelera a busca e o compartilhamento de informações.",
                },
                {
                  text: "Automatização de tarefas:",
                  description:
                    "Redução do trabalho manual com a digitalização de documentos e assinatura eletrônica.",
                },
                {
                  text: "Melhoria na colaboração:",
                  description:
                    "Facilidade para equipes trabalharem em conjunto em documentos digitais, independentemente da localização.",
                },
              ].map((item, index) => (
                <div className="sec" key={index}>
                  <Image
                    src="/assets/white-check.png"
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
          <div className="paper-wrapper">
            <div className="paper-image-wrapper">
              <Image
                src="/assets/sixty-decoration.png"
                alt="Imagem de fundo sobreposta"
                className="overlay-back-image"
                priority={true}
                fill
                style={{ objectFit: 'cover' }}
              />
              <Image
                src="/assets/ilustration.png"
                alt="Imagem de gerenciamento de usuários e empresas."
                className="paper-image"
                width={700}
                height={500}
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="team-contact">
          <div className="contact-text">
            <h1>Comece seu teste gratuito hoje!</h1>
            <h2>
              Entre em contato com nosso time e agende uma desmontração
              gratuita!
            </h2>
          </div>
          <div className="contact-button">
            <button>
              Fale com nosso time de vendas
              <Image
                src="/assets/wpp.png"
                alt="Logo do Whatsapp"
                width={20}
                height={20}
                className="wpp"
              />
            </button>
          </div>
        </div>
        <div className="plans-container">
          <div className="plans-header">
            <h2>Nossos planos</h2>
            <p>
              Encontre o melhor plano de acordo com a necessidade do seu
              escritório.
            </p>
          </div>
        </div>
        <div className="plans-grid">
          <div className="plan-card" style={estiloBorda(0)}>
            <h3>Inicial</h3>
            <p className="price">
              R$30 <span>/mês</span>
            </p>
            <ul>
              <li>
                Lorem ipsum <strong>sit consectetur.</strong>
              </li>
              <li>
                Praesent <strong>luctus facilisis.</strong>
              </li>
              <li>
                Aenean lobortis velit a <strong>suscipit.</strong>
              </li>
              <li>
                Nulla consequat <strong>sem sit amet.</strong>
              </li>
            </ul>
            <button onClick={() => selecionarPlano(0)}>
              Selecionar este plano
            </button>
          </div>

          <div className="plan-card popular" style={estiloBorda(1)}>
            <div className="badge">Plano mais contratado</div>
            <h3>Intermediário</h3>
            <p className="price">
              R$100 <span>/mês</span>
            </p>
            <ul>
              <li>
                Lorem ipsum <strong>sit consectetur.</strong>
              </li>
              <li>
                Praesent <strong>luctus facilisis.</strong>
              </li>
              <li>
                Aenean lobortis velit a <strong>suscipit.</strong>
              </li>
              <li>
                Nulla consequat <strong>sem sit amet.</strong>
              </li>
            </ul>
            <button onClick={() => selecionarPlano(1)}>
              Selecionar este plano
            </button>
          </div>

          <div className="plan-card" style={estiloBorda(2)}>
            <h3>Completo</h3>
            <p className="price">
              R$300 <span>/mês</span>
            </p>
            <ul>
              <li>
                Lorem ipsum <strong>sit consectetur.</strong>
              </li>
              <li>
                Praesent <strong>luctus facilisis.</strong>
              </li>
              <li>
                Aenean lobortis velit a <strong>suscipit.</strong>
              </li>
              <li>
                Nulla consequat <strong>sem sit amet.</strong>
              </li>
            </ul>
            <button onClick={() => selecionarPlano(2)}>
              Selecionar este plano
            </button>
          </div>
        </div>
        <div className="faq-container">
          <div className="faq-questions">
            <h2>Perguntas frequentes</h2>

            <div className="faq-item">
              <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                </h3>
                <span>{isOpen ? "▲" : "▼"}</span>
              </div>
              {isOpen && (
                <p className="faq-answer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur feugiat porttitor suscipit. Proin congue tristique
                  erat quis elementum.
                </p>
              )}
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>Suspendisse magna nulla, pellentesque rutrum?</h3>
                <span>▼</span>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>Nunc at est sit amet erat ultrices gravida?</h3>
                <span>▼</span>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>Curabitur elementum ante orci?</h3>
                <span>▼</span>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h3>Lacus id venenatis convallis, justo leo posuere purus?</h3>
                <span>▼</span>
              </div>
            </div>
          </div>
        </div>
        <div id="difbg" className="team-contact">
          <div className="contact-text">
            <h1>Agende uma desmontração gratuita!</h1>
            <h2>
              Descubra como nossa plataforma pode transformar seu escritório.
            </h2>
          </div>
          <div className="contact-button">
            <button>
              Fale com nosso time de vendas
              <Image
                src="/assets/wpp.png"
                alt="Logo do Whatsapp"
                width={20}
                height={20}
                className="wpp"
              />
            </button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
