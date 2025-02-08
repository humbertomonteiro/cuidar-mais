import ButtonSecondary from "../../shared/ButtonSecondary";
import Title from "../../shared/Title";
import styles from "./beSupport.module.css";
import { itemsBoxesSupport } from "../../../data/constants/BoxesSupport";
import document from "../../../data/documents/congresso-autismo-support.pdf";
import { FaRegFilePdf } from "react-icons/fa6";

import { FaArrowRight } from "react-icons/fa";
import { TbArrowBigRightLine } from "react-icons/tb";

const BeSupport = () => {
  return (
    <section className={styles.containerSupport}>
      <Title text="Seja um Apoiador" align="center" />
      <div data-aos="zoom-in" className={styles.container}>
        <div className={styles.content} data-aos="zoom-in">
          <div className={styles.contentTitle}>
            <h3>
              EXPOSIÇÃO
              <br /> <span>DE MÍDIA NO EVENTO</span>
            </h3>
          </div>
          <ul>
            <li>
              <TbArrowBigRightLine />
              +DE 2.000 PESSOAS
            </li>
            <li>
              <TbArrowBigRightLine />
              +DE 30H EM CONTEÚDOS
            </li>
            <li>
              <TbArrowBigRightLine />
              +DE R$ 30.000 EM MÍDIAS
            </li>
          </ul>
        </div>
        <div className={styles.boxes}>
          <div className={styles.boxesItems}>
            {itemsBoxesSupport.map((boxSupport, index) => (
              <div key={index}>{boxSupport.content}</div>
            ))}
          </div>
          <div className={styles.buttons}>
            <ButtonSecondary
              target="_blank"
              action="link"
              link="https://wa.me/5598988830200?text=Olá,%20estou%20interessado%20em%20ser%20patrocinador%20do%20congresso%20TEA%20e%20gostaria%20de%20mais%20informações%20sobre%20as%20oportunidades%20disponíveis.
"
            >
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
      </div>
    </section>
  );
};

export default BeSupport;
