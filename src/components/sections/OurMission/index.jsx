import styles from "./ourMission.module.css";
import Section from "../../shared/Section";
import ButtonSecondary from "../../shared/ButtonSecondary";
import { FaInstagram } from "react-icons/fa";

import logosTel from "../../../assets/logos/logos-telefone.png";
import smartphone from "../../../assets/mocups/mocup-smartphone.png";

const OurMission = () => {
  return (
    <Section>
      <div data-aos="zoom-in" className={styles.container}>
        <div className={styles.content}>
          <h2>Nossa missão</h2>
          <p>
            Nossa missão é transformar vidas por meio da inclusão, conhecimento
            e inovação. Acreditamos no poder de conectar pessoas, promover o
            aprendizado e criar soluções que gerem impacto positivo na
            sociedade. Buscamos oferecer excelência em tudo o que fazemos,
            sempre com empatia e respeito às necessidades de cada indivíduo.
          </p>

          <img src={logosTel} alt="logo congresso" />

          <ButtonSecondary action="link" link="#">
            Nos acompanhe <FaInstagram style={{ fontSize: "1.5rem" }} />
          </ButtonSecondary>
        </div>
        <div className={styles.img}>
          <img src={smartphone} alt="Celular com o instagram da cuidar mais" />
        </div>
      </div>
    </Section>
  );
};

export default OurMission;
