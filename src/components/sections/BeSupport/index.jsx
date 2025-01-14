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
      <div className={styles.container}>
        <section>
          <Title text="Seja um Apoiador" align="center" />
          <p>
            Transforme vidas e faça parte de uma causa que realmente importa!
          </p>
          <div className={styles.desktop}>
            <CarouselSimple slides={itemsBoxesSupport} numberSlidesView={3} />
          </div>
          <div className={styles.mobile}>
            <CarouselSimple slides={itemsBoxesSupport} />
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
        </section>
      </div>
    </Section>
  );
};

export default BeSupport;
