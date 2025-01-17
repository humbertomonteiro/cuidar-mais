import styles from "./privilegeOfParticipating.module.css";
import { PiBridge } from "react-icons/pi";
import { BiWorld, BiNetworkChart } from "react-icons/bi";
import { LuNetwork } from "react-icons/lu";
import Title from "../../shared/Title";
import Section from "../../shared/Section";

const PrivilegeOfParticipating = () => {
  return (
    <Section>
      <Title text="Privilégios em participar" align="center" />
      <div className={styles.boxes}>
        <article>
          <PiBridge />
          <h3>Palestrantes de altíssimo padrão.</h3>
        </article>
        <article>
          <BiWorld />
          <h3>Especialistas Internacionais.</h3>
        </article>
        <article>
          <BiNetworkChart />
          <h3>Oportunidade de networking com especialistas.</h3>
        </article>
        <article>
          <LuNetwork />
          <h3>Extrutura de alto nível e ambiente acolhedor.</h3>
        </article>
      </div>
    </Section>
  );
};

export default PrivilegeOfParticipating;
