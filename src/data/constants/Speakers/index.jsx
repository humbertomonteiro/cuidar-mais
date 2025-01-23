import styles from "./speakers.module.css";

import jessicaAmorim from "../../../assets/speakers/jessica-amorim.jpeg";
// import drJoaoArnoud from "../../../assets/speakers/dr-joao-arnoud.png";
// import drMarconeOliveira from "../../../assets/speakers/dr-marcone-oliveira.png";
// import drRicardoKrause from "../../../assets/speakers/dr-ricardo-krause.png";
// import drSalomaoSch from "../../../assets/speakers/dr-salomao-schwartzman.png";
// import drThiagoGusmao from "../../../assets/speakers/dr-thiago-gusmao.png";
// import draAnaCarolina from "../../../assets/speakers/dra-ana-carolina.png";
// import draCarolinaQuedas from "../../../assets/speakers/dra-carolina-quedas.png";
// import draCarolinaFerreira from "../../../assets/speakers/dra-caroline-ferreira.png";
// import draCintiaDuarte from "../../../assets/speakers/dra-cintia-duarte.png";
// import draDeborahKerches from "../../../assets/speakers/dra-deborah-kerches.png";
// import draJUlianaRocha from "../../../assets/speakers/dra-juliana-rocha.png";
// import draJuraciSaraiva from "../../../assets/speakers/dra-juraci-saraiva.png";
// import eberMarques from "../../../assets/speakers/eber-marques.png";
// import fernandaCarneiro from "../../../assets/speakers/fernanda-carneiro.png";
// import gilbertoCosta from "../../../assets/speakers/gilberto-costa.png";
// import IndiaharaHorta from "../../../assets/speakers/indihara-horta.png";
// import profLucelmoLacerda from "../../../assets/speakers/prof-dr-lucelmo-lacerda.png";

const speakersImages = [
  {
    url: "https://pediatrics.ucsd.edu/_images/research/Alysson_Muotri-copy.jpeg",
    name: "Dr Allyson R. Moutri",
    experience:
      "professor dos Departamentos de Pediatria e Medicina Celular e Molecular da Universidade da Califórnia, em San Diego.",
  },
  {
    url: "https://ugc.production.linktr.ee/oCud0OvSXC7xBO3Q6L8Q_5fUGXwdtFka0OSg2?io=true&size=avatar-v3_0",
    name: "Dra. Ana Brito",
    experience:
      "Pós-doutora em Neurobiologia - USP, Doutora em Neurociências - USP, Escritora e Palestrante",
  },
  {
    url: "https://www.fcneurology.net/wp-content/uploads/2022/06/dr-carlos-gadia-md.jpg",
    name: "Dr. Carlos Gadia",
    experience:
      "Neurologia Pediátrica pela University of Miami School of Medicine, humanitário comprometido ativamente e pioneiro em terapias.",
  },
  {
    url: "https://media.licdn.com/dms/image/v2/C5603AQELCUJ0eji87g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516930082943?e=1743033600&v=beta&t=wsEP29z1Yg2NJ0c2w5CNvqoPSChzb1elf5j1Gm6AW_I",
    name: "Graziella Gadia",
    experience:
      "Talento e Pedagogia: Uma fusão inspiradora de habilidades artísticas e ensino. Uma dedicação tangível ao progresso terapêutico no espectro autista.",
  },
  {
    url: jessicaAmorim,
    name: "Jessica Amorim",
    experience:
      "Pós-graduada: Terapia ocupacioanal pediátrica, Desenvolvimento infantil, Intervenção precoce baseada no modele Denver, etc...",
  },
  {
    url: "https://ugc.production.linktr.ee/25e937f6-bbf3-4564-98a8-b591797e86e2_WhatsApp-Image-2024-10-16-at-14.29.25.jpeg?io=true&size=avatar-v3_0",
    name: "Dr. Marcone Oliveira",
    experience:
      "Neurologista infantil dedicado, Especializado no atendimento de crianças com autismo, transtornos de aprendizado, TDAH e epilepsia.",
  },
  {
    url: "https://www.revistacircuito.com/wp-content/uploads/2019/09/14979812132980-696x545.jpg",
    name: "Nicolas Brito Sales",
    experience:
      "Fotógrafo, escritor, artista plástico, atendente terapêutico e tenho autismo.",
  },
  {
    url: "https://olzeniribeiro.com.br/wp-content/uploads/2024/06/olzenir-ribeiro.png",
    name: "Dra. Olzeni Ribeiro",
    experience:
      "Phd em Educação, Neuropsicopedagoga Clínica | Neurodivergente, Especialista em Avaliação AHSD e 2E",
  },
  {
    url: "https://ugc.production.linktr.ee/20dbbceb-7e14-46ef-addd-2228a0e51f10_IMG-1315.jpeg?io=true&size=avatar-v3_0",
    name: "Dra. Patrícia Junqueira",
    experience: "Fonoaudióloga e Doutora em Distúrbios da Comunicação Humana.",
  },
  // { url: drJoaoArnoud, name: "Dr. João Arnoud", theme: "TEA" },
  // { url: drMarconeOliveira, name: "Dr. Marcone Oliveira", theme: "TEA" },
  // { url: drRicardoKrause, name: "Dr. Ricardo Krause", theme: "TEA" },
  // { url: drSalomaoSch, name: "Dr. Salomão Schwartzman", theme: "TEA" },
  // { url: drThiagoGusmao, name: "Dr. Thiago Gusmão", theme: "TEA" },
  // { url: draAnaCarolina, name: "Dra. Ana Carolina", theme: "TEA" },
  // { url: draCarolinaQuedas, name: "Dra. Carolina Quedas", theme: "TEA" },
  // { url: draCarolinaFerreira, name: "Dra. Carolina Ferreira", theme: "TEA" },
  // { url: draCintiaDuarte, name: "Dra. Cintia Duarte", theme: "TEA" },
  // { url: draDeborahKerches, name: "Dra. Deborah Derches", theme: "TEA" },
  // { url: draJUlianaRocha, name: "Dra. Juliana Rocha", theme: "TEA" },
  // { url: draJuraciSaraiva, name: "Dra. Juraci Saraiva", theme: "TEA" },
  // { url: eberMarques, name: "Eber Marques", theme: "TEA" },
  // { url: fernandaCarneiro, name: "Fernanda Carneiro", theme: "TEA" },
  // { url: gilbertoCosta, name: "Gilberto Costa", theme: "TEA" },
  // { url: IndiaharaHorta, name: "Indiahara Horta", theme: "TEA" },
  // { url: profLucelmoLacerda, name: "Prof. Dr. Lucelmo Lacerda", theme: "TEA" },
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
        {/* <strong>Tema: </strong> */}
        <span>{item.experience}</span>
      </div>
      <div className={styles.imgDeco}>
        <img src={imgDeco} alt="logo colorida" />
      </div>
    </div>
  ),
}));
