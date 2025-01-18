import styles from "./tickets.module.css";

import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonSecondary from "../../shared/ButtonSecondary";
import CarouselSimple from "../../shared/CarouselSimple";

import { IoTicketOutline } from "react-icons/io5";

const item1 = () => {
  return (
    <div className={styles.box} data-active="true">
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
          <span>por:</span> R$ 499,90
        </h4>
        <ul>
          <li>Economize até 40% no valor do ingresso!</li>
          <li>
            Se for PCD, Pais Atípicos ou Estudante tem um desconto de R$100,00.
            Sai por R$399,90.
          </li>
          <li>Garanta sua vaga em um evento único com especialistas em TEA.</li>
          <li>
            Participe do networking com profissionais e familiares engajados no
            tema.
          </li>
        </ul>
        <div className={styles.buttons}>
          <div className={styles.button}>
            <span>Ingresso valor inteiro.</span>
            <strong>Valor: R$ 499,90</strong>
            <ButtonSecondary style={{ width: "100%" }}>
              Garantir agora <IoTicketOutline style={{ fontSize: "1.5rem" }} />
            </ButtonSecondary>
          </div>
          <div className={styles.button}>
            <span>Ingresso para PCD, Pais atípicos ou Estudantes.</span>
            <strong>Valor: R$ 399,90</strong>
            <ButtonSecondary style={{ width: "100%" }}>
              Garantir agora <IoTicketOutline style={{ fontSize: "1.5rem" }} />
            </ButtonSecondary>
          </div>
        </div>
        {/* <strong>
                ⏳ Corra! Os ingressos da pré-venda estão acabando!
              </strong> */}
      </div>
    </div>
  );
};

const item2 = () => {
  return (
    <div className={styles.box}>
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
          <span>por:</span> R$ 589,90
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
          <span>por:</span> R$ 670,90
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
  return (
    <Section>
      <Title text="Ingressos Cuidar mais" align="center" />
      <div data-aos="zoom-in" className={styles.container}>
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
      </div>
    </Section>
  );
};

export default Tickets;
