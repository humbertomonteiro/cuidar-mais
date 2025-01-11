import styles from "./speakers.module.css";
import drJoaoArnoud from "../../../assets/speakers/dr-joao-arnoud.png";
import drMarconeOliveira from "../../../assets/speakers/dr-marcone-oliveira.png";
import drRicardoKrause from "../../../assets/speakers/dr-ricardo-krause.png";
import drSalomaoSch from "../../../assets/speakers/dr-salomao-schwartzman.png";
import drThiagoGusmao from "../../../assets/speakers/dr-thiago-gusmao.png";
import draAnaCarolina from "../../../assets/speakers/dra-ana-carolina.png";
import draCarolinaQuedas from "../../../assets/speakers/dra-carolina-quedas.png";
import draCarolinaFerreira from "../../../assets/speakers/dra-caroline-ferreira.png";
import draCintiaDuarte from "../../../assets/speakers/dra-cintia-duarte.png";
import draDeborahKerches from "../../../assets/speakers/dra-deborah-kerches.png";
import draJUlianaRocha from "../../../assets/speakers/dra-juliana-rocha.png";
import draJuraciSaraiva from "../../../assets/speakers/dra-juraci-saraiva.png";
import eberMarques from "../../../assets/speakers/eber-marques.png";
import fernandaCarneiro from "../../../assets/speakers/fernanda-carneiro.png";
import gilbertoCosta from "../../../assets/speakers/gilberto-costa.png";
import IndiaharaHorta from "../../../assets/speakers/indihara-horta.png";
import profLucelmoLacerda from "../../../assets/speakers/prof-dr-lucelmo-lacerda.png";

const speakersImages = [
  { url: drJoaoArnoud, name: "Dr. João Arnoud", theme: "TEA" },
  { url: drMarconeOliveira, name: "Dr. Marcone Oliveira", theme: "TEA" },
  { url: drRicardoKrause, name: "Dr. Ricardo Krause", theme: "TEA" },
  { url: drSalomaoSch, name: "Dr. Salomão Schwartzman", theme: "TEA" },
  { url: drThiagoGusmao, name: "Dr. Thiago Gusmão", theme: "TEA" },
  { url: draAnaCarolina, name: "Dra. Ana Carolina", theme: "TEA" },
  { url: draCarolinaQuedas, name: "Dra. Carolina Quedas", theme: "TEA" },
  { url: draCarolinaFerreira, name: "Dra. Carolina Ferreira", theme: "TEA" },
  { url: draCintiaDuarte, name: "Dra. Cintia Duarte", theme: "TEA" },
  { url: draDeborahKerches, name: "Dra. Deborah Derches", theme: "TEA" },
  { url: draJUlianaRocha, name: "Dra. Juliana Rocha", theme: "TEA" },
  { url: draJuraciSaraiva, name: "Dra. Juraci Saraiva", theme: "TEA" },
  { url: eberMarques, name: "Eber Marques", theme: "TEA" },
  { url: fernandaCarneiro, name: "Fernanda Carneiro", theme: "TEA" },
  { url: gilbertoCosta, name: "Gilberto Costa", theme: "TEA" },
  { url: IndiaharaHorta, name: "Indiahara Horta", theme: "TEA" },
  { url: profLucelmoLacerda, name: "Prof. Dr. Lucelmo Lacerda", theme: "TEA" },
];

import imgDeco from "../../../assets/logos/logo-colorful.png";

export const itemsSpeakers = speakersImages.map((item, index) => ({
  id: index + 1,
  content: (
    <div className={styles.card}>
      <img
        key={index}
        className={styles.img}
        src={item.url}
        alt={`Palestrante ${index + 1}`}
      />
      <div className={styles}>
        <h3>{item.name}</h3>
        <strong>Tema: </strong>
        <span>{item.theme}</span>
      </div>
      <div className={styles.imgDeco}>
        <img src={imgDeco} alt="logo colorida" />
      </div>
    </div>
  ),
}));
