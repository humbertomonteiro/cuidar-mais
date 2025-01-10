import ButtonSecondary from "../../shared/ButtonSecondary";
import CarouselSimple from "../../shared/CarouselSimple";
import Title from "../../shared/Title";
import styles from "./beSupport.module.css";
import { itemsBoxesSupport } from "../../../data/constants/BoxesSupport";
import document from "../../../data/documents/congresso-autismo.pdf";
import { FaRegFilePdf } from "react-icons/fa6";

const BeSupport = () => {
  return (
    <div className={styles.container}>
      <section>
        <Title text="Seja um Apoiador" align="center" color={1} />
        <p>
          Transforme vidas e faça parte de uma causa que realmente importa. Ao
          apoiar nosso projeto, você contribui para criar um mundo mais
          inclusivo e cheio de oportunidades para pessoas com TEA. Venha fazer a
          diferença conosco e inspire outros a caminhar conosco nessa jornada!
        </p>
        <div className={styles.desktop}>
          <CarouselSimple slides={itemsBoxesSupport} numberSlidesView={3} />
        </div>
        <div className={styles.mobile}>
          <CarouselSimple slides={itemsBoxesSupport} />
        </div>
        <div className={styles.buttons}>
          <ButtonSecondary
            action="link"
            link={document}
            target="_blank"
            styleButton={"secondary"}
          >
            <FaRegFilePdf /> Mais detalhes
          </ButtonSecondary>
          <ButtonSecondary action="link" link="#">
            Quero ser Apoiador
          </ButtonSecondary>
        </div>
      </section>
    </div>
  );
};

export default BeSupport;
