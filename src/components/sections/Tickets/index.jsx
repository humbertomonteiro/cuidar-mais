import styles from "./tickets.module.css";

import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonSecondary from "../../shared/ButtonSecondary";
import CarouselSimple from "../../shared/CarouselSimple";

import { IoTicketOutline } from "react-icons/io5";

import { useState } from "react";

const item1 = () => {
  const formBuy = () => {
    console.log("clicou");
  };
  return (
    <div className={styles.box} data-active="true">
      <strong className={styles.sale}>40% OFF</strong>
      <div className={styles.boxContent}>
        <span>Ingresso</span>
        <h4>Pré-venda</h4>
        <h5>Disponível até:</h5>
        <p>15/02 ou enquanto durar</p>
      </div>
      <div className={styles.boxValue}>
        <h4>
          <span>de:</span>{" "}
          <s>
            R$ 839,90 <br />
          </s>{" "}
          <span>por:</span> <strong>10X de </strong>R$ 49,90
        </h4>
        <ul>
          <li>Garanta o seu ingresso com o menor valor!</li>
          <li>Economize mais 40% no valor do ingresso!</li>
          <li>Garanta sua vaga em um evento único com especialistas em TEA.</li>
          <li>
            Participe do networking com profissionais e familiares engajados no
            tema.
          </li>
        </ul>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <span>Ingresso valor inteiro.</span>
            <ButtonSecondary
              style={{ width: "100%" }}
              target="_blank"
              action="button"
              link="https://cielolink.com.br/3EhFl7C"
              onClick={formBuy}
            >
              Ingresso inteiro{" "}
              <IoTicketOutline style={{ fontSize: "1.2rem" }} />
            </ButtonSecondary>
          </div>
          <div className={styles.button}>
            <span>
              Venha em grupo e garanta um desconto de R$50 por pessoa. Você tem
              que adiquire no minimo 5 ingressos para garantir o desconto.
              (Desconto mínimo de R$ 250,00)
            </span>
            <div>
              <strong>10X de R$ 44,90</strong>
              <span>por unidade</span>
            </div>
            <ButtonSecondary
              style={{ width: "100%" }}
              target="_blank"
              action="link"
              link="https://cielolink.com.br/3EbCCw9"
            >
              Comprar grupo <IoTicketOutline style={{ fontSize: "1.2rem" }} />
            </ButtonSecondary>
          </div>
        </div>
        <a href="#half-price">Garanta sua meia entrada clicando aqui</a>
      </div>
    </div>
  );
};

const item2 = () => {
  return (
    <div className={styles.box}>
      <strong className={styles.sale}>30% OFF</strong>
      <div className={styles.boxContent}>
        <span>Ingresso</span>
        <h4>Lote 1</h4>
        <h5>Disponível até:</h5>
        <p>01/03 ou enquanto durar</p>
      </div>

      <div className={styles.boxValue}>
        <h4>
          <span>de:</span>{" "}
          <s>
            R$ 839,90 <br />
          </s>{" "}
          <span>por:</span> <strong>10X de </strong>R$ 58,90
        </h4>
        <ul>
          <li>Economize até 30% no valor do ingresso!</li>
          <li>Garanta sua vaga em um evento único com especialistas em TEA.</li>
          <li>
            Participe do networking com profissionais e familiares engajados no
            tema.
          </li>
        </ul>
      </div>
    </div>
  );
};

const item3 = () => {
  return (
    <div className={styles.box}>
      <strong className={styles.sale}>20% OFF</strong>
      <div className={styles.boxContent}>
        <span>Ingresso</span>
        <h4>Lote 2</h4>
        <h5>Disponível até:</h5>
        <p>15/03 ou enquanto durar</p>
      </div>
      <div className={styles.boxValue}>
        <h4>
          <span>de:</span>{" "}
          <s>
            R$ 839,90 <br />
          </s>{" "}
          <span>por:</span> <strong>10X de </strong>R$ 67,90
        </h4>
        <ul>
          <li>Economize até 20% no valor do ingresso!</li>
          <li>Garanta sua vaga em um evento único com especialistas em TEA.</li>
          <li>
            Participe do networking com profissionais e familiares engajados no
            tema.
          </li>
        </ul>
      </div>
    </div>
  );
};

const allTickets = [
  {
    id: 1,
    content: item1(),
  },
  {
    id: 2,
    content: item2(),
  },
  {
    id: 3,
    content: item3(),
  },
];

const Tickets = () => {
  const [formGetData, setFormGetData] = useState(true);
  return (
    <Section>
      <Title text="Ingressos Cuidar mais" align="center" />
      <div id="tickets" data-aos="zoom-in" className={styles.container}>
        <div className={styles.content}>
          <h3>Ingressos Limitados – Garanta já sua participação!</h3>
          <p>
            Não perca o maior congresso sobre TEA do ano! Os ingressos estão
            divididos em lotes, com preços promocionais para quem compra
            antecipadamente.
          </p>
          <strong>⚡ Confira os valores e garanta o melhor preço:</strong>
        </div>
        <div className={styles.boxes}>
          <div className={styles.boxDesktop}>
            <CarouselSimple slides={allTickets} numberSlidesView={3} />
          </div>
          <div className={styles.boxMobile}>
            <CarouselSimple
              slides={allTickets}
              numberSlidesView={1}
              delay={15000}
            />
          </div>
        </div>
        {/* {formGetData && (
          <form className={styles.formGetData}>
            <label>
              <mark>
                Informe seu nome complete para gerarmos seu certificado:
              </mark>
              <input type="text" required />
            </label>
            <label>
              Informe seu melhor email para enviarmos seu certificado:
              <input type="email" required />
            </label>
          </form>
        )} */}
      </div>
    </Section>
  );
};

export default Tickets;
