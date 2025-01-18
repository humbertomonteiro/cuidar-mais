import ButtonSecondary from "../../shared/ButtonSecondary";
import CarouselSimple from "../../shared/CarouselSimple";
import Title from "../../shared/Title";
import Section from "../../shared/Section";
import styles from "./beSupport.module.css";
import { itemsBoxesSupport } from "../../../data/constants/BoxesSupport";
import document from "../../../data/documents/congresso-autismo.pdf";
import { FaRegFilePdf } from "react-icons/fa6";

import { FaArrowRight } from "react-icons/fa";

const BeSupport = () => {
  return (
    <Section>
      <div data-aos="zoom-in" className={styles.container}>
        <Title text="Seja um Apoiador" align="center" />
        <p>
          O MAIOR ENCONTRO DE PROFISSIONAIS SOBRE NEURODIVERSIDADE DO MARANHÃO
        </p>
        <div className={styles.content}>
          <div className={styles.contentTitle}>
            <h3>
              EXPOSIÇÃO
              <br /> <span>DE MÍDIA NO EVENTO</span>
            </h3>
          </div>
          <ul>
            <li>+DE 2.000 PESSOAS</li>
            <li>+DE 30H EM CONTEÚDOS</li>
            <li>+DE R$ 30.000 EM MÍDIAS</li>
          </ul>
        </div>
        <div className={styles.desktop}>
          <CarouselSimple slides={itemsBoxesSupport} numberSlidesView={3} />
        </div>
        <div className={styles.mobile}>
          <CarouselSimple slides={itemsBoxesSupport} delay={10000} />
        </div>
        <div className={styles.buttons}>
          <ButtonSecondary action="link" link="#">
            Quero ser Apoiador <FaArrowRight />
          </ButtonSecondary>
          <ButtonSecondary
            action="link"
            link={document}
            target="_blank"
            styleButton={"secondary"}
          >
            <FaRegFilePdf /> Mais detalhes
          </ButtonSecondary>
        </div>
      </div>
    </Section>
  );
};

export default BeSupport;
