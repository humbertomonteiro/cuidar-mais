import styles from "./musicTherapy.module.css";

import CarouselSimple from "../../shared/CarouselSimple";
import Section from "../../shared/Section";
import Title from "../../shared/Title";
import ButtonSecondary from "../../shared/ButtonSecondary";

import { itemsSpeakers } from "../../../data/constants/Speakers";

const MusicTherapy = () => {
  return (
    <Section>
      <Title align="center" text="O Poder da Musicoterapia" />
      <div className={styles.container} data-aos="zoom-in">
        <div className={styles.content}>
          <h3>Harmonia para o Corpo e a Mente</h3>
          <p>
            A música tem o poder de transformar emoções e equilibrar a mente.
            Com a orientação de três musicoterapeutas especializados, você terá
            a oportunidade de vivenciar como sons e ritmos podem aliviar o
            estresse, melhorar o bem-estar e conectar corpo e alma de forma
            única. Venha sentir a magia da musicoterapia! 🎶✨
          </p>
          <ButtonSecondary action={"link"} link={"#tickets"}>
            Garantir meu ingresso
          </ButtonSecondary>
        </div>
        <div className={styles.musics}>
          <CarouselSimple
            slides={itemsSpeakers.filter((item) => item.type === "music")}
          />
        </div>
      </div>
    </Section>
  );
};

export default MusicTherapy;
