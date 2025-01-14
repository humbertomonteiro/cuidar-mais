import styles from "./tickets.module.css";

import Section from "../../shared/Section";
import Title from "../../shared/Title";

const Tickets = () => {
  return (
    <Section>
      <Title text="Ingresso Cuidar +" align="center" />
      <div className={styles.container}>
        <div className={styles.box}>
          <h3>Ingresso congresso - Pré-venda</h3>
        </div>
      </div>
    </Section>
  );
};

export default Tickets;
